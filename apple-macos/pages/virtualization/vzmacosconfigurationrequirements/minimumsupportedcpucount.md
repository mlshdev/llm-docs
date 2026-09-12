> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosconfigurationrequirements/minimumsupportedcpucount](https://developer.apple.com/documentation/virtualization/vzmacosconfigurationrequirements/minimumsupportedcpucount)

# minimumSupportedCPUCount (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The minimum supported number of CPUs for this configuration.

## Declaration

```swift
var minimumSupportedCPUCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property specifies the minimum number of CPUs required by the associated macOS configuration.

You associate a [VZMacOSConfigurationRequirements](../vzmacosconfigurationrequirements.md) with a specific [VZMacOSRestoreImage](../vzmacosrestoreimage.md) object, which results in a specific macOS configuration.

Installing or running the associated configuration of macOS on a virtual machine with fewer than the specified number of CPUs results in undefined behavior.

## See Also

### Configuration Requirements

- [hardwareModel](hardwaremodel.md): The hardware model for this configuration.
- [minimumSupportedMemorySize](minimumsupportedmemorysize.md): The minimum supported memory size for this configuration.

# minimumSupportedCPUCount (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The minimum supported number of CPUs for this configuration.

## Declaration

```objectivec
@property (readonly) NSUInteger minimumSupportedCPUCount;
```

<a id="Discussion"></a>

## Discussion

This property specifies the minimum number of CPUs required by the associated macOS configuration.

You associate a [VZMacOSConfigurationRequirements](../vzmacosconfigurationrequirements.md) with a specific [VZMacOSRestoreImage](../vzmacosrestoreimage.md) object, which results in a specific macOS configuration.

Installing or running the associated configuration of macOS on a virtual machine with fewer than the specified number of CPUs results in undefined behavior.

## See Also

### Configuration Requirements

- [hardwareModel](hardwaremodel.md): The hardware model for this configuration.
- [minimumSupportedMemorySize](minimumsupportedmemorysize.md): The minimum supported memory size for this configuration.
