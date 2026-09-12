> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspredicate/evaluate(with:substitutionvariables:)](https://developer.apple.com/documentation/foundation/nspredicate/evaluate(with:substitutionvariables:))

# evaluate(with:substitutionVariables:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the specified object matches the conditions that the predicate specifies after substituting in the values from a specified variables dictionary.

## Declaration

```swift
func evaluate(with object: Any?, substitutionVariables bindings: [String : Any]?) -> Bool
```

## Parameters

- `object`: The object against which to evaluate the predicate.
- `bindings`: The substitution variables dictionary. The dictionary must contain key-value pairs for all variables in the predicate.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `object` matches the conditions specified by the predicate after substituting in the values in `bindings` for any replacement tokens, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method returns the same result as the two step process of first invoking [withSubstitutionVariables(\_:)](withsubstitutionvariables%28__%29.md) on the predicate and then invoking [evaluate(with:)](evaluate%28with_%29.md) on the returned value. This method is optimized for situations which require repeatedly evaluating a predicate with substitution variables with different variable substitutions.

## See Also

### Evaluating a Predicate

- [evaluate(with:)](evaluate%28with_%29.md): Returns a Boolean value that indicates whether the specified object matches the conditions that the predicate specifies.
- [allowEvaluation()](allowevaluation%28%29.md): Forces a securely decoded predicate to allow evaluation.

# evaluateWithObject:substitutionVariables: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the specified object matches the conditions that the predicate specifies after substituting in the values from a specified variables dictionary.

## Declaration

```objectivec
- (BOOL) evaluateWithObject:(id) object substitutionVariables:(NSDictionary<NSString *,id> *) bindings;
```

## Parameters

- `object`: The object against which to evaluate the predicate.
- `bindings`: The substitution variables dictionary. The dictionary must contain key-value pairs for all variables in the predicate.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `object` matches the conditions specified by the predicate after substituting in the values in `bindings` for any replacement tokens, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method returns the same result as the two step process of first invoking [predicateWithSubstitutionVariables:](withsubstitutionvariables%28__%29.md) on the predicate and then invoking [evaluateWithObject:](evaluate%28with_%29.md) on the returned value. This method is optimized for situations which require repeatedly evaluating a predicate with substitution variables with different variable substitutions.

## See Also

### Evaluating a Predicate

- [evaluateWithObject:](evaluate%28with_%29.md): Returns a Boolean value that indicates whether the specified object matches the conditions that the predicate specifies.
- [allowEvaluation](allowevaluation%28%29.md): Forces a securely decoded predicate to allow evaluation.
