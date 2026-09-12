> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/false](https://developer.apple.com/documentation/foundation/nsexpression/false)

# false (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An expression to evalutate if a conditional expression’s predicate evaluates to false.

## Declaration

```swift
@NSCopying var `false`: NSExpression { get }
```

<a id="Discussion"></a>

## Discussion

Accessing this property raises an exception if it isn’t applicable to the expression.

## See Also

### Evaluating an Expression

- [expressionValue(with:context:)](expressionvalue%28with_context_%29.md): Evaluates an expression using a specified object and context.
- [allowEvaluation()](allowevaluation%28%29.md): Forces a securely decoded expression to allow evaluation.
- [true](true.md): An expression to evalutate if a conditional expression’s predicate evaluates to true.

# falseExpression (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An expression to evalutate if a conditional expression’s predicate evaluates to false.

## Declaration

```objectivec
@property (copy, readonly) NSExpression * falseExpression;
```

<a id="Discussion"></a>

## Discussion

Accessing this property raises an exception if it isn’t applicable to the expression.

## See Also

### Evaluating an Expression

- [expressionValueWithObject:context:](expressionvalue%28with_context_%29.md): Evaluates an expression using a specified object and context.
- [allowEvaluation](allowevaluation%28%29.md): Forces a securely decoded expression to allow evaluation.
- [trueExpression](true.md): An expression to evalutate if a conditional expression’s predicate evaluates to true.
