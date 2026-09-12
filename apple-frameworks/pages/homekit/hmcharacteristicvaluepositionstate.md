> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicvaluepositionstate](https://developer.apple.com/documentation/homekit/hmcharacteristicvaluepositionstate)

# HMCharacteristicValuePositionState (Swift)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Possible values for the position states of an accessory like a door, window, awning, or window covering.

## Declaration

```swift
enum HMCharacteristicValuePositionState
```

## Topics

### Position States

- [HMCharacteristicValuePositionState.closing](hmcharacteristicvaluepositionstate/closing.md): The position is moving towards minimum value.
- [HMCharacteristicValuePositionState.opening](hmcharacteristicvaluepositionstate/opening.md): The position is moving towards maximum value.
- [HMCharacteristicValuePositionState.stopped](hmcharacteristicvaluepositionstate/stopped.md): The accessory isn’t moving.

### Initializers

- [init(rawValue:)](hmcharacteristicvaluepositionstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# HMCharacteristicValuePositionState (Objective-C)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Possible values for the position states of an accessory like a door, window, awning, or window covering.

## Declaration

```objectivec
enum HMCharacteristicValuePositionState : NSInteger;
```

## Topics

### Position States

- [HMCharacteristicValuePositionStateClosing](hmcharacteristicvaluepositionstate/closing.md): The position is moving towards minimum value.
- [HMCharacteristicValuePositionStateOpening](hmcharacteristicvaluepositionstate/opening.md): The position is moving towards maximum value.
- [HMCharacteristicValuePositionStateStopped](hmcharacteristicvaluepositionstate/stopped.md): The accessory isn’t moving.
