> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielementquery/matching(identifier:)](https://developer.apple.com/documentation/xcuiautomation/xcuielementquery/matching(identifier:))

# matching(identifier:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Returns a new query that matches elements that have an identifying property that matches a provided identifier.

## Declaration

```swift
func matching(identifier: String) -> XCUIElementQuery
```

## Parameters

- `identifier`: A string to match against any one of each element’s identifying properties: [identifier](../xcuielementattributes/identifier.md), [title](../xcuielementattributes/title.md), [label](../xcuielementattributes/label.md), [value](../xcuielementattributes/value.md), or [placeholderValue](../xcuielementattributes/placeholdervalue.md).

<a id="return-value"></a>

## Return Value

A new query that defines a search that extends the search criteria of the receiver. The new search matches elements that match the original search and have an identifying property that matches a provided identifier.

## See Also

### Creating new queries

- [children(matching:)](children%28matching_%29.md): Returns a new query that matches all direct children of the requested type.
- [descendants(matching:)](descendants%28matching_%29.md): Returns a new query that matches all descendants of the requested type.
- [containing(\_:)](containing%28__%29.md): Returns a new query that matches elements containing a descendant that meets the logical conditions of the provided predicate.
- [containing(\_:identifier:)](containing%28__identifier_%29.md): Returns a new query that matches elements that contain a descendant of the requested type and an identifying property that matches a provided identifier.
- [matching(\_:)](matching%28__%29.md): Returns a new query that matches elements that meet the logical conditions of the provided predicate.
- [matching(\_:identifier:)](matching%28__identifier_%29.md): Returns a new query that matches elements of the requested type and have an identifying property that matches a provided identifier.

# matchingIdentifier: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Returns a new query that matches elements that have an identifying property that matches a provided identifier.

## Declaration

```objectivec
- (XCUIElementQuery *) matchingIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: A string to match against any one of each element’s identifying properties: [identifier](../xcuielementattributes/identifier.md), [title](../xcuielementattributes/title.md), [label](../xcuielementattributes/label.md), [value](../xcuielementattributes/value.md), or [placeholderValue](../xcuielementattributes/placeholdervalue.md).

<a id="return-value"></a>

## Return Value

A new query that defines a search that extends the search criteria of the receiver. The new search matches elements that match the original search and have an identifying property that matches a provided identifier.

## See Also

### Creating new queries

- [childrenMatchingType:](children%28matching_%29.md): Returns a new query that matches all direct children of the requested type.
- [descendantsMatchingType:](descendants%28matching_%29.md): Returns a new query that matches all descendants of the requested type.
- [containingPredicate:](containing%28__%29.md): Returns a new query that matches elements containing a descendant that meets the logical conditions of the provided predicate.
- [containingType:identifier:](containing%28__identifier_%29.md): Returns a new query that matches elements that contain a descendant of the requested type and an identifying property that matches a provided identifier.
- [matchingPredicate:](matching%28__%29.md): Returns a new query that matches elements that meet the logical conditions of the provided predicate.
- [matchingType:identifier:](matching%28__identifier_%29.md): Returns a new query that matches elements of the requested type and have an identifying property that matches a provided identifier.
