> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzbridgednetworkinterface/localizeddisplayname](https://developer.apple.com/documentation/virtualization/vzbridgednetworkinterface/localizeddisplayname)

# localizedDisplayName (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A user-visible name for the network interface.

## Declaration

```swift
var localizedDisplayName: String? { get }
```

<a id="Discussion"></a>

## Discussion

An example interface name is `Ethernet`. Use this string when you need to display the name of the interface to the user.

## See Also

### Getting the interface description

- [identifier](identifier.md): The unique BSD name of this network interface.

# localizedDisplayName (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A user-visible name for the network interface.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * localizedDisplayName;
```

<a id="Discussion"></a>

## Discussion

An example interface name is `Ethernet`. Use this string when you need to display the name of the interface to the user.

## See Also

### Getting the interface description

- [identifier](identifier.md): The unique BSD name of this network interface.
