> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiofilesystemdeviceconfiguration/macosguestautomounttag](https://developer.apple.com/documentation/virtualization/vzvirtiofilesystemdeviceconfiguration/macosguestautomounttag)

# macOSGuestAutomountTag (Swift)

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS 13.0+

A value that indicates that the guest needs to automount this file system device in the guest VM.

## Declaration

```swift
class var macOSGuestAutomountTag: String { get }
```

<a id="Discussion"></a>

## Discussion

A device configured with this tag is automatically mounted in a macOS guest.

## See Also

### Getting file system information

- [share](share.md): A value that defines how the host exposes resources to the guest virtual machine.
- [tag](tag.md): A label that identifies this device in the guest VM.

# macOSGuestAutomountTag (Objective-C)

**Framework:** Virtualization  
**Kind:** Type Property  
**Availability:** macOS 13.0+

A value that indicates that the guest needs to automount this file system device in the guest VM.

## Declaration

```objectivec
@property (class, readonly) NSString * macOSGuestAutomountTag;
```

<a id="Discussion"></a>

## Discussion

A device configured with this tag is automatically mounted in a macOS guest.

## See Also

### Getting file system information

- [share](share.md): A value that defines how the host exposes resources to the guest virtual machine.
- [tag](tag.md): A label that identifies this device in the guest VM.
