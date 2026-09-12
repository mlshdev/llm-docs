> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/thermalstate-swift.property](https://developer.apple.com/documentation/foundation/processinfo/thermalstate-swift.property)

# thermalState (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.10.3+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The current thermal state of the system.

## Declaration

```swift
var thermalState: ProcessInfo.ThermalState { get }
```

<a id="Discussion"></a>

## Discussion

At higher thermal states your app should reduce usage of system resources. For more information, see [ProcessInfo.ThermalState](thermalstate-swift.enum.md).

## See Also

### Getting the thermal state

- [ProcessInfo.ThermalState](thermalstate-swift.enum.md): Values used to indicate the system’s thermal state.

# thermalState (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.10.3+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The current thermal state of the system.

## Declaration

```objectivec
@property (readonly) NSProcessInfoThermalState thermalState;
```

<a id="Discussion"></a>

## Discussion

At higher thermal states your app should reduce usage of system resources. For more information, see [NSProcessInfoThermalState](thermalstate-swift.enum.md).

## See Also

### Getting the thermal state

- [NSProcessInfoThermalState](thermalstate-swift.enum.md): Values used to indicate the system’s thermal state.
