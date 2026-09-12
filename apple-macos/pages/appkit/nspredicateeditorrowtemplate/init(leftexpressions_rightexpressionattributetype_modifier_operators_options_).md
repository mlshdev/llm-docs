> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspredicateeditorrowtemplate/init(leftexpressions:rightexpressionattributetype:modifier:operators:options:)](https://developer.apple.com/documentation/appkit/nspredicateeditorrowtemplate/init(leftexpressions:rightexpressionattributetype:modifier:operators:options:))

# init(leftExpressions:rightExpressionAttributeType:modifier:operators:options:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Initializes and returns a “pop-up-pop-up-view”–style row template.

## Declaration

```swift
init(leftExpressions: [NSExpression], rightExpressionAttributeType attributeType: NSAttributeType, modifier: NSComparisonPredicate.Modifier, operators: [NSNumber], options: Int)
```

## Parameters

- `leftExpressions`: An array of [NSExpression](https://developer.apple.com/documentation/foundation/nsexpression) objects that represent the left side of a predicate.
- `attributeType`: An attribute type for the right side of a predicate. This value dictates the type of view created, and how the control’s object value is coerced before putting it into a predicate.
- `modifier`: A modifier for the predicate (see [NSComparisonPredicate.Modifier](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/modifier) for possible values).
- `operators`: An array of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) objects specifying the operator type (see [NSComparisonPredicate.Operator](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/operator) for possible values).
- `options`: Options for the predicate (see [NSComparisonPredicate.Options](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/options-swift.struct) for possible values).

<a id="return-value"></a>

## Return Value

A row template initialized using the specified arguments.

<a id="Discussion"></a>

## Discussion

The type of `attributeType` dictates the type of view created. For example, [NSAttributeType.dateAttributeType](https://developer.apple.com/documentation/coredata/nsattributetype/dateattributetype) creates an [NSDatePicker](../nsdatepicker.md) object, [NSAttributeType.integer64AttributeType](https://developer.apple.com/documentation/coredata/nsattributetype/integer64attributetype) creates a short text field, and [NSAttributeType.stringAttributeType](https://developer.apple.com/documentation/coredata/nsattributetype/stringattributetype) produces a longer text field. You can resize the views as you want.

Predicates do not automatically coerce types for you. For example, comparing a number to a string will raise an exception. Therefore, the attribute type is also needed to determine how the control’s object value must be coerced before putting it into a predicate.

## See Also

### Initializing a Template

- [init(leftExpressions:rightExpressions:modifier:operators:options:)](init%28leftexpressions_rightexpressions_modifier_operators_options_%29.md): Initializes and returns a “pop-up-pop-up-pop-up”–style row template.
- [init(compoundTypes:)](init%28compoundtypes_%29.md): Initializes and returns a row template suitable for displaying compound predicates.

# initWithLeftExpressions:rightExpressionAttributeType:modifier:operators:options: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Initializes and returns a “pop-up-pop-up-view”–style row template.

## Declaration

```objectivec
- (instancetype) initWithLeftExpressions:(NSArray<NSExpression *> *) leftExpressions rightExpressionAttributeType:(NSAttributeType) attributeType modifier:(NSComparisonPredicateModifier) modifier operators:(NSArray<NSNumber *> *) operators options:(NSUInteger) options;
```

## Parameters

- `leftExpressions`: An array of [NSExpression](https://developer.apple.com/documentation/foundation/nsexpression) objects that represent the left side of a predicate.
- `attributeType`: An attribute type for the right side of a predicate. This value dictates the type of view created, and how the control’s object value is coerced before putting it into a predicate.
- `modifier`: A modifier for the predicate (see [NSComparisonPredicateModifier](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/modifier) for possible values).
- `operators`: An array of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) objects specifying the operator type (see [NSPredicateOperatorType](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/operator) for possible values).
- `options`: Options for the predicate (see [NSComparisonPredicateOptions](https://developer.apple.com/documentation/foundation/nscomparisonpredicate/options-swift.struct) for possible values).

<a id="return-value"></a>

## Return Value

A row template initialized using the specified arguments.

<a id="Discussion"></a>

## Discussion

The type of `attributeType` dictates the type of view created. For example, [NSDateAttributeType](https://developer.apple.com/documentation/coredata/nsattributetype/dateattributetype) creates an [NSDatePicker](../nsdatepicker.md) object, [NSInteger64AttributeType](https://developer.apple.com/documentation/coredata/nsattributetype/integer64attributetype) creates a short text field, and [NSStringAttributeType](https://developer.apple.com/documentation/coredata/nsattributetype/stringattributetype) produces a longer text field. You can resize the views as you want.

Predicates do not automatically coerce types for you. For example, comparing a number to a string will raise an exception. Therefore, the attribute type is also needed to determine how the control’s object value must be coerced before putting it into a predicate.

## See Also

### Initializing a Template

- [initWithLeftExpressions:rightExpressions:modifier:operators:options:](init%28leftexpressions_rightexpressions_modifier_operators_options_%29.md): Initializes and returns a “pop-up-pop-up-pop-up”–style row template.
- [initWithCompoundTypes:](init%28compoundtypes_%29.md): Initializes and returns a row template suitable for displaying compound predicates.
