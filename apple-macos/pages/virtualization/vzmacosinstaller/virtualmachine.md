> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosinstaller/virtualmachine](https://developer.apple.com/documentation/virtualization/vzmacosinstaller/virtualmachine)

# virtualMachine (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The virtual machine used to initialize this installer.

## Declaration

```swift
var virtualMachine: VZVirtualMachine { get }
```

## See Also

### Getting Information About an Installation

- [progress](progress.md): A progress object that you can use to observe or cancel an installation.
- [restoreImageURL](restoreimageurl.md): The restore image URL used to initialize this installer.

# virtualMachine (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The virtual machine used to initialize this installer.

## Declaration

```objectivec
@property (readonly) VZVirtualMachine * virtualMachine;
```

## See Also

### Getting Information About an Installation

- [progress](progress.md): A progress object that you can use to observe or cancel an installation.
- [restoreImageURL](restoreimageurl.md): The restore image URL used to initialize this installer.
