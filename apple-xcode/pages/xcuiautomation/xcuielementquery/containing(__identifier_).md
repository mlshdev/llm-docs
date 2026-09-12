> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielementquery/containing(_:identifier:)](https://developer.apple.com/documentation/xcuiautomation/xcuielementquery/containing(_:identifier:))

# containing(\_:identifier:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Returns a new query that matches elements that contain a descendant of the requested type and an identifying property that matches a provided identifier.

## Declaration

```swift
func containing(_ elementType: XCUIElement.ElementType, identifier: String?) -> XCUIElementQuery
```

## Parameters

- `elementType`: The contained element type to match.
- `identifier`: An optional string to match against the contained element’s identifying properties: [identifier](../xcuielementattributes/identifier.md), [title](../xcuielementattributes/title.md), [label](../xcuielementattributes/label.md), [value](../xcuielementattributes/value.md), or [placeholderValue](../xcuielementattributes/placeholdervalue.md).

<a id="return-value"></a>

## Return Value

A new query that defines a search that extends the search criteria of the receiver. The new search finds elements that match the original search and contain elements of the requested type that have an identifying property that matches a provided identifier. For the list of the types, see [XCUIElement.ElementType](../xcuielement/elementtype.md).

## See Also

### Creating new queries

- [children(matching:)](children%28matching_%29.md): Returns a new query that matches all direct children of the requested type.
- [descendants(matching:)](descendants%28matching_%29.md): Returns a new query that matches all descendants of the requested type.
- [containing(\_:)](containing%28__%29.md): Returns a new query that matches elements containing a descendant that meets the logical conditions of the provided predicate.
- [matching(identifier:)](matching%28identifier_%29.md): Returns a new query that matches elements that have an identifying property that matches a provided identifier.
- [matching(\_:)](matching%28__%29.md): Returns a new query that matches elements that meet the logical conditions of the provided predicate.
- [matching(\_:identifier:)](matching%28__identifier_%29.md): Returns a new query that matches elements of the requested type and have an identifying property that matches a provided identifier.

# containingType:identifier: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Returns a new query that matches elements that contain a descendant of the requested type and an identifying property that matches a provided identifier.

## Declaration

```objectivec
- (XCUIElementQuery *) containingType:(XCUIElementType) elementType identifier:(NSString *) identifier;
```

## Parameters

- `elementType`: The contained element type to match.
- `identifier`: An optional string to match against the contained element’s identifying properties: [identifier](../xcuielementattributes/identifier.md), [title](../xcuielementattributes/title.md), [label](../xcuielementattributes/label.md), [value](../xcuielementattributes/value.md), or [placeholderValue](../xcuielementattributes/placeholdervalue.md).

<a id="return-value"></a>

## Return Value

A new query that defines a search that extends the search criteria of the receiver. The new search finds elements that match the original search and contain elements of the requested type that have an identifying property that matches a provided identifier. For the list of the types, see [XCUIElementType](../xcuielement/elementtype.md).

## See Also

### Creating new queries

- [childrenMatchingType:](children%28matching_%29.md): Returns a new query that matches all direct children of the requested type.
- [descendantsMatchingType:](descendants%28matching_%29.md): Returns a new query that matches all descendants of the requested type.
- [containingPredicate:](containing%28__%29.md): Returns a new query that matches elements containing a descendant that meets the logical conditions of the provided predicate.
- [matchingIdentifier:](matching%28identifier_%29.md): Returns a new query that matches elements that have an identifying property that matches a provided identifier.
- [matchingPredicate:](matching%28__%29.md): Returns a new query that matches elements that meet the logical conditions of the provided predicate.
- [matchingType:identifier:](matching%28__identifier_%29.md): Returns a new query that matches elements of the requested type and have an identifying property that matches a provided identifier.
