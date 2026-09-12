> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielementsnapshot/dictionaryrepresentation](https://developer.apple.com/documentation/xcuiautomation/xcuielementsnapshot/dictionaryrepresentation)

# dictionaryRepresentation (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A hierarchical dictionary representation of an element’s attributes, and all of an element’s user interface descendants.

## Declaration

```swift
var dictionaryRepresentation: [XCUIElement.AttributeName : Any] { get }
```

## See Also

### Inspecting attributes

- [children](children.md): An array of descendant user interface element snapshots.

# dictionaryRepresentation (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A hierarchical dictionary representation of an element’s attributes, and all of an element’s user interface descendants.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,id> * dictionaryRepresentation;
```

## See Also

### Inspecting attributes

- [children](children.md): An array of descendant user interface element snapshots.
