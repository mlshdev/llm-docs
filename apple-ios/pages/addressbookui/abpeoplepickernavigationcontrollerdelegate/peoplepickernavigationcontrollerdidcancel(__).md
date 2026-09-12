> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontrollerdidcancel(_:)](https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontrollerdidcancel(_:))

# peoplePickerNavigationControllerDidCancel(\_:) (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+

Sent when the user taps Cancel.

## Declaration

```swift
optional func peoplePickerNavigationControllerDidCancel(_ peoplePicker: ABPeoplePickerNavigationController)
```

## Parameters

- `peoplePicker`: The people-picker navigation controller with which the user interacted.

<a id="Discussion"></a>

## Discussion

If the delegate does not implement this method, the people picker will dismiss itself when the user taps cancel.

<a id="Special-Considerations"></a>

### Special Considerations

Prior to iOS 8, the delegate was responsible for dismissing the people picker and this method was required.

## See Also

### Responding to User Events

- [peoplePickerNavigationController(\_:shouldContinueAfterSelectingPerson:)](peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_%29.md): Deprecated. Sent when the user selects a contact.
- [peoplePickerNavigationController(\_:shouldContinueAfterSelectingPerson:property:identifier:)](peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_property_identifier_%29.md): Deprecated. Sent when the user selects one of a person’s properties.
- [peoplePickerNavigationController(\_:didSelectPerson:)](peoplepickernavigationcontroller%28__didselectperson_%29.md): Called after a person has been selected by the user.
- [peoplePickerNavigationController(\_:didSelectPerson:property:identifier:)](peoplepickernavigationcontroller%28__didselectperson_property_identifier_%29.md): Called after a property has been selected by the user.

# peoplePickerNavigationControllerDidCancel: (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 14.0+

Sent when the user taps Cancel.

## Declaration

```objectivec
- (void) peoplePickerNavigationControllerDidCancel:(ABPeoplePickerNavigationController *) peoplePicker;
```

## Parameters

- `peoplePicker`: The people-picker navigation controller with which the user interacted.

<a id="Discussion"></a>

## Discussion

If the delegate does not implement this method, the people picker will dismiss itself when the user taps cancel.

<a id="Special-Considerations"></a>

### Special Considerations

Prior to iOS 8, the delegate was responsible for dismissing the people picker and this method was required.

## See Also

### Responding to User Events

- [peoplePickerNavigationController:shouldContinueAfterSelectingPerson:](peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_%29.md): Deprecated. Sent when the user selects a contact.
- [peoplePickerNavigationController:shouldContinueAfterSelectingPerson:property:identifier:](peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_property_identifier_%29.md): Deprecated. Sent when the user selects one of a person’s properties.
- [peoplePickerNavigationController:didSelectPerson:](peoplepickernavigationcontroller%28__didselectperson_%29.md): Called after a person has been selected by the user.
- [peoplePickerNavigationController:didSelectPerson:property:identifier:](peoplepickernavigationcontroller%28__didselectperson_property_identifier_%29.md): Called after a property has been selected by the user.
