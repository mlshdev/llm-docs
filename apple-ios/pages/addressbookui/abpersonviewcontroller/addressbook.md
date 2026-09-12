> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpersonviewcontroller/addressbook](https://developer.apple.com/documentation/addressbookui/abpersonviewcontroller/addressbook)

# addressBook (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Optional. The address book from which to obtain the contact to display.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```swift
var addressBook: ABAddressBook? { get set }
```

<a id="Discussion"></a>

## Discussion

When unset, an address book is created and assigned to this property when needed.

## See Also

### Configuring Person Views

- [allowsActions](allowsactions.md): Deprecated. Specifies whether the to display buttons for actions such as sending a text message or initiating a FaceTime call.
- [allowsEditing](allowsediting.md): Deprecated. Specifies whether the user can edit the person’s information.
- [setHighlightedItemForProperty(\_:withIdentifier:)](sethighlighteditemforproperty%28__withidentifier_%29.md): Deprecated. Specifies whether to highlight a particular property of the displayed person.

# addressBook (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Optional. The address book from which to obtain the contact to display.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```objectivec
@property (nonatomic, readwrite, nullable) ABAddressBookRef addressBook;
```

<a id="Discussion"></a>

## Discussion

When unset, an address book is created and assigned to this property when needed.

## See Also

### Configuring Person Views

- [allowsActions](allowsactions.md): Deprecated. Specifies whether the to display buttons for actions such as sending a text message or initiating a FaceTime call.
- [allowsEditing](allowsediting.md): Deprecated. Specifies whether the user can edit the person’s information.
- [setHighlightedItemForProperty:withIdentifier:](sethighlighteditemforproperty%28__withidentifier_%29.md): Deprecated. Specifies whether to highlight a particular property of the displayed person.
