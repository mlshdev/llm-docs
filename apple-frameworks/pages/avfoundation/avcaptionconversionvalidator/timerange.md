> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionconversionvalidator/timerange](https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator/timerange)

# timeRange (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The time range of the media timeline in which the captions must exist.

## Declaration

```swift
var timeRange: CMTimeRange { get }
```

<a id="Discussion"></a>

## Discussion

If captions need to appear only after the start of the associated media, the start time of this time range can be less than the start time of the first caption’s time range.

If the media duration is unknown, this time range can have a duration of [positiveInfinity](../../coremedia/cmtime/positiveinfinity.md). However, to comprehensively validate the conversion of closed captions, set the duration of the time range to the duration of the associated media.

## See Also

### Inspecting the validator

- [captions](captions.md): The array of captions that the system validates.

# timeRange (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The time range of the media timeline in which the captions must exist.

## Declaration

```objectivec
@property (readonly) CMTimeRange timeRange;
```

<a id="Discussion"></a>

## Discussion

If captions need to appear only after the start of the associated media, the start time of this time range can be less than the start time of the first caption’s time range.

If the media duration is unknown, this time range can have a duration of [kCMTimePositiveInfinity](../../coremedia/cmtime/positiveinfinity.md). However, to comprehensively validate the conversion of closed captions, set the duration of the time range to the duration of the associated media.

## See Also

### Inspecting the validator

- [captions](captions.md): The array of captions that the system validates.
