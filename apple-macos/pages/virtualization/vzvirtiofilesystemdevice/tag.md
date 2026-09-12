> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiofilesystemdevice/tag](https://developer.apple.com/documentation/virtualization/vzvirtiofilesystemdevice/tag)

# tag (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A string that identifies the device.

## Declaration

```swift
var tag: String { get }
```

<a id="Discussion"></a>

## Discussion

The system presents the `tag` as a label in the guest VM that identifies this device that’s available for mounting.

## See Also

### Accessing directory properties

- [share](share.md): A value that defines the directory share the host exposes to the guest VM.

# tag (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A string that identifies the device.

## Declaration

```objectivec
@property (copy, readonly) NSString * tag;
```

<a id="Discussion"></a>

## Discussion

The system presents the `tag` as a label in the guest VM that identifies this device that’s available for mounting.

## See Also

### Accessing directory properties

- [share](share.md): A value that defines the directory share the host exposes to the guest VM.
