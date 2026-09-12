> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller(_:didselectperson:property:identifier:)](https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller(_:didselectperson:property:identifier:))

# peoplePickerNavigationController(\_:didSelectPerson:property:identifier:) (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

Called after a property has been selected by the user.

## Declaration

```swift
optional func peoplePickerNavigationController(_ peoplePicker: ABPeoplePickerNavigationController, didSelectPerson person: ABRecord, property: ABPropertyID, identifier: ABMultiValueIdentifier)
```

## Parameters

- `peoplePicker`: The people picker where the selection was made.
- `person`: The selected person record.
- `property`: The selected property.
- `identifier`: The selected property identifier.

<a id="Discussion"></a>

## Discussion

This method is called with an identifier. If you need an index, use the [ABMultiValueGetIndexForIdentifier(\_:\_:)](https://developer.apple.com/documentation/addressbook/abmultivaluegetindexforidentifier%28_:_:%29) function to get the corresponding index.

## See Also

### Responding to User Events

- [peoplePickerNavigationController(\_:shouldContinueAfterSelectingPerson:)](peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_%29.md): Deprecated. Sent when the user selects a contact.
- [peoplePickerNavigationController(\_:shouldContinueAfterSelectingPerson:property:identifier:)](peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_property_identifier_%29.md): Deprecated. Sent when the user selects one of a person’s properties.
- [peoplePickerNavigationControllerDidCancel(\_:)](peoplepickernavigationcontrollerdidcancel%28__%29.md): Sent when the user taps Cancel.
- [peoplePickerNavigationController(\_:didSelectPerson:)](peoplepickernavigationcontroller%28__didselectperson_%29.md): Called after a person has been selected by the user.

# peoplePickerNavigationController:didSelectPerson:property:identifier: (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

Called after a property has been selected by the user.

## Declaration

```objectivec
- (void) peoplePickerNavigationController:(ABPeoplePickerNavigationController *) peoplePicker didSelectPerson:(ABRecordRef) person property:(ABPropertyID) property identifier:(ABMultiValueIdentifier) identifier;
```

## Parameters

- `peoplePicker`: The people picker where the selection was made.
- `person`: The selected person record.
- `property`: The selected property.
- `identifier`: The selected property identifier.

<a id="Discussion"></a>

## Discussion

This method is called with an identifier. If you need an index, use the [ABMultiValueGetIndexForIdentifier](https://developer.apple.com/documentation/addressbook/abmultivaluegetindexforidentifier%28_:_:%29) function to get the corresponding index.

## See Also

### Responding to User Events

- [peoplePickerNavigationController:shouldContinueAfterSelectingPerson:](peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_%29.md): Deprecated. Sent when the user selects a contact.
- [peoplePickerNavigationController:shouldContinueAfterSelectingPerson:property:identifier:](peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_property_identifier_%29.md): Deprecated. Sent when the user selects one of a person’s properties.
- [peoplePickerNavigationControllerDidCancel:](peoplepickernavigationcontrollerdidcancel%28__%29.md): Sent when the user taps Cancel.
- [peoplePickerNavigationController:didSelectPerson:](peoplepickernavigationcontroller%28__didselectperson_%29.md): Called after a person has been selected by the user.
