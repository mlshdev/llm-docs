> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielementquery/element(boundby:)](https://developer.apple.com/documentation/xcuiautomation/xcuielementquery/element(boundby:))

# element(boundBy:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Uses an index into the query’s results to determine which underlying accessibility element to use.

## Declaration

```swift
func element(boundBy index: Int) -> XCUIElement
```

## Parameters

- `index`: The element index to use.

## See Also

### Accessing matched elements

- [allElementsBoundByAccessibilityElement](allelementsboundbyaccessibilityelement.md): Immediately evaluates the query and returns an array of elements bound to the resulting accessibility elements.
- [allElementsBoundByIndex](allelementsboundbyindex.md): Immediately evaluates the query and returns an array of elements bound by the index of each result.
- [count](count.md): Evaluates the query and returns the number of elements that match.
- [element](element.md): The query’s single matching element.
- [element(matching:)](element%28matching_%29.md): Matches the predicate.
- [element(matching:identifier:)](element%28matching_identifier_%29.md): Matches the provided element type and identifier.
- [subscript(\_:)](subscript%28__%29.md): Returns a descendant element that matches a provided identifier.
- [element(at:)](element%28at_%29.md): Deprecated. Returns an element that resolves to the index into the query’s result set.

# elementBoundByIndex: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Uses an index into the query’s results to determine which underlying accessibility element to use.

## Declaration

```objectivec
- (XCUIElement *) elementBoundByIndex:(NSUInteger) index;
```

## Parameters

- `index`: The element index to use.

## See Also

### Accessing matched elements

- [allElementsBoundByAccessibilityElement](allelementsboundbyaccessibilityelement.md): Immediately evaluates the query and returns an array of elements bound to the resulting accessibility elements.
- [allElementsBoundByIndex](allelementsboundbyindex.md): Immediately evaluates the query and returns an array of elements bound by the index of each result.
- [count](count.md): Evaluates the query and returns the number of elements that match.
- [element](element.md): The query’s single matching element.
- [elementMatchingPredicate:](element%28matching_%29.md): Matches the predicate.
- [elementMatchingType:identifier:](element%28matching_identifier_%29.md): Matches the provided element type and identifier.
- [objectForKeyedSubscript:](subscript%28__%29.md): Returns a descendant element that matches a provided identifier.
- [elementAtIndex:](element%28at_%29.md): Deprecated. Returns an element that resolves to the index into the query’s result set.
