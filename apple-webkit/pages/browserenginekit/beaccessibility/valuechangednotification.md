> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beaccessibility/valuechangednotification](https://developer.apple.com/documentation/browserenginekit/beaccessibility/valuechangednotification)

# valueChangedNotification (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

A notification you post when the value of an element changes.

## Declaration

```swift
static var valueChangedNotification: UIAccessibility.Notification
```

<a id="discussion"></a>

## Discussion

Post this notification when the value of an input element changes, for example, when:

- A person inputs text in a UI
- The `aria-valuenow` or `aria-valuetext` attributes of an element change.

If an element contains a text selection and the content changes, or the editing cursor position changes, post this notification followed by [selectionChangedNotification](selectionchangednotification.md) for the element.

## See Also

### Accessibility

- [BEAccessibilityTextMarkerSupport](../beaccessibilitytextmarkersupport.md): A set of methods that provide information about text offsets to support assistive features.
- [selectionChangedNotification](selectionchangednotification.md): A notification you post when the selection inside an element changes.
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

# BEAccessibilityValueChangedNotification (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

A notification you post when the value of an element changes.

## Declaration

```objectivec
extern UIAccessibilityNotifications BEAccessibilityValueChangedNotification;
```

<a id="discussion"></a>

## Discussion

Post this notification when the value of an input element changes, for example, when:

- A person inputs text in a UI
- The `aria-valuenow` or `aria-valuetext` attributes of an element change.

If an element contains a text selection and the content changes, or the editing cursor position changes, post this notification followed by [BEAccessibilitySelectionChangedNotification](selectionchangednotification.md) for the element.

## See Also

### Accessibility

- [BEAccessibilityTextMarkerSupport](../beaccessibilitytextmarkersupport.md): A set of methods that provide information about text offsets to support assistive features.
- [BEAccessibilitySelectionChangedNotification](selectionchangednotification.md): A notification you post when the selection inside an element changes.
- [BEAccessibilityContainerType](../beaccessibilitycontainertype.md): Types of containers for an element.
- [BEAccessibilityPressedState](../beaccessibilitypressedstate.md): An enumeration that indicates whether an element is pressed.
- [BEAccessibilityTraitMenuItem](menuitem.md): An accessibility element with a menu interface.
- [BEAccessibilityTraitPopUpButton](popupbutton.md): An accessibility element with a pop-up button interface.
- [BEAccessibilityTraitRadioButton](radiobutton.md): An accessibility element with a radio button interface.
- [BEAccessibilityTraitReadOnly](readonly.md): An accessibility element with a read-only interface.
- [BEAccessibilityTraitVisited](visited.md): An accessibility element that resembles a visited link.
- [BEAccessibilityRemoteElement](../beaccessibilityremoteelement.md): A class that shares the accessibility information of a peripheral process with the main process.
- [BEAccessibilityRemoteHostElement](../beaccessibilityremotehostelement.md): A class that connects the accessibility information of different processes.
