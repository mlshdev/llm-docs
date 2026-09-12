> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/thermalstate-swift.enum/serious](https://developer.apple.com/documentation/foundation/processinfo/thermalstate-swift.enum/serious)

# ProcessInfo.ThermalState.serious (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.10.3+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The thermal state is high.

## Declaration

```swift
case serious
```

<a id="Discussion"></a>

## Discussion

The system takes moderate steps to reduce thermal state, which reduces performance. Fans are running at maximum speed.

Reduce usage of resources that generate heat and consume battery, for example:

- Reduce or defer I/O operations, such as networking and Bluetooth
- Reduce the requested level of accuracy for location
- Reduce CPU and GPU usage by stopping or deferring work
- Reduce the target framerate from 60 FPS to 30 FPS
- Reduce the level of detail in rendered content by using fewer particles or lower-resolution textures

For more details on how to reduce your app’s use of these resources, see [Energy Efficiency Guide for iOS Apps](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/EnergyGuide-iOS/index.html#//apple_ref/doc/uid/TP40015243) and [Energy Efficiency Guide for Mac Apps](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/power_efficiency_guidelines_osx/index.html#//apple_ref/doc/uid/TP40013929).

## See Also

### Constants

- [ProcessInfo.ThermalState.nominal](nominal.md): The thermal state is within normal limits.
- [ProcessInfo.ThermalState.fair](fair.md): The thermal state is slightly elevated.
- [ProcessInfo.ThermalState.critical](critical.md): The thermal state is significantly impacting the performance of the system and the device needs to cool down.

# NSProcessInfoThermalStateSerious (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.10.3+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The thermal state is high.

## Declaration

```objectivec
NSProcessInfoThermalStateSerious
```

<a id="Discussion"></a>

## Discussion

The system takes moderate steps to reduce thermal state, which reduces performance. Fans are running at maximum speed.

Reduce usage of resources that generate heat and consume battery, for example:

- Reduce or defer I/O operations, such as networking and Bluetooth
- Reduce the requested level of accuracy for location
- Reduce CPU and GPU usage by stopping or deferring work
- Reduce the target framerate from 60 FPS to 30 FPS
- Reduce the level of detail in rendered content by using fewer particles or lower-resolution textures

For more details on how to reduce your app’s use of these resources, see [Energy Efficiency Guide for iOS Apps](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/EnergyGuide-iOS/index.html#//apple_ref/doc/uid/TP40015243) and [Energy Efficiency Guide for Mac Apps](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/power_efficiency_guidelines_osx/index.html#//apple_ref/doc/uid/TP40013929).

## See Also

### Constants

- [NSProcessInfoThermalStateNominal](nominal.md): The thermal state is within normal limits.
- [NSProcessInfoThermalStateFair](fair.md): The thermal state is slightly elevated.
- [NSProcessInfoThermalStateCritical](critical.md): The thermal state is significantly impacting the performance of the system and the device needs to cool down.
