> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielementquery/element(matching:)](https://developer.apple.com/documentation/xcuiautomation/xcuielementquery/element(matching:))

# element(matching:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Matches the predicate.

## Declaration

```swift
func element(matching predicate: NSPredicate) -> XCUIElement
```

## Parameters

- `predicate`: The predicate to match.

<a id="Discussion"></a>

## Discussion

The predicate evaluates against objects that conform to the [XCUIElementAttributes](../xcuielementattributes.md) protocol.

> **Note**

>  Where possible, use [NSExpression](https://developer.apple.com/documentation/foundation/nsexpression)-based or format-string-based predicates with this method in preference to block-based predicates. This enables the framework to optimize the query’s performance.

## See Also

### Accessing matched elements

- [allElementsBoundByAccessibilityElement](allelementsboundbyaccessibilityelement.md): Immediately evaluates the query and returns an array of elements bound to the resulting accessibility elements.
- [allElementsBoundByIndex](allelementsboundbyindex.md): Immediately evaluates the query and returns an array of elements bound by the index of each result.
- [count](count.md): Evaluates the query and returns the number of elements that match.
- [element](element.md): The query’s single matching element.
- [element(boundBy:)](element%28boundby_%29.md): Uses an index into the query’s results to determine which underlying accessibility element to use.
- [element(matching:identifier:)](element%28matching_identifier_%29.md): Matches the provided element type and identifier.
- [subscript(\_:)](subscript%28__%29.md): Returns a descendant element that matches a provided identifier.
- [element(at:)](element%28at_%29.md): Deprecated. Returns an element that resolves to the index into the query’s result set.

# elementMatchingPredicate: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Matches the predicate.

## Declaration

```objectivec
- (XCUIElement *) elementMatchingPredicate:(NSPredicate *) predicate;
```

## Parameters

- `predicate`: The predicate to match.

<a id="Discussion"></a>

## Discussion

The predicate evaluates against objects that conform to the [XCUIElementAttributes](../xcuielementattributes.md) protocol.

> **Note**

>  Where possible, use [NSExpression](https://developer.apple.com/documentation/foundation/nsexpression)-based or format-string-based predicates with this method in preference to block-based predicates. This enables the framework to optimize the query’s performance.

## See Also

### Accessing matched elements

- [allElementsBoundByAccessibilityElement](allelementsboundbyaccessibilityelement.md): Immediately evaluates the query and returns an array of elements bound to the resulting accessibility elements.
- [allElementsBoundByIndex](allelementsboundbyindex.md): Immediately evaluates the query and returns an array of elements bound by the index of each result.
- [count](count.md): Evaluates the query and returns the number of elements that match.
- [element](element.md): The query’s single matching element.
- [elementBoundByIndex:](element%28boundby_%29.md): Uses an index into the query’s results to determine which underlying accessibility element to use.
- [elementMatchingType:identifier:](element%28matching_identifier_%29.md): Matches the provided element type and identifier.
- [objectForKeyedSubscript:](subscript%28__%29.md): Returns a descendant element that matches a provided identifier.
- [elementAtIndex:](element%28at_%29.md): Deprecated. Returns an element that resolves to the index into the query’s result set.
