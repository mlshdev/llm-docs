> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beaccessibilitytextmarkersupport](https://developer.apple.com/documentation/browserenginekit/beaccessibilitytextmarkersupport)

# BEAccessibilityTextMarkerSupport (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

A set of methods that provide information about text offsets to support assistive features.

## Declaration

```swift
protocol BEAccessibilityTextMarkerSupport : NSObjectProtocol
```

<a id="overview"></a>

## Overview

In your alternative browser engine, implement [BEAccessibilityTextMarkerSupport](beaccessibilitytextmarkersupport.md) on views that represent elements in the Document Object Model (DOM) to supply accessibility information about the element’s text to the system.

## Topics

### Text positions

- [accessibilityNextTextMarker(\_:)](beaccessibilitytextmarkersupport/accessibilitynexttextmarker%28__%29.md): Returns the text marker that follows the given text marker.
- [accessibilityPreviousTextMarker(\_:)](beaccessibilitytextmarkersupport/accessibilityprevioustextmarker%28__%29.md): Returns the text marker that precedes the given text marker.
- [accessibilityLineStartMarker(for:)](beaccessibilitytextmarkersupport/accessibilitylinestartmarker%28for_%29.md): Returns the text marker that represents the start of the line that contains the given text marker.
- [accessibilityLineEndMarker(for:)](beaccessibilitytextmarkersupport/accessibilitylineendmarker%28for_%29.md): Returns the text marker that represents the end of the line that contains the given text marker.
- [accessibilityMarker(for:)](beaccessibilitytextmarkersupport/accessibilitymarker%28for_%29.md): Returns the text marker at a point in the view’s coordinate system.
- [accessibilityTextMarker(forPosition:)](beaccessibilitytextmarkersupport/accessibilitytextmarker%28forposition_%29.md): Returns the text marker for the text at a given index in the element’s text.
- [BEAccessibilityTextMarker](beaccessibilitytextmarker.md): An abstract class that represents a location in an element’s accessibility text.

### Text ranges

- [accessibilityBounds(for:)](beaccessibilitytextmarkersupport/accessibilitybounds%28for_%29.md): Calculates the bounding rectangle for a text range.
- [accessibilityTextMarkerRange()](beaccessibilitytextmarkersupport/accessibilitytextmarkerrange%28%29.md): The text marker range of the current element.
- [accessibilityTextMarkerRangeForCurrentSelection()](beaccessibilitytextmarkersupport/accessibilitytextmarkerrangeforcurrentselection%28%29.md): The text marker range of the current selection.
- [accessibilityTextMarkerRange(for:)](beaccessibilitytextmarkersupport/accessibilitytextmarkerrange%28for_%29.md): Returns the text marker range for the text in a given range.
- [accessibilityRange(for:)](beaccessibilitytextmarkersupport/accessibilityrange%28for_%29.md): Returns the range for the text in a given accessibility marker range.
- [BEAccessibilityTextMarker.Range](beaccessibilitytextmarker/range.md): A class that represents a range in an element’s accessibility text.

### Instance Methods

- [accessibilityContent(for:)](beaccessibilitytextmarkersupport/accessibilitycontent%28for_%29.md): Returns the accessibility content for a text range.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Accessibility

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
- [BEAccessibilityRemoteHostElement](beaccessibilityremotehostelement.md): A class that connects the accessibility information of different processes.
- [BEAccessibility](beaccessibility.md): A category for accessibility features in the framework.

# BEAccessibilityTextMarkerSupport (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

A set of methods that provide information about text offsets to support assistive features.

## Declaration

```objectivec
@protocol BEAccessibilityTextMarkerSupport <NSObject>
```

<a id="overview"></a>

## Overview

In your alternative browser engine, implement [BEAccessibilityTextMarkerSupport](beaccessibilitytextmarkersupport.md) on views that represent elements in the Document Object Model (DOM) to supply accessibility information about the element’s text to the system.

## Topics

### Text positions

- [accessibilityNextTextMarker:](beaccessibilitytextmarkersupport/accessibilitynexttextmarker%28__%29.md): Returns the text marker that follows the given text marker.
- [accessibilityPreviousTextMarker:](beaccessibilitytextmarkersupport/accessibilityprevioustextmarker%28__%29.md): Returns the text marker that precedes the given text marker.
- [accessibilityLineStartMarkerForMarker:](beaccessibilitytextmarkersupport/accessibilitylinestartmarker%28for_%29.md): Returns the text marker that represents the start of the line that contains the given text marker.
- [accessibilityLineEndMarkerForMarker:](beaccessibilitytextmarkersupport/accessibilitylineendmarker%28for_%29.md): Returns the text marker that represents the end of the line that contains the given text marker.
- [accessibilityMarkerForPoint:](beaccessibilitytextmarkersupport/accessibilitymarker%28for_%29.md): Returns the text marker at a point in the view’s coordinate system.
- [accessibilityTextMarkerForPosition:](beaccessibilitytextmarkersupport/accessibilitytextmarker%28forposition_%29.md): Returns the text marker for the text at a given index in the element’s text.
- [BEAccessibilityTextMarker](beaccessibilitytextmarker.md): An abstract class that represents a location in an element’s accessibility text.

### Text ranges

- [accessibilityBoundsForTextMarkerRange:](beaccessibilitytextmarkersupport/accessibilitybounds%28for_%29.md): Calculates the bounding rectangle for a text range.
- [accessibilityTextMarkerRange](beaccessibilitytextmarkersupport/accessibilitytextmarkerrange%28%29.md): The text marker range of the current element.
- [accessibilityTextMarkerRangeForCurrentSelection](beaccessibilitytextmarkersupport/accessibilitytextmarkerrangeforcurrentselection%28%29.md): The text marker range of the current selection.
- [accessibilityTextMarkerRangeForRange:](beaccessibilitytextmarkersupport/accessibilitytextmarkerrange%28for_%29.md): Returns the text marker range for the text in a given range.
- [accessibilityRangeForTextMarkerRange:](beaccessibilitytextmarkersupport/accessibilityrange%28for_%29.md): Returns the range for the text in a given accessibility marker range.
- [BEAccessibilityTextMarkerRange](beaccessibilitytextmarker/range.md): A class that represents a range in an element’s accessibility text.

### Instance Methods

- [accessibilityContentForTextMarkerRange:](beaccessibilitytextmarkersupport/accessibilitycontent%28for_%29.md): Returns the accessibility content for a text range.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Accessibility

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
- [BEAccessibilityRemoteHostElement](beaccessibilityremotehostelement.md): A class that connects the accessibility information of different processes.
