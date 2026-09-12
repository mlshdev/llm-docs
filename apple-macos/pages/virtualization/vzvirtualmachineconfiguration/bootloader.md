> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachineconfiguration/bootloader](https://developer.apple.com/documentation/virtualization/vzvirtualmachineconfiguration/bootloader)

# bootLoader (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The guest system to boot when the VM starts.

## Declaration

```swift
var bootLoader: VZBootLoader? { get set }
```

<a id="Discussion"></a>

## Discussion

Assign the boot loader object that contains information about how to load your guest operating system. For example, to configure your VM with a Linux operating system, assign a [VZLinuxBootLoader](../vzlinuxbootloader.md) object.

# bootLoader (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The guest system to boot when the VM starts.

## Declaration

```objectivec
@property (strong, nullable) VZBootLoader * bootLoader;
```

<a id="Discussion"></a>

## Discussion

Assign the boot loader object that contains information about how to load your guest operating system. For example, to configure your VM with a Linux operating system, assign a [VZLinuxBootLoader](../vzlinuxbootloader.md) object.
