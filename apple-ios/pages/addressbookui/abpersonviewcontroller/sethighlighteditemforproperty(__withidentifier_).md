> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpersonviewcontroller/sethighlighteditemforproperty(_:withidentifier:)](https://developer.apple.com/documentation/addressbookui/abpersonviewcontroller/sethighlighteditemforproperty(_:withidentifier:))

# setHighlightedItemForProperty(\_:withIdentifier:) (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Specifies whether to highlight a particular property of the displayed person.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```swift
func setHighlightedItemForProperty(_ property: ABPropertyID, withIdentifier identifier: ABMultiValueIdentifier)
```

## Parameters

- `property`: The property to highlight.
- `identifier`: When `property` is a multi-value property, the value to highlight.

## See Also

### Configuring Person Views

- [addressBook](addressbook.md): Deprecated. Optional. The address book from which to obtain the contact to display.
- [allowsActions](allowsactions.md): Deprecated. Specifies whether the to display buttons for actions such as sending a text message or initiating a FaceTime call.
- [allowsEditing](allowsediting.md): Deprecated. Specifies whether the user can edit the person’s information.

# setHighlightedItemForProperty:withIdentifier: (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Specifies whether to highlight a particular property of the displayed person.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```objectivec
- (void) setHighlightedItemForProperty:(ABPropertyID) property withIdentifier:(ABMultiValueIdentifier) identifier;
```

## Parameters

- `property`: The property to highlight.
- `identifier`: When `property` is a multi-value property, the value to highlight.

## See Also

### Configuring Person Views

- [addressBook](addressbook.md): Deprecated. Optional. The address book from which to obtain the contact to display.
- [allowsActions](allowsactions.md): Deprecated. Specifies whether the to display buttons for actions such as sending a text message or initiating a FaceTime call.
- [allowsEditing](allowsediting.md): Deprecated. Specifies whether the user can edit the person’s information.
