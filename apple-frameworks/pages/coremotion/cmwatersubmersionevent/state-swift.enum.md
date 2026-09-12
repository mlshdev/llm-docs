> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmwatersubmersionevent/state-swift.enum](https://developer.apple.com/documentation/coremotion/cmwatersubmersionevent/state-swift.enum)

# CMWaterSubmersionEvent.State (Swift)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · visionOS 1.0+ · watchOS 2.0+

The device’s submersion state.

## Declaration

```swift
enum State
```

## Topics

### Submersion states

- [CMWaterSubmersionEvent.State.notSubmerged](state-swift.enum/notsubmerged.md): The device isn’t submerged in water.
- [CMWaterSubmersionEvent.State.submerged](state-swift.enum/submerged.md): The device is submerged in water.
- [CMWaterSubmersionEvent.State.unknown](state-swift.enum/unknown.md): The submersion state is unknown.

### Initializers

- [init(rawValue:)](state-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing event data

- [date](date.md): The time and date of the event.
- [state](state-swift.property.md): The new submersion state.

# CMWaterSubmersionState (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The device’s submersion state.

## Declaration

```objectivec
enum CMWaterSubmersionState : NSInteger;
```

## Topics

### Submersion states

- [CMWaterSubmersionStateNotSubmerged](state-swift.enum/notsubmerged.md): The device isn’t submerged in water.
- [CMWaterSubmersionStateSubmerged](state-swift.enum/submerged.md): The device is submerged in water.
- [CMWaterSubmersionStateUnknown](state-swift.enum/unknown.md): The submersion state is unknown.

## See Also

### Accessing event data

- [date](date.md): The time and date of the event.
- [state](state-swift.property.md): The new submersion state.
