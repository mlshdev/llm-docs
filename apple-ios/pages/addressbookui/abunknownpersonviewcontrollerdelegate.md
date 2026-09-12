> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abunknownpersonviewcontrollerdelegate](https://developer.apple.com/documentation/addressbookui/abunknownpersonviewcontrollerdelegate)

# ABUnknownPersonViewControllerDelegate (Swift)

**Framework:** Address Book UI  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 14.0+

The methods you use to respond to events in an unknown person view controller.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```swift
protocol ABUnknownPersonViewControllerDelegate : NSObjectProtocol
```

## Topics

### Responding to User Events

- [unknownPersonViewController(\_:didResolveToPerson:)](abunknownpersonviewcontrollerdelegate/unknownpersonviewcontroller%28__didresolvetoperson_%29.md): Sent when the user finishes creating a contact or adding the displayed person properties to an existing contact.
- [unknownPersonViewController(\_:shouldPerformDefaultActionForPerson:property:identifier:)](abunknownpersonviewcontrollerdelegate/unknownpersonviewcontroller%28__shouldperformdefaultactionforperson_property_identifier_%29.md): Sent when the user selects a property value of the person displayed in a person view controller.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to View Controller Interactions

- [unknownPersonViewDelegate](abunknownpersonviewcontroller/unknownpersonviewdelegate.md): Deprecated. The unknown-person view controller delegate.

# ABUnknownPersonViewControllerDelegate (Objective-C)

**Framework:** Address Book UI  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 14.0+

The methods you use to respond to events in an unknown person view controller.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```objectivec
@protocol ABUnknownPersonViewControllerDelegate <NSObject>
```

## Topics

### Responding to User Events

- [unknownPersonViewController:didResolveToPerson:](abunknownpersonviewcontrollerdelegate/unknownpersonviewcontroller%28__didresolvetoperson_%29.md): Sent when the user finishes creating a contact or adding the displayed person properties to an existing contact.
- [unknownPersonViewController:shouldPerformDefaultActionForPerson:property:identifier:](abunknownpersonviewcontrollerdelegate/unknownpersonviewcontroller%28__shouldperformdefaultactionforperson_property_identifier_%29.md): Sent when the user selects a property value of the person displayed in a person view controller.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to View Controller Interactions

- [unknownPersonViewDelegate](abunknownpersonviewcontroller/unknownpersonviewdelegate.md): Deprecated. The unknown-person view controller delegate.
