> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abunknownpersonviewcontroller](https://developer.apple.com/documentation/addressbookui/abunknownpersonviewcontroller)

# ABUnknownPersonViewController (Swift)

**Framework:** Address Book UI  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The `ABUnknownPersonViewController` class (whose instances are known as **unknown-person view controllers**) implements a view controller used to create a person record from a set of person properties.

> Use [init(forUnknownContact:)](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/init%28forunknowncontact:%29) instead.

## Declaration

```swift
class ABUnknownPersonViewController
```

<a id="overview"></a>

## Overview

Unknown-person view controllers display contact information that can be saved to the Address Book database. From instances of this class, users may also initiate standard actions, such as:

- Phone call
- Text message
- Create contact
- Add to contact

Performing any of the standard actions may result in your application being moved to the background.

> **Important**

>  Unknown-person view controllers must be used with a navigation controller in order to function properly.

<a id="Subclassing"></a>

### Subclassing

The `ABUnknownPersonViewController` class does not support subclassing.

## Topics

### Responding to View Controller Interactions

- [unknownPersonViewDelegate](abunknownpersonviewcontroller/unknownpersonviewdelegate.md): Deprecated. The unknown-person view controller delegate.
- [ABUnknownPersonViewControllerDelegate](abunknownpersonviewcontrollerdelegate.md): Deprecated. The methods you use to respond to events in an unknown person view controller.

### Displaying Person Properties

- [alternateName](abunknownpersonviewcontroller/alternatename.md): Deprecated. Provides a value that is displayed instead of the first and last name.
- [message](abunknownpersonviewcontroller/message.md): Deprecated. Text displayed below [alternateName](abunknownpersonviewcontroller/alternatename.md).
- [displayedPerson](abunknownpersonviewcontroller/displayedperson.md): Deprecated. Specifies a person record whose properties are displayed by the view controller.

### Configuring the Interface Details

- [addressBook](abunknownpersonviewcontroller/addressbook.md): Deprecated. Optional. The address book database that the person record is added to.
- [allowsActions](abunknownpersonviewcontroller/allowsactions.md): Deprecated. Specifies whether buttons appear to let the user perform actions such as sharing the contact, initiating a FaceTime call, or sending a text message.
- [allowsAddingToAddressBook](abunknownpersonviewcontroller/allowsaddingtoaddressbook.md): Deprecated. Specifies whether the user can add the properties displayed by the unknown-person view controller to the address book database, either as a new contact or by adding them to an existing contact.

## Relationships

### Inherits From

- [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSExtensionRequestHandling](https://developer.apple.com/documentation/foundation/nsextensionrequesthandling)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationproviding)
- [UIAppearanceContainer](https://developer.apple.com/documentation/uikit/uiappearancecontainer)
- [UIContentContainer](https://developer.apple.com/documentation/uikit/uicontentcontainer)
- [UIFocusEnvironment](https://developer.apple.com/documentation/uikit/uifocusenvironment)
- [UIPasteConfigurationSupporting](https://developer.apple.com/documentation/uikit/uipasteconfigurationsupporting)
- [UIResponderStandardEditActions](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions)
- [UIStateRestoring](https://developer.apple.com/documentation/uikit/uistaterestoring)
- [UITraitChangeObservable](https://developer.apple.com/documentation/uikit/uitraitchangeobservable-67e94)
- [UITraitEnvironment](https://developer.apple.com/documentation/uikit/uitraitenvironment)
- [UIUserActivityRestoring](https://developer.apple.com/documentation/uikit/uiuseractivityrestoring)

## See Also

### Detail Display

- [ABNewPersonViewController](abnewpersonviewcontroller.md): Deprecated. A view controller presenting an interface to create a contact.
- [ABPersonViewController](abpersonviewcontroller.md): Deprecated. The `ABPersonViewController` class (whose instances are known as **person view controllers**) implements the view used to display a person record (`ABPersonRef`).
- [ABCreateStringWithAddressDictionary(\_:\_:)](abcreatestringwithaddressdictionary%28____%29.md): Deprecated. Returns a formatted address from an address property.

# ABUnknownPersonViewController (Objective-C)

**Framework:** Address Book UI  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The `ABUnknownPersonViewController` class (whose instances are known as **unknown-person view controllers**) implements a view controller used to create a person record from a set of person properties.

> Use [viewControllerForUnknownContact:](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/init%28forunknowncontact:%29) instead.

## Declaration

```objectivec
@interface ABUnknownPersonViewController : UIViewController
```

<a id="overview"></a>

## Overview

Unknown-person view controllers display contact information that can be saved to the Address Book database. From instances of this class, users may also initiate standard actions, such as:

- Phone call
- Text message
- Create contact
- Add to contact

Performing any of the standard actions may result in your application being moved to the background.

> **Important**

>  Unknown-person view controllers must be used with a navigation controller in order to function properly.

<a id="Subclassing"></a>

### Subclassing

The `ABUnknownPersonViewController` class does not support subclassing.

## Topics

### Responding to View Controller Interactions

- [unknownPersonViewDelegate](abunknownpersonviewcontroller/unknownpersonviewdelegate.md): Deprecated. The unknown-person view controller delegate.
- [ABUnknownPersonViewControllerDelegate](abunknownpersonviewcontrollerdelegate.md): Deprecated. The methods you use to respond to events in an unknown person view controller.

### Displaying Person Properties

- [alternateName](abunknownpersonviewcontroller/alternatename.md): Deprecated. Provides a value that is displayed instead of the first and last name.
- [message](abunknownpersonviewcontroller/message.md): Deprecated. Text displayed below [alternateName](abunknownpersonviewcontroller/alternatename.md).
- [displayedPerson](abunknownpersonviewcontroller/displayedperson.md): Deprecated. Specifies a person record whose properties are displayed by the view controller.

### Configuring the Interface Details

- [addressBook](abunknownpersonviewcontroller/addressbook.md): Deprecated. Optional. The address book database that the person record is added to.
- [allowsActions](abunknownpersonviewcontroller/allowsactions.md): Deprecated. Specifies whether buttons appear to let the user perform actions such as sharing the contact, initiating a FaceTime call, or sending a text message.
- [allowsAddingToAddressBook](abunknownpersonviewcontroller/allowsaddingtoaddressbook.md): Deprecated. Specifies whether the user can add the properties displayed by the unknown-person view controller to the address book database, either as a new contact or by adding them to an existing contact.

## Relationships

### Inherits From

- [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller)

## See Also

### Detail Display

- [ABNewPersonViewController](abnewpersonviewcontroller.md): Deprecated. A view controller presenting an interface to create a contact.
- [ABPersonViewController](abpersonviewcontroller.md): Deprecated. The `ABPersonViewController` class (whose instances are known as **person view controllers**) implements the view used to display a person record (`ABPersonRef`).
- [ABCreateStringWithAddressDictionary](abcreatestringwithaddressdictionary%28____%29.md): Deprecated. Returns a formatted address from an address property.
