> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontact/identifier](https://developer.apple.com/documentation/contacts/cncontact/identifier)

# identifier (Swift)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A value that uniquely identifies a contact on the device.

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

It is recommended that you use the [identifier](identifier.md) when re-fetching the contact. An identifier can be persisted between the app launches. Note that this identifier only uniquely identifies the contact on the current device.

## See Also

### Identifying the Contact

- [contactType](contacttype.md): An enum identifying the contact type.
- [CNContactType](../cncontacttype.md): The types a contact can be.

# identifier (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A value that uniquely identifies a contact on the device.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * identifier;
```

```objectivec
@property (atomic, copy, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

It is recommended that you use the [identifier](identifier.md) when re-fetching the contact. An identifier can be persisted between the app launches. Note that this identifier only uniquely identifies the contact on the current device.

## See Also

### Identifying the Contact

- [contactType](contacttype.md): An enum identifying the contact type.
- [CNContactType](../cncontacttype.md): The types a contact can be.
