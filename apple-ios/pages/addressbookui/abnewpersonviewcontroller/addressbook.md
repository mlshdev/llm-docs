> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/addressbookui/abnewpersonviewcontroller/addressbook

# addressBook (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Optional. The address book to which the new contact is added.

> Use [contactStore](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/contactstore) instead.

## Declaration

```swift
var addressBook: ABAddressBook? { get set }
```

<a id="Discussion"></a>

## Discussion

When unset, an address book is created and assigned to this property when needed.

## See Also

### Configuring New Person Views

- [parentGroup](parentgroup.md): Deprecated. Optional. Specifies the group to which to add the new contact on save.

# addressBook (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Optional. The address book to which the new contact is added.

> Use [contactStore](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/contactstore) instead.

## Declaration

```objectivec
@property (nonatomic, readwrite, nullable) ABAddressBookRef addressBook;
```

<a id="Discussion"></a>

## Discussion

When unset, an address book is created and assigned to this property when needed.

## See Also

### Configuring New Person Views

- [parentGroup](parentgroup.md): Deprecated. Optional. Specifies the group to which to add the new contact on save.
