> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactviewcontrollerdelegate](https://developer.apple.com/documentation/contactsui/cncontactviewcontrollerdelegate)

# CNContactViewControllerDelegate (Swift)

**Framework:** Contacts UI  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Methods you use to respond to user interactions with a contact view controller.

## Declaration

```swift
protocol CNContactViewControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Implement the methods of this protocol and assign the resulting object to the [delegate](cncontactviewcontroller/delegate.md) property of a `CNContactViewController` object.

## Topics

### Responding to User Events

- [contactViewController(\_:shouldPerformDefaultActionFor:)](cncontactviewcontrollerdelegate/contactviewcontroller%28__shouldperformdefaultactionfor_%29.md): Called when the user selects a property.
- [contactViewController(\_:didCompleteWith:)](cncontactviewcontrollerdelegate/contactviewcontroller%28__didcompletewith_%29.md): Called when the view has been presented.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Handling Interactions with the Interface

- [delegate](cncontactviewcontroller/delegate.md): The delegate to be notified.

# CNContactViewControllerDelegate (Objective-C)

**Framework:** Contacts UI  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Methods you use to respond to user interactions with a contact view controller.

## Declaration

```objectivec
@protocol CNContactViewControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Implement the methods of this protocol and assign the resulting object to the [delegate](cncontactviewcontroller/delegate.md) property of a `CNContactViewController` object.

## Topics

### Responding to User Events

- [contactViewController:shouldPerformDefaultActionForContactProperty:](cncontactviewcontrollerdelegate/contactviewcontroller%28__shouldperformdefaultactionfor_%29.md): Called when the user selects a property.
- [contactViewController:didCompleteWithContact:](cncontactviewcontrollerdelegate/contactviewcontroller%28__didcompletewith_%29.md): Called when the view has been presented.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Handling Interactions with the Interface

- [delegate](cncontactviewcontroller/delegate.md): The delegate to be notified.
