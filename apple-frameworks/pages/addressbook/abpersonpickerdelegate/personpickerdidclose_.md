> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpersonpickerdelegate/personpickerdidclose:](https://developer.apple.com/documentation/addressbook/abpersonpickerdelegate/personpickerdidclose:)

# personPickerDidClose:

**Interface language:** Objective-C

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Notifies the delegate when the user closes the  picker.

## Declaration

```objectivec
- (void) personPickerDidClose:(ABPersonPicker *) picker;
```

## Parameters

- `picker`: The picker the user closed.

## See Also

### Handling Selections

- [personPicker:didChoosePerson:property:identifier:](personpicker_didchooseperson_property_identifier_.md): Informs the delegate when the user selects a person, or a specific property of a person.
