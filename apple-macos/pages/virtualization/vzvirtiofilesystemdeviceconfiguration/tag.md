> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiofilesystemdeviceconfiguration/tag](https://developer.apple.com/documentation/virtualization/vzvirtiofilesystemdeviceconfiguration/tag)

# tag (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A label that identifies this device in the guest VM.

## Declaration

```swift
var tag: String { get set }
```

## See Also

### Getting file system information

- [share](share.md): A value that defines how the host exposes resources to the guest virtual machine.
- [macOSGuestAutomountTag](macosguestautomounttag.md): A value that indicates that the guest needs to automount this file system device in the guest VM.

# tag (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A label that identifies this device in the guest VM.

## Declaration

```objectivec
@property (copy) NSString * tag;
```

## See Also

### Getting file system information

- [share](share.md): A value that defines how the host exposes resources to the guest virtual machine.
- [macOSGuestAutomountTag](macosguestautomounttag.md): A value that indicates that the guest needs to automount this file system device in the guest VM.
