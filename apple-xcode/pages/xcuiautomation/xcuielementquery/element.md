> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielementquery/element](https://developer.apple.com/documentation/xcuiautomation/xcuielementquery/element)

# element (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

The query’s single matching element.

## Declaration

```swift
var element: XCUIElement { get }
```

<a id="Discussion"></a>

## Discussion

Use the [element](element.md) property to access a query’s result when you expect a single matching element for the query, but want to check for multiple ambiguous matches before accessing the result. The [element](element.md) property traverses your app’s accessibility tree to check for multiple matching elements before returning, and fails the current test if there isn’t a single matching element.

In cases where you know categorically that there’s a single matching element, use the [XCUIElementTypeQueryProvider](../xcuielementtypequeryprovider.md) [firstMatch](../xcuielementtypequeryprovider/firstmatch.md) property instead. The [firstMatch](../xcuielementtypequeryprovider/firstmatch.md) property stops traversing your app’s accessibility hierarchy as soon as it finds a matching element, speeding up element query resolution.

## See Also

### Related Documentation

- [firstMatch](../xcuielementtypequeryprovider/firstmatch.md): The first element that matches the query.

### Accessing matched elements

- [allElementsBoundByAccessibilityElement](allelementsboundbyaccessibilityelement.md): Immediately evaluates the query and returns an array of elements bound to the resulting accessibility elements.
- [allElementsBoundByIndex](allelementsboundbyindex.md): Immediately evaluates the query and returns an array of elements bound by the index of each result.
- [count](count.md): Evaluates the query and returns the number of elements that match.
- [element(boundBy:)](element%28boundby_%29.md): Uses an index into the query’s results to determine which underlying accessibility element to use.
- [element(matching:)](element%28matching_%29.md): Matches the predicate.
- [element(matching:identifier:)](element%28matching_identifier_%29.md): Matches the provided element type and identifier.
- [subscript(\_:)](subscript%28__%29.md): Returns a descendant element that matches a provided identifier.
- [element(at:)](element%28at_%29.md): Deprecated. Returns an element that resolves to the index into the query’s result set.

# element (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

The query’s single matching element.

## Declaration

```objectivec
@property (readonly) XCUIElement * element;
```

<a id="Discussion"></a>

## Discussion

Use the [element](element.md) property to access a query’s result when you expect a single matching element for the query, but want to check for multiple ambiguous matches before accessing the result. The [element](element.md) property traverses your app’s accessibility tree to check for multiple matching elements before returning, and fails the current test if there isn’t a single matching element.

In cases where you know categorically that there’s a single matching element, use the [XCUIElementTypeQueryProvider](../xcuielementtypequeryprovider.md) [firstMatch](../xcuielementtypequeryprovider/firstmatch.md) property instead. The [firstMatch](../xcuielementtypequeryprovider/firstmatch.md) property stops traversing your app’s accessibility hierarchy as soon as it finds a matching element, speeding up element query resolution.

## See Also

### Related Documentation

- [firstMatch](../xcuielementtypequeryprovider/firstmatch.md): The first element that matches the query.

### Accessing matched elements

- [allElementsBoundByAccessibilityElement](allelementsboundbyaccessibilityelement.md): Immediately evaluates the query and returns an array of elements bound to the resulting accessibility elements.
- [allElementsBoundByIndex](allelementsboundbyindex.md): Immediately evaluates the query and returns an array of elements bound by the index of each result.
- [count](count.md): Evaluates the query and returns the number of elements that match.
- [elementBoundByIndex:](element%28boundby_%29.md): Uses an index into the query’s results to determine which underlying accessibility element to use.
- [elementMatchingPredicate:](element%28matching_%29.md): Matches the predicate.
- [elementMatchingType:identifier:](element%28matching_identifier_%29.md): Matches the provided element type and identifier.
- [objectForKeyedSubscript:](subscript%28__%29.md): Returns a descendant element that matches a provided identifier.
- [elementAtIndex:](element%28at_%29.md): Deprecated. Returns an element that resolves to the index into the query’s result set.
