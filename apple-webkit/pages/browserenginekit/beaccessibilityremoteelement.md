> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beaccessibilityremoteelement](https://developer.apple.com/documentation/browserenginekit/beaccessibilityremoteelement)

# BEAccessibilityRemoteElement (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · visionOS 26.0+

A class that shares the accessibility information of a peripheral process with the main process.

## Declaration

```swift
class BEAccessibilityRemoteElement
```

<a id="overview"></a>

## Overview

If a peripheral process in your browser app (such as a web content process or extension process) provides Accessibility elements, you can use this class to connect the Accessibility element hierarchies across the two processes so that assistive technologies such as VoiceOver, Switch Control, and Voice Control can interact with both hierarchies.

Create an instance of this class in the peripheral process and pass in the same identifier you use to create a [BEAccessibilityRemoteHostElement](beaccessibilityremotehostelement.md) instance on the main process. Add elements to the [accessibilityElements](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityelements) method return value of the instance of this class to enable assistive technologies to simultaneously access both Accessibility element hierarchies.

> **Note**

> Unlike [BEAccessibilityRemoteHostElement](beaccessibilityremotehostelement.md), you don’t add an instance of this class to the [accessibilityElements](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityelements) method return value for a member of your view hierarchy.

## Topics

### Creating a remote element

- [init(identifier:hostPid:)](beaccessibilityremoteelement/init%28identifier_hostpid_%29.md): Initializes and registers a remote element.

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
- [BEAccessibilityRemoteHostElement](beaccessibilityremotehostelement.md): A class that connects the accessibility information of different processes.
- [BEAccessibility](beaccessibility.md): A category for accessibility features in the framework.

# BEAccessibilityRemoteElement (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · visionOS 26.0+

A class that shares the accessibility information of a peripheral process with the main process.

## Declaration

```objectivec
@interface BEAccessibilityRemoteElement : NSObject
```

<a id="overview"></a>

## Overview

If a peripheral process in your browser app (such as a web content process or extension process) provides Accessibility elements, you can use this class to connect the Accessibility element hierarchies across the two processes so that assistive technologies such as VoiceOver, Switch Control, and Voice Control can interact with both hierarchies.

Create an instance of this class in the peripheral process and pass in the same identifier you use to create a [BEAccessibilityRemoteHostElement](beaccessibilityremotehostelement.md) instance on the main process. Add elements to the [accessibilityElements](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityelements) method return value of the instance of this class to enable assistive technologies to simultaneously access both Accessibility element hierarchies.

> **Note**

> Unlike [BEAccessibilityRemoteHostElement](beaccessibilityremotehostelement.md), you don’t add an instance of this class to the [accessibilityElements](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityelements) method return value for a member of your view hierarchy.

## Topics

### Creating a remote element

- [initWithIdentifier:hostPid:](beaccessibilityremoteelement/init%28identifier_hostpid_%29.md): Initializes and registers a remote element.

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
- [BEAccessibilityRemoteHostElement](beaccessibilityremotehostelement.md): A class that connects the accessibility information of different processes.
