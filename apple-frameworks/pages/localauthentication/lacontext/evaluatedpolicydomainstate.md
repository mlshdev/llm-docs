> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lacontext/evaluatedpolicydomainstate](https://developer.apple.com/documentation/localauthentication/lacontext/evaluatedpolicydomainstate)

# evaluatedPolicyDomainState (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

The current state of the evaluated policy domain.

## Declaration

```swift
var evaluatedPolicyDomainState: Data? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is non-`nil` when the [canEvaluatePolicy(\_:error:)](canevaluatepolicy%28__error_%29.md) method succeeds for a biometric policy or the person successfully authenticates using biometrics, following a call to [evaluatePolicy(\_:localizedReason:reply:)](evaluatepolicy%28__localizedreason_reply_%29.md). Otherwise, its value is `nil`.

Compare the values you get from successive calls to this property to determine whether the authorized database changed. However, the value you get doesn’t describe the nature of a change; it only lets you detect if a change happens.

> **Note**

>  The value of this property is different in different processes, so you can’t compare the value from one app to the value from another app.

## See Also

### Evaluating authentication policies

- [evaluatePolicy(\_:localizedReason:reply:)](evaluatepolicy%28__localizedreason_reply_%29.md): Evaluates the specified policy.
- [maxBiometryFailures](maxbiometryfailures.md): Deprecated. The number of biometric authentication failures after which the context falls back to another mechanism.

# evaluatedPolicyDomainState (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

The current state of the evaluated policy domain.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSData * evaluatedPolicyDomainState;
```

<a id="Discussion"></a>

## Discussion

The value of this property is non-`nil` when the [canEvaluatePolicy:error:](canevaluatepolicy%28__error_%29.md) method succeeds for a biometric policy or the person successfully authenticates using biometrics, following a call to [evaluatePolicy:localizedReason:reply:](evaluatepolicy%28__localizedreason_reply_%29.md). Otherwise, its value is `nil`.

Compare the values you get from successive calls to this property to determine whether the authorized database changed. However, the value you get doesn’t describe the nature of a change; it only lets you detect if a change happens.

> **Note**

>  The value of this property is different in different processes, so you can’t compare the value from one app to the value from another app.

## See Also

### Evaluating authentication policies

- [evaluatePolicy:localizedReason:reply:](evaluatepolicy%28__localizedreason_reply_%29.md): Evaluates the specified policy.
- [maxBiometryFailures](maxbiometryfailures.md): Deprecated. The number of biometric authentication failures after which the context falls back to another mechanism.
