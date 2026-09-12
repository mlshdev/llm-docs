> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abnewpersonviewcontrollerdelegate](https://developer.apple.com/documentation/addressbookui/abnewpersonviewcontrollerdelegate)

# ABNewPersonViewControllerDelegate (Swift)

**Framework:** Address Book UI  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 14.0+

The `ABNewPersonViewControllerDelegate` protocol declares the interface that [ABNewPersonViewController](abnewpersonviewcontroller.md) delegates must implement.

> Use [CNContactViewControllerDelegate](https://developer.apple.com/documentation/contactsui/cncontactviewcontrollerdelegate) instead.

## Declaration

```swift
protocol ABNewPersonViewControllerDelegate : NSObjectProtocol
```

## Topics

### Responding to User Events

- [newPersonViewController(\_:didCompleteWithNewPerson:)](abnewpersonviewcontrollerdelegate/newpersonviewcontroller%28__didcompletewithnewperson_%29.md): Sent when the user taps Save or Cancel. If the user tapped Save, the current address book has been saved to the Address Book database.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to View Controller Interactions

- [newPersonViewDelegate](abnewpersonviewcontroller/newpersonviewdelegate.md): Deprecated. The delegate of a new-person view controller.

# ABNewPersonViewControllerDelegate (Objective-C)

**Framework:** Address Book UI  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 14.0+

The `ABNewPersonViewControllerDelegate` protocol declares the interface that [ABNewPersonViewController](abnewpersonviewcontroller.md) delegates must implement.

> Use [CNContactViewControllerDelegate](https://developer.apple.com/documentation/contactsui/cncontactviewcontrollerdelegate) instead.

## Declaration

```objectivec
@protocol ABNewPersonViewControllerDelegate <NSObject>
```

## Topics

### Responding to User Events

- [newPersonViewController:didCompleteWithNewPerson:](abnewpersonviewcontrollerdelegate/newpersonviewcontroller%28__didcompletewithnewperson_%29.md): Sent when the user taps Save or Cancel. If the user tapped Save, the current address book has been saved to the Address Book database.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to View Controller Interactions

- [newPersonViewDelegate](abnewpersonviewcontroller/newpersonviewdelegate.md): Deprecated. The delegate of a new-person view controller.
