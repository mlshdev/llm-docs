> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfcarouselitem/mediaoptions-swift.property](https://developer.apple.com/documentation/tvservices/tvtopshelfcarouselitem/mediaoptions-swift.property)

# mediaOptions (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

Information about the media format and presentation options.

## Declaration

```swift
var mediaOptions: TVTopShelfCarouselItem.MediaOptions { get set }
```

<a id="Discussion"></a>

## Discussion

Specify all of the options that apply to the underlying content. The system adds standard icons for the options you support. For example, if you specify the [videoResolution4K](mediaoptions-swift.struct/videoresolution4k.md) option, the system adds an icon to the detail view indicating that playback in 4K resolution is possible.

## See Also

### Adding Media Badges

- [TVTopShelfCarouselItem.MediaOptions](mediaoptions-swift.struct.md): Constants indicating the item’s audio and video capabilities.

# mediaOptions (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

Information about the media format and presentation options.

## Declaration

```objectivec
@property (nonatomic) TVTopShelfCarouselItemMediaOptions mediaOptions;
```

<a id="Discussion"></a>

## Discussion

Specify all of the options that apply to the underlying content. The system adds standard icons for the options you support. For example, if you specify the [TVTopShelfCarouselItemVideoResolution4K](mediaoptions-swift.struct/videoresolution4k.md) option, the system adds an icon to the detail view indicating that playback in 4K resolution is possible.

## See Also

### Adding Media Badges

- [TVTopShelfCarouselItemMediaOptions](mediaoptions-swift.struct.md): Constants indicating the item’s audio and video capabilities.
