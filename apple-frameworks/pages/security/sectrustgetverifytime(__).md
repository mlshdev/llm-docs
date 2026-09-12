> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustgetverifytime(_:)](https://developer.apple.com/documentation/security/sectrustgetverifytime(_:))

# SecTrustGetVerifyTime(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the absolute time against which the certificates in a trust management object are verified.

## Declaration

```swift
func SecTrustGetVerifyTime(_ trust: SecTrust) -> CFAbsoluteTime
```

## Parameters

- `trust`: The trust management object whose verification time you want to get. A trust management object includes one or more certificates plus the policy or policies to be used in evaluating trust. Use the [SecTrustCreateWithCertificates(\_:\_:\_:)](sectrustcreatewithcertificates%28______%29.md) function to create a trust management object.

<a id="return-value"></a>

## Return Value

The absolute time at which the certificates should be checked for validity.

<a id="Discussion"></a>

## Discussion

This function returns the absolute time returned by:

1. the [CFDateGetAbsoluteTime(\_:)](../corefoundation/cfdategetabsolutetime%28__%29.md) function for the date passed in to the [SecTrustSetVerifyDate(\_:\_:)](sectrustsetverifydate%28____%29.md) function, if that was called, or
2. the last value returned by the [SecTrustGetVerifyTime(\_:)](sectrustgetverifytime%28__%29.md) function, if it was called before, or
3. the value returned by the [CFAbsoluteTimeGetCurrent()](../corefoundation/cfabsolutetimegetcurrent%28%29.md) function if neither [SecTrustSetVerifyDate(\_:\_:)](sectrustsetverifydate%28____%29.md) nor [SecTrustGetVerifyTime(\_:)](sectrustgetverifytime%28__%29.md) were ever called.

It is safe to call this function concurrently on two or more threads as long as it is not used to get a value from a trust management object that is simultaneously being changed by another function. For example, you can call this function on two threads at the same time, but not if you are simultaneously calling the [SecTrustSetVerifyDate(\_:\_:)](sectrustsetverifydate%28____%29.md) function for the same trust management object on another thread.

## See Also

### Related Documentation

- [SecTrustSetVerifyDate(\_:\_:)](sectrustsetverifydate%28____%29.md): Sets the date and time against which the certificates in a trust management object are verified.

# SecTrustGetVerifyTime (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the absolute time against which the certificates in a trust management object are verified.

## Declaration

```objectivec
CFAbsoluteTime SecTrustGetVerifyTime(SecTrustRef trust);
```

## Parameters

- `trust`: The trust management object whose verification time you want to get. A trust management object includes one or more certificates plus the policy or policies to be used in evaluating trust. Use the [SecTrustCreateWithCertificates](sectrustcreatewithcertificates%28______%29.md) function to create a trust management object.

<a id="return-value"></a>

## Return Value

The absolute time at which the certificates should be checked for validity.

<a id="Discussion"></a>

## Discussion

This function returns the absolute time returned by:

1. the [CFDateGetAbsoluteTime](../corefoundation/cfdategetabsolutetime%28__%29.md) function for the date passed in to the [SecTrustSetVerifyDate](sectrustsetverifydate%28____%29.md) function, if that was called, or
2. the last value returned by the [SecTrustGetVerifyTime](sectrustgetverifytime%28__%29.md) function, if it was called before, or
3. the value returned by the [CFAbsoluteTimeGetCurrent](../corefoundation/cfabsolutetimegetcurrent%28%29.md) function if neither [SecTrustSetVerifyDate](sectrustsetverifydate%28____%29.md) nor [SecTrustGetVerifyTime](sectrustgetverifytime%28__%29.md) were ever called.

It is safe to call this function concurrently on two or more threads as long as it is not used to get a value from a trust management object that is simultaneously being changed by another function. For example, you can call this function on two threads at the same time, but not if you are simultaneously calling the [SecTrustSetVerifyDate](sectrustsetverifydate%28____%29.md) function for the same trust management object on another thread.

## See Also

### Related Documentation

- [SecTrustSetVerifyDate](sectrustsetverifydate%28____%29.md): Sets the date and time against which the certificates in a trust management object are verified.
