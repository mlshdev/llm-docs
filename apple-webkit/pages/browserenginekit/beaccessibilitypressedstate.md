> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beaccessibilitypressedstate](https://developer.apple.com/documentation/browserenginekit/beaccessibilitypressedstate)

# BEAccessibilityPressedState (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · macOS · tvOS 18.0+ · visionOS 2.0+

An enumeration that indicates whether an element is pressed.

## Declaration

```swift
enum BEAccessibilityPressedState
```

## Topics

### Element states

- [BEAccessibilityPressedState.false](beaccessibilitypressedstate/false.md): A state that indicates the element isn’t pressed.
- [BEAccessibilityPressedState.true](beaccessibilitypressedstate/true.md): A state that indicates the element is pressed.
- [BEAccessibilityPressedState.mixed](beaccessibilitypressedstate/mixed.md): A state that indicates the element is in a mixed state.
- [BEAccessibilityPressedState.undefined](beaccessibilitypressedstate/undefined.md): An option that indicates an undefined pressed state.

### Initializers

- [init(rawValue:)](beaccessibilitypressedstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessibility

- [BEAccessibilityTextMarkerSupport](beaccessibilitytextmarkersupport.md): A set of methods that provide information about text offsets to support assistive features.
- [valueChangedNotification](beaccessibility/valuechangednotification.md): A notification you post when the value of an element changes.
- [selectionChangedNotification](beaccessibility/selectionchangednotification.md): A notification you post when the selection inside an element changes.
- [BEAccessibilityContainerType](beaccessibilitycontainertype.md): Types of containers for an element.
- [menuItem](beaccessibility/menuitem.md): An accessibility element with a menu interface.
- [popUpButton](beaccessibility/popupbutton.md): An accessibility element with a pop-up button interface.
- [radioButton](beaccessibility/radiobutton.md): An accessibility element with a radio button interface.
- [readOnly](beaccessibility/readonly.md): An accessibility element with a read-only interface.
- [visited](beaccessibility/visited.md): An accessibility element that resembles a visited link.
- [BEAccessibilityRemoteElement](beaccessibilityremoteelement.md): A class that shares the accessibility information of a peripheral process with the main process.
- [BEAccessibilityRemoteHostElement](beaccessibilityremotehostelement.md): A class that connects the accessibility information of different processes.
- [BEAccessibility](beaccessibility.md): A category for accessibility features in the framework.

# BEAccessibilityPressedState (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · macOS · tvOS 18.0+ · visionOS 2.0+

An enumeration that indicates whether an element is pressed.

## Declaration

```objectivec
enum BEAccessibilityPressedState : NSInteger;
```

## Topics

### Element states

- [BEAccessibilityPressedStateFalse](beaccessibilitypressedstate/false.md): A state that indicates the element isn’t pressed.
- [BEAccessibilityPressedStateTrue](beaccessibilitypressedstate/true.md): A state that indicates the element is pressed.
- [BEAccessibilityPressedStateMixed](beaccessibilitypressedstate/mixed.md): A state that indicates the element is in a mixed state.
- [BEAccessibilityPressedStateUndefined](beaccessibilitypressedstate/undefined.md): An option that indicates an undefined pressed state.

## See Also

### Accessibility

- [BEAccessibilityTextMarkerSupport](beaccessibilitytextmarkersupport.md): A set of methods that provide information about text offsets to support assistive features.
- [BEAccessibilityValueChangedNotification](beaccessibility/valuechangednotification.md): A notification you post when the value of an element changes.
- [BEAccessibilitySelectionChangedNotification](beaccessibility/selectionchangednotification.md): A notification you post when the selection inside an element changes.
- [BEAccessibilityContainerType](beaccessibilitycontainertype.md): Types of containers for an element.
- [BEAccessibilityTraitMenuItem](beaccessibility/menuitem.md): An accessibility element with a menu interface.
- [BEAccessibilityTraitPopUpButton](beaccessibility/popupbutton.md): An accessibility element with a pop-up button interface.
- [BEAccessibilityTraitRadioButton](beaccessibility/radiobutton.md): An accessibility element with a radio button interface.
- [BEAccessibilityTraitReadOnly](beaccessibility/readonly.md): An accessibility element with a read-only interface.
- [BEAccessibilityTraitVisited](beaccessibility/visited.md): An accessibility element that resembles a visited link.
- [BEAccessibilityRemoteElement](beaccessibilityremoteelement.md): A class that shares the accessibility information of a peripheral process with the main process.
- [BEAccessibilityRemoteHostElement](beaccessibilityremotehostelement.md): A class that connects the accessibility information of different processes.
