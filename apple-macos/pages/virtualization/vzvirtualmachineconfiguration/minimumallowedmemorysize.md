> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachineconfiguration/minimumallowedmemorysize](https://developer.apple.com/documentation/virtualization/vzvirtualmachineconfiguration/minimumallowedmemorysize)

# minimumAllowedMemorySize (Swift)

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS

The minimum amount of memory that you may configure for the VM.

## Declaration

```swift
class var minimumAllowedMemorySize: UInt64 { get }
```

<a id="Discussion"></a>

## Discussion

The value in the [memorySize](memorysize.md) property must be greater than or equal to the value in this property.

## See Also

### Sizing the memory partition

- [memorySize](memorysize.md): The amount of physical memory the guest operating system recognizes.
- [maximumAllowedMemorySize](maximumallowedmemorysize.md): The maximum amount of memory that you may configure for the VM.
- [memoryBalloonDevices](memoryballoondevices.md): An array that you configure with a memory balloon device, used to update the memory in the VM.

# minimumAllowedMemorySize (Objective-C)

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS

The minimum amount of memory that you may configure for the VM.

## Declaration

```objectivec
@property (class, readonly) uint64_t minimumAllowedMemorySize;
```

<a id="Discussion"></a>

## Discussion

The value in the [memorySize](memorysize.md) property must be greater than or equal to the value in this property.

## See Also

### Sizing the memory partition

- [memorySize](memorysize.md): The amount of physical memory the guest operating system recognizes.
- [maximumAllowedMemorySize](maximumallowedmemorysize.md): The maximum amount of memory that you may configure for the VM.
- [memoryBalloonDevices](memoryballoondevices.md): An array that you configure with a memory balloon device, used to update the memory in the VM.
