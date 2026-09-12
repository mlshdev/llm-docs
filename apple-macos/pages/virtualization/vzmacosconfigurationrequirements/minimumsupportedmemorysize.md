> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosconfigurationrequirements/minimumsupportedmemorysize](https://developer.apple.com/documentation/virtualization/vzmacosconfigurationrequirements/minimumsupportedmemorysize)

# minimumSupportedMemorySize (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The minimum supported memory size for this configuration.

## Declaration

```swift
var minimumSupportedMemorySize: UInt64 { get }
```

<a id="Discussion"></a>

## Discussion

This property specifies the minimum amount of memory required by the associated macOS configuration.

You associate a [VZMacOSConfigurationRequirements](../vzmacosconfigurationrequirements.md) with a specific [VZMacOSRestoreImage](../vzmacosrestoreimage.md) object, which results in a specific macOS configuration.

Installing or running the associated configuration of macOS on a VM with less than this amount of memory results in undefined behavior.

## See Also

### Configuration Requirements

- [hardwareModel](hardwaremodel.md): The hardware model for this configuration.
- [minimumSupportedCPUCount](minimumsupportedcpucount.md): The minimum supported number of CPUs for this configuration.

# minimumSupportedMemorySize (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The minimum supported memory size for this configuration.

## Declaration

```objectivec
@property (readonly) uint64_t minimumSupportedMemorySize;
```

<a id="Discussion"></a>

## Discussion

This property specifies the minimum amount of memory required by the associated macOS configuration.

You associate a [VZMacOSConfigurationRequirements](../vzmacosconfigurationrequirements.md) with a specific [VZMacOSRestoreImage](../vzmacosrestoreimage.md) object, which results in a specific macOS configuration.

Installing or running the associated configuration of macOS on a VM with less than this amount of memory results in undefined behavior.

## See Also

### Configuration Requirements

- [hardwareModel](hardwaremodel.md): The hardware model for this configuration.
- [minimumSupportedCPUCount](minimumsupportedcpucount.md): The minimum supported number of CPUs for this configuration.
