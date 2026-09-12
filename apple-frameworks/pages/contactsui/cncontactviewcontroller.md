> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactviewcontroller](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller)

# CNContactViewController (Swift)

**Framework:** Contacts UI  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A view controller that displays a new, unknown, or existing contact.

## Declaration

```swift
class CNContactViewController
```

<a id="overview"></a>

## Overview

Present a `CNContactViewController` object when you want to display information about one of the user’s contacts. At creation time, you specify the type of contact you want to display: new, unknown, or existing.

## Topics

### Creating the Contact Viewer

- [init(for:)](cncontactviewcontroller/init%28for_%29.md): Initializes a view controller for an existing contact.
- [init(forContact:)](cncontactviewcontroller/init%28forcontact_%29.md): Initializes a view controller for an existing contact.
- [init(forUnknownContact:)](cncontactviewcontroller/init%28forunknowncontact_%29.md): Initializes a view controller for an unknown contact.
- [init(forNewContact:)](cncontactviewcontroller/init%28fornewcontact_%29.md): Initializes a view controller for a new contact.

### Handling Interactions with the Interface

- [delegate](cncontactviewcontroller/delegate.md): The delegate to be notified.
- [CNContactViewControllerDelegate](cncontactviewcontrollerdelegate.md): Methods you use to respond to user interactions with a contact view controller.

### Required Keys

- [descriptorForRequiredKeys()](cncontactviewcontroller/descriptorforrequiredkeys%28%29.md): Returns the descriptor for all the keys that must be fetched on the contact before setting it on the view controller.

### Displaying Contact Properties

- [contact](cncontactviewcontroller/contact.md): The contact being displayed.
- [alternateName](cncontactviewcontroller/alternatename.md): The name to use if the contact has no display name.
- [message](cncontactviewcontroller/message.md): The message displayed under the name of the contact.
- [displayedPropertyKeys](cncontactviewcontroller/displayedpropertykeys.md): The contact property keys to display.

### Configuring the Contact’s Relationships

- [parentGroup](cncontactviewcontroller/parentgroup.md): The group in which to add a new contact.
- [parentContainer](cncontactviewcontroller/parentcontainer.md): The container in which to add a new contact.

### Contact Store

- [contactStore](cncontactviewcontroller/contactstore.md): The contact store from which the contact was fetched or to which it will be saved.

### Customizing Contact Card

- [allowsEditing](cncontactviewcontroller/allowsediting.md): Determines whether the user can edit the contact’s information.
- [allowsActions](cncontactviewcontroller/allowsactions.md): Determines whether to display buttons for actions such as sending a text message or initiating a FaceTime call.
- [shouldShowLinkedContacts](cncontactviewcontroller/shouldshowlinkedcontacts.md): Determines whether to display data from contacts that are linked to the contact being displayed.

### Highlighting a Property

- [highlightProperty(withKey:identifier:)](cncontactviewcontroller/highlightproperty%28withkey_identifier_%29.md): Highlights the property of the contact being displayed.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSeguePerforming](https://developer.apple.com/documentation/appkit/nssegueperforming)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

# CNContactViewController (Objective-C)

**Framework:** Contacts UI  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A view controller that displays a new, unknown, or existing contact.

## Declaration

```objectivec
@interface CNContactViewController : UIViewController
```

```objectivec
@interface CNContactViewController : NSViewController
```

<a id="overview"></a>

## Overview

Present a `CNContactViewController` object when you want to display information about one of the user’s contacts. At creation time, you specify the type of contact you want to display: new, unknown, or existing.

## Topics

### Creating the Contact Viewer

- [viewControllerForContact:](cncontactviewcontroller/init%28for_%29.md): Initializes a view controller for an existing contact.
- [viewControllerForUnknownContact:](cncontactviewcontroller/init%28forunknowncontact_%29.md): Initializes a view controller for an unknown contact.
- [viewControllerForNewContact:](cncontactviewcontroller/init%28fornewcontact_%29.md): Initializes a view controller for a new contact.

### Handling Interactions with the Interface

- [delegate](cncontactviewcontroller/delegate.md): The delegate to be notified.
- [CNContactViewControllerDelegate](cncontactviewcontrollerdelegate.md): Methods you use to respond to user interactions with a contact view controller.

### Required Keys

- [descriptorForRequiredKeys](cncontactviewcontroller/descriptorforrequiredkeys%28%29.md): Returns the descriptor for all the keys that must be fetched on the contact before setting it on the view controller.

### Displaying Contact Properties

- [contact](cncontactviewcontroller/contact.md): The contact being displayed.
- [alternateName](cncontactviewcontroller/alternatename.md): The name to use if the contact has no display name.
- [message](cncontactviewcontroller/message.md): The message displayed under the name of the contact.
- [displayedPropertyKeys](cncontactviewcontroller/displayedpropertykeys.md): The contact property keys to display.

### Configuring the Contact’s Relationships

- [parentGroup](cncontactviewcontroller/parentgroup.md): The group in which to add a new contact.
- [parentContainer](cncontactviewcontroller/parentcontainer.md): The container in which to add a new contact.

### Contact Store

- [contactStore](cncontactviewcontroller/contactstore.md): The contact store from which the contact was fetched or to which it will be saved.

### Customizing Contact Card

- [allowsEditing](cncontactviewcontroller/allowsediting.md): Determines whether the user can edit the contact’s information.
- [allowsActions](cncontactviewcontroller/allowsactions.md): Determines whether to display buttons for actions such as sending a text message or initiating a FaceTime call.
- [shouldShowLinkedContacts](cncontactviewcontroller/shouldshowlinkedcontacts.md): Determines whether to display data from contacts that are linked to the contact being displayed.

### Highlighting a Property

- [highlightPropertyWithKey:identifier:](cncontactviewcontroller/highlightproperty%28withkey_identifier_%29.md): Highlights the property of the contact being displayed.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)
