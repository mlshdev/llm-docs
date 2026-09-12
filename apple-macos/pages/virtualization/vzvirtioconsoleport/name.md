> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioconsoleport/name](https://developer.apple.com/documentation/virtualization/vzvirtioconsoleport/name)

# name (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The name of the port.

## Declaration

```swift
var name: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property can’t change while the VM is running. A null value indicates a name isn’t set.

## See Also

### Configuring the port

- [attachment](attachment.md): An array of serial port attachments.

# name (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The name of the port.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

This property can’t change while the VM is running. A null value indicates a name isn’t set.

## See Also

### Configuring the port

- [attachment](attachment.md): An array of serial port attachments.
