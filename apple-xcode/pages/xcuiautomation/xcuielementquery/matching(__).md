> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielementquery/matching(_:)](https://developer.apple.com/documentation/xcuiautomation/xcuielementquery/matching(_:))

# matching(\_:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Returns a new query that matches elements that meet the logical conditions of the provided predicate.

## Declaration

```swift
func matching(_ predicate: NSPredicate) -> XCUIElementQuery
```

## Parameters

- `predicate`: The predicate used to evaluate each element.

<a id="return-value"></a>

## Return Value

A new query that defines a search that extends the search criteria of the receiver. The new search matches elements that match the original search and also meet the logical conditions of the provided predicate.

<a id="Discussion"></a>

## Discussion

The predicate evaluates against objects that conform to the [XCUIElementAttributes](../xcuielementattributes.md) protocol.

> **Note**

>  Where possible, use [NSExpression](https://developer.apple.com/documentation/foundation/nsexpression)-based or format-string-based predicates with this method in preference to block-based predicates. This enables the framework to optimize the query’s performance.

## See Also

### Creating new queries

- [children(matching:)](children%28matching_%29.md): Returns a new query that matches all direct children of the requested type.
- [descendants(matching:)](descendants%28matching_%29.md): Returns a new query that matches all descendants of the requested type.
- [containing(\_:)](containing%28__%29.md): Returns a new query that matches elements containing a descendant that meets the logical conditions of the provided predicate.
- [containing(\_:identifier:)](containing%28__identifier_%29.md): Returns a new query that matches elements that contain a descendant of the requested type and an identifying property that matches a provided identifier.
- [matching(identifier:)](matching%28identifier_%29.md): Returns a new query that matches elements that have an identifying property that matches a provided identifier.
- [matching(\_:identifier:)](matching%28__identifier_%29.md): Returns a new query that matches elements of the requested type and have an identifying property that matches a provided identifier.

# matchingPredicate: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Returns a new query that matches elements that meet the logical conditions of the provided predicate.

## Declaration

```objectivec
- (XCUIElementQuery *) matchingPredicate:(NSPredicate *) predicate;
```

## Parameters

- `predicate`: The predicate used to evaluate each element.

<a id="return-value"></a>

## Return Value

A new query that defines a search that extends the search criteria of the receiver. The new search matches elements that match the original search and also meet the logical conditions of the provided predicate.

<a id="Discussion"></a>

## Discussion

The predicate evaluates against objects that conform to the [XCUIElementAttributes](../xcuielementattributes.md) protocol.

> **Note**

>  Where possible, use [NSExpression](https://developer.apple.com/documentation/foundation/nsexpression)-based or format-string-based predicates with this method in preference to block-based predicates. This enables the framework to optimize the query’s performance.

## See Also

### Creating new queries

- [childrenMatchingType:](children%28matching_%29.md): Returns a new query that matches all direct children of the requested type.
- [descendantsMatchingType:](descendants%28matching_%29.md): Returns a new query that matches all descendants of the requested type.
- [containingPredicate:](containing%28__%29.md): Returns a new query that matches elements containing a descendant that meets the logical conditions of the provided predicate.
- [containingType:identifier:](containing%28__identifier_%29.md): Returns a new query that matches elements that contain a descendant of the requested type and an identifying property that matches a provided identifier.
- [matchingIdentifier:](matching%28identifier_%29.md): Returns a new query that matches elements that have an identifying property that matches a provided identifier.
- [matchingType:identifier:](matching%28__identifier_%29.md): Returns a new query that matches elements of the requested type and have an identifying property that matches a provided identifier.
