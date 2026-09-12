> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscomparisonpredicate/init(coder:)](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/init(coder:))

# init(coder:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a predicate by decoding from the coder you specify.

## Declaration

```swift
init?(coder: NSCoder)
```

## Parameters

- `coder`: The coder to read data from.

## See Also

### Creating Comparison Predicates

- [Displaying searchable content by using a search controller](../../uikit/displaying-searchable-content-by-using-a-search-controller.md): Create a user interface with searchable content in a table view.
- [init(leftExpression:rightExpression:customSelector:)](init%28leftexpression_rightexpression_customselector_%29.md): Creates a predicate that you form by combining specified left and right expressions using a specified selector.
- [init(leftExpression:rightExpression:modifier:type:options:)](init%28leftexpression_rightexpression_modifier_type_options_%29.md): Creates a predicate to a specified type that you form by combining specified left and right expressions using a specified modifier and options.

# initWithCoder: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a predicate by decoding from the coder you specify.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The coder to read data from.

## See Also

### Creating Comparison Predicates

- [Displaying searchable content by using a search controller](../../uikit/displaying-searchable-content-by-using-a-search-controller.md): Create a user interface with searchable content in a table view.
- [predicateWithLeftExpression:rightExpression:customSelector:](predicatewithleftexpression_rightexpression_customselector_.md): Returns a new predicate formed by combining the left and right expressions using a given selector.
- [predicateWithLeftExpression:rightExpression:modifier:type:options:](predicatewithleftexpression_rightexpression_modifier_type_options_.md): Creates and returns a predicate of a given type formed by combining given left and right expressions using a given modifier and options.
- [initWithLeftExpression:rightExpression:customSelector:](init%28leftexpression_rightexpression_customselector_%29.md): Creates a predicate that you form by combining specified left and right expressions using a specified selector.
- [initWithLeftExpression:rightExpression:modifier:type:options:](init%28leftexpression_rightexpression_modifier_type_options_%29.md): Creates a predicate to a specified type that you form by combining specified left and right expressions using a specified modifier and options.
