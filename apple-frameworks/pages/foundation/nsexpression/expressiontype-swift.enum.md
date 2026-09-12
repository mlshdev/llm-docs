> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/expressiontype-swift.enum](https://developer.apple.com/documentation/foundation/nsexpression/expressiontype-swift.enum)

# NSExpression.ExpressionType (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Defines the possible types of an expression.

## Declaration

```swift
enum ExpressionType
```

## Topics

### Constants

- [NSExpression.ExpressionType.constantValue](expressiontype-swift.enum/constantvalue.md): An expression that always returns the same value.
- [NSExpression.ExpressionType.evaluatedObject](expressiontype-swift.enum/evaluatedobject.md): An expression that always returns the parameter object itself.
- [NSExpression.ExpressionType.variable](expressiontype-swift.enum/variable.md): An expression that always returns whatever value is associated with the key specified by ‘variable’ in the bindings dictionary.
- [NSExpression.ExpressionType.keyPath](expressiontype-swift.enum/keypath.md): An expression that returns something that can be used as a key path.
- [NSExpression.ExpressionType.function](expressiontype-swift.enum/function.md): An expression that returns the result of evaluating a function.
- [NSExpression.ExpressionType.unionSet](expressiontype-swift.enum/unionset.md): An expression that creates a union of the results of two nested expressions.
- [NSExpression.ExpressionType.intersectSet](expressiontype-swift.enum/intersectset.md): An expression that creates an intersection of the results of two nested expressions.
- [NSExpression.ExpressionType.minusSet](expressiontype-swift.enum/minusset.md): An expression that combines two nested expression results by set subtraction.
- [NSExpression.ExpressionType.subquery](expressiontype-swift.enum/subquery.md): An expression that filters a collection using a subpredicate.
- [NSExpression.ExpressionType.aggregate](expressiontype-swift.enum/aggregate.md): An expression that defines an aggregate of `NSExpression` objects.
- [NSExpression.ExpressionType.anyKey](expressiontype-swift.enum/anykey.md): An expression that represents any key.
- [NSExpression.ExpressionType.block](expressiontype-swift.enum/block.md): An expression that uses a Block.
- [NSExpression.ExpressionType.conditional](expressiontype-swift.enum/conditional.md): A conditional expression that evaluates a predicate to determine which expression to return.

### Initializers

- [init(rawValue:)](expressiontype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Information About an Expression

- [arguments](arguments.md): The arguments for the expression.
- [collection](collection.md): The collection of expressions in an aggregate expression, or the collection element of a subquery expression.
- [constantValue](constantvalue.md): The constant value of the expression.
- [expressionType](expressiontype-swift.property.md): The expression type for the expression.
- [function](function.md): The function for the expression.
- [keyPath](keypath.md): The key path for the expression.
- [operand](operand.md): The operand for the expression.
- [predicate](predicate.md): The predicate of a subquery expression.
- [left](left.md): The left expression of an aggregate expression.
- [right](right.md): The right expression of an aggregate expression.
- [variable](variable.md): The variable for the expression.

# NSExpressionType (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Defines the possible types of an expression.

## Declaration

```objectivec
enum NSExpressionType : NSUInteger;
```

## Topics

### Constants

- [NSConstantValueExpressionType](expressiontype-swift.enum/constantvalue.md): An expression that always returns the same value.
- [NSEvaluatedObjectExpressionType](expressiontype-swift.enum/evaluatedobject.md): An expression that always returns the parameter object itself.
- [NSVariableExpressionType](expressiontype-swift.enum/variable.md): An expression that always returns whatever value is associated with the key specified by ‘variable’ in the bindings dictionary.
- [NSKeyPathExpressionType](expressiontype-swift.enum/keypath.md): An expression that returns something that can be used as a key path.
- [NSFunctionExpressionType](expressiontype-swift.enum/function.md): An expression that returns the result of evaluating a function.
- [NSUnionSetExpressionType](expressiontype-swift.enum/unionset.md): An expression that creates a union of the results of two nested expressions.
- [NSIntersectSetExpressionType](expressiontype-swift.enum/intersectset.md): An expression that creates an intersection of the results of two nested expressions.
- [NSMinusSetExpressionType](expressiontype-swift.enum/minusset.md): An expression that combines two nested expression results by set subtraction.
- [NSSubqueryExpressionType](expressiontype-swift.enum/subquery.md): An expression that filters a collection using a subpredicate.
- [NSAggregateExpressionType](expressiontype-swift.enum/aggregate.md): An expression that defines an aggregate of `NSExpression` objects.
- [NSAnyKeyExpressionType](expressiontype-swift.enum/anykey.md): An expression that represents any key.
- [NSBlockExpressionType](expressiontype-swift.enum/block.md): An expression that uses a Block.
- [NSConditionalExpressionType](expressiontype-swift.enum/conditional.md): A conditional expression that evaluates a predicate to determine which expression to return.

## See Also

### Getting Information About an Expression

- [arguments](arguments.md): The arguments for the expression.
- [collection](collection.md): The collection of expressions in an aggregate expression, or the collection element of a subquery expression.
- [constantValue](constantvalue.md): The constant value of the expression.
- [expressionType](expressiontype-swift.property.md): The expression type for the expression.
- [function](function.md): The function for the expression.
- [keyPath](keypath.md): The key path for the expression.
- [operand](operand.md): The operand for the expression.
- [predicate](predicate.md): The predicate of a subquery expression.
- [leftExpression](left.md): The left expression of an aggregate expression.
- [rightExpression](right.md): The right expression of an aggregate expression.
- [variable](variable.md): The variable for the expression.
