> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielementquery/children(matching:)](https://developer.apple.com/documentation/xcuiautomation/xcuielementquery/children(matching:))

# children(matching:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Returns a new query that matches all direct children of the requested type.

## Declaration

```swift
func children(matching type: XCUIElement.ElementType) -> XCUIElementQuery
```

## Parameters

- `type`: The element type to match.

<a id="return-value"></a>

## Return Value

A new query that defines a search that extends the search criteria of the receiver. The new search finds all direct children of elements that match the original search and are of the requested type. For a list of the types, see [XCUIElement.ElementType](../xcuielement/elementtype.md).

<a id="Discussion"></a>

## Discussion

If you need to match all descendants including elements that aren’t direct child elements, use the [descendants(matching:)](descendants%28matching_%29.md) method.

## See Also

### Creating new queries

- [descendants(matching:)](descendants%28matching_%29.md): Returns a new query that matches all descendants of the requested type.
- [containing(\_:)](containing%28__%29.md): Returns a new query that matches elements containing a descendant that meets the logical conditions of the provided predicate.
- [containing(\_:identifier:)](containing%28__identifier_%29.md): Returns a new query that matches elements that contain a descendant of the requested type and an identifying property that matches a provided identifier.
- [matching(identifier:)](matching%28identifier_%29.md): Returns a new query that matches elements that have an identifying property that matches a provided identifier.
- [matching(\_:)](matching%28__%29.md): Returns a new query that matches elements that meet the logical conditions of the provided predicate.
- [matching(\_:identifier:)](matching%28__identifier_%29.md): Returns a new query that matches elements of the requested type and have an identifying property that matches a provided identifier.

# childrenMatchingType: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Returns a new query that matches all direct children of the requested type.

## Declaration

```objectivec
- (XCUIElementQuery *) childrenMatchingType:(XCUIElementType) type;
```

## Parameters

- `type`: The element type to match.

<a id="return-value"></a>

## Return Value

A new query that defines a search that extends the search criteria of the receiver. The new search finds all direct children of elements that match the original search and are of the requested type. For a list of the types, see [XCUIElementType](../xcuielement/elementtype.md).

<a id="Discussion"></a>

## Discussion

If you need to match all descendants including elements that aren’t direct child elements, use the [descendantsMatchingType:](descendants%28matching_%29.md) method.

## See Also

### Creating new queries

- [descendantsMatchingType:](descendants%28matching_%29.md): Returns a new query that matches all descendants of the requested type.
- [containingPredicate:](containing%28__%29.md): Returns a new query that matches elements containing a descendant that meets the logical conditions of the provided predicate.
- [containingType:identifier:](containing%28__identifier_%29.md): Returns a new query that matches elements that contain a descendant of the requested type and an identifying property that matches a provided identifier.
- [matchingIdentifier:](matching%28identifier_%29.md): Returns a new query that matches elements that have an identifying property that matches a provided identifier.
- [matchingPredicate:](matching%28__%29.md): Returns a new query that matches elements that meet the logical conditions of the provided predicate.
- [matchingType:identifier:](matching%28__identifier_%29.md): Returns a new query that matches elements of the requested type and have an identifying property that matches a provided identifier.
