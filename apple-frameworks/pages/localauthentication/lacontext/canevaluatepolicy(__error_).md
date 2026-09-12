> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lacontext/canevaluatepolicy(_:error:)](https://developer.apple.com/documentation/localauthentication/lacontext/canevaluatepolicy(_:error:))

# canEvaluatePolicy(\_:error:) (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 3.0+

Assesses whether authentication can proceed for a given policy.

## Declaration

```swift
func canEvaluatePolicy(_ policy: LAPolicy, error: NSErrorPointer) -> Bool
```

## Parameters

- `policy`: The policy to evaluate. For possible values, see [LAPolicy](../lapolicy.md).
- `error`: If the method fails, it uses this parameter to return an error detailing what went wrong. See [LAError.Code](../laerror-swift.struct/code.md) for possible error codes.

  Specify `nil` for this parameter to ignore any errors.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the policy can be evaluated, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Some policies impose requirements that must be met before authentication can proceed. For example, a policy that requires biometrics can’t authenticate if Touch ID or Face ID is disabled. This method tests all the prerequisites for a given policy.

Don’t store the return value from this method because it might change as a result of changes in the system. For example, a user might disable Touch ID after you call this method.

> **Important**

>  Don’t call this method in the reply block of the [evaluatePolicy(\_:localizedReason:reply:)](evaluatepolicy%28__localizedreason_reply_%29.md) method because that might lead to deadlock.

## See Also

### Checking availability

- [LAPolicy](../lapolicy.md): The set of available local authentication policies.
- [biometryType](biometrytype.md): The type of biometric authentication supported by the device.
- [LABiometryType](../labiometrytype.md): The set of available biometric authentication types.

# canEvaluatePolicy:error: (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 3.0+

Assesses whether authentication can proceed for a given policy.

## Declaration

```objectivec
- (BOOL) canEvaluatePolicy:(LAPolicy) policy error:(NSError **) error;
```

## Parameters

- `policy`: The policy to evaluate. For possible values, see [LAPolicy](../lapolicy.md).
- `error`: If the method fails, it uses this parameter to return an error detailing what went wrong. See [LAError](../laerror-swift.struct/code.md) for possible error codes.

  Specify `nil` for this parameter to ignore any errors.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the policy can be evaluated, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Some policies impose requirements that must be met before authentication can proceed. For example, a policy that requires biometrics can’t authenticate if Touch ID or Face ID is disabled. This method tests all the prerequisites for a given policy.

Don’t store the return value from this method because it might change as a result of changes in the system. For example, a user might disable Touch ID after you call this method.

> **Important**

>  Don’t call this method in the reply block of the [evaluatePolicy:localizedReason:reply:](evaluatepolicy%28__localizedreason_reply_%29.md) method because that might lead to deadlock.

## See Also

### Checking availability

- [LAPolicy](../lapolicy.md): The set of available local authentication policies.
- [biometryType](biometrytype.md): The type of biometric authentication supported by the device.
- [LABiometryType](../labiometrytype.md): The set of available biometric authentication types.
