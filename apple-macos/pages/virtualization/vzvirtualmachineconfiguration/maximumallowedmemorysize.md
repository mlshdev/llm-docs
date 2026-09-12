> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachineconfiguration/maximumallowedmemorysize](https://developer.apple.com/documentation/virtualization/vzvirtualmachineconfiguration/maximumallowedmemorysize)

# maximumAllowedMemorySize (Swift)

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS

The maximum amount of memory that you may configure for the VM.

## Declaration

```swift
class var maximumAllowedMemorySize: UInt64 { get }
```

<a id="Discussion"></a>

## Discussion

The value in the [memorySize](memorysize.md) property must be less than or equal to the value in this property.

## See Also

### Sizing the memory partition

- [memorySize](memorysize.md): The amount of physical memory the guest operating system recognizes.
- [minimumAllowedMemorySize](minimumallowedmemorysize.md): The minimum amount of memory that you may configure for the VM.
- [memoryBalloonDevices](memoryballoondevices.md): An array that you configure with a memory balloon device, used to update the memory in the VM.

# maximumAllowedMemorySize (Objective-C)

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS

The maximum amount of memory that you may configure for the VM.

## Declaration

```objectivec
@property (class, readonly) uint64_t maximumAllowedMemorySize;
```

<a id="Discussion"></a>

## Discussion

The value in the [memorySize](memorysize.md) property must be less than or equal to the value in this property.

## See Also

### Sizing the memory partition

- [memorySize](memorysize.md): The amount of physical memory the guest operating system recognizes.
- [minimumAllowedMemorySize](minimumallowedmemorysize.md): The minimum amount of memory that you may configure for the VM.
- [memoryBalloonDevices](memoryballoondevices.md): An array that you configure with a memory balloon device, used to update the memory in the VM.
