> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beaccessibilitycontainertype](https://developer.apple.com/documentation/browserenginekit/beaccessibilitycontainertype)

# BEAccessibilityContainerType (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · macOS · tvOS 18.0+ · visionOS 2.0+

Types of containers for an element.

## Declaration

```swift
struct BEAccessibilityContainerType
```

<a id="overview"></a>

## Overview

Choose a value from this enumeration and set it as an element’s [browserAccessibilityContainerType](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/browseraccessibilitycontainertype) to indicate the element’s container.

For example, set [table](beaccessibilitycontainertype/table.md) as the `browserAccessibilityContainerType` for an element within a table cell.

## Topics

### Layout and navigation

- [landmark](beaccessibilitycontainertype/landmark.md): A website accessibility landmark that contains the element.
- [frame](beaccessibilitycontainertype/frame.md): A frame that contains the element.
- [scrollArea](beaccessibilitycontainertype/scrollarea.md): A scroll area that contains the element.
- [semanticGroup](beaccessibilitycontainertype/semanticgroup.md): A semantic group that contains the element.

### Content grouping

- [article](beaccessibilitycontainertype/article.md): An HTML article element that contains the alert.
- [fieldset](beaccessibilitycontainertype/fieldset.md): An HTML fieldset element that contains the element.
- [descriptionList](beaccessibilitycontainertype/descriptionlist.md): A description list that contains the element.
- [list](beaccessibilitycontainertype/list.md): A list contains the element.
- [table](beaccessibilitycontainertype/table.md): A table that contains the element.
- [tree](beaccessibilitycontainertype/tree.md): A tree that contains the element.

### Interactive and dynamic

- [alert](beaccessibilitycontainertype/alert.md): An alert that contains the element.
- [dialog](beaccessibilitycontainertype/dialog.md): A dialog that contains the element.

### Initializers

- [init(rawValue:)](beaccessibilitycontainertype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Accessibility

- [BEAccessibilityTextMarkerSupport](beaccessibilitytextmarkersupport.md): A set of methods that provide information about text offsets to support assistive features.
- [valueChangedNotification](beaccessibility/valuechangednotification.md): A notification you post when the value of an element changes.
- [selectionChangedNotification](beaccessibility/selectionchangednotification.md): A notification you post when the selection inside an element changes.
- [BEAccessibilityPressedState](beaccessibilitypressedstate.md): An enumeration that indicates whether an element is pressed.
- [menuItem](beaccessibility/menuitem.md): An accessibility element with a menu interface.
- [popUpButton](beaccessibility/popupbutton.md): An accessibility element with a pop-up button interface.
- [radioButton](beaccessibility/radiobutton.md): An accessibility element with a radio button interface.
- [readOnly](beaccessibility/readonly.md): An accessibility element with a read-only interface.
- [visited](beaccessibility/visited.md): An accessibility element that resembles a visited link.
- [BEAccessibilityRemoteElement](beaccessibilityremoteelement.md): A class that shares the accessibility information of a peripheral process with the main process.
- [BEAccessibilityRemoteHostElement](beaccessibilityremotehostelement.md): A class that connects the accessibility information of different processes.
- [BEAccessibility](beaccessibility.md): A category for accessibility features in the framework.

# BEAccessibilityContainerType (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · macOS · tvOS 18.0+ · visionOS 2.0+

Types of containers for an element.

## Declaration

```objectivec
enum BEAccessibilityContainerType : NSUInteger;
```

<a id="overview"></a>

## Overview

Choose a value from this enumeration and set it as an element’s [browserAccessibilityContainerType](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/browseraccessibilitycontainertype) to indicate the element’s container.

For example, set [BEAccessibilityContainerTypeTable](beaccessibilitycontainertype/table.md) as the `browserAccessibilityContainerType` for an element within a table cell.

## Topics

### Layout and navigation

- [BEAccessibilityContainerTypeLandmark](beaccessibilitycontainertype/landmark.md): A website accessibility landmark that contains the element.
- [BEAccessibilityContainerTypeFrame](beaccessibilitycontainertype/frame.md): A frame that contains the element.
- [BEAccessibilityContainerTypeScrollArea](beaccessibilitycontainertype/scrollarea.md): A scroll area that contains the element.
- [BEAccessibilityContainerTypeSemanticGroup](beaccessibilitycontainertype/semanticgroup.md): A semantic group that contains the element.

### Content grouping

- [BEAccessibilityContainerTypeArticle](beaccessibilitycontainertype/article.md): An HTML article element that contains the alert.
- [BEAccessibilityContainerTypeFieldset](beaccessibilitycontainertype/fieldset.md): An HTML fieldset element that contains the element.
- [BEAccessibilityContainerTypeDescriptionList](beaccessibilitycontainertype/descriptionlist.md): A description list that contains the element.
- [BEAccessibilityContainerTypeList](beaccessibilitycontainertype/list.md): A list contains the element.
- [BEAccessibilityContainerTypeTable](beaccessibilitycontainertype/table.md): A table that contains the element.
- [BEAccessibilityContainerTypeTree](beaccessibilitycontainertype/tree.md): A tree that contains the element.

### Interactive and dynamic

- [BEAccessibilityContainerTypeAlert](beaccessibilitycontainertype/alert.md): An alert that contains the element.
- [BEAccessibilityContainerTypeDialog](beaccessibilitycontainertype/dialog.md): A dialog that contains the element.

### Special case

- [BEAccessibilityContainerTypeNone](beaccessibilitycontainertype/beaccessibilitycontainertypenone.md): An option that indicates the element has no container.

## See Also

### Accessibility

- [BEAccessibilityTextMarkerSupport](beaccessibilitytextmarkersupport.md): A set of methods that provide information about text offsets to support assistive features.
- [BEAccessibilityValueChangedNotification](beaccessibility/valuechangednotification.md): A notification you post when the value of an element changes.
- [BEAccessibilitySelectionChangedNotification](beaccessibility/selectionchangednotification.md): A notification you post when the selection inside an element changes.
- [BEAccessibilityPressedState](beaccessibilitypressedstate.md): An enumeration that indicates whether an element is pressed.
- [BEAccessibilityTraitMenuItem](beaccessibility/menuitem.md): An accessibility element with a menu interface.
- [BEAccessibilityTraitPopUpButton](beaccessibility/popupbutton.md): An accessibility element with a pop-up button interface.
- [BEAccessibilityTraitRadioButton](beaccessibility/radiobutton.md): An accessibility element with a radio button interface.
- [BEAccessibilityTraitReadOnly](beaccessibility/readonly.md): An accessibility element with a read-only interface.
- [BEAccessibilityTraitVisited](beaccessibility/visited.md): An accessibility element that resembles a visited link.
- [BEAccessibilityRemoteElement](beaccessibilityremoteelement.md): A class that shares the accessibility information of a peripheral process with the main process.
- [BEAccessibilityRemoteHostElement](beaccessibilityremotehostelement.md): A class that connects the accessibility information of different processes.
