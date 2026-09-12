> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactpickerdelegate/contactpicker(_:didselect:)-1xfpt](https://developer.apple.com/documentation/contactsui/cncontactpickerdelegate/contactpicker(_:didselect:)-1xfpt)

# contactPicker(\_:didSelect:) (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Called when a property of the contact has been selected by the user.

## Declaration

```swift
optional func contactPicker(_ picker: CNContactPickerViewController, didSelect contactProperty: CNContactProperty)
```

```swift
optional func contactPicker(_ picker: CNContactPicker, didSelect contactProperty: CNContactProperty)
```

## Parameters

- `picker`: The contact picker where the selection was made.
- `contactProperty`: The selected contact property.

<a id="discussion"></a>

## Discussion

This delegate method ia called when the user selects a single property of the contact.

## See Also

### Responding to User Selections

- [contactPicker(\_:didSelect:)](contactpicker%28__didselect_%29-7vcyc.md): Called after a contact has been selected by the user.
- [contactPicker(\_:didSelect:)](contactpicker%28__didselect_%29-5neeo.md): Called after contacts have been selected by the user.
- [contactPicker(\_:didSelectContactProperties:)](contactpicker%28__didselectcontactproperties_%29.md): Called after contact properties have been selected by the user.

# contactPicker:didSelectContactProperty: (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Called when a property of the contact has been selected by the user.

## Declaration

```objectivec
- (void) contactPicker:(CNContactPickerViewController *) picker didSelectContactProperty:(CNContactProperty *) contactProperty;
```

```objectivec
- (void) contactPicker:(CNContactPicker *) picker didSelectContactProperty:(CNContactProperty *) contactProperty;
```

## Parameters

- `picker`: The contact picker where the selection was made.
- `contactProperty`: The selected contact property.

<a id="discussion"></a>

## Discussion

This delegate method ia called when the user selects a single property of the contact.

## See Also

### Responding to User Selections

- [contactPicker:didSelectContact:](contactpicker%28__didselect_%29-7vcyc.md): Called after a contact has been selected by the user.
- [contactPicker:didSelectContacts:](contactpicker%28__didselect_%29-5neeo.md): Called after contacts have been selected by the user.
- [contactPicker:didSelectContactProperties:](contactpicker%28__didselectcontactproperties_%29.md): Called after contact properties have been selected by the user.
