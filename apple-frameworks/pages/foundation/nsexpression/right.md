> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/right](https://developer.apple.com/documentation/foundation/nsexpression/right)

# right (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The right expression of an aggregate expression.

## Declaration

```swift
@NSCopying var right: NSExpression { get }
```

<a id="Discussion"></a>

## Discussion

Accessing this property raises an exception if it is not applicable to the expression.

## See Also

### Getting Information About an Expression

- [arguments](arguments.md): The arguments for the expression.
- [collection](collection.md): The collection of expressions in an aggregate expression, or the collection element of a subquery expression.
- [constantValue](constantvalue.md): The constant value of the expression.
- [expressionType](expressiontype-swift.property.md): The expression type for the expression.
- [NSExpression.ExpressionType](expressiontype-swift.enum.md): Defines the possible types of an expression.
- [function](function.md): The function for the expression.
- [keyPath](keypath.md): The key path for the expression.
- [operand](operand.md): The operand for the expression.
- [predicate](predicate.md): The predicate of a subquery expression.
- [left](left.md): The left expression of an aggregate expression.
- [variable](variable.md): The variable for the expression.

# rightExpression (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The right expression of an aggregate expression.

## Declaration

```objectivec
@property (copy, readonly) NSExpression * rightExpression;
```

<a id="Discussion"></a>

## Discussion

Accessing this property raises an exception if it is not applicable to the expression.

## See Also

### Getting Information About an Expression

- [arguments](arguments.md): The arguments for the expression.
- [collection](collection.md): The collection of expressions in an aggregate expression, or the collection element of a subquery expression.
- [constantValue](constantvalue.md): The constant value of the expression.
- [expressionType](expressiontype-swift.property.md): The expression type for the expression.
- [NSExpressionType](expressiontype-swift.enum.md): Defines the possible types of an expression.
- [function](function.md): The function for the expression.
- [keyPath](keypath.md): The key path for the expression.
- [operand](operand.md): The operand for the expression.
- [predicate](predicate.md): The predicate of a subquery expression.
- [leftExpression](left.md): The left expression of an aggregate expression.
- [variable](variable.md): The variable for the expression.
