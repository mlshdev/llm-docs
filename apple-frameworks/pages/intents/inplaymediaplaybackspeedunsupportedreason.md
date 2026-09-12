> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaplaybackspeedunsupportedreason](https://developer.apple.com/documentation/intents/inplaymediaplaybackspeedunsupportedreason)

# INPlayMediaPlaybackSpeedUnsupportedReason (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe why the app can’t change the playback speed of the media item.

## Declaration

```swift
enum INPlayMediaPlaybackSpeedUnsupportedReason
```

## Topics

### Constants

- [INPlayMediaPlaybackSpeedUnsupportedReason.belowMinimum](inplaymediaplaybackspeedunsupportedreason/belowminimum.md): A reasson that indicates the requested playback speed is below the minimum supported playback speed.
- [INPlayMediaPlaybackSpeedUnsupportedReason.aboveMaximum](inplaymediaplaybackspeedunsupportedreason/abovemaximum.md): A reason that indicates the requested playback speed is above the maximum supported playback speed.

### Initializers

- [init(rawValue:)](inplaymediaplaybackspeedunsupportedreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Resolution Result

- [init(doubleResolutionResult:)](inplaymediaplaybackspeedresolutionresult/init%28doubleresolutionresult_%29.md): Creates an object whose resolution involves successfulling changing the playback speed of a media item.
- [unsupported(forReason:)](inplaymediaplaybackspeedresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution requires the user to confirm the request, because your app is unable to support the current request.

# INPlayMediaPlaybackSpeedUnsupportedReason (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe why the app can’t change the playback speed of the media item.

## Declaration

```objectivec
enum INPlayMediaPlaybackSpeedUnsupportedReason : NSInteger;
```

## Topics

### Constants

- [INPlayMediaPlaybackSpeedUnsupportedReasonBelowMinimum](inplaymediaplaybackspeedunsupportedreason/belowminimum.md): A reasson that indicates the requested playback speed is below the minimum supported playback speed.
- [INPlayMediaPlaybackSpeedUnsupportedReasonAboveMaximum](inplaymediaplaybackspeedunsupportedreason/abovemaximum.md): A reason that indicates the requested playback speed is above the maximum supported playback speed.

## See Also

### Creating a Resolution Result

- [initWithDoubleResolutionResult:](inplaymediaplaybackspeedresolutionresult/init%28doubleresolutionresult_%29.md): Creates an object whose resolution involves successfulling changing the playback speed of a media item.
- [unsupportedForReason:](inplaymediaplaybackspeedresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution requires the user to confirm the request, because your app is unable to support the current request.
