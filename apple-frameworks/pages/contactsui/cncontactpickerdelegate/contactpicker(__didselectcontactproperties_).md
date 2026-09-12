> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactpickerdelegate/contactpicker(_:didselectcontactproperties:)](https://developer.apple.com/documentation/contactsui/cncontactpickerdelegate/contactpicker(_:didselectcontactproperties:))

# contactPicker(\_:didSelectContactProperties:) (Swift)

**Framework:** Contacts UI  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called after contact properties have been selected by the user.

## Declaration

```swift
optional func contactPicker(_ picker: CNContactPickerViewController, didSelectContactProperties contactProperties: [CNContactProperty])
```

## Parameters

- `picker`: The contact picker where the selection was made.
- `contactProperties`: The selected contact properties.

<a id="discussion"></a>

## Discussion

This delegate method is invoked when the user selects more than one property. Implementing this method configures the picker for multi-selection.

## See Also

### Responding to User Selections

- [contactPicker(\_:didSelect:)](contactpicker%28__didselect_%29-7vcyc.md): Called after a contact has been selected by the user.
- [contactPicker(\_:didSelect:)](contactpicker%28__didselect_%29-1xfpt.md): Called when a property of the contact has been selected by the user.
- [contactPicker(\_:didSelect:)](contactpicker%28__didselect_%29-5neeo.md): Called after contacts have been selected by the user.

# contactPicker:didSelectContactProperties: (Objective-C)

**Framework:** Contacts UI  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Called after contact properties have been selected by the user.

## Declaration

```objectivec
- (void) contactPicker:(CNContactPickerViewController *) picker didSelectContactProperties:(NSArray<CNContactProperty *> *) contactProperties;
```

## Parameters

- `picker`: The contact picker where the selection was made.
- `contactProperties`: The selected contact properties.

<a id="discussion"></a>

## Discussion

This delegate method is invoked when the user selects more than one property. Implementing this method configures the picker for multi-selection.

## See Also

### Responding to User Selections

- [contactPicker:didSelectContact:](contactpicker%28__didselect_%29-7vcyc.md): Called after a contact has been selected by the user.
- [contactPicker:didSelectContactProperty:](contactpicker%28__didselect_%29-1xfpt.md): Called when a property of the contact has been selected by the user.
- [contactPicker:didSelectContacts:](contactpicker%28__didselect_%29-5neeo.md): Called after contacts have been selected by the user.
