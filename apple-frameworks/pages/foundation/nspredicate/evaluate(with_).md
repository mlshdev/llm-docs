> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspredicate/evaluate(with:)](https://developer.apple.com/documentation/foundation/nspredicate/evaluate(with:))

# evaluate(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the specified object matches the conditions that the predicate specifies.

## Declaration

```swift
func evaluate(with object: Any?) -> Bool
```

## Parameters

- `object`: The object against which to evaluate the predicate.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `object` matches the conditions specified by the predicate, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Evaluating a Predicate

- [evaluate(with:substitutionVariables:)](evaluate%28with_substitutionvariables_%29.md): Returns a Boolean value that indicates whether the specified object matches the conditions that the predicate specifies after substituting in the values from a specified variables dictionary.
- [allowEvaluation()](allowevaluation%28%29.md): Forces a securely decoded predicate to allow evaluation.

# evaluateWithObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the specified object matches the conditions that the predicate specifies.

## Declaration

```objectivec
- (BOOL) evaluateWithObject:(id) object;
```

## Parameters

- `object`: The object against which to evaluate the predicate.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `object` matches the conditions specified by the predicate, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Evaluating a Predicate

- [evaluateWithObject:substitutionVariables:](evaluate%28with_substitutionvariables_%29.md): Returns a Boolean value that indicates whether the specified object matches the conditions that the predicate specifies after substituting in the values from a specified variables dictionary.
- [allowEvaluation](allowevaluation%28%29.md): Forces a securely decoded predicate to allow evaluation.
