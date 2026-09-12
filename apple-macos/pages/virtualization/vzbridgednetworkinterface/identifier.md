> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzbridgednetworkinterface/identifier](https://developer.apple.com/documentation/virtualization/vzbridgednetworkinterface/identifier)

# identifier (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The unique BSD name of this network interface.

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

BSD names for the host computer’s Ethernet interfaces include `en0`, `en1`, and so on.

## See Also

### Getting the interface description

- [localizedDisplayName](localizeddisplayname.md): A user-visible name for the network interface.

# identifier (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The unique BSD name of this network interface.

## Declaration

```objectivec
@property (copy, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

BSD names for the host computer’s Ethernet interfaces include `en0`, `en1`, and so on.

## See Also

### Getting the interface description

- [localizedDisplayName](localizeddisplayname.md): A user-visible name for the network interface.
