> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller(_:shouldcontinueafterselectingperson:)](https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller(_:shouldcontinueafterselectingperson:))

# peoplePickerNavigationController(\_:shouldContinueAfterSelectingPerson:) (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent when the user selects a contact.

> Use [peoplePickerNavigationController(\_:didSelectPerson:)](peoplepickernavigationcontroller%28__didselectperson_%29.md) or [peoplePickerNavigationController(\_:didSelectPerson:property:identifier:)](peoplepickernavigationcontroller%28__didselectperson_property_identifier_%29.md) instead.

## Declaration

```swift
optional func peoplePickerNavigationController(_ peoplePicker: ABPeoplePickerNavigationController, shouldContinueAfterSelectingPerson person: ABRecord) -> Bool
```

## Parameters

- `peoplePicker`: The people-picker navigation controller with which the user interacted.
- `person`: The person the user selected.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to display the contact and dismiss the picker. [false](https://developer.apple.com/documentation/swift/false) to do nothing.

## See Also

### Responding to User Events

- [peoplePickerNavigationController(\_:shouldContinueAfterSelectingPerson:property:identifier:)](peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_property_identifier_%29.md): Deprecated. Sent when the user selects one of a person’s properties.
- [peoplePickerNavigationControllerDidCancel(\_:)](peoplepickernavigationcontrollerdidcancel%28__%29.md): Sent when the user taps Cancel.
- [peoplePickerNavigationController(\_:didSelectPerson:)](peoplepickernavigationcontroller%28__didselectperson_%29.md): Called after a person has been selected by the user.
- [peoplePickerNavigationController(\_:didSelectPerson:property:identifier:)](peoplepickernavigationcontroller%28__didselectperson_property_identifier_%29.md): Called after a property has been selected by the user.

# peoplePickerNavigationController:shouldContinueAfterSelectingPerson: (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent when the user selects a contact.

> Use [peoplePickerNavigationController:didSelectPerson:](peoplepickernavigationcontroller%28__didselectperson_%29.md) or [peoplePickerNavigationController:didSelectPerson:property:identifier:](peoplepickernavigationcontroller%28__didselectperson_property_identifier_%29.md) instead.

## Declaration

```objectivec
- (BOOL) peoplePickerNavigationController:(ABPeoplePickerNavigationController *) peoplePicker shouldContinueAfterSelectingPerson:(ABRecordRef) person;
```

## Parameters

- `peoplePicker`: The people-picker navigation controller with which the user interacted.
- `person`: The person the user selected.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to display the contact and dismiss the picker. [false](https://developer.apple.com/documentation/swift/false) to do nothing.

## See Also

### Responding to User Events

- [peoplePickerNavigationController:shouldContinueAfterSelectingPerson:property:identifier:](peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_property_identifier_%29.md): Deprecated. Sent when the user selects one of a person’s properties.
- [peoplePickerNavigationControllerDidCancel:](peoplepickernavigationcontrollerdidcancel%28__%29.md): Sent when the user taps Cancel.
- [peoplePickerNavigationController:didSelectPerson:](peoplepickernavigationcontroller%28__didselectperson_%29.md): Called after a person has been selected by the user.
- [peoplePickerNavigationController:didSelectPerson:property:identifier:](peoplepickernavigationcontroller%28__didselectperson_property_identifier_%29.md): Called after a property has been selected by the user.
