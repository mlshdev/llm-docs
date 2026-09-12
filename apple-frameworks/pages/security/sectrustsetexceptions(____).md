> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustsetexceptions(_:_:)](https://developer.apple.com/documentation/security/sectrustsetexceptions(_:_:))

# SecTrustSetExceptions(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a list of exceptions that should be ignored when the certificate is evaluated.

## Declaration

```swift
func SecTrustSetExceptions(_ trust: SecTrust, _ exceptions: CFData?) -> Bool
```

## Parameters

- `trust`: The trust management object whose exception list you wish to modify.
- `exceptions`: An opaque cookie returned by a prior call to [SecTrustCopyExceptions(\_:)](sectrustcopyexceptions%28__%29.md).

<a id="return-value"></a>

## Return Value

A Boolean that is [true](https://developer.apple.com/documentation/swift/true) if the exceptions cookies was valid and matches the current leaf certificate, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="discussion"></a>

## Discussion

> **Important**

> Even if this function returns true, you must still call [SecTrustEvaluateWithError(\_:\_:)](sectrustevaluatewitherror%28____%29.md) because the evaluation can still fail if something changes between the initial evaluation and the reevaluation.

# SecTrustSetExceptions (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets a list of exceptions that should be ignored when the certificate is evaluated.

## Declaration

```objectivec
bool SecTrustSetExceptions(SecTrustRef trust, CFDataRef exceptions);
```

## Parameters

- `trust`: The trust management object whose exception list you wish to modify.
- `exceptions`: An opaque cookie returned by a prior call to [SecTrustCopyExceptions](sectrustcopyexceptions%28__%29.md).

<a id="return-value"></a>

## Return Value

A Boolean that is [true](https://developer.apple.com/documentation/swift/true) if the exceptions cookies was valid and matches the current leaf certificate, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="discussion"></a>

## Discussion

> **Important**

> Even if this function returns true, you must still call [SecTrustEvaluateWithError](sectrustevaluatewitherror%28____%29.md) because the evaluation can still fail if something changes between the initial evaluation and the reevaluation.
