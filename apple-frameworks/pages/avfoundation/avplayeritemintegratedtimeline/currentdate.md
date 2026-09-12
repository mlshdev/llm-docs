> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemintegratedtimeline/currentdate](https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimeline/currentdate)

# currentDate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The current date of playback.

## Declaration

```swift
var currentDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if playback doesn’t map to a date.

## See Also

### Inspecting the time and date

- [currentTime](currenttime.md): The current time on the integrated timeline.

# currentDate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The current date of playback.

## Declaration

```objectivec
@property (readonly, nullable) NSDate * currentDate;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if playback doesn’t map to a date.

## See Also

### Inspecting the time and date

- [currentTime](currenttime.md): The current time on the integrated timeline.
