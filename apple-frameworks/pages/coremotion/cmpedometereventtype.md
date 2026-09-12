> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmpedometereventtype](https://developer.apple.com/documentation/coremotion/cmpedometereventtype)

# CMPedometerEventType (Swift)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 3.0+

Constants indicating the change that occurred to the user’s pedestrian activity.

## Declaration

```swift
enum CMPedometerEventType
```

## Topics

### Enumeration Cases

- [CMPedometerEventType.pause](cmpedometereventtype/pause.md): The user’s pedestrian activity stopped.
- [CMPedometerEventType.resume](cmpedometereventtype/resume.md): The user’s pedestrian activity resumed.

### Initializers

- [init(rawValue:)](cmpedometereventtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Pedometer Data

- [date](cmpedometerevent/date.md): The date on which the pedometer event was recorded.
- [type](cmpedometerevent/type.md): The type of change that occurred.

# CMPedometerEventType (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 3.0+

Constants indicating the change that occurred to the user’s pedestrian activity.

## Declaration

```objectivec
enum CMPedometerEventType : NSInteger;
```

## Topics

### Enumeration Cases

- [CMPedometerEventTypePause](cmpedometereventtype/pause.md): The user’s pedestrian activity stopped.
- [CMPedometerEventTypeResume](cmpedometereventtype/resume.md): The user’s pedestrian activity resumed.

## See Also

### Pedometer Data

- [date](cmpedometerevent/date.md): The date on which the pedometer event was recorded.
- [type](cmpedometerevent/type.md): The type of change that occurred.
