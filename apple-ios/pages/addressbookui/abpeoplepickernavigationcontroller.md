> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpeoplepickernavigationcontroller](https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontroller)

# ABPeoplePickerNavigationController (Swift)

**Framework:** Address Book UI  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The `ABPeoplePickerNavigationController` class (whose instances are known as **people-picker navigation controllers**) implements a view controller that manages a set of views that allow the user to select a contact or one of its contact-information items from an address book.

> Use [CNContactPickerViewController](https://developer.apple.com/documentation/contactsui/cncontactpickerviewcontroller) instead.

## Declaration

```swift
class ABPeoplePickerNavigationController
```

<a id="overview"></a>

## Overview

In iOS 8 and later bringing up a people-picker navigtion controller does not require the app to have access to a user’s contacts, and the user will not be prompted to grant access. If the app does not itself have access to the user’s contacts, a temporary copy of the contact selected by the user will be returned to the app.

See PeoplePicker: Picking a Person or Property for a sample project illustrating the use of a people-picker navigation controller.

<a id="Subclassing"></a>

### Subclassing

The `ABPeoplePickerNavigationController` class does not support subclassing.

## Topics

### Responding to View Controller Interactions

- [peoplePickerDelegate](abpeoplepickernavigationcontroller/peoplepickerdelegate.md): Deprecated. The people-picker navigation controller delegate.
- [ABPeoplePickerNavigationControllerDelegate](abpeoplepickernavigationcontrollerdelegate.md): Deprecated. The `ABPeoplePickerNavigationControllerDelegate` protocol describes the interface [ABPeoplePickerNavigationController](abpeoplepickernavigationcontroller.md) delegates must adopt to respond to people-picker user events.

### Displaying Person Properties

- [displayedProperties](abpeoplepickernavigationcontroller/displayedproperties.md): Deprecated. The properties (such as name or telephone number) the picker displays when it shows a person.

### Configuring People Pickers

- [addressBook](abpeoplepickernavigationcontroller/addressbook.md): Deprecated. Optional; the address book from which to obtain the list of contacts.

### Customizing Display and Selection

- [predicateForEnablingPerson](abpeoplepickernavigationcontroller/predicateforenablingperson.md): Deprecated. Optionally determines if a person can be selected.
- [predicateForSelectionOfPerson](abpeoplepickernavigationcontroller/predicateforselectionofperson.md): Deprecated. Optionally determines if a selected person should be returned to the app or displayed.
- [predicateForSelectionOfProperty](abpeoplepickernavigationcontroller/predicateforselectionofproperty.md): Deprecated. Optionally determines if a selected property should be returned to the app or if the default action for the property should be performed

### Constants

- [Address Book Properties](address-book-properties.md): These constants can be used in predicates for selecting people or properties. A labeled value is an object with a “label” property and a “value” property.

## Relationships

### Inherits From

- [UINavigationController](https://developer.apple.com/documentation/uikit/uinavigationcontroller)

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

# ABPeoplePickerNavigationController (Objective-C)

**Framework:** Address Book UI  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The `ABPeoplePickerNavigationController` class (whose instances are known as **people-picker navigation controllers**) implements a view controller that manages a set of views that allow the user to select a contact or one of its contact-information items from an address book.

> Use [CNContactPickerViewController](https://developer.apple.com/documentation/contactsui/cncontactpickerviewcontroller) instead.

## Declaration

```objectivec
@interface ABPeoplePickerNavigationController : UINavigationController
```

<a id="overview"></a>

## Overview

In iOS 8 and later bringing up a people-picker navigtion controller does not require the app to have access to a user’s contacts, and the user will not be prompted to grant access. If the app does not itself have access to the user’s contacts, a temporary copy of the contact selected by the user will be returned to the app.

See PeoplePicker: Picking a Person or Property for a sample project illustrating the use of a people-picker navigation controller.

<a id="Subclassing"></a>

### Subclassing

The `ABPeoplePickerNavigationController` class does not support subclassing.

## Topics

### Responding to View Controller Interactions

- [peoplePickerDelegate](abpeoplepickernavigationcontroller/peoplepickerdelegate.md): Deprecated. The people-picker navigation controller delegate.
- [ABPeoplePickerNavigationControllerDelegate](abpeoplepickernavigationcontrollerdelegate.md): Deprecated. The `ABPeoplePickerNavigationControllerDelegate` protocol describes the interface [ABPeoplePickerNavigationController](abpeoplepickernavigationcontroller.md) delegates must adopt to respond to people-picker user events.

### Displaying Person Properties

- [displayedProperties](abpeoplepickernavigationcontroller/displayedproperties.md): Deprecated. The properties (such as name or telephone number) the picker displays when it shows a person.

### Configuring People Pickers

- [addressBook](abpeoplepickernavigationcontroller/addressbook.md): Deprecated. Optional; the address book from which to obtain the list of contacts.

### Customizing Display and Selection

- [predicateForEnablingPerson](abpeoplepickernavigationcontroller/predicateforenablingperson.md): Deprecated. Optionally determines if a person can be selected.
- [predicateForSelectionOfPerson](abpeoplepickernavigationcontroller/predicateforselectionofperson.md): Deprecated. Optionally determines if a selected person should be returned to the app or displayed.
- [predicateForSelectionOfProperty](abpeoplepickernavigationcontroller/predicateforselectionofproperty.md): Deprecated. Optionally determines if a selected property should be returned to the app or if the default action for the property should be performed

### Constants

- [Address Book Properties](address-book-properties.md): These constants can be used in predicates for selecting people or properties. A labeled value is an object with a “label” property and a “value” property.

## Relationships

### Inherits From

- [UINavigationController](https://developer.apple.com/documentation/uikit/uinavigationcontroller)
