> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpersonpickerdelegate/personpicker:didchooseperson:property:identifier:](https://developer.apple.com/documentation/addressbook/abpersonpickerdelegate/personpicker:didchooseperson:property:identifier:)

# personPicker:didChoosePerson:property:identifier:

**Interface language:** Objective-C

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Informs the delegate when the user selects a person, or a specific property of a person.

## Declaration

```objectivec
- (void) personPicker:(ABPersonPicker *) picker didChoosePerson:(ABPerson *) person property:(NSString *) property identifier:(NSString *) identifier;
```

## Parameters

- `picker`: The picker that presented the popover.
- `person`: The person that the user selected.
- `property`: The property corresponding to the selected value, or `nil` if the user selected a person instead of a specific property.
- `identifier`: The identifier of an item in a multivalue list, such as an address property, or `nil` if the user selected a person or a value that isn’t a multivalue.

## See Also

### Handling Selections

- [personPickerDidClose:](personpickerdidclose_.md): Notifies the delegate when the user closes the picker.
