> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/thermalstate-swift.enum/critical](https://developer.apple.com/documentation/foundation/processinfo/thermalstate-swift.enum/critical)

# ProcessInfo.ThermalState.critical (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.10.3+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The thermal state is significantly impacting the performance of the system and the device needs to cool down.

## Declaration

```swift
case critical
```

<a id="Discussion"></a>

## Discussion

The system takes significant steps to reduce thermal state. Fans are running at maximum speed.

Reduce usage of the CPU, GPU, and I/O such as Bluetooth or network to the minimum level required for user interaction. If possible, stop using peripherals such as the camera, flash, microphone, and speaker.

## See Also

### Constants

- [ProcessInfo.ThermalState.nominal](nominal.md): The thermal state is within normal limits.
- [ProcessInfo.ThermalState.fair](fair.md): The thermal state is slightly elevated.
- [ProcessInfo.ThermalState.serious](serious.md): The thermal state is high.

# NSProcessInfoThermalStateCritical (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.10.3+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The thermal state is significantly impacting the performance of the system and the device needs to cool down.

## Declaration

```objectivec
NSProcessInfoThermalStateCritical
```

<a id="Discussion"></a>

## Discussion

The system takes significant steps to reduce thermal state. Fans are running at maximum speed.

Reduce usage of the CPU, GPU, and I/O such as Bluetooth or network to the minimum level required for user interaction. If possible, stop using peripherals such as the camera, flash, microphone, and speaker.

## See Also

### Constants

- [NSProcessInfoThermalStateNominal](nominal.md): The thermal state is within normal limits.
- [NSProcessInfoThermalStateFair](fair.md): The thermal state is slightly elevated.
- [NSProcessInfoThermalStateSerious](serious.md): The thermal state is high.
