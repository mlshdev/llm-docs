> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/cncontactpickerviewcontroller](https://developer.apple.com/documentation/contactsui/cncontactpickerviewcontroller)

# CNContactPickerViewController (Swift)

**Framework:** Contacts UI  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller that displays an interface for picking contacts.

## Declaration

```swift
class CNContactPickerViewController
```

<a id="overview"></a>

## Overview

A [CNContactPickerViewController](cncontactpickerviewcontroller.md) allows the user to select one or more contacts (or their properties) from the list of contacts displayed in the contact view controller ([CNContactViewController](cncontactviewcontroller.md)). The picker supports both single selection and multiselection of the contacts. The app using contact picker view does not need access to the user’s contacts and the user will not be prompted for “grant permission” access. The app has access only to the user’s final selection.

There are predefined predicates in this class that let you control the user selection of the contact. Changing the predicates only take effect before the view is presented.

## Topics

### Displaying Contacts Properties

- [displayedPropertyKeys](cncontactpickerviewcontroller/displayedpropertykeys.md): The [CNContact](../contacts/cncontact.md) property keys to display in the contact detail card.

### Responding to User Interactions

- [delegate](cncontactpickerviewcontroller/delegate.md): The delegate to be notified when the user selects a contact or a property.
- [CNContactPickerDelegate](cncontactpickerdelegate.md): The methods that you implement to respond to contact-picker user events.

### Predicates For Selecting Contacts

- [predicateForEnablingContact](cncontactpickerviewcontroller/predicateforenablingcontact.md): A predicate to determine the contact selectability in the list of contacts.
- [predicateForSelectionOfContact](cncontactpickerviewcontroller/predicateforselectionofcontact.md): A predicate to control the return of the selected contact.
- [predicateForSelectionOfProperty](cncontactpickerviewcontroller/predicateforselectionofproperty.md): A predicate to control the properties of the selected contact.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
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

## See Also

### Contact pickers

- [CNContactPicker](cncontactpicker.md): A popover-based interface for selecting a contact.

# CNContactPickerViewController (Objective-C)

**Framework:** Contacts UI  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view controller that displays an interface for picking contacts.

## Declaration

```objectivec
@interface CNContactPickerViewController : UIViewController
```

<a id="overview"></a>

## Overview

A [CNContactPickerViewController](cncontactpickerviewcontroller.md) allows the user to select one or more contacts (or their properties) from the list of contacts displayed in the contact view controller ([CNContactViewController](cncontactviewcontroller.md)). The picker supports both single selection and multiselection of the contacts. The app using contact picker view does not need access to the user’s contacts and the user will not be prompted for “grant permission” access. The app has access only to the user’s final selection.

There are predefined predicates in this class that let you control the user selection of the contact. Changing the predicates only take effect before the view is presented.

## Topics

### Displaying Contacts Properties

- [displayedPropertyKeys](cncontactpickerviewcontroller/displayedpropertykeys.md): The [CNContact](../contacts/cncontact.md) property keys to display in the contact detail card.

### Responding to User Interactions

- [delegate](cncontactpickerviewcontroller/delegate.md): The delegate to be notified when the user selects a contact or a property.
- [CNContactPickerDelegate](cncontactpickerdelegate.md): The methods that you implement to respond to contact-picker user events.

### Predicates For Selecting Contacts

- [predicateForEnablingContact](cncontactpickerviewcontroller/predicateforenablingcontact.md): A predicate to determine the contact selectability in the list of contacts.
- [predicateForSelectionOfContact](cncontactpickerviewcontroller/predicateforselectionofcontact.md): A predicate to control the return of the selected contact.
- [predicateForSelectionOfProperty](cncontactpickerviewcontroller/predicateforselectionofproperty.md): A predicate to control the properties of the selected contact.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Contact pickers

- [CNContactPicker](cncontactpicker.md): A popover-based interface for selecting a contact.
