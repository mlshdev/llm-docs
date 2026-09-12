> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpersonpickerdelegate](https://developer.apple.com/documentation/addressbook/abpersonpickerdelegate)

# ABPersonPickerDelegate

**Interface language:** Objective-C

**Framework:** Address Book  
**Kind:** Protocol  
**Availability:** macOS 10.9+

Methods you use to respond to user selections in a person picker.

## Declaration

```objectivec
@protocol ABPersonPickerDelegate <NSObject>
```

## Topics

### Handling Selections

- [personPicker:didChoosePerson:property:identifier:](abpersonpickerdelegate/personpicker_didchooseperson_property_identifier_.md): Informs the delegate when the user selects a person, or a specific property of a person.
- [personPickerDidClose:](abpersonpickerdelegate/personpickerdidclose_.md): Notifies the delegate when the user closes the picker.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Managing the Picker Interface

- [delegate](abpersonpicker/delegate.md): An object the system notifies as the user interacts with the picker.
