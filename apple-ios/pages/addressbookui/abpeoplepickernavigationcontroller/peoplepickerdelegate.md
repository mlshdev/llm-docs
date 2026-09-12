> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpeoplepickernavigationcontroller/peoplepickerdelegate](https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontroller/peoplepickerdelegate)

# peoplePickerDelegate (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The people-picker navigation controller delegate.

> Use [delegate](https://developer.apple.com/documentation/contactsui/cncontactpickerviewcontroller/delegate) instead.

## Declaration

```swift
unowned(unsafe) var peoplePickerDelegate: (any ABPeoplePickerNavigationControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Optional to get the selected contact, selected property or cancellation of the people picker.

## See Also

### Responding to View Controller Interactions

- [ABPeoplePickerNavigationControllerDelegate](../abpeoplepickernavigationcontrollerdelegate.md): Deprecated. The `ABPeoplePickerNavigationControllerDelegate` protocol describes the interface [ABPeoplePickerNavigationController](../abpeoplepickernavigationcontroller.md) delegates must adopt to respond to people-picker user events.

# peoplePickerDelegate (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The people-picker navigation controller delegate.

> Use [delegate](https://developer.apple.com/documentation/contactsui/cncontactpickerviewcontroller/delegate) instead.

## Declaration

```objectivec
@property (nonatomic, assign, nullable) id<ABPeoplePickerNavigationControllerDelegate> peoplePickerDelegate;
```

<a id="Discussion"></a>

## Discussion

Optional to get the selected contact, selected property or cancellation of the people picker.

## See Also

### Responding to View Controller Interactions

- [ABPeoplePickerNavigationControllerDelegate](../abpeoplepickernavigationcontrollerdelegate.md): Deprecated. The `ABPeoplePickerNavigationControllerDelegate` protocol describes the interface [ABPeoplePickerNavigationController](../abpeoplepickernavigationcontroller.md) delegates must adopt to respond to people-picker user events.
