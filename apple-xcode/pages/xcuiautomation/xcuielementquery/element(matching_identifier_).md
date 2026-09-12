> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielementquery/element(matching:identifier:)](https://developer.apple.com/documentation/xcuiautomation/xcuielementquery/element(matching:identifier:))

# element(matching:identifier:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Matches the provided element type and identifier.

## Declaration

```swift
func element(matching elementType: XCUIElement.ElementType, identifier: String?) -> XCUIElement
```

## Parameters

- `elementType`: The element type to match.
- `identifier`: An optional identifier string to match against any one of each element’s identifying properties: [identifier](../xcuielementattributes/identifier.md), [title](../xcuielementattributes/title.md), [label](../xcuielementattributes/label.md), [value](../xcuielementattributes/value.md), or [placeholderValue](../xcuielementattributes/placeholdervalue.md).

## See Also

### Accessing matched elements

- [allElementsBoundByAccessibilityElement](allelementsboundbyaccessibilityelement.md): Immediately evaluates the query and returns an array of elements bound to the resulting accessibility elements.
- [allElementsBoundByIndex](allelementsboundbyindex.md): Immediately evaluates the query and returns an array of elements bound by the index of each result.
- [count](count.md): Evaluates the query and returns the number of elements that match.
- [element](element.md): The query’s single matching element.
- [element(boundBy:)](element%28boundby_%29.md): Uses an index into the query’s results to determine which underlying accessibility element to use.
- [element(matching:)](element%28matching_%29.md): Matches the predicate.
- [subscript(\_:)](subscript%28__%29.md): Returns a descendant element that matches a provided identifier.
- [element(at:)](element%28at_%29.md): Deprecated. Returns an element that resolves to the index into the query’s result set.

# elementMatchingType:identifier: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Matches the provided element type and identifier.

## Declaration

```objectivec
- (XCUIElement *) elementMatchingType:(XCUIElementType) elementType identifier:(NSString *) identifier;
```

## Parameters

- `elementType`: The element type to match.
- `identifier`: An optional identifier string to match against any one of each element’s identifying properties: [identifier](../xcuielementattributes/identifier.md), [title](../xcuielementattributes/title.md), [label](../xcuielementattributes/label.md), [value](../xcuielementattributes/value.md), or [placeholderValue](../xcuielementattributes/placeholdervalue.md).

## See Also

### Accessing matched elements

- [allElementsBoundByAccessibilityElement](allelementsboundbyaccessibilityelement.md): Immediately evaluates the query and returns an array of elements bound to the resulting accessibility elements.
- [allElementsBoundByIndex](allelementsboundbyindex.md): Immediately evaluates the query and returns an array of elements bound by the index of each result.
- [count](count.md): Evaluates the query and returns the number of elements that match.
- [element](element.md): The query’s single matching element.
- [elementBoundByIndex:](element%28boundby_%29.md): Uses an index into the query’s results to determine which underlying accessibility element to use.
- [elementMatchingPredicate:](element%28matching_%29.md): Matches the predicate.
- [objectForKeyedSubscript:](subscript%28__%29.md): Returns a descendant element that matches a provided identifier.
- [elementAtIndex:](element%28at_%29.md): Deprecated. Returns an element that resolves to the index into the query’s result set.
