> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspredicate/allowevaluation()](https://developer.apple.com/documentation/foundation/nspredicate/allowevaluation())

# allowEvaluation() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Forces a securely decoded predicate to allow evaluation.

## Declaration

```swift
func allowEvaluation()
```

<a id="Discussion"></a>

## Discussion

When securely decoding [NSPredicate](../nspredicate.md) objects that are encoded using [NSSecureCoding](../nssecurecoding.md), evaluation is disabled because it is potentially unsafe to evaluate predicates you get out of an archive.

Before you enable evaluation, you should validate key paths, selectors, and other details to ensure no erroneous or malicious code will be executed. Once you’ve verified the predicate, you can enable the receiver for evaluation by calling [allowEvaluation()](allowevaluation%28%29.md).

## See Also

### Evaluating a Predicate

- [evaluate(with:)](evaluate%28with_%29.md): Returns a Boolean value that indicates whether the specified object matches the conditions that the predicate specifies.
- [evaluate(with:substitutionVariables:)](evaluate%28with_substitutionvariables_%29.md): Returns a Boolean value that indicates whether the specified object matches the conditions that the predicate specifies after substituting in the values from a specified variables dictionary.

# allowEvaluation (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Forces a securely decoded predicate to allow evaluation.

## Declaration

```objectivec
- (void) allowEvaluation;
```

<a id="Discussion"></a>

## Discussion

When securely decoding [NSPredicate](../nspredicate.md) objects that are encoded using [NSSecureCoding](../nssecurecoding.md), evaluation is disabled because it is potentially unsafe to evaluate predicates you get out of an archive.

Before you enable evaluation, you should validate key paths, selectors, and other details to ensure no erroneous or malicious code will be executed. Once you’ve verified the predicate, you can enable the receiver for evaluation by calling [allowEvaluation](allowevaluation%28%29.md).

## See Also

### Evaluating a Predicate

- [evaluateWithObject:](evaluate%28with_%29.md): Returns a Boolean value that indicates whether the specified object matches the conditions that the predicate specifies.
- [evaluateWithObject:substitutionVariables:](evaluate%28with_substitutionvariables_%29.md): Returns a Boolean value that indicates whether the specified object matches the conditions that the predicate specifies after substituting in the values from a specified variables dictionary.
