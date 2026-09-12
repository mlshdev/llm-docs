> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/imagedelegate/getimageurl](https://developer.apple.com/documentation/mapkitjs/imagedelegate/getimageurl)

# getImageUrl(ratio, callback)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 5.74+ (deprecated in 6.0)

Returns the URL to an image of the specified scale.

> Use [getImage()](getimage.md) instead, which supports both URLs and [ImageSource](../imagesource.md) objects.

## Declaration

```
getImageUrl?(ratio: number, callback: (url: string | null) => void): void;
```

## Mentioned In

- [MapKit JS 6](../mapkit-js-6.md)

## See Also

### Returning an image

- [getImage()](getimage.md): Returns an image for the specified scale.
