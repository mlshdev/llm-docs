> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpeoplepickernavigationcontrollerdelegate](https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontrollerdelegate)

# ABPeoplePickerNavigationControllerDelegate (Swift)

**Framework:** Address Book UI  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 14.0+

The `ABPeoplePickerNavigationControllerDelegate` protocol describes the interface [ABPeoplePickerNavigationController](abpeoplepickernavigationcontroller.md) delegates must adopt to respond to people-picker user events.

> Use [CNContactPickerDelegate](https://developer.apple.com/documentation/contactsui/cncontactpickerdelegate) instead.

## Declaration

```swift
protocol ABPeoplePickerNavigationControllerDelegate : NSObjectProtocol
```

## Topics

### Responding to User Events

- [peoplePickerNavigationController(\_:shouldContinueAfterSelectingPerson:)](abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_%29.md): Deprecated. Sent when the user selects a contact.
- [peoplePickerNavigationController(\_:shouldContinueAfterSelectingPerson:property:identifier:)](abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_property_identifier_%29.md): Deprecated. Sent when the user selects one of a person’s properties.
- [peoplePickerNavigationControllerDidCancel(\_:)](abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontrollerdidcancel%28__%29.md): Sent when the user taps Cancel.
- [peoplePickerNavigationController(\_:didSelectPerson:)](abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller%28__didselectperson_%29.md): Called after a person has been selected by the user.
- [peoplePickerNavigationController(\_:didSelectPerson:property:identifier:)](abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller%28__didselectperson_property_identifier_%29.md): Called after a property has been selected by the user.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to View Controller Interactions

- [peoplePickerDelegate](abpeoplepickernavigationcontroller/peoplepickerdelegate.md): Deprecated. The people-picker navigation controller delegate.

# ABPeoplePickerNavigationControllerDelegate (Objective-C)

**Framework:** Address Book UI  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 14.0+

The `ABPeoplePickerNavigationControllerDelegate` protocol describes the interface [ABPeoplePickerNavigationController](abpeoplepickernavigationcontroller.md) delegates must adopt to respond to people-picker user events.

> Use [CNContactPickerDelegate](https://developer.apple.com/documentation/contactsui/cncontactpickerdelegate) instead.

## Declaration

```objectivec
@protocol ABPeoplePickerNavigationControllerDelegate <NSObject>
```

## Topics

### Responding to User Events

- [peoplePickerNavigationController:shouldContinueAfterSelectingPerson:](abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_%29.md): Deprecated. Sent when the user selects a contact.
- [peoplePickerNavigationController:shouldContinueAfterSelectingPerson:property:identifier:](abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller%28__shouldcontinueafterselectingperson_property_identifier_%29.md): Deprecated. Sent when the user selects one of a person’s properties.
- [peoplePickerNavigationControllerDidCancel:](abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontrollerdidcancel%28__%29.md): Sent when the user taps Cancel.
- [peoplePickerNavigationController:didSelectPerson:](abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller%28__didselectperson_%29.md): Called after a person has been selected by the user.
- [peoplePickerNavigationController:didSelectPerson:property:identifier:](abpeoplepickernavigationcontrollerdelegate/peoplepickernavigationcontroller%28__didselectperson_property_identifier_%29.md): Called after a property has been selected by the user.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to View Controller Interactions

- [peoplePickerDelegate](abpeoplepickernavigationcontroller/peoplepickerdelegate.md): Deprecated. The people-picker navigation controller delegate.
