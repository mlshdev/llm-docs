> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/thermalstate-swift.enum](https://developer.apple.com/documentation/foundation/processinfo/thermalstate-swift.enum)

# ProcessInfo.ThermalState (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.10.3+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Values used to indicate the system’s thermal state.

## Declaration

```swift
enum ThermalState
```

<a id="overview"></a>

## Overview

These values are used by the [ProcessInfo](../processinfo.md) class as return values for [thermalState](thermalstate-swift.property.md).

For information about testing your app under different thermal states, see [Test under adverse device conditions](https://help.apple.com/xcode/mac/current/#/dev308429d42).

## Topics

### Constants

- [ProcessInfo.ThermalState.nominal](thermalstate-swift.enum/nominal.md): The thermal state is within normal limits.
- [ProcessInfo.ThermalState.fair](thermalstate-swift.enum/fair.md): The thermal state is slightly elevated.
- [ProcessInfo.ThermalState.serious](thermalstate-swift.enum/serious.md): The thermal state is high.
- [ProcessInfo.ThermalState.critical](thermalstate-swift.enum/critical.md): The thermal state is significantly impacting the performance of the system and the device needs to cool down.

### Initializers

- [init(rawValue:)](thermalstate-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the thermal state

- [thermalState](thermalstate-swift.property.md): The current thermal state of the system.

# NSProcessInfoThermalState (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.10.3+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Values used to indicate the system’s thermal state.

## Declaration

```objectivec
enum NSProcessInfoThermalState : NSInteger;
```

<a id="overview"></a>

## Overview

These values are used by the [NSProcessInfo](../processinfo.md) class as return values for [thermalState](thermalstate-swift.property.md).

For information about testing your app under different thermal states, see [Test under adverse device conditions](https://help.apple.com/xcode/mac/current/#/dev308429d42).

## Topics

### Constants

- [NSProcessInfoThermalStateNominal](thermalstate-swift.enum/nominal.md): The thermal state is within normal limits.
- [NSProcessInfoThermalStateFair](thermalstate-swift.enum/fair.md): The thermal state is slightly elevated.
- [NSProcessInfoThermalStateSerious](thermalstate-swift.enum/serious.md): The thermal state is high.
- [NSProcessInfoThermalStateCritical](thermalstate-swift.enum/critical.md): The thermal state is significantly impacting the performance of the system and the device needs to cool down.

## See Also

### Getting the thermal state

- [thermalState](thermalstate-swift.property.md): The current thermal state of the system.
