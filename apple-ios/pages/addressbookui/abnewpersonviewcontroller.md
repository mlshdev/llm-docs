> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abnewpersonviewcontroller](https://developer.apple.com/documentation/addressbookui/abnewpersonviewcontroller)

# ABNewPersonViewController (Swift)

**Framework:** Address Book UI  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A view controller presenting an interface to create a contact.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```swift
class ABNewPersonViewController
```

<a id="overview"></a>

## Overview

New-person view controllers are modal view controllers that manage a set of view controllers used to create a contact (`ABPersonRef`) and edit its properties.

> **Important**

>  New-person view controllers must be used with a navigation controller in order to function properly.  It is recommended that you present a new-person view controller modally.

<a id="Subclassing"></a>

### Subclassing

The `ABNewPersonViewController` class does not support subclassing.

## Topics

### Responding to View Controller Interactions

- [newPersonViewDelegate](abnewpersonviewcontroller/newpersonviewdelegate.md): Deprecated. The delegate of a new-person view controller.
- [ABNewPersonViewControllerDelegate](abnewpersonviewcontrollerdelegate.md): Deprecated. The `ABNewPersonViewControllerDelegate` protocol declares the interface that [ABNewPersonViewController](abnewpersonviewcontroller.md) delegates must implement.

### Displaying Person Properties

- [displayedPerson](abnewpersonviewcontroller/displayedperson.md): Deprecated. Optional. Specifies the person properties that the new-person view controller pre-fills in its views.

### Configuring New Person Views

- [addressBook](abnewpersonviewcontroller/addressbook.md): Deprecated. Optional. The address book to which the new contact is added.
- [parentGroup](abnewpersonviewcontroller/parentgroup.md): Deprecated. Optional. Specifies the group to which to add the new contact on save.

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

- [ABPersonViewController](abpersonviewcontroller.md): Deprecated. The `ABPersonViewController` class (whose instances are known as **person view controllers**) implements the view used to display a person record (`ABPersonRef`).
- [ABUnknownPersonViewController](abunknownpersonviewcontroller.md): Deprecated. The `ABUnknownPersonViewController` class (whose instances are known as **unknown-person view controllers**) implements a view controller used to create a person record from a set of person properties.
- [ABCreateStringWithAddressDictionary(\_:\_:)](abcreatestringwithaddressdictionary%28____%29.md): Deprecated. Returns a formatted address from an address property.

# ABNewPersonViewController (Objective-C)

**Framework:** Address Book UI  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A view controller presenting an interface to create a contact.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```objectivec
@interface ABNewPersonViewController : UIViewController
```

<a id="overview"></a>

## Overview

New-person view controllers are modal view controllers that manage a set of view controllers used to create a contact (`ABPersonRef`) and edit its properties.

> **Important**

>  New-person view controllers must be used with a navigation controller in order to function properly.  It is recommended that you present a new-person view controller modally.

<a id="Subclassing"></a>

### Subclassing

The `ABNewPersonViewController` class does not support subclassing.

## Topics

### Responding to View Controller Interactions

- [newPersonViewDelegate](abnewpersonviewcontroller/newpersonviewdelegate.md): Deprecated. The delegate of a new-person view controller.
- [ABNewPersonViewControllerDelegate](abnewpersonviewcontrollerdelegate.md): Deprecated. The `ABNewPersonViewControllerDelegate` protocol declares the interface that [ABNewPersonViewController](abnewpersonviewcontroller.md) delegates must implement.

### Displaying Person Properties

- [displayedPerson](abnewpersonviewcontroller/displayedperson.md): Deprecated. Optional. Specifies the person properties that the new-person view controller pre-fills in its views.

### Configuring New Person Views

- [addressBook](abnewpersonviewcontroller/addressbook.md): Deprecated. Optional. The address book to which the new contact is added.
- [parentGroup](abnewpersonviewcontroller/parentgroup.md): Deprecated. Optional. Specifies the group to which to add the new contact on save.

## Relationships

### Inherits From

- [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller)

## See Also

### Detail Display

- [ABPersonViewController](abpersonviewcontroller.md): Deprecated. The `ABPersonViewController` class (whose instances are known as **person view controllers**) implements the view used to display a person record (`ABPersonRef`).
- [ABUnknownPersonViewController](abunknownpersonviewcontroller.md): Deprecated. The `ABUnknownPersonViewController` class (whose instances are known as **unknown-person view controllers**) implements a view controller used to create a person record from a set of person properties.
- [ABCreateStringWithAddressDictionary](abcreatestringwithaddressdictionary%28____%29.md): Deprecated. Returns a formatted address from an address property.
