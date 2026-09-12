> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielementsnapshot/children](https://developer.apple.com/documentation/xcuiautomation/xcuielementsnapshot/children)

# children (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

An array of descendant user interface element snapshots.

## Declaration

```swift
var children: [any XCUIElementSnapshot] { get }
```

## See Also

### Inspecting attributes

- [dictionaryRepresentation](dictionaryrepresentation.md): A hierarchical dictionary representation of an element’s attributes, and all of an element’s user interface descendants.

# children (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

An array of descendant user interface element snapshots.

## Declaration

```objectivec
@property (readonly) NSArray<id<XCUIElementSnapshot>> * children;
```

## See Also

### Inspecting attributes

- [dictionaryRepresentation](dictionaryrepresentation.md): A hierarchical dictionary representation of an element’s attributes, and all of an element’s user interface descendants.
