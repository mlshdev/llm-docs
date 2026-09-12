> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscomparisonpredicate/predicatewithleftexpression:rightexpression:customselector:](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/predicatewithleftexpression:rightexpression:customselector:)

# predicateWithLeftExpression:rightExpression:customSelector:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new predicate formed by combining the left and right expressions using a given selector.

## Declaration

```objectivec
+ (NSComparisonPredicate *) predicateWithLeftExpression:(NSExpression *) lhs rightExpression:(NSExpression *) rhs customSelector:(SEL) selector;
```

## Parameters

- `lhs`: The left hand side expression.
- `rhs`: The right hand side expression.
- `selector`: The selector to use for comparison. The method defined by the selector must take a single argument and return a `BOOL` value.

<a id="return-value"></a>

## Return Value

A new predicate formed by combining the left and right expressions using `selector`.

## See Also

### Related Documentation

- [Predicate Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/AdditionalChapters/Introduction.html#//apple_ref/doc/uid/TP40001789)

### Creating Comparison Predicates

- [Displaying searchable content by using a search controller](../../uikit/displaying-searchable-content-by-using-a-search-controller.md): Create a user interface with searchable content in a table view.
- [predicateWithLeftExpression:rightExpression:modifier:type:options:](predicatewithleftexpression_rightexpression_modifier_type_options_.md): Creates and returns a predicate of a given type formed by combining given left and right expressions using a given modifier and options.
- [initWithLeftExpression:rightExpression:customSelector:](init%28leftexpression_rightexpression_customselector_%29.md): Creates a predicate that you form by combining specified left and right expressions using a specified selector.
- [initWithLeftExpression:rightExpression:modifier:type:options:](init%28leftexpression_rightexpression_modifier_type_options_%29.md): Creates a predicate to a specified type that you form by combining specified left and right expressions using a specified modifier and options.
- [initWithCoder:](init%28coder_%29.md): Creates a predicate by decoding from the coder you specify.
