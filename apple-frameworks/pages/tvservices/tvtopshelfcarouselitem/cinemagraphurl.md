> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfcarouselitem/cinemagraphurl](https://developer.apple.com/documentation/tvservices/tvtopshelfcarouselitem/cinemagraphurl)

# cinemagraphURL (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The URL of a looping video to play, without sound, while the preview loads.

## Declaration

```swift
var cinemagraphURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

If you specify a value for this property, the system initially displays the corresponding video instead of a static image. The video plays in a loop until the preview video loads and is ready to play. If you do not specify a value for this property, the system displays the image you set using the [setImageURL(\_:for:)](../tvtopshelfitem/setimageurl%28__for_%29.md) method.

The system does not play any sound content present in the video, so there is no need to include it when creating your assets.

## See Also

### Specifying the Content Previews

- [previewVideoURL](previewvideourl.md): The URL for the content’s trailer or preview.

# cinemagraphURL (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The URL of a looping video to play, without sound, while the preview loads.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSURL * cinemagraphURL;
```

<a id="Discussion"></a>

## Discussion

If you specify a value for this property, the system initially displays the corresponding video instead of a static image. The video plays in a loop until the preview video loads and is ready to play. If you do not specify a value for this property, the system displays the image you set using the [setImageURL:forTraits:](../tvtopshelfitem/setimageurl%28__for_%29.md) method.

The system does not play any sound content present in the video, so there is no need to include it when creating your assets.

## See Also

### Specifying the Content Previews

- [previewVideoURL](previewvideourl.md): The URL for the content’s trailer or preview.
