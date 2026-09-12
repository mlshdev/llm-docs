> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/descendants(matching:)](https://developer.apple.com/documentation/xcuiautomation/xcuielement/descendants(matching:))

# descendants(matching:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Returns a query for all descendants of the element matching the type you specify.

## Declaration

```swift
func descendants(matching type: XCUIElement.ElementType) -> XCUIElementQuery
```

<a id="Discussion"></a>

## Discussion

Because [XCUIElement](../xcuielement.md) conforms to the [XCUIElementTypeQueryProvider](../xcuielementtypequeryprovider.md) protocol, you can use the protocol’s properties as shorthand for calling [descendants(matching:)](descendants%28matching_%29.md) for different element types. For example, rather than calling `table.descendants(matching: .cell)`, you can use the [cells](../xcuielementtypequeryprovider/cells.md) property from the protocol to retrieve `table.cells`.

## See Also

### Querying descendant elements

- [children(matching:)](children%28matching_%29.md): Returns a query for all direct children of the element matching the type you specify.

# descendantsMatchingType: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Returns a query for all descendants of the element matching the type you specify.

## Declaration

```objectivec
- (XCUIElementQuery *) descendantsMatchingType:(XCUIElementType) type;
```

<a id="Discussion"></a>

## Discussion

Because [XCUIElement](../xcuielement.md) conforms to the [XCUIElementTypeQueryProvider](../xcuielementtypequeryprovider.md) protocol, you can use the protocol’s properties as shorthand for calling [descendantsMatchingType:](descendants%28matching_%29.md) for different element types. For example, rather than calling `table.descendants(matching: .cell)`, you can use the [cells](../xcuielementtypequeryprovider/cells.md) property from the protocol to retrieve `table.cells`.

## See Also

### Querying descendant elements

- [childrenMatchingType:](children%28matching_%29.md): Returns a query for all direct children of the element matching the type you specify.
