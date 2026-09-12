> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/allowevaluation()](https://developer.apple.com/documentation/foundation/nsexpression/allowevaluation())

# allowEvaluation() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Forces a securely decoded expression to allow evaluation.

## Declaration

```swift
func allowEvaluation()
```

<a id="Discussion"></a>

## Discussion

When securely decoding an `NSExpression` object encoded using [NSSecureCoding](../nssecurecoding.md), evaluation is disabled because it is potentially unsafe to evaluate expressions you get out of an archive.

Before you enable evaluation, you should validate key paths, selectors, etc to ensure no erroneous or malicious code will be executed. Once you’ve preflighted the expression, you can enable the expression for evaluation by calling `allowEvaluation`.

## See Also

### Evaluating an Expression

- [expressionValue(with:context:)](expressionvalue%28with_context_%29.md): Evaluates an expression using a specified object and context.
- [false](false.md): An expression to evalutate if a conditional expression’s predicate evaluates to false.
- [true](true.md): An expression to evalutate if a conditional expression’s predicate evaluates to true.

# allowEvaluation (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Forces a securely decoded expression to allow evaluation.

## Declaration

```objectivec
- (void) allowEvaluation;
```

<a id="Discussion"></a>

## Discussion

When securely decoding an `NSExpression` object encoded using [NSSecureCoding](../nssecurecoding.md), evaluation is disabled because it is potentially unsafe to evaluate expressions you get out of an archive.

Before you enable evaluation, you should validate key paths, selectors, etc to ensure no erroneous or malicious code will be executed. Once you’ve preflighted the expression, you can enable the expression for evaluation by calling `allowEvaluation`.

## See Also

### Evaluating an Expression

- [expressionValueWithObject:context:](expressionvalue%28with_context_%29.md): Evaluates an expression using a specified object and context.
- [falseExpression](false.md): An expression to evalutate if a conditional expression’s predicate evaluates to false.
- [trueExpression](true.md): An expression to evalutate if a conditional expression’s predicate evaluates to true.
