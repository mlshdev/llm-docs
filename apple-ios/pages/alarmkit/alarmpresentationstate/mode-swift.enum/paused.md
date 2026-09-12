> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentationstate/mode-swift.enum/paused](https://developer.apple.com/documentation/alarmkit/alarmpresentationstate/mode-swift.enum/paused)

# AlarmPresentationState.Mode.Paused

**Framework:** AlarmKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object that specifies the current state of the alarm has paused.

## Declaration

```swift
struct Paused
```

## Topics

### Pausing an alarm

- [init(totalCountdownDuration:previouslyElapsedDuration:)](paused/init%28totalcountdownduration_previouslyelapsedduration_%29.md): Creates an instance of a paused state.
- [previouslyElapsedDuration](paused/previouslyelapsedduration.md): The amount of time that elapsed before the most recent pause of the countdown.
- [totalCountdownDuration](paused/totalcountdownduration.md): The total duration of the countdown.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Pausing an alarm

- [AlarmPresentationState.Mode.paused(\_:)](paused%28__%29.md): A mode indicating the alarm isn’t active.
