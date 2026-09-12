> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpersonview](https://developer.apple.com/documentation/addressbook/abpersonview)

# ABPersonView (Swift)

**Framework:** Address Book  
**Kind:** Class  
**Availability:** macOS 10.7+

An object that provides a view for displaying and editing contacts.

## Declaration

```swift
class ABPersonView
```

<a id="overview"></a>

## Overview

> **Note**

>  You should not override the [fieldEditor(\_:for:)](https://developer.apple.com/documentation/appkit/nswindow/fieldeditor%28_:for:%29) method of the window that contains this view.

## Topics

### Working with Person Views

- [editing](abpersonview/editing.md): A Boolean value that indicates whether the person view is in editing mode.
- [person](abpersonview/person.md): The contact record being displayed.
- [shouldShowLinkedPeople](abpersonview/shouldshowlinkedpeople.md): Indicates whether the person view should display data from person records that are linked with the person record being displayed.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Pickers

- [ABPeoplePickerView](abpeoplepickerview.md): An object you use to customize the behavior of people-picker views in an app’s user interface.

# ABPersonView (Objective-C)

**Framework:** Address Book  
**Kind:** Class  
**Availability:** macOS 10.7+

An object that provides a view for displaying and editing contacts.

## Declaration

```objectivec
@interface ABPersonView : NSView
```

<a id="overview"></a>

## Overview

> **Note**

>  You should not override the [fieldEditor:forObject:](https://developer.apple.com/documentation/appkit/nswindow/fieldeditor%28_:for:%29) method of the window that contains this view.

## Topics

### Working with Person Views

- [editing](abpersonview/editing.md): A Boolean value that indicates whether the person view is in editing mode.
- [person](abpersonview/person.md): The contact record being displayed.
- [shouldShowLinkedPeople](abpersonview/shouldshowlinkedpeople.md): Indicates whether the person view should display data from person records that are linked with the person record being displayed.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

## See Also

### Pickers

- [ABPeoplePickerView](abpeoplepickerview.md): An object you use to customize the behavior of people-picker views in an app’s user interface.
- [ABPersonPicker](abpersonpicker.md): A picker object that you display when you want the user to select contacts.
