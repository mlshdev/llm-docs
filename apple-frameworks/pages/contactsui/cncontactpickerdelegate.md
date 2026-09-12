> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactpickerdelegate](https://developer.apple.com/documentation/contactsui/cncontactpickerdelegate)

# CNContactPickerDelegate (Swift)

**Framework:** Contacts UI  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The methods that you implement to respond to contact-picker user events.

## Declaration

```swift
protocol CNContactPickerDelegate : NSObjectProtocol
```

## Topics

### Responding to User Selections

- [contactPicker(\_:didSelect:)](cncontactpickerdelegate/contactpicker%28__didselect_%29-7vcyc.md): Called after a contact has been selected by the user.
- [contactPicker(\_:didSelect:)](cncontactpickerdelegate/contactpicker%28__didselect_%29-1xfpt.md): Called when a property of the contact has been selected by the user.
- [contactPicker(\_:didSelect:)](cncontactpickerdelegate/contactpicker%28__didselect_%29-5neeo.md): Called after contacts have been selected by the user.
- [contactPicker(\_:didSelectContactProperties:)](cncontactpickerdelegate/contactpicker%28__didselectcontactproperties_%29.md): Called after contact properties have been selected by the user.

### Dismissing the Picker Interface

- [contactPickerDidCancel(\_:)](cncontactpickerdelegate/contactpickerdidcancel%28__%29.md): In iOS, called when the user taps Cancel.
- [contactPickerWillClose(\_:)](cncontactpickerdelegate/contactpickerwillclose%28__%29.md): In macOS, called when the contact picker’s popover is about to close.
- [contactPickerDidClose(\_:)](cncontactpickerdelegate/contactpickerdidclose%28__%29.md): In macOS, called when the contact picker’s popover has closed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Related Documentation

- [delegate](cncontactpicker/delegate.md): The picker delegate to be notified when the user chooses a contact.
- [delegate](cncontactpickerviewcontroller/delegate.md): The delegate to be notified when the user selects a contact or a property.

### Responding to Picker Interactions

- [delegate](cncontactpicker/delegate.md): The picker delegate to be notified when the user chooses a contact.

# CNContactPickerDelegate (Objective-C)

**Framework:** Contacts UI  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The methods that you implement to respond to contact-picker user events.

## Declaration

```objectivec
@protocol CNContactPickerDelegate <NSObject>
```

## Topics

### Responding to User Selections

- [contactPicker:didSelectContact:](cncontactpickerdelegate/contactpicker%28__didselect_%29-7vcyc.md): Called after a contact has been selected by the user.
- [contactPicker:didSelectContactProperty:](cncontactpickerdelegate/contactpicker%28__didselect_%29-1xfpt.md): Called when a property of the contact has been selected by the user.
- [contactPicker:didSelectContacts:](cncontactpickerdelegate/contactpicker%28__didselect_%29-5neeo.md): Called after contacts have been selected by the user.
- [contactPicker:didSelectContactProperties:](cncontactpickerdelegate/contactpicker%28__didselectcontactproperties_%29.md): Called after contact properties have been selected by the user.

### Dismissing the Picker Interface

- [contactPickerDidCancel:](cncontactpickerdelegate/contactpickerdidcancel%28__%29.md): In iOS, called when the user taps Cancel.
- [contactPickerWillClose:](cncontactpickerdelegate/contactpickerwillclose%28__%29.md): In macOS, called when the contact picker’s popover is about to close.
- [contactPickerDidClose:](cncontactpickerdelegate/contactpickerdidclose%28__%29.md): In macOS, called when the contact picker’s popover has closed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Related Documentation

- [delegate](cncontactpicker/delegate.md): The picker delegate to be notified when the user chooses a contact.
- [delegate](cncontactpickerviewcontroller/delegate.md): The delegate to be notified when the user selects a contact or a property.

### Responding to Picker Interactions

- [delegate](cncontactpicker/delegate.md): The picker delegate to be notified when the user chooses a contact.
