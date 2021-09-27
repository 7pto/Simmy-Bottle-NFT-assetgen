import { Layers } from "./types";

const AssetLayers: Layers[] = require('../generated/_assetsLayers.json');

const CollectionLength =100;
const ImgHeightPx = 2048;
const ImgWidthPx = 2048;

export {
    CollectionLength,
    ImgHeightPx,
    ImgWidthPx,
    AssetLayers
}
