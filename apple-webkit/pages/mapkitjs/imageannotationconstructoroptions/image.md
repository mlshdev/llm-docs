> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/imageannotationconstructoroptions/image](https://developer.apple.com/documentation/mapkitjs/imageannotationconstructoroptions/image)

# image

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 6.0+

The image for the annotation.

## Declaration

```
image?:
    | ImageDelegate
    | ImageHashObject
    | ImageSource
    | Promise<ImageSource>;
```

<a id="Discussion"></a>

## Discussion

Set this property to an [ImageHashObject](../imagehashobject.md), an [ImageDelegate](../imagedelegate.md), an [ImageSource](../imagesource.md), or a `Promise` that resolves to an [ImageSource](../imagesource.md). For more information, see the [ImageAnnotation](../imageannotation.md) [image](../imageannotation/image.md) property.

## See Also

### Initializing the image

- [url](url.md): Deprecated. An object that contains URLs for the image assets in multiple resolutions.
