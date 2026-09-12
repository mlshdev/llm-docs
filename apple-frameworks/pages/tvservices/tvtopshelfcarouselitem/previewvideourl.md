> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfcarouselitem/previewvideourl](https://developer.apple.com/documentation/tvservices/tvtopshelfcarouselitem/previewvideourl)

# previewVideoURL (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The URL for the content’s trailer or preview.

## Declaration

```swift
var previewVideoURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

When the navigation focus stops on the item, the system removes the item’s static image or cinemagraph video and plays the video at the specified URL.

## See Also

### Specifying the Content Previews

- [cinemagraphURL](cinemagraphurl.md): The URL of a looping video to play, without sound, while the preview loads.

# previewVideoURL (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The URL for the content’s trailer or preview.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSURL * previewVideoURL;
```

<a id="Discussion"></a>

## Discussion

When the navigation focus stops on the item, the system removes the item’s static image or cinemagraph video and plays the video at the specified URL.

## See Also

### Specifying the Content Previews

- [cinemagraphURL](cinemagraphurl.md): The URL of a looping video to play, without sound, while the preview loads.
