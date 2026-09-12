> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielementquery/count](https://developer.apple.com/documentation/xcuiautomation/xcuielementquery/count)

# count (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Evaluates the query and returns the number of elements that match.

## Declaration

```swift
var count: Int { get }
```

## See Also

### Accessing matched elements

- [allElementsBoundByAccessibilityElement](allelementsboundbyaccessibilityelement.md): Immediately evaluates the query and returns an array of elements bound to the resulting accessibility elements.
- [allElementsBoundByIndex](allelementsboundbyindex.md): Immediately evaluates the query and returns an array of elements bound by the index of each result.
- [element](element.md): The query’s single matching element.
- [element(boundBy:)](element%28boundby_%29.md): Uses an index into the query’s results to determine which underlying accessibility element to use.
- [element(matching:)](element%28matching_%29.md): Matches the predicate.
- [element(matching:identifier:)](element%28matching_identifier_%29.md): Matches the provided element type and identifier.
- [subscript(\_:)](subscript%28__%29.md): Returns a descendant element that matches a provided identifier.
- [element(at:)](element%28at_%29.md): Deprecated. Returns an element that resolves to the index into the query’s result set.

# count (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Evaluates the query and returns the number of elements that match.

## Declaration

```objectivec
@property (readonly) NSUInteger count;
```

## See Also

### Accessing matched elements

- [allElementsBoundByAccessibilityElement](allelementsboundbyaccessibilityelement.md): Immediately evaluates the query and returns an array of elements bound to the resulting accessibility elements.
- [allElementsBoundByIndex](allelementsboundbyindex.md): Immediately evaluates the query and returns an array of elements bound by the index of each result.
- [element](element.md): The query’s single matching element.
- [elementBoundByIndex:](element%28boundby_%29.md): Uses an index into the query’s results to determine which underlying accessibility element to use.
- [elementMatchingPredicate:](element%28matching_%29.md): Matches the predicate.
- [elementMatchingType:identifier:](element%28matching_identifier_%29.md): Matches the provided element type and identifier.
- [objectForKeyedSubscript:](subscript%28__%29.md): Returns a descendant element that matches a provided identifier.
- [elementAtIndex:](element%28at_%29.md): Deprecated. Returns an element that resolves to the index into the query’s result set.
