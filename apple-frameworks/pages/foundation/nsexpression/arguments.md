> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/arguments](https://developer.apple.com/documentation/foundation/nsexpression/arguments)

# arguments (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The arguments for the expression.

## Declaration

```swift
var arguments: [NSExpression]? { get }
```

<a id="Discussion"></a>

## Discussion

An expression’s arguments is the array of expressions that will be passed as parameters during invocation of the selector on the operand of a function expression.

Accessing this property raises an exception if it is not applicable to the expression.

## See Also

### Getting Information About an Expression

- [collection](collection.md): The collection of expressions in an aggregate expression, or the collection element of a subquery expression.
- [constantValue](constantvalue.md): The constant value of the expression.
- [expressionType](expressiontype-swift.property.md): The expression type for the expression.
- [NSExpression.ExpressionType](expressiontype-swift.enum.md): Defines the possible types of an expression.
- [function](function.md): The function for the expression.
- [keyPath](keypath.md): The key path for the expression.
- [operand](operand.md): The operand for the expression.
- [predicate](predicate.md): The predicate of a subquery expression.
- [left](left.md): The left expression of an aggregate expression.
- [right](right.md): The right expression of an aggregate expression.
- [variable](variable.md): The variable for the expression.

# arguments (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The arguments for the expression.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSExpression *> * arguments;
```

<a id="Discussion"></a>

## Discussion

An expression’s arguments is the array of expressions that will be passed as parameters during invocation of the selector on the operand of a function expression.

Accessing this property raises an exception if it is not applicable to the expression.

## See Also

### Getting Information About an Expression

- [collection](collection.md): The collection of expressions in an aggregate expression, or the collection element of a subquery expression.
- [constantValue](constantvalue.md): The constant value of the expression.
- [expressionType](expressiontype-swift.property.md): The expression type for the expression.
- [NSExpressionType](expressiontype-swift.enum.md): Defines the possible types of an expression.
- [function](function.md): The function for the expression.
- [keyPath](keypath.md): The key path for the expression.
- [operand](operand.md): The operand for the expression.
- [predicate](predicate.md): The predicate of a subquery expression.
- [leftExpression](left.md): The left expression of an aggregate expression.
- [rightExpression](right.md): The right expression of an aggregate expression.
- [variable](variable.md): The variable for the expression.
