> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielementsnapshot](https://developer.apple.com/documentation/xcuiautomation/xcuielementsnapshot)

# XCUIElementSnapshot (Swift)

**Framework:** XCUIAutomation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A set of attributes to express a snapshot of an element’s attributes and descendant user interface hierarchy.

## Declaration

```swift
@MainActor protocol XCUIElementSnapshot : XCUIElementAttributes
```

## Topics

### Inspecting attributes

- [children](xcuielementsnapshot/children.md): An array of descendant user interface element snapshots.
- [dictionaryRepresentation](xcuielementsnapshot/dictionaryrepresentation.md): A hierarchical dictionary representation of an element’s attributes, and all of an element’s user interface descendants.

## Relationships

### Inherits From

- [XCUIElementAttributes](xcuielementattributes.md)

## See Also

### UI elements

- [XCUIElement](xcuielement.md): A UI element in an application.
- [XCUIElementAttributes](xcuielementattributes.md): Attributes exposed by UI elements.
- [XCUIElementSnapshotProviding](xcuielementsnapshotproviding.md): A method to capture a snapshot of an element’s attributes and descendant user interface hierarchy.
- [XCUICoordinate](xcuicoordinate.md): A location on screen relative to a UI element.

# XCUIElementSnapshot (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A set of attributes to express a snapshot of an element’s attributes and descendant user interface hierarchy.

## Declaration

```objectivec
@protocol XCUIElementSnapshot <XCUIElementAttributes>
```

## Topics

### Inspecting attributes

- [children](xcuielementsnapshot/children.md): An array of descendant user interface element snapshots.
- [dictionaryRepresentation](xcuielementsnapshot/dictionaryrepresentation.md): A hierarchical dictionary representation of an element’s attributes, and all of an element’s user interface descendants.

## Relationships

### Inherits From

- [XCUIElementAttributes](xcuielementattributes.md)

## See Also

### UI elements

- [XCUIElement](xcuielement.md): A UI element in an application.
- [XCUIElementAttributes](xcuielementattributes.md): Attributes exposed by UI elements.
- [XCUIElementSnapshotProviding](xcuielementsnapshotproviding.md): A method to capture a snapshot of an element’s attributes and descendant user interface hierarchy.
- [XCUICoordinate](xcuicoordinate.md): A location on screen relative to a UI element.
