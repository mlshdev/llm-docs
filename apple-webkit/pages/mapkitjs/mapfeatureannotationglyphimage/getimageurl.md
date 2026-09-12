> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapfeatureannotationglyphimage/getimageurl](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotationglyphimage/getimageurl)

# getImageUrl(scale, callback)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.74.1+

Returns the image URL of the map feature.

## Declaration

```
getImageUrl(
    scale: number | undefined,
    callback: (url: string | null) => void,
): void;
```

<a id="Discussion"></a>

## Discussion

The method returns the URL as the first argument of `callback`. The URL is a `blob:` URL. To avoid a memory leak, you need to revoke it with `URL.revokeObjectURL()` when you no longer need it.
