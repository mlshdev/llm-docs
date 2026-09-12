> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/imageannotationconstructoroptions/url](https://developer.apple.com/documentation/mapkitjs/imageannotationconstructoroptions/url)

# url

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+ (deprecated in 6.0)

An object that contains URLs for the image assets in multiple resolutions.

> Use [image](image.md) instead.

## Declaration

```
url?: ImageDelegate | ImageHashObject | ImageSource | Promise<ImageSource>;
```

<a id="Discussion"></a>

## Discussion

This property is an object literal containing absolute or relative URLs to standard, 2×, and 3× Retina assets. MapKit JS requires at least one image URL.

```javascript
{
    url: {
        1: "example.png",
        2: "example_2x.png",
        3: "example_3x.png"
    }
}
```

If you choose not to provide standard and Retina resolution assets, you have two options:

- Set “1” to a URL to a standard resolution image. This results in blurry images on Retina displays.
- Set “1” to a URL to a Retina image. Set the size to the desired size. This results in crisp images on Retina displays and good images on standard displays, but it’s less optimal than custom, pixel-fitted images.

## See Also

### Initializing the image

- [image](image.md): The image for the annotation.
