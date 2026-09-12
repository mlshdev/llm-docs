> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/imageannotation/image](https://developer.apple.com/documentation/mapkitjs/imageannotation/image)

# image

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 6.0+

The image for the annotation.

## Declaration

```
get image():
    | ImageDelegate
    | ImageHashObject
    | ImageSource
    | Promise<ImageSource>;
set image(
    value:
        | ImageDelegate
        | ImageHashObject
        | ImageSource
        | Promise<ImageSource>,
);
```

<a id="Discussion"></a>

## Discussion

Set this property to one of the following:

- An [ImageHashObject](../imagehashobject.md) that contains URLs for images at multiple resolutions.
- An [ImageDelegate](../imagedelegate.md) that dynamically provides the image.
- An [ImageSource](../imagesource.md) such as an `HTMLImageElement`, `HTMLCanvasElement`, `ImageBitmap`, or `OffscreenCanvas`.
- A `Promise` that resolves to an [ImageSource](../imagesource.md).

Using an [ImageSource](../imagesource.md) or a `Promise` gives you control over image loading. For example, you can use the Fetch API with custom headers, apply transformations to an image before display, or implement custom error recovery logic. See [ImageSource](../imagesource.md) for cross-origin requirements.

## See Also

### Setting the image

- [url](url.md): Deprecated. An object that contains URLs for the image assets in multiple resolutions.
