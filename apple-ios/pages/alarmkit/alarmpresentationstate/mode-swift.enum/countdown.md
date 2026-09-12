> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentationstate/mode-swift.enum/countdown](https://developer.apple.com/documentation/alarmkit/alarmpresentationstate/mode-swift.enum/countdown)

# AlarmPresentationState.Mode.Countdown

**Framework:** AlarmKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object that specifies a countdown is in progress.

## Declaration

```swift
struct Countdown
```

## Topics

### Creating a countdown

- [init(totalCountdownDuration:previouslyElapsedDuration:startDate:fireDate:)](countdown/init%28totalcountdownduration_previouslyelapsedduration_startdate_firedate_%29.md): Creates an instance of a countdown.
- [fireDate](countdown/firedate.md): The date the countdown starts.
- [previouslyElapsedDuration](countdown/previouslyelapsedduration.md): The amount of time that elapsed before the most recent resumption of the countdown.
- [startDate](countdown/startdate.md): The date at which the countdown was mostly recently resumed.
- [totalCountdownDuration](countdown/totalcountdownduration.md): The total duration of the countdown.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a countdown

- [AlarmPresentationState.Mode.countdown(\_:)](countdown%28__%29.md): A mode indicating the alarm timer is active.
