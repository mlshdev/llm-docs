> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspredicateeditorrowtemplate/init(leftexpressions:rightexpressions:modifier:operators:options:)](https://developer.apple.com/documentation/appkit/nspredicateeditorrowtemplate/init(leftexpressions:rightexpressions:modifier:operators:options:))

# init(leftExpressions:rightExpressions:modifier:operators:options:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Initializes and returns a “pop-up-pop-up-pop-up”–style row template.

## Declaration

```swift
init(leftExpressions: [NSExpression], rightExpressions: [NSExpression], modifier: NSComparisonPredicate.Modifier, operators: [NSNumber], options: Int)
```

## Parameters

- `leftExpressions`: An array of [NSExpression](https://developer.apple.com/documentation/foundation/nsexpression) objects that represent the left side of a predicate.
- `rightExpressions`: An array of [NSExpression](https://developer.apple.com/documentation/foundation/nsexpression) objects that represent the right side of a predicate.
- `modifier`: A modifier for the predicate (see [NSComparisonPredicate.Modifier](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/modifier) for possible values).
- `operators`: An array of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) objects specifying the operator type (see [NSComparisonPredicate.Operator](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/operator) for possible values).
- `options`: Options for the predicate (see [NSComparisonPredicate.Options](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/options-swift.struct) for possible values).

<a id="return-value"></a>

## Return Value

A row template of the “pop-up-pop-up-pop-up” form, with the left and right pop-ups representing the left and right expression arrays `leftExpressions` and `rightExpressions`, and the center pop-up representing the operators.

## See Also

### Related Documentation

- [NSPredicateEditorRowTemplate](../nspredicateeditorrowtemplate.md): A template that describes available predicates and how to display them.

### Initializing a Template

- [init(leftExpressions:rightExpressionAttributeType:modifier:operators:options:)](init%28leftexpressions_rightexpressionattributetype_modifier_operators_options_%29.md): Initializes and returns a “pop-up-pop-up-view”–style row template.
- [init(compoundTypes:)](init%28compoundtypes_%29.md): Initializes and returns a row template suitable for displaying compound predicates.

# initWithLeftExpressions:rightExpressions:modifier:operators:options: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Initializes and returns a “pop-up-pop-up-pop-up”–style row template.

## Declaration

```objectivec
- (instancetype) initWithLeftExpressions:(NSArray<NSExpression *> *) leftExpressions rightExpressions:(NSArray<NSExpression *> *) rightExpressions modifier:(NSComparisonPredicateModifier) modifier operators:(NSArray<NSNumber *> *) operators options:(NSUInteger) options;
```

## Parameters

- `leftExpressions`: An array of [NSExpression](https://developer.apple.com/documentation/foundation/nsexpression) objects that represent the left side of a predicate.
- `rightExpressions`: An array of [NSExpression](https://developer.apple.com/documentation/foundation/nsexpression) objects that represent the right side of a predicate.
- `modifier`: A modifier for the predicate (see [NSComparisonPredicateModifier](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/modifier) for possible values).
- `operators`: An array of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) objects specifying the operator type (see [NSPredicateOperatorType](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/operator) for possible values).
- `options`: Options for the predicate (see [NSComparisonPredicateOptions](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/options-swift.struct) for possible values).

<a id="return-value"></a>

## Return Value

A row template of the “pop-up-pop-up-pop-up” form, with the left and right pop-ups representing the left and right expression arrays `leftExpressions` and `rightExpressions`, and the center pop-up representing the operators.

## See Also

### Related Documentation

- [NSPredicateEditorRowTemplate](../nspredicateeditorrowtemplate.md): A template that describes available predicates and how to display them.

### Initializing a Template

- [initWithLeftExpressions:rightExpressionAttributeType:modifier:operators:options:](init%28leftexpressions_rightexpressionattributetype_modifier_operators_options_%29.md): Initializes and returns a “pop-up-pop-up-view”–style row template.
- [initWithCompoundTypes:](init%28compoundtypes_%29.md): Initializes and returns a row template suitable for displaying compound predicates.
