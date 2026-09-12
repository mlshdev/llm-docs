> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachineconfiguration/maximumallowedcpucount](https://developer.apple.com/documentation/virtualization/vzvirtualmachineconfiguration/maximumallowedcpucount)

# maximumAllowedCPUCount (Swift)

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS

The maximum number of CPUs you may configure for the VM.

## Declaration

```swift
class var maximumAllowedCPUCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value in the [cpuCount](cpucount.md) property must be less than or equal to the value in this property.

## See Also

### Setting the number of CPUs

- [cpuCount](cpucount.md): The number of CPUs you make available to the guest operating system.
- [minimumAllowedCPUCount](minimumallowedcpucount.md): The minimum number of CPUs you may configure for the VM.

# maximumAllowedCPUCount (Objective-C)

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS

The maximum number of CPUs you may configure for the VM.

## Declaration

```objectivec
@property (class, readonly) NSUInteger maximumAllowedCPUCount;
```

<a id="Discussion"></a>

## Discussion

The value in the [CPUCount](cpucount.md) property must be less than or equal to the value in this property.

## See Also

### Setting the number of CPUs

- [CPUCount](cpucount.md): The number of CPUs you make available to the guest operating system.
- [minimumAllowedCPUCount](minimumallowedcpucount.md): The minimum number of CPUs you may configure for the VM.
