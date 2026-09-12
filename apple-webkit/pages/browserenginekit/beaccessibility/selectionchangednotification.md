> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beaccessibility/selectionchangednotification](https://developer.apple.com/documentation/browserenginekit/beaccessibility/selectionchangednotification)

# selectionChangedNotification (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

A notification you post when the selection inside an element changes.

## Declaration

```swift
static var selectionChangedNotification: UIAccessibility.Notification
```

<a id="discussion"></a>

## Discussion

If an element contains a text selection and the content changes, or the editing cursor position changes, post this notification after posting [valueChangedNotification](valuechangednotification.md) for the element.

## See Also

### Accessibility

- [BEAccessibilityTextMarkerSupport](../beaccessibilitytextmarkersupport.md): A set of methods that provide information about text offsets to support assistive features.
- [valueChangedNotification](valuechangednotification.md): A notification you post when the value of an element changes.
- [BEAccessibilityContainerType](../beaccessibilitycontainertype.md): Types of containers for an element.
- [BEAccessibilityPressedState](../beaccessibilitypressedstate.md): An enumeration that indicates whether an element is pressed.
- [menuItem](menuitem.md): An accessibility element with a menu interface.
- [popUpButton](popupbutton.md): An accessibility element with a pop-up button interface.
- [radioButton](radiobutton.md): An accessibility element with a radio button interface.
- [readOnly](readonly.md): An accessibility element with a read-only interface.
- [visited](visited.md): An accessibility element that resembles a visited link.
- [BEAccessibilityRemoteElement](../beaccessibilityremoteelement.md): A class that shares the accessibility information of a peripheral process with the main process.
- [BEAccessibilityRemoteHostElement](../beaccessibilityremotehostelement.md): A class that connects the accessibility information of different processes.
- [BEAccessibility](../beaccessibility.md): A category for accessibility features in the framework.

# BEAccessibilitySelectionChangedNotification (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

A notification you post when the selection inside an element changes.

## Declaration

```objectivec
extern UIAccessibilityNotifications BEAccessibilitySelectionChangedNotification;
```

<a id="discussion"></a>

## Discussion

If an element contains a text selection and the content changes, or the editing cursor position changes, post this notification after posting [BEAccessibilityValueChangedNotification](valuechangednotification.md) for the element.

## See Also

### Accessibility

- [BEAccessibilityTextMarkerSupport](../beaccessibilitytextmarkersupport.md): A set of methods that provide information about text offsets to support assistive features.
- [BEAccessibilityValueChangedNotification](valuechangednotification.md): A notification you post when the value of an element changes.
- [BEAccessibilityContainerType](../beaccessibilitycontainertype.md): Types of containers for an element.
- [BEAccessibilityPressedState](../beaccessibilitypressedstate.md): An enumeration that indicates whether an element is pressed.
- [BEAccessibilityTraitMenuItem](menuitem.md): An accessibility element with a menu interface.
- [BEAccessibilityTraitPopUpButton](popupbutton.md): An accessibility element with a pop-up button interface.
- [BEAccessibilityTraitRadioButton](radiobutton.md): An accessibility element with a radio button interface.
- [BEAccessibilityTraitReadOnly](readonly.md): An accessibility element with a read-only interface.
- [BEAccessibilityTraitVisited](visited.md): An accessibility element that resembles a visited link.
- [BEAccessibilityRemoteElement](../beaccessibilityremoteelement.md): A class that shares the accessibility information of a peripheral process with the main process.
- [BEAccessibilityRemoteHostElement](../beaccessibilityremotehostelement.md): A class that connects the accessibility information of different processes.
