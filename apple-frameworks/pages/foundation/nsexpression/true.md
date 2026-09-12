> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/true](https://developer.apple.com/documentation/foundation/nsexpression/true)

# true (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An expression to evalutate if a conditional expression’s predicate evaluates to true.

## Declaration

```swift
@NSCopying var `true`: NSExpression { get }
```

<a id="Discussion"></a>

## Discussion

Accessing this property raises an exception if it isn’t applicable to the expression.

## See Also

### Evaluating an Expression

- [expressionValue(with:context:)](expressionvalue%28with_context_%29.md): Evaluates an expression using a specified object and context.
- [allowEvaluation()](allowevaluation%28%29.md): Forces a securely decoded expression to allow evaluation.
- [false](false.md): An expression to evalutate if a conditional expression’s predicate evaluates to false.

# trueExpression (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An expression to evalutate if a conditional expression’s predicate evaluates to true.

## Declaration

```objectivec
@property (copy, readonly) NSExpression * trueExpression;
```

<a id="Discussion"></a>

## Discussion

Accessing this property raises an exception if it isn’t applicable to the expression.

## See Also

### Evaluating an Expression

- [expressionValueWithObject:context:](expressionvalue%28with_context_%29.md): Evaluates an expression using a specified object and context.
- [allowEvaluation](allowevaluation%28%29.md): Forces a securely decoded expression to allow evaluation.
- [falseExpression](false.md): An expression to evalutate if a conditional expression’s predicate evaluates to false.
