> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectionoption/mediasubtypes](https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/mediasubtypes)

# mediaSubTypes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The media sub-types of the media data associated with the option.

## Declaration

```swift
var mediaSubTypes: [NSNumber] { get }
```

<a id="Discussion"></a>

## Discussion

The value is an array of `NSNumber` objects carrying four character codes (of type FourCharCode) as defined in `CoreAudioTypes.h` for audio media and in `CMFormatDescription.h` for video media.

Also see [CMFormatDescriptionGetMediaSubType(\_:)](../../coremedia/cmformatdescriptiongetmediasubtype%28__%29.md) for more information about media subtypes.

## See Also

### Accessing media information

- [mediaType](mediatype.md): The media type of the media data.
- [hasMediaCharacteristic(\_:)](hasmediacharacteristic%28__%29.md): Returns a Boolean value that indicates whether the receiver has media with the given media characteristic.

# mediaSubTypes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The media sub-types of the media data associated with the option.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * mediaSubTypes;
```

<a id="Discussion"></a>

## Discussion

The value is an array of `NSNumber` objects carrying four character codes (of type FourCharCode) as defined in `CoreAudioTypes.h` for audio media and in `CMFormatDescription.h` for video media.

Also see [CMFormatDescriptionGetMediaSubType](../../coremedia/cmformatdescriptiongetmediasubtype%28__%29.md) for more information about media subtypes.

## See Also

### Accessing media information

- [mediaType](mediatype.md): The media type of the media data.
- [hasMediaCharacteristic:](hasmediacharacteristic%28__%29.md): Returns a Boolean value that indicates whether the receiver has media with the given media characteristic.
