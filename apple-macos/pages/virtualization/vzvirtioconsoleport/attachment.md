> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzvirtioconsoleport/attachment

# attachment (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

An array of serial port attachments.

## Declaration

```swift
var attachment: VZSerialPortAttachment? { get set }
```

<a id="Discussion"></a>

## Discussion

This property may change at any time while the VM is running.

## See Also

### Configuring the port

- [name](name.md): The name of the port.

# attachment (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

An array of serial port attachments.

## Declaration

```objectivec
@property (strong, nullable) VZSerialPortAttachment * attachment;
```

<a id="Discussion"></a>

## Discussion

This property may change at any time while the VM is running.

## See Also

### Configuring the port

- [name](name.md): The name of the port.
