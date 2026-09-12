> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielementsnapshotproviding](https://developer.apple.com/documentation/xcuiautomation/xcuielementsnapshotproviding)

# XCUIElementSnapshotProviding (Swift)

**Framework:** XCUIAutomation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A method to capture a snapshot of an element’s attributes and descendant user interface hierarchy.

## Declaration

```swift
@MainActor protocol XCUIElementSnapshotProviding : NSObjectProtocol
```

## Topics

### Providing snapshots

- [snapshot()](xcuielementsnapshotproviding/snapshot%28%29.md): Returns a snapshot of an element’s attributes and descendant user interface hierarchy.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [XCUIApplication](xcuiapplication.md)
- [XCUIElement](xcuielement.md)

## See Also

### UI elements

- [XCUIElement](xcuielement.md): A UI element in an application.
- [XCUIElementAttributes](xcuielementattributes.md): Attributes exposed by UI elements.
- [XCUIElementSnapshot](xcuielementsnapshot.md): A set of attributes to express a snapshot of an element’s attributes and descendant user interface hierarchy.
- [XCUICoordinate](xcuicoordinate.md): A location on screen relative to a UI element.

# XCUIElementSnapshotProviding (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A method to capture a snapshot of an element’s attributes and descendant user interface hierarchy.

## Declaration

```objectivec
@protocol XCUIElementSnapshotProviding <NSObject>
```

## Topics

### Providing snapshots

- [snapshotWithError:](xcuielementsnapshotproviding/snapshot%28%29.md): Returns a snapshot of an element’s attributes and descendant user interface hierarchy.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [XCUIElement](xcuielement.md)

## See Also

### UI elements

- [XCUIElement](xcuielement.md): A UI element in an application.
- [XCUIElementAttributes](xcuielementattributes.md): Attributes exposed by UI elements.
- [XCUIElementSnapshot](xcuielementsnapshot.md): A set of attributes to express a snapshot of an element’s attributes and descendant user interface hierarchy.
- [XCUICoordinate](xcuicoordinate.md): A location on screen relative to a UI element.
