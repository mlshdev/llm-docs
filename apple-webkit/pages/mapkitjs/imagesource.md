> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/imagesource](https://developer.apple.com/documentation/mapkitjs/imagesource)

# ImageSource

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Type  
**Availability:** MapKit JS 6.0+

A union type that represents image sources that the framework can use for annotations and tile overlays.

## Declaration

```
type ImageSource =
    | HTMLImageElement
    | HTMLCanvasElement
    | ImageBitmap
    | OffscreenCanvas;
```

## Mentioned In

- [Migrating from Version 5 to Version 6](migrating-from-version-5-to-version-6.md)
- [MapKit JS 6](mapkit-js-6.md)

<a id="Discussion"></a>

## Discussion

An [ImageSource](imagesource.md) is an `HTMLImageElement`, `HTMLCanvasElement`, `ImageBitmap`, or `OffscreenCanvas`. You can set an [ImageSource](imagesource.md) directly on the [ImageAnnotation](imageannotation.md) [image](imageannotation/image.md) property or the [MarkerAnnotation](markerannotation.md) [glyphImage](markerannotation/glyphimage.md) property to display a preloaded or dynamically generated image. You can also wrap an [ImageSource](imagesource.md) in a `Promise` to load the image asynchronously.

<a id="Utilizing-Cross-origin-Images"></a>

## Utilizing Cross-origin Images

To enable cross-origin image sources for MapKit JS, instruct the browser to load them in CORS mode. The `HTMLImageElement` provides a `crossOrigin` property that you need to set to either `"anonymous"` (without cookies) or `"use-credentials"` (with a cookie) to opt-in to CORS request mode.

When compositing a `HTMLCanvasElement` or `ImageBitmap`, composite these objects  from CORS-enabled cross-origin, or same-origin images.

## See Also

### Setting images

- [ImageHashObject](imagehashobject.md): An object that defines a set of images URLs for different scales.
- [ImageDelegate](imagedelegate.md): An object you use to provide images for annotations.
