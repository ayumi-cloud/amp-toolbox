import { assertPass, runLocalTest, assertWarn, assertFail } from "./lib";
import { AmpImgAmpPixelPreferred } from "../src/rules/AmpImgAmpPixelPreferred";
import { MetaCharsetIsFirst } from "../src/rules/MetaCharsetIsFirst";
import { RuntimeIsPreloaded } from "../src/rules/RuntimeIsPreloaded";
import { SchemaMetadataIsNews } from "../src/rules/SchemaMetadataIsNews";
import { StoryRuntimeIsV1 } from "../src/rules/StoryRuntimeIsV1";
import { ImagesHaveAltText } from "../src/rules/ImagesHaveAltText";
import { MetadataIncludesOGImageSrc } from "../src/rules/MetadataIncludesOGImageSrc";
import { basename } from "path";
import { BookendExists } from "../src/rules/BookendExists";

assertWarn(
  `${AmpImgAmpPixelPreferred.name} - <amp-img height="1" width="1">`,
  runLocalTest(
    AmpImgAmpPixelPreferred,
    "local/AmpImgAmpPixelPreferred-1/source.html"
  )
);

assertPass(
  `${AmpImgAmpPixelPreferred.name} - <amp-img> valid height, width`,
  runLocalTest(
    AmpImgAmpPixelPreferred,
    "local/AmpImgAmpPixelPreferred-2/source.html"
  )
);

assertPass(
  `${AmpImgAmpPixelPreferred.name} - <amp-img> valid height, width`,
  runLocalTest(
    AmpImgAmpPixelPreferred,
    "local/AmpImgAmpPixelPreferred-3/source.html"
  )
);

assertPass(
  `${AmpImgAmpPixelPreferred.name} - <amp-img> valid height, width`,
  runLocalTest(
    AmpImgAmpPixelPreferred,
    "local/AmpImgAmpPixelPreferred-4/source.html"
  )
);

assertPass(
  `${AmpImgAmpPixelPreferred.name} - <amp-img> valid height, width`,
  runLocalTest(
    AmpImgAmpPixelPreferred,
    "local/AmpImgAmpPixelPreferred-5/source.html"
  )
);

assertPass(
  `${MetaCharsetIsFirst.name} - <meta charset> is first`,
  runLocalTest(MetaCharsetIsFirst, "local/MetaCharsetIsFirst-1/source.html")
);

assertFail(
  `${MetaCharsetIsFirst.name} - <meta charset> missing`,
  runLocalTest(MetaCharsetIsFirst, "local/MetaCharsetIsFirst-2/source.html")
);

assertWarn(
  `${RuntimeIsPreloaded.name} - <link rel="preload"> is absent`,
  runLocalTest(RuntimeIsPreloaded, "local/RuntimeIsPreloaded-1/source.html")
);

assertPass(
  `${RuntimeIsPreloaded.name} - <link rel="preload"> is present`,
  runLocalTest(RuntimeIsPreloaded, "local/RuntimeIsPreloaded-2/source.html")
);

assertPass(
  `${SchemaMetadataIsNews.name} - schema type is NewsArticle`,
  runLocalTest(SchemaMetadataIsNews, "local/SchemaMetadataIsNews-1/source.html")
);

assertWarn(
  `${SchemaMetadataIsNews.name} - schema type is not NewsArticle`,
  runLocalTest(SchemaMetadataIsNews, "local/SchemaMetadataIsNews-2/source.html")
);

assertPass(
  `${StoryRuntimeIsV1.name} - runtime is v1`,
  runLocalTest(StoryRuntimeIsV1, "local/StoryRuntimeIsV1-1/source.html")
);

assertFail(
  `${StoryRuntimeIsV1.name} - runtime is not v1`,
  runLocalTest(StoryRuntimeIsV1, "local/StoryRuntimeIsV1-2/source.html")
);

assertPass(
  `${BookendExists.name} - external bookend data`,
  runLocalTest(BookendExists, "local/BookendExists-1/source.html")
);

assertPass(
  `${BookendExists.name} - inline bookend data`,
  runLocalTest(BookendExists, "local/BookendExists-2/source.html")
);

assertWarn(
  `${BookendExists.name} - no bookend`,
  runLocalTest(BookendExists, "local/BookendExists-3/source.html")
);

assertPass(
  `${MetadataIncludesOGImageSrc.name} - <meta property="og:image"> is present`,
  runLocalTest(
    MetadataIncludesOGImageSrc,
    "local/MetadataIncludesOGImageSrc-1/source.html"
  )
);

assertWarn(
  `${MetadataIncludesOGImageSrc.name} - <meta property="og:image"> is missing`,
  runLocalTest(
    MetadataIncludesOGImageSrc,
    "local/MetadataIncludesOGImageSrc-2/source.html"
  )
);

assertPass(
  `${ImagesHaveAltText.name} - All <amp-img> have alt text`,
  runLocalTest(ImagesHaveAltText, "local/ImagesHaveAltText-1/source.html")
);

assertWarn(
  `${ImagesHaveAltText.name} - At least one <amp-img> is missing alt text`,
  runLocalTest(ImagesHaveAltText, "local/ImagesHaveAltText-2/source.html")
);

console.log(`# ${basename(__filename)} - HTML-only tests`);
console.log(`1..20`);
