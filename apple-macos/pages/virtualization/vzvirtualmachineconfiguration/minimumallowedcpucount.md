> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzvirtualmachineconfiguration/minimumallowedcpucount

# minimumAllowedCPUCount (Swift)

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS

The minimum number of CPUs you may configure for the VM.

## Declaration

```swift
class var minimumAllowedCPUCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value in the [cpuCount](cpucount.md) property must be greater than or equal to the value in this property.

## See Also

### Setting the number of CPUs

- [cpuCount](cpucount.md): The number of CPUs you make available to the guest operating system.
- [maximumAllowedCPUCount](maximumallowedcpucount.md): The maximum number of CPUs you may configure for the VM.

# minimumAllowedCPUCount (Objective-C)

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS

The minimum number of CPUs you may configure for the VM.

## Declaration

```objectivec
@property (class, readonly) NSUInteger minimumAllowedCPUCount;
```

<a id="Discussion"></a>

## Discussion

The value in the [CPUCount](cpucount.md) property must be greater than or equal to the value in this property.

## See Also

### Setting the number of CPUs

- [CPUCount](cpucount.md): The number of CPUs you make available to the guest operating system.
- [maximumAllowedCPUCount](maximumallowedcpucount.md): The maximum number of CPUs you may configure for the VM.
