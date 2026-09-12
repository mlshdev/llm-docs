> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustcopypolicies(_:_:)](https://developer.apple.com/documentation/security/sectrustcopypolicies(_:_:))

# SecTrustCopyPolicies(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the policies used by a given trust management object.

## Declaration

```swift
func SecTrustCopyPolicies(_ trust: SecTrust, _ policies: UnsafeMutablePointer<CFArray?>) -> OSStatus
```

## Parameters

- `trust`: The trust management object whose policies you wish to retrieve.
- `policies`: On return, an array of [SecPolicy](secpolicy.md) objects for the policies used by this trust management object. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

It is safe to call this function concurrently on two or more threads as long as it is not used to get values from a trust management object that is simultaneously being changed by another function. For example, you can call this function on two threads at the same time, but not if you are simultaneously calling the [SecTrustSetPolicies(\_:\_:)](sectrustsetpolicies%28____%29.md) function for the same trust management object on another thread.

## See Also

### Related Documentation

- [SecTrustSetPolicies(\_:\_:)](sectrustsetpolicies%28____%29.md): Sets the policies to use in an evaluation.

# SecTrustCopyPolicies (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the policies used by a given trust management object.

## Declaration

```objectivec
OSStatus SecTrustCopyPolicies(SecTrustRef trust, CFArrayRef*policies);
```

## Parameters

- `trust`: The trust management object whose policies you wish to retrieve.
- `policies`: On return, an array of [SecPolicyRef](secpolicy.md) objects for the policies used by this trust management object. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

It is safe to call this function concurrently on two or more threads as long as it is not used to get values from a trust management object that is simultaneously being changed by another function. For example, you can call this function on two threads at the same time, but not if you are simultaneously calling the [SecTrustSetPolicies](sectrustsetpolicies%28____%29.md) function for the same trust management object on another thread.

## See Also

### Related Documentation

- [SecTrustSetPolicies](sectrustsetpolicies%28____%29.md): Sets the policies to use in an evaluation.
