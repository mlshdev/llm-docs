> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller(_:didselectperson:)](https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller(_:didselectperson:))

# peoplePickerNavigationController(\_:didSelectPerson:) (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

Called after a person has been selected by the user.

## Declaration

```swift
optional func peoplePickerNavigationController(_ peoplePicker: ABPeoplePickerNavigationController, didSelectPerson person: ABRecord)
```

## Parameters

- `peoplePicker`: The people picker where the selection was made.
- `person`: The selected person record.

## See Also

### Responding to User Events

- [peoplePickerNavigationController(\_:shouldContinueAfterSelectingPerson:)](peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_%29.md): Deprecated. Sent when the user selects a contact.
- [peoplePickerNavigationController(\_:shouldContinueAfterSelectingPerson:property:identifier:)](peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_property_identifier_%29.md): Deprecated. Sent when the user selects one of a person’s properties.
- [peoplePickerNavigationControllerDidCancel(\_:)](peoplepickernavigationcontrollerdidcancel%28__%29.md): Sent when the user taps Cancel.
- [peoplePickerNavigationController(\_:didSelectPerson:property:identifier:)](peoplepickernavigationcontroller%28__didselectperson_property_identifier_%29.md): Called after a property has been selected by the user.

# peoplePickerNavigationController:didSelectPerson: (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

Called after a person has been selected by the user.

## Declaration

```objectivec
- (void) peoplePickerNavigationController:(ABPeoplePickerNavigationController *) peoplePicker didSelectPerson:(ABRecordRef) person;
```

## Parameters

- `peoplePicker`: The people picker where the selection was made.
- `person`: The selected person record.

## See Also

### Responding to User Events

- [peoplePickerNavigationController:shouldContinueAfterSelectingPerson:](peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_%29.md): Deprecated. Sent when the user selects a contact.
- [peoplePickerNavigationController:shouldContinueAfterSelectingPerson:property:identifier:](peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_property_identifier_%29.md): Deprecated. Sent when the user selects one of a person’s properties.
- [peoplePickerNavigationControllerDidCancel:](peoplepickernavigationcontrollerdidcancel%28__%29.md): Sent when the user taps Cancel.
- [peoplePickerNavigationController:didSelectPerson:property:identifier:](peoplepickernavigationcontroller%28__didselectperson_property_identifier_%29.md): Called after a property has been selected by the user.
