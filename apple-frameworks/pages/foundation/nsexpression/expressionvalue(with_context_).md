> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression/expressionvalue(with:context:)](https://developer.apple.com/documentation/foundation/nsexpression/expressionvalue(with:context:))

# expressionValue(with:context:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Evaluates an expression using a specified object and context.

## Declaration

```swift
func expressionValue(with object: Any?, context: NSMutableDictionary?) -> Any?
```

## Parameters

- `object`: The object against which the expression is evaluated.
- `context`: A dictionary that the expression can use to store temporary state for one predicate evaluation. Can be `nil`.

  Note that `context` is mutable, and that it can only be accessed during the evaluation of the expression. You must not attempt to retain it for use elsewhere.

<a id="return-value"></a>

## Return Value

The evaluated object.

## See Also

### Evaluating an Expression

- [allowEvaluation()](allowevaluation%28%29.md): Forces a securely decoded expression to allow evaluation.
- [false](false.md): An expression to evalutate if a conditional expression’s predicate evaluates to false.
- [true](true.md): An expression to evalutate if a conditional expression’s predicate evaluates to true.

# expressionValueWithObject:context: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Evaluates an expression using a specified object and context.

## Declaration

```objectivec
- (id) expressionValueWithObject:(id) object context:(NSMutableDictionary *) context;
```

## Parameters

- `object`: The object against which the expression is evaluated.
- `context`: A dictionary that the expression can use to store temporary state for one predicate evaluation. Can be `nil`.

  Note that `context` is mutable, and that it can only be accessed during the evaluation of the expression. You must not attempt to retain it for use elsewhere.

<a id="return-value"></a>

## Return Value

The evaluated object.

## See Also

### Evaluating an Expression

- [allowEvaluation](allowevaluation%28%29.md): Forces a securely decoded expression to allow evaluation.
- [falseExpression](false.md): An expression to evalutate if a conditional expression’s predicate evaluates to false.
- [trueExpression](true.md): An expression to evalutate if a conditional expression’s predicate evaluates to true.
