> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpersonviewcontrollerdelegate](https://developer.apple.com/documentation/addressbookui/abpersonviewcontrollerdelegate)

# ABPersonViewControllerDelegate (Swift)

**Framework:** Address Book UI  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 14.0+

The `ABPersonViewControllerDelegate` protocol declares the interface that must be implemented by [ABPersonViewController](abpersonviewcontroller.md) delegates.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```swift
protocol ABPersonViewControllerDelegate : NSObjectProtocol
```

## Topics

### Responding to User Events

- [personViewController(\_:shouldPerformDefaultActionForPerson:property:identifier:)](abpersonviewcontrollerdelegate/personviewcontroller%28__shouldperformdefaultactionforperson_property_identifier_%29.md): Sent when the user selects a property value of the person displayed in a person view controller.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to View Controller Interactions

- [personViewDelegate](abpersonviewcontroller/personviewdelegate.md): Deprecated. The person-view controller delegate.

# ABPersonViewControllerDelegate (Objective-C)

**Framework:** Address Book UI  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 14.0+

The `ABPersonViewControllerDelegate` protocol declares the interface that must be implemented by [ABPersonViewController](abpersonviewcontroller.md) delegates.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```objectivec
@protocol ABPersonViewControllerDelegate <NSObject>
```

## Topics

### Responding to User Events

- [personViewController:shouldPerformDefaultActionForPerson:property:identifier:](abpersonviewcontrollerdelegate/personviewcontroller%28__shouldperformdefaultactionforperson_property_identifier_%29.md): Sent when the user selects a property value of the person displayed in a person view controller.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to View Controller Interactions

- [personViewDelegate](abpersonviewcontroller/personviewdelegate.md): Deprecated. The person-view controller delegate.
