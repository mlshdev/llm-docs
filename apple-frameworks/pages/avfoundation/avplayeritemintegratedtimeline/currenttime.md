> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemintegratedtimeline/currenttime](https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimeline/currenttime)

# currentTime (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The current time on the integrated timeline.

## Declaration

```swift
var currentTime: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

During playback of interstitial events that occupy a single point, this value doesn’t change.

## See Also

### Inspecting the time and date

- [currentDate](currentdate.md): The current date of playback.

# currentTime (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The current time on the integrated timeline.

## Declaration

```objectivec
@property (readonly) CMTime currentTime;
```

<a id="Discussion"></a>

## Discussion

During playback of interstitial events that occupy a single point, this value doesn’t change.

## See Also

### Inspecting the time and date

- [currentDate](currentdate.md): The current date of playback.
