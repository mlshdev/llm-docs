> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/imagedelegate/getimage](https://developer.apple.com/documentation/mapkitjs/imagedelegate/getimage)

# getImage(ratio)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Method  
**Availability:** MapKit JS 6.0+

Returns an image for the specified scale.

## Declaration

```
getImage?(ratio: number): Promise<string | ImageSource | undefined>;
```

## Mentioned In

- [MapKit JS 6](../mapkit-js-6.md)
- [Migrating from Version 5 to Version 6](../migrating-from-version-5-to-version-6.md)

<a id="Discussion"></a>

## Discussion

Implement this method to return a `Promise` that resolves to a URL string, an [ImageSource](../imagesource.md), or `undefined` if no image is available. MapKit JS calls this method with a pixel ratio value that your function uses to provide an appropriately scaled image.

When both [getImage()](getimage.md) and [getImageUrl()](getimageurl.md) are present, the framework uses [getImage()](getimage.md).

```javascript
const imageDelegate = {
    async getImage(scale) {
        const response = await fetch(`https://example.com/images/marker?scale=${scale}`, {
            headers: { "Authorization": "Bearer " + token }
        });
        if (!response.ok) return undefined;
        const blob = await response.blob();
        return createImageBitmap(blob);
    }
};

const annotation = new mapkit.ImageAnnotation(
    new mapkit.Coordinate(10, 10),
    { image: imageDelegate }
);
```

## See Also

### Returning an image

- [getImageUrl()](getimageurl.md): Deprecated. Returns the URL to an image of the specified scale.
