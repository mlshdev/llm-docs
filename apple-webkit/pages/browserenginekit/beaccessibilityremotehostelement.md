> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beaccessibilityremotehostelement](https://developer.apple.com/documentation/browserenginekit/beaccessibilityremotehostelement)

# BEAccessibilityRemoteHostElement (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · visionOS 26.0+

A class that connects the accessibility information of different processes.

## Declaration

```swift
class BEAccessibilityRemoteHostElement
```

<a id="overview"></a>

## Overview

If a peripheral process in your browser app (such as a web content process or extension process) provides Accessibility elements in addition to your app’s main process, this class can connect the Accessibility element hierarchies across the two processes so that assistive technologies such as VoiceOver, Switch Control, and Voice Control can interact with both hierarchies.

Create an instance of this class in the main process and pass in the same identifier you use to create a [BEAccessibilityRemoteElement](beaccessibilityremoteelement.md) instance in the peripheral process. Add the instance of this class to the [accessibilityElements](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityelements) return value of an element’s parent view, and set the instance’s [accessibilityContainer](beaccessibilityremotehostelement/accessibilitycontainer.md) property to the parent view.

## Topics

### Creating a remote host element

- [init(identifier:remotePid:)](beaccessibilityremotehostelement/init%28identifier_remotepid_%29.md): Initializes a remote element in the hosting process.

### Accessing containers

- [accessibilityContainer](beaccessibilityremotehostelement/accessibilitycontainer.md): The remote host’s parent Accessibility element.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Accessibility

- [BEAccessibilityTextMarkerSupport](beaccessibilitytextmarkersupport.md): A set of methods that provide information about text offsets to support assistive features.
- [valueChangedNotification](beaccessibility/valuechangednotification.md): A notification you post when the value of an element changes.
- [selectionChangedNotification](beaccessibility/selectionchangednotification.md): A notification you post when the selection inside an element changes.
- [BEAccessibilityContainerType](beaccessibilitycontainertype.md): Types of containers for an element.
- [BEAccessibilityPressedState](beaccessibilitypressedstate.md): An enumeration that indicates whether an element is pressed.
- [menuItem](beaccessibility/menuitem.md): An accessibility element with a menu interface.
- [popUpButton](beaccessibility/popupbutton.md): An accessibility element with a pop-up button interface.
- [radioButton](beaccessibility/radiobutton.md): An accessibility element with a radio button interface.
- [readOnly](beaccessibility/readonly.md): An accessibility element with a read-only interface.
- [visited](beaccessibility/visited.md): An accessibility element that resembles a visited link.
- [BEAccessibilityRemoteElement](beaccessibilityremoteelement.md): A class that shares the accessibility information of a peripheral process with the main process.
- [BEAccessibility](beaccessibility.md): A category for accessibility features in the framework.

# BEAccessibilityRemoteHostElement (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · visionOS 26.0+

A class that connects the accessibility information of different processes.

## Declaration

```objectivec
@interface BEAccessibilityRemoteHostElement : NSObject
```

<a id="overview"></a>

## Overview

If a peripheral process in your browser app (such as a web content process or extension process) provides Accessibility elements in addition to your app’s main process, this class can connect the Accessibility element hierarchies across the two processes so that assistive technologies such as VoiceOver, Switch Control, and Voice Control can interact with both hierarchies.

Create an instance of this class in the main process and pass in the same identifier you use to create a [BEAccessibilityRemoteElement](beaccessibilityremoteelement.md) instance in the peripheral process. Add the instance of this class to the [accessibilityElements](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityelements) return value of an element’s parent view, and set the instance’s [accessibilityContainer](beaccessibilityremotehostelement/accessibilitycontainer.md) property to the parent view.

## Topics

### Creating a remote host element

- [initWithIdentifier:remotePid:](beaccessibilityremotehostelement/init%28identifier_remotepid_%29.md): Initializes a remote element in the hosting process.

### Accessing containers

- [accessibilityContainer](beaccessibilityremotehostelement/accessibilitycontainer.md): The remote host’s parent Accessibility element.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Accessibility

- [BEAccessibilityTextMarkerSupport](beaccessibilitytextmarkersupport.md): A set of methods that provide information about text offsets to support assistive features.
- [BEAccessibilityValueChangedNotification](beaccessibility/valuechangednotification.md): A notification you post when the value of an element changes.
- [BEAccessibilitySelectionChangedNotification](beaccessibility/selectionchangednotification.md): A notification you post when the selection inside an element changes.
- [BEAccessibilityContainerType](beaccessibilitycontainertype.md): Types of containers for an element.
- [BEAccessibilityPressedState](beaccessibilitypressedstate.md): An enumeration that indicates whether an element is pressed.
- [BEAccessibilityTraitMenuItem](beaccessibility/menuitem.md): An accessibility element with a menu interface.
- [BEAccessibilityTraitPopUpButton](beaccessibility/popupbutton.md): An accessibility element with a pop-up button interface.
- [BEAccessibilityTraitRadioButton](beaccessibility/radiobutton.md): An accessibility element with a radio button interface.
- [BEAccessibilityTraitReadOnly](beaccessibility/readonly.md): An accessibility element with a read-only interface.
- [BEAccessibilityTraitVisited](beaccessibility/visited.md): An accessibility element that resembles a visited link.
- [BEAccessibilityRemoteElement](beaccessibilityremoteelement.md): A class that shares the accessibility information of a peripheral process with the main process.
