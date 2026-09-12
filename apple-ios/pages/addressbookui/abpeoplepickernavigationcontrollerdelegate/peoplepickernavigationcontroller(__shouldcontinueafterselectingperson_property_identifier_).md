> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller(_:shouldcontinueafterselectingperson:property:identifier:)](https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller(_:shouldcontinueafterselectingperson:property:identifier:))

# peoplePickerNavigationController(\_:shouldContinueAfterSelectingPerson:property:identifier:) (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent when the user selects one of a person’s properties.

> Use [peoplePickerNavigationController(\_:didSelectPerson:)](peoplepickernavigationcontroller%28__didselectperson_%29.md) or [peoplePickerNavigationController(\_:didSelectPerson:property:identifier:)](peoplepickernavigationcontroller%28__didselectperson_property_identifier_%29.md) instead.

## Declaration

```swift
optional func peoplePickerNavigationController(_ peoplePicker: ABPeoplePickerNavigationController, shouldContinueAfterSelectingPerson person: ABRecord, property: ABPropertyID, identifier: ABMultiValueIdentifier) -> Bool
```

## Parameters

- `peoplePicker`: The people-picker navigation controller with which the user interacted.
- `person`: The person whose contact information item the user selected.
- `property`: The property the user selected.
- `identifier`: The identifier for the value the user selected if `property` is a multivalue property; otherwise, `kABMultiValueInvalidIdentifier`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to perform the action for the property selected and dismiss the picker. [false](https://developer.apple.com/documentation/swift/false) to show the person in the picker.

<a id="Discussion"></a>

## Discussion

This method is called with an identifier. If you need an index, use the [ABMultiValueGetIndexForIdentifier(\_:\_:)](https://developer.apple.com/documentation/addressbook/abmultivaluegetindexforidentifier%28_:_:%29) function to get the corresponding index.

## See Also

### Responding to User Events

- [peoplePickerNavigationController(\_:shouldContinueAfterSelectingPerson:)](peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_%29.md): Deprecated. Sent when the user selects a contact.
- [peoplePickerNavigationControllerDidCancel(\_:)](peoplepickernavigationcontrollerdidcancel%28__%29.md): Sent when the user taps Cancel.
- [peoplePickerNavigationController(\_:didSelectPerson:)](peoplepickernavigationcontroller%28__didselectperson_%29.md): Called after a person has been selected by the user.
- [peoplePickerNavigationController(\_:didSelectPerson:property:identifier:)](peoplepickernavigationcontroller%28__didselectperson_property_identifier_%29.md): Called after a property has been selected by the user.

# peoplePickerNavigationController:shouldContinueAfterSelectingPerson:property:identifier: (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Sent when the user selects one of a person’s properties.

> Use [peoplePickerNavigationController:didSelectPerson:](peoplepickernavigationcontroller%28__didselectperson_%29.md) or [peoplePickerNavigationController:didSelectPerson:property:identifier:](peoplepickernavigationcontroller%28__didselectperson_property_identifier_%29.md) instead.

## Declaration

```objectivec
- (BOOL) peoplePickerNavigationController:(ABPeoplePickerNavigationController *) peoplePicker shouldContinueAfterSelectingPerson:(ABRecordRef) person property:(ABPropertyID) property identifier:(ABMultiValueIdentifier) identifier;
```

## Parameters

- `peoplePicker`: The people-picker navigation controller with which the user interacted.
- `person`: The person whose contact information item the user selected.
- `property`: The property the user selected.
- `identifier`: The identifier for the value the user selected if `property` is a multivalue property; otherwise, `kABMultiValueInvalidIdentifier`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to perform the action for the property selected and dismiss the picker. [false](https://developer.apple.com/documentation/swift/false) to show the person in the picker.

<a id="Discussion"></a>

## Discussion

This method is called with an identifier. If you need an index, use the [ABMultiValueGetIndexForIdentifier](https://developer.apple.com/documentation/addressbook/abmultivaluegetindexforidentifier%28_:_:%29) function to get the corresponding index.

## See Also

### Responding to User Events

- [peoplePickerNavigationController:shouldContinueAfterSelectingPerson:](peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_%29.md): Deprecated. Sent when the user selects a contact.
- [peoplePickerNavigationControllerDidCancel:](peoplepickernavigationcontrollerdidcancel%28__%29.md): Sent when the user taps Cancel.
- [peoplePickerNavigationController:didSelectPerson:](peoplepickernavigationcontroller%28__didselectperson_%29.md): Called after a person has been selected by the user.
- [peoplePickerNavigationController:didSelectPerson:property:identifier:](peoplepickernavigationcontroller%28__didselectperson_property_identifier_%29.md): Called after a property has been selected by the user.
