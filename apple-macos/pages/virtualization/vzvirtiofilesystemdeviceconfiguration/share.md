> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzvirtiofilesystemdeviceconfiguration/share

# share (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A value that defines how the host exposes resources to the guest virtual machine.

## Declaration

```swift
var share: VZDirectoryShare? { get set }
```

## See Also

### Getting file system information

- [tag](tag.md): A label that identifies this device in the guest VM.
- [macOSGuestAutomountTag](macosguestautomounttag.md): A value that indicates that the guest needs to automount this file system device in the guest VM.

# share (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A value that defines how the host exposes resources to the guest virtual machine.

## Declaration

```objectivec
@property (strong, nullable) VZDirectoryShare * share;
```

## See Also

### Getting file system information

- [tag](tag.md): A label that identifies this device in the guest VM.
- [macOSGuestAutomountTag](macosguestautomounttag.md): A value that indicates that the guest needs to automount this file system device in the guest VM.
