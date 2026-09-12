> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscomparisonpredicate/init(leftexpression:rightexpression:customselector:)](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/init(leftexpression:rightexpression:customselector:))

# init(leftExpression:rightExpression:customSelector:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a predicate that you form by combining specified left and right expressions using a specified selector.

## Declaration

```swift
init(leftExpression lhs: NSExpression, rightExpression rhs: NSExpression, customSelector selector: Selector)
```

## Parameters

- `lhs`: The left hand expression.
- `rhs`: The right hand expression.
- `selector`: The selector to use. The method defined by the selector must take a single argument and return a `BOOL` value.

<a id="return-value"></a>

## Return Value

The receiver, initialized by combining the left and right expressions using `selector`.

## See Also

### Creating Comparison Predicates

- [Displaying searchable content by using a search controller](../../uikit/displaying-searchable-content-by-using-a-search-controller.md): Create a user interface with searchable content in a table view.
- [init(leftExpression:rightExpression:modifier:type:options:)](init%28leftexpression_rightexpression_modifier_type_options_%29.md): Creates a predicate to a specified type that you form by combining specified left and right expressions using a specified modifier and options.
- [init(coder:)](init%28coder_%29.md): Creates a predicate by decoding from the coder you specify.

# initWithLeftExpression:rightExpression:customSelector: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a predicate that you form by combining specified left and right expressions using a specified selector.

## Declaration

```objectivec
- (instancetype) initWithLeftExpression:(NSExpression *) lhs rightExpression:(NSExpression *) rhs customSelector:(SEL) selector;
```

## Parameters

- `lhs`: The left hand expression.
- `rhs`: The right hand expression.
- `selector`: The selector to use. The method defined by the selector must take a single argument and return a `BOOL` value.

<a id="return-value"></a>

## Return Value

The receiver, initialized by combining the left and right expressions using `selector`.

## See Also

### Creating Comparison Predicates

- [Displaying searchable content by using a search controller](../../uikit/displaying-searchable-content-by-using-a-search-controller.md): Create a user interface with searchable content in a table view.
- [predicateWithLeftExpression:rightExpression:customSelector:](predicatewithleftexpression_rightexpression_customselector_.md): Returns a new predicate formed by combining the left and right expressions using a given selector.
- [predicateWithLeftExpression:rightExpression:modifier:type:options:](predicatewithleftexpression_rightexpression_modifier_type_options_.md): Creates and returns a predicate of a given type formed by combining given left and right expressions using a given modifier and options.
- [initWithLeftExpression:rightExpression:modifier:type:options:](init%28leftexpression_rightexpression_modifier_type_options_%29.md): Creates a predicate to a specified type that you form by combining specified left and right expressions using a specified modifier and options.
- [initWithCoder:](init%28coder_%29.md): Creates a predicate by decoding from the coder you specify.
