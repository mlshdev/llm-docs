> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielementattributes](https://developer.apple.com/documentation/xcuiautomation/xcuielementattributes)

# XCUIElementAttributes (Swift)

**Framework:** XCUIAutomation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Attributes exposed by UI elements.

## Declaration

```swift
@MainActor protocol XCUIElementAttributes
```

<a id="overview"></a>

## Overview

The [XCUIElementAttributes](xcuielementattributes.md) protocol adds attribute-related functionality to the [XCUIElement](xcuielement.md) class. Access these properties on an instance of [XCUIElement](xcuielement.md) to query the current state of the UI element’s attributes.

> **Note**

>  The attributes provided by this protocol represent data exposed to the Accessibility system, and are available during query matching.

## Topics

### Identity

- [identifier](xcuielementattributes/identifier.md): The element’s accessibility identifier.
- [elementType](xcuielementattributes/elementtype.md): The type of the element.
- [XCUIElement.ElementType](xcuielement/elementtype.md): The types of UI elements that you find, inspect, and interact with in a UI test.

### Value

- [value](xcuielementattributes/value.md): The raw value attribute of the element.
- [placeholderValue](xcuielementattributes/placeholdervalue.md): The value displayed when the element has no value.
- [title](xcuielementattributes/title.md): The title attribute of the element.
- [label](xcuielementattributes/label.md): The label attribute of the element.

### Interaction state

- [hasFocus](xcuielementattributes/hasfocus.md): The property that determines whether the element has UI focus.
- [isEnabled](xcuielementattributes/isenabled.md): Whether or not the element is enabled for user interaction.
- [isSelected](xcuielementattributes/isselected.md): The property that determines whether the element is selected.

### Size

- [frame](xcuielementattributes/frame.md): The frame of the element in the screen’s coordinate space.
- [horizontalSizeClass](xcuielementattributes/horizontalsizeclass.md): The horizontal size class of the element.
- [verticalSizeClass](xcuielementattributes/verticalsizeclass.md): The vertical size class of the element.
- [XCUIElement.SizeClass](xcuielement/sizeclass.md): The user interface size classes you can inspect in a UI test.

## Relationships

### Inherited By

- [XCUIElementSnapshot](xcuielementsnapshot.md)

### Conforming Types

- [XCUIApplication](xcuiapplication.md)
- [XCUIElement](xcuielement.md)

## See Also

### UI elements

- [XCUIElement](xcuielement.md): A UI element in an application.
- [XCUIElementSnapshot](xcuielementsnapshot.md): A set of attributes to express a snapshot of an element’s attributes and descendant user interface hierarchy.
- [XCUIElementSnapshotProviding](xcuielementsnapshotproviding.md): A method to capture a snapshot of an element’s attributes and descendant user interface hierarchy.
- [XCUICoordinate](xcuicoordinate.md): A location on screen relative to a UI element.

# XCUIElementAttributes (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Attributes exposed by UI elements.

## Declaration

```objectivec
@protocol XCUIElementAttributes
```

<a id="overview"></a>

## Overview

The [XCUIElementAttributes](xcuielementattributes.md) protocol adds attribute-related functionality to the [XCUIElement](xcuielement.md) class. Access these properties on an instance of [XCUIElement](xcuielement.md) to query the current state of the UI element’s attributes.

> **Note**

>  The attributes provided by this protocol represent data exposed to the Accessibility system, and are available during query matching.

## Topics

### Identity

- [identifier](xcuielementattributes/identifier.md): The element’s accessibility identifier.
- [elementType](xcuielementattributes/elementtype.md): The type of the element.
- [XCUIElementType](xcuielement/elementtype.md): The types of UI elements that you find, inspect, and interact with in a UI test.

### Value

- [value](xcuielementattributes/value.md): The raw value attribute of the element.
- [placeholderValue](xcuielementattributes/placeholdervalue.md): The value displayed when the element has no value.
- [title](xcuielementattributes/title.md): The title attribute of the element.
- [label](xcuielementattributes/label.md): The label attribute of the element.

### Interaction state

- [hasFocus](xcuielementattributes/hasfocus.md): The property that determines whether the element has UI focus.
- [enabled](xcuielementattributes/isenabled.md): Whether or not the element is enabled for user interaction.
- [selected](xcuielementattributes/isselected.md): The property that determines whether the element is selected.

### Size

- [frame](xcuielementattributes/frame.md): The frame of the element in the screen’s coordinate space.
- [horizontalSizeClass](xcuielementattributes/horizontalsizeclass.md): The horizontal size class of the element.
- [verticalSizeClass](xcuielementattributes/verticalsizeclass.md): The vertical size class of the element.
- [XCUIUserInterfaceSizeClass](xcuielement/sizeclass.md): The user interface size classes you can inspect in a UI test.

## Relationships

### Inherited By

- [XCUIElementSnapshot](xcuielementsnapshot.md)

### Conforming Types

- [XCUIElement](xcuielement.md)

## See Also

### UI elements

- [XCUIElement](xcuielement.md): A UI element in an application.
- [XCUIElementSnapshot](xcuielementsnapshot.md): A set of attributes to express a snapshot of an element’s attributes and descendant user interface hierarchy.
- [XCUIElementSnapshotProviding](xcuielementsnapshotproviding.md): A method to capture a snapshot of an element’s attributes and descendant user interface hierarchy.
- [XCUICoordinate](xcuicoordinate.md): A location on screen relative to a UI element.
