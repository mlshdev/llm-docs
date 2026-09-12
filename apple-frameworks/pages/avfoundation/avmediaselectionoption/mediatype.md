> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectionoption/mediatype](https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/mediatype)

# mediaType (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The media type of the media data.

## Declaration

```swift
var mediaType: AVMediaType { get }
```

<a id="Discussion"></a>

## Discussion

The value of the property might be, for example, [audio](../avmediatype/audio.md) or [subtitle](../avmediatype/subtitle.md).

## See Also

### Accessing media information

- [mediaSubTypes](mediasubtypes.md): The media sub-types of the media data associated with the option.
- [hasMediaCharacteristic(\_:)](hasmediacharacteristic%28__%29.md): Returns a Boolean value that indicates whether the receiver has media with the given media characteristic.

# mediaType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The media type of the media data.

## Declaration

```objectivec
@property (nonatomic, readonly) AVMediaType mediaType;
```

<a id="Discussion"></a>

## Discussion

The value of the property might be, for example, [AVMediaTypeAudio](../avmediatype/audio.md) or [AVMediaTypeSubtitle](../avmediatype/subtitle.md).

## See Also

### Accessing media information

- [mediaSubTypes](mediasubtypes.md): The media sub-types of the media data associated with the option.
- [hasMediaCharacteristic:](hasmediacharacteristic%28__%29.md): Returns a Boolean value that indicates whether the receiver has media with the given media characteristic.
