> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/children(matching:)](https://developer.apple.com/documentation/xcuiautomation/xcuielement/children(matching:))

# children(matching:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Returns a query for all direct children of the element matching the type you specify.

## Declaration

```swift
func children(matching type: XCUIElement.ElementType) -> XCUIElementQuery
```

## See Also

### Querying descendant elements

- [descendants(matching:)](descendants%28matching_%29.md): Returns a query for all descendants of the element matching the type you specify.

# childrenMatchingType: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Returns a query for all direct children of the element matching the type you specify.

## Declaration

```objectivec
- (XCUIElementQuery *) childrenMatchingType:(XCUIElementType) type;
```

## See Also

### Querying descendant elements

- [descendantsMatchingType:](descendants%28matching_%29.md): Returns a query for all descendants of the element matching the type you specify.
