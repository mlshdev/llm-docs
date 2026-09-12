> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/expressiontype-swift.enum/aggregate](https://developer.apple.com/documentation/foundation/nsexpression/expressiontype-swift.enum/aggregate)

# NSExpression.ExpressionType.aggregate (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An expression that defines an aggregate of `NSExpression` objects.

## Declaration

```swift
case aggregate
```

## See Also

### Constants

- [NSExpression.ExpressionType.constantValue](constantvalue.md): An expression that always returns the same value.
- [NSExpression.ExpressionType.evaluatedObject](evaluatedobject.md): An expression that always returns the parameter object itself.
- [NSExpression.ExpressionType.variable](variable.md): An expression that always returns whatever value is associated with the key specified by ‘variable’ in the bindings dictionary.
- [NSExpression.ExpressionType.keyPath](keypath.md): An expression that returns something that can be used as a key path.
- [NSExpression.ExpressionType.function](function.md): An expression that returns the result of evaluating a function.
- [NSExpression.ExpressionType.unionSet](unionset.md): An expression that creates a union of the results of two nested expressions.
- [NSExpression.ExpressionType.intersectSet](intersectset.md): An expression that creates an intersection of the results of two nested expressions.
- [NSExpression.ExpressionType.minusSet](minusset.md): An expression that combines two nested expression results by set subtraction.
- [NSExpression.ExpressionType.subquery](subquery.md): An expression that filters a collection using a subpredicate.
- [NSExpression.ExpressionType.anyKey](anykey.md): An expression that represents any key.
- [NSExpression.ExpressionType.block](block.md): An expression that uses a Block.
- [NSExpression.ExpressionType.conditional](conditional.md): A conditional expression that evaluates a predicate to determine which expression to return.

# NSAggregateExpressionType (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An expression that defines an aggregate of `NSExpression` objects.

## Declaration

```objectivec
NSAggregateExpressionType
```

## See Also

### Constants

- [NSConstantValueExpressionType](constantvalue.md): An expression that always returns the same value.
- [NSEvaluatedObjectExpressionType](evaluatedobject.md): An expression that always returns the parameter object itself.
- [NSVariableExpressionType](variable.md): An expression that always returns whatever value is associated with the key specified by ‘variable’ in the bindings dictionary.
- [NSKeyPathExpressionType](keypath.md): An expression that returns something that can be used as a key path.
- [NSFunctionExpressionType](function.md): An expression that returns the result of evaluating a function.
- [NSUnionSetExpressionType](unionset.md): An expression that creates a union of the results of two nested expressions.
- [NSIntersectSetExpressionType](intersectset.md): An expression that creates an intersection of the results of two nested expressions.
- [NSMinusSetExpressionType](minusset.md): An expression that combines two nested expression results by set subtraction.
- [NSSubqueryExpressionType](subquery.md): An expression that filters a collection using a subpredicate.
- [NSAnyKeyExpressionType](anykey.md): An expression that represents any key.
- [NSBlockExpressionType](block.md): An expression that uses a Block.
- [NSConditionalExpressionType](conditional.md): A conditional expression that evaluates a predicate to determine which expression to return.
