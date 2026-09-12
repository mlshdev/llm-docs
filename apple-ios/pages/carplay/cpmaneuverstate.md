> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaneuverstate](https://developer.apple.com/documentation/carplay/cpmaneuverstate)

# CPManeuverState (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Values that describe the state of a maneuver.

## Declaration

```swift
enum CPManeuverState
```

## Topics

### Enumeration Cases

- [CPManeuverState.prepare](cpmaneuverstate/prepare.md)
- [CPManeuverState.initial](cpmaneuverstate/initial.md)
- [CPManeuverState.execute](cpmaneuverstate/execute.md)
- [CPManeuverState.continue](cpmaneuverstate/continue.md)

### Initializers

- [init(rawValue:)](cpmaneuverstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Maneuvers

- [CPManeuver](cpmaneuver.md): An object that describes a single navigation instruction.
- [CPManeuverType](cpmaneuvertype.md): Values that describe types of navigation maneuvers.

# CPManeuverState (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Values that describe the state of a maneuver.

## Declaration

```objectivec
enum CPManeuverState : NSInteger;
```

## Topics

### Enumeration Cases

- [CPManeuverStatePrepare](cpmaneuverstate/prepare.md)
- [CPManeuverStateInitial](cpmaneuverstate/initial.md)
- [CPManeuverStateExecute](cpmaneuverstate/execute.md)
- [CPManeuverStateContinue](cpmaneuverstate/continue.md)

## See Also

### Maneuvers

- [CPManeuver](cpmaneuver.md): An object that describes a single navigation instruction.
- [CPManeuverType](cpmaneuvertype.md): Values that describe types of navigation maneuvers.
