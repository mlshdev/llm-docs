> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactpickerdelegate/contactpicker(_:didselect:)-5neeo](https://developer.apple.com/documentation/contactsui/cncontactpickerdelegate/contactpicker(_:didselect:)-5neeo)

# contactPicker(\_:didSelect:) (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called after contacts have been selected by the user.

## Declaration

```swift
optional func contactPicker(_ picker: CNContactPickerViewController, didSelect contacts: [CNContact])
```

## Parameters

- `picker`: The contact picker where the selection was made.
- `contacts`: The selected contacts.

<a id="discussion"></a>

## Discussion

This delegate method is called when the user selects more than one contact. Implementing this method configures the picker for multi-selection.

## See Also

### Responding to User Selections

- [contactPicker(\_:didSelect:)](contactpicker%28__didselect_%29-7vcyc.md): Called after a contact has been selected by the user.
- [contactPicker(\_:didSelect:)](contactpicker%28__didselect_%29-1xfpt.md): Called when a property of the contact has been selected by the user.
- [contactPicker(\_:didSelectContactProperties:)](contactpicker%28__didselectcontactproperties_%29.md): Called after contact properties have been selected by the user.

# contactPicker:didSelectContacts: (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called after contacts have been selected by the user.

## Declaration

```objectivec
- (void) contactPicker:(CNContactPickerViewController *) picker didSelectContacts:(NSArray<CNContact *> *) contacts;
```

## Parameters

- `picker`: The contact picker where the selection was made.
- `contacts`: The selected contacts.

<a id="discussion"></a>

## Discussion

This delegate method is called when the user selects more than one contact. Implementing this method configures the picker for multi-selection.

## See Also

### Responding to User Selections

- [contactPicker:didSelectContact:](contactpicker%28__didselect_%29-7vcyc.md): Called after a contact has been selected by the user.
- [contactPicker:didSelectContactProperty:](contactpicker%28__didselect_%29-1xfpt.md): Called when a property of the contact has been selected by the user.
- [contactPicker:didSelectContactProperties:](contactpicker%28__didselectcontactproperties_%29.md): Called after contact properties have been selected by the user.
