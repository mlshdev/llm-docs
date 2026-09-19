> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzmacosinstaller/init(virtualmachine:restoringfromimageat:)

# init(virtualMachine:restoringFromImageAt:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a macOS installer object.

## Declaration

```swift
init(virtualMachine: VZVirtualMachine, restoringFromImageAt restoreImageFileURL: URL)
```

## Parameters

- `virtualMachine`: The virtual machine to install the operating system on.
- `restoreImageFileURL`: A file URL that indicates the macOS restore image to install.

# initWithVirtualMachine:restoreImageURL: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Creates a macOS installer object.

## Declaration

```objectivec
- (instancetype) initWithVirtualMachine:(VZVirtualMachine *) virtualMachine restoreImageURL:(NSURL *) restoreImageFileURL;
```

## Parameters

- `virtualMachine`: The virtual machine to install the operating system on.
- `restoreImageFileURL`: A file URL that indicates the macOS restore image to install.
