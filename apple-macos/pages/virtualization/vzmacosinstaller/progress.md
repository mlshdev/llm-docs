> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosinstaller/progress](https://developer.apple.com/documentation/virtualization/vzmacosinstaller/progress)

# progress (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A progress object that you can use to observe or cancel an installation.

## Declaration

```swift
var progress: Progress { get }
```

## Mentioned In

- [Installing macOS on a Virtual Machine](../installing-macos-on-a-virtual-machine.md)

<a id="Discussion"></a>

## Discussion

Canceling the progress object before starting an installation raises an exception.

## See Also

### Getting Information About an Installation

- [restoreImageURL](restoreimageurl.md): The restore image URL used to initialize this installer.
- [virtualMachine](virtualmachine.md): The virtual machine used to initialize this installer.

# progress (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A progress object that you can use to observe or cancel an installation.

## Declaration

```objectivec
@property (readonly) NSProgress * progress;
```

## Mentioned In

- [Installing macOS on a Virtual Machine](../installing-macos-on-a-virtual-machine.md)

<a id="Discussion"></a>

## Discussion

Canceling the progress object before starting an installation raises an exception.

## See Also

### Getting Information About an Installation

- [restoreImageURL](restoreimageurl.md): The restore image URL used to initialize this installer.
- [virtualMachine](virtualmachine.md): The virtual machine used to initialize this installer.
