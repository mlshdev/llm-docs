> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpersonviewcontroller](https://developer.apple.com/documentation/addressbookui/abpersonviewcontroller)

# ABPersonViewController (Swift)

**Framework:** Address Book UI  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The `ABPersonViewController` class (whose instances are known as **person view controllers**) implements the view used to display a person record (`ABPersonRef`).

> Use [init(for:)](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/init%28for:%29) instead.

## Declaration

```swift
class ABPersonViewController
```

<a id="overview"></a>

## Overview

> **Important**

>  Person view controllers must be used with a navigation controller in order to function properly.

<a id="Subclassing"></a>

### Subclassing

The `ABPersonViewController` class does not support subclassing.

## Topics

### Responding to View Controller Interactions

- [personViewDelegate](abpersonviewcontroller/personviewdelegate.md): Deprecated. The person-view controller delegate.
- [ABPersonViewControllerDelegate](abpersonviewcontrollerdelegate.md): Deprecated. The `ABPersonViewControllerDelegate` protocol declares the interface that must be implemented by [ABPersonViewController](abpersonviewcontroller.md) delegates.

### Displaying Person Properties

- [displayedPerson](abpersonviewcontroller/displayedperson.md): Deprecated. The person displayed by the person view.
- [displayedProperties](abpersonviewcontroller/displayedproperties.md): Deprecated. Identifies the set of properties (such as name or telephone number) of [displayedPerson](abpersonviewcontroller/displayedperson.md) the receiver displays.
- [shouldShowLinkedPeople](abpersonviewcontroller/shouldshowlinkedpeople.md): Deprecated. Indicates whether the person view should display data from person records that are linked with the person record being displayed.

### Configuring Person Views

- [addressBook](abpersonviewcontroller/addressbook.md): Deprecated. Optional. The address book from which to obtain the contact to display.
- [allowsActions](abpersonviewcontroller/allowsactions.md): Deprecated. Specifies whether the to display buttons for actions such as sending a text message or initiating a FaceTime call.
- [allowsEditing](abpersonviewcontroller/allowsediting.md): Deprecated. Specifies whether the user can edit the person’s information.
- [setHighlightedItemForProperty(\_:withIdentifier:)](abpersonviewcontroller/sethighlighteditemforproperty%28__withidentifier_%29.md): Deprecated. Specifies whether to highlight a particular property of the displayed person.

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
- [UIViewControllerRestoration](https://developer.apple.com/documentation/uikit/uiviewcontrollerrestoration)

## See Also

### Detail Display

- [ABNewPersonViewController](abnewpersonviewcontroller.md): Deprecated. A view controller presenting an interface to create a contact.
- [ABUnknownPersonViewController](abunknownpersonviewcontroller.md): Deprecated. The `ABUnknownPersonViewController` class (whose instances are known as **unknown-person view controllers**) implements a view controller used to create a person record from a set of person properties.
- [ABCreateStringWithAddressDictionary(\_:\_:)](abcreatestringwithaddressdictionary%28____%29.md): Deprecated. Returns a formatted address from an address property.

# ABPersonViewController (Objective-C)

**Framework:** Address Book UI  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The `ABPersonViewController` class (whose instances are known as **person view controllers**) implements the view used to display a person record (`ABPersonRef`).

> Use [viewControllerForContact:](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/init%28for:%29) instead.

## Declaration

```objectivec
@interface ABPersonViewController : UIViewController
```

<a id="overview"></a>

## Overview

> **Important**

>  Person view controllers must be used with a navigation controller in order to function properly.

<a id="Subclassing"></a>

### Subclassing

The `ABPersonViewController` class does not support subclassing.

## Topics

### Responding to View Controller Interactions

- [personViewDelegate](abpersonviewcontroller/personviewdelegate.md): Deprecated. The person-view controller delegate.
- [ABPersonViewControllerDelegate](abpersonviewcontrollerdelegate.md): Deprecated. The `ABPersonViewControllerDelegate` protocol declares the interface that must be implemented by [ABPersonViewController](abpersonviewcontroller.md) delegates.

### Displaying Person Properties

- [displayedPerson](abpersonviewcontroller/displayedperson.md): Deprecated. The person displayed by the person view.
- [displayedProperties](abpersonviewcontroller/displayedproperties.md): Deprecated. Identifies the set of properties (such as name or telephone number) of [displayedPerson](abpersonviewcontroller/displayedperson.md) the receiver displays.
- [shouldShowLinkedPeople](abpersonviewcontroller/shouldshowlinkedpeople.md): Deprecated. Indicates whether the person view should display data from person records that are linked with the person record being displayed.

### Configuring Person Views

- [addressBook](abpersonviewcontroller/addressbook.md): Deprecated. Optional. The address book from which to obtain the contact to display.
- [allowsActions](abpersonviewcontroller/allowsactions.md): Deprecated. Specifies whether the to display buttons for actions such as sending a text message or initiating a FaceTime call.
- [allowsEditing](abpersonviewcontroller/allowsediting.md): Deprecated. Specifies whether the user can edit the person’s information.
- [setHighlightedItemForProperty:withIdentifier:](abpersonviewcontroller/sethighlighteditemforproperty%28__withidentifier_%29.md): Deprecated. Specifies whether to highlight a particular property of the displayed person.

## Relationships

### Inherits From

- [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller)

### Conforms To

- [UIViewControllerRestoration](https://developer.apple.com/documentation/uikit/uiviewcontrollerrestoration)

## See Also

### Detail Display

- [ABNewPersonViewController](abnewpersonviewcontroller.md): Deprecated. A view controller presenting an interface to create a contact.
- [ABUnknownPersonViewController](abunknownpersonviewcontroller.md): Deprecated. The `ABUnknownPersonViewController` class (whose instances are known as **unknown-person view controllers**) implements a view controller used to create a person record from a set of person properties.
- [ABCreateStringWithAddressDictionary](abcreatestringwithaddressdictionary%28____%29.md): Deprecated. Returns a formatted address from an address property.
