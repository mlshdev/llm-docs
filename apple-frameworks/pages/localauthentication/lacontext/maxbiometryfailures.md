> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lacontext/maxbiometryfailures](https://developer.apple.com/documentation/localauthentication/lacontext/maxbiometryfailures)

# maxBiometryFailures (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 8.3+ (deprecated in 9.0) · iPadOS 8.3+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10.3+ (deprecated in 10.11) · visionOS 1.0+ (deprecated in 1.0)

The number of biometric authentication failures after which the context falls back to another mechanism.

> This property is deprecated and setting it has no effect.

## Declaration

```swift
var maxBiometryFailures: NSNumber? { get set }
```

<a id="Discussion"></a>

## Discussion

Biometry lockout happens after too many wrong attempts, regardless of how you set this property.

## See Also

### Evaluating authentication policies

- [evaluatePolicy(\_:localizedReason:reply:)](evaluatepolicy%28__localizedreason_reply_%29.md): Evaluates the specified policy.
- [evaluatedPolicyDomainState](evaluatedpolicydomainstate.md): Deprecated. The current state of the evaluated policy domain.

# maxBiometryFailures (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 8.3+ (deprecated in 9.0) · iPadOS 8.3+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10.3+ (deprecated in 10.11) · visionOS 1.0+ (deprecated in 1.0)

The number of biometric authentication failures after which the context falls back to another mechanism.

> This property is deprecated and setting it has no effect.

## Declaration

```objectivec
@property (nonatomic, nullable) NSNumber * maxBiometryFailures;
```

<a id="Discussion"></a>

## Discussion

Biometry lockout happens after too many wrong attempts, regardless of how you set this property.

## See Also

### Evaluating authentication policies

- [evaluatePolicy:localizedReason:reply:](evaluatepolicy%28__localizedreason_reply_%29.md): Evaluates the specified policy.
- [evaluatedPolicyDomainState](evaluatedpolicydomainstate.md): Deprecated. The current state of the evaluated policy domain.
