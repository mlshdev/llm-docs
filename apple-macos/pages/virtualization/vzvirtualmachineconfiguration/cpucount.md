> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachineconfiguration/cpucount](https://developer.apple.com/documentation/virtualization/vzvirtualmachineconfiguration/cpucount)

# cpuCount (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The number of CPUs you make available to the guest operating system.

## Declaration

```swift
var cpuCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property must be greater than or equal to the value in [minimumAllowedCPUCount](minimumallowedcpucount.md), and less than or equal to the value in [maximumAllowedCPUCount](maximumallowedcpucount.md). The system uses the number of physical CPUs on the current system to determine a default value.

## See Also

### Setting the number of CPUs

- [minimumAllowedCPUCount](minimumallowedcpucount.md): The minimum number of CPUs you may configure for the VM.
- [maximumAllowedCPUCount](maximumallowedcpucount.md): The maximum number of CPUs you may configure for the VM.

# CPUCount (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The number of CPUs you make available to the guest operating system.

## Declaration

```objectivec
@property (readwrite) NSUInteger CPUCount;
```

<a id="Discussion"></a>

## Discussion

The value of this property must be greater than or equal to the value in [minimumAllowedCPUCount](minimumallowedcpucount.md), and less than or equal to the value in [maximumAllowedCPUCount](maximumallowedcpucount.md). The system uses the number of physical CPUs on the current system to determine a default value.

## See Also

### Setting the number of CPUs

- [minimumAllowedCPUCount](minimumallowedcpucount.md): The minimum number of CPUs you may configure for the VM.
- [maximumAllowedCPUCount](maximumallowedcpucount.md): The maximum number of CPUs you may configure for the VM.
