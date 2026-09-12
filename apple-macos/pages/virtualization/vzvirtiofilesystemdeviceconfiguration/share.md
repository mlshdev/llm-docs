> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiofilesystemdeviceconfiguration/share](https://developer.apple.com/documentation/virtualization/vzvirtiofilesystemdeviceconfiguration/share)

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
