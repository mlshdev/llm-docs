> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/thermalstate-swift.enum/fair](https://developer.apple.com/documentation/foundation/processinfo/thermalstate-swift.enum/fair)

# ProcessInfo.ThermalState.fair (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.10.3+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The thermal state is slightly elevated.

## Declaration

```swift
case fair
```

<a id="Discussion"></a>

## Discussion

The system takes steps to reduce thermal state, like running fans and stopping background services that aren’t doing work immediately needed by the user.

Reduce or defer background work, like prefetching content over the network or updating database indexes.

## See Also

### Constants

- [ProcessInfo.ThermalState.nominal](nominal.md): The thermal state is within normal limits.
- [ProcessInfo.ThermalState.serious](serious.md): The thermal state is high.
- [ProcessInfo.ThermalState.critical](critical.md): The thermal state is significantly impacting the performance of the system and the device needs to cool down.

# NSProcessInfoThermalStateFair (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.10.3+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The thermal state is slightly elevated.

## Declaration

```objectivec
NSProcessInfoThermalStateFair
```

<a id="Discussion"></a>

## Discussion

The system takes steps to reduce thermal state, like running fans and stopping background services that aren’t doing work immediately needed by the user.

Reduce or defer background work, like prefetching content over the network or updating database indexes.

## See Also

### Constants

- [NSProcessInfoThermalStateNominal](nominal.md): The thermal state is within normal limits.
- [NSProcessInfoThermalStateSerious](serious.md): The thermal state is high.
- [NSProcessInfoThermalStateCritical](critical.md): The thermal state is significantly impacting the performance of the system and the device needs to cool down.
