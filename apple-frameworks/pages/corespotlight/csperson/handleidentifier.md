> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csperson/handleidentifier](https://developer.apple.com/documentation/corespotlight/csperson/handleidentifier)

# handleIdentifier (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A key that identifies the type of contact property represented by the person object’s handle.

## Declaration

```swift
var handleIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CNContact](../../contacts/cncontact.md) property key, such as [CNContactPhoneNumbersKey](../../contacts/cncontactphonenumberskey.md) or [CNContactEmailAddressesKey](../../contacts/cncontactemailaddresseskey.md).

## See Also

### Accessing person properties

- [contactIdentifier](contactidentifier.md): The identifier for the contact associated with the person.
- [displayName](displayname.md): A display name for the person.
- [handles](handles.md): An array of contact handles related to the person.

# handleIdentifier (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A key that identifies the type of contact property represented by the person object’s handle.

## Declaration

```objectivec
@property (readonly) NSString * handleIdentifier;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CNContact](../../contacts/cncontact.md) property key, such as [CNContactPhoneNumbersKey](../../contacts/cncontactphonenumberskey.md) or [CNContactEmailAddressesKey](../../contacts/cncontactemailaddresseskey.md).

## See Also

### Accessing person properties

- [contactIdentifier](contactidentifier.md): The identifier for the contact associated with the person.
- [displayName](displayname.md): A display name for the person.
- [handles](handles.md): An array of contact handles related to the person.
