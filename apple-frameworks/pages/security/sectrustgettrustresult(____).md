> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustgettrustresult(_:_:)](https://developer.apple.com/documentation/security/sectrustgettrustresult(_:_:))

# SecTrustGetTrustResult(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the result code from the most recent trust evaluation.

## Declaration

```swift
func SecTrustGetTrustResult(_ trust: SecTrust, _ result: UnsafeMutablePointer<SecTrustResultType>) -> OSStatus
```

## Parameters

- `trust`: The trust object from which results should be obtained
- `result`: A pointer that the function sets to point at a value that is the result type. See [SecTrustResultType](sectrustresulttype.md) for possible values.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

## Mentioned In

- [Discovering Why a Trust Evaluation Failed](discovering-why-a-trust-evaluation-failed.md)

<a id="Discussion"></a>

## Discussion

If the trust object has not yet been evaluated, the result type is [SecTrustResultType.invalid](sectrustresulttype/invalid.md).

# SecTrustGetTrustResult (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the result code from the most recent trust evaluation.

## Declaration

```objectivec
OSStatus SecTrustGetTrustResult(SecTrustRef trust, SecTrustResultType *result);
```

## Parameters

- `trust`: The trust object from which results should be obtained
- `result`: A pointer that the function sets to point at a value that is the result type. See [SecTrustResultType](sectrustresulttype.md) for possible values.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

## Mentioned In

- [Discovering Why a Trust Evaluation Failed](discovering-why-a-trust-evaluation-failed.md)

<a id="Discussion"></a>

## Discussion

If the trust object has not yet been evaluated, the result type is [kSecTrustResultInvalid](sectrustresulttype/invalid.md).
