> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipress/phase-swift.enum](https://developer.apple.com/documentation/uikit/uipress/phase-swift.enum)

# UIPress.Phase (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Constants that represent the phases of a button press.

## Declaration

```swift
enum Phase
```

## Topics

### Constants

- [UIPress.Phase.began](phase-swift.enum/began.md): A physical button was pressed.
- [UIPress.Phase.changed](phase-swift.enum/changed.md): A button moved, or the force property changed.
- [UIPress.Phase.stationary](phase-swift.enum/stationary.md): A button was pressed but hasn’t moved since the previous event.
- [UIPress.Phase.ended](phase-swift.enum/ended.md): A button was released.
- [UIPress.Phase.cancelled](phase-swift.enum/cancelled.md): The system canceled tracking for the button.

### Initializers

- [init(rawValue:)](phase-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [UIPress.PressType](presstype.md): Constants that represent buttons that a person can press.

# UIPressPhase (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Constants that represent the phases of a button press.

## Declaration

```objectivec
enum UIPressPhase : NSInteger;
```

## Topics

### Constants

- [UIPressPhaseBegan](phase-swift.enum/began.md): A physical button was pressed.
- [UIPressPhaseChanged](phase-swift.enum/changed.md): A button moved, or the force property changed.
- [UIPressPhaseStationary](phase-swift.enum/stationary.md): A button was pressed but hasn’t moved since the previous event.
- [UIPressPhaseEnded](phase-swift.enum/ended.md): A button was released.
- [UIPressPhaseCancelled](phase-swift.enum/cancelled.md): The system canceled tracking for the button.

## See Also

### Constants

- [UIPressType](presstype.md): Constants that represent buttons that a person can press.
