> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzmacosinstaller/restoreimageurl

# restoreImageURL (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The restore image URL used to initialize this installer.

## Declaration

```swift
var restoreImageURL: URL { get }
```

## See Also

### Getting Information About an Installation

- [progress](progress.md): A progress object that you can use to observe or cancel an installation.
- [virtualMachine](virtualmachine.md): The virtual machine used to initialize this installer.

# restoreImageURL (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The restore image URL used to initialize this installer.

## Declaration

```objectivec
@property (readonly) NSURL * restoreImageURL;
```

## See Also

### Getting Information About an Installation

- [progress](progress.md): A progress object that you can use to observe or cancel an installation.
- [virtualMachine](virtualmachine.md): The virtual machine used to initialize this installer.
