> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustcallback](https://developer.apple.com/documentation/security/sectrustcallback)

# SecTrustCallback (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A block called with the results of an asynchronous trust evaluation.

## Declaration

```swift
typealias SecTrustCallback = (SecTrust, SecTrustResultType) -> Void
```

## Parameters

- `trustRef`: The trust that was evaluated.
- `trustResult`: The result of the trust evaluation. See [SecTrustResultType](sectrustresulttype.md) for a list of possible values.

<a id="Discussion"></a>

## Discussion

Use a block of this type when making a call to [SecTrustEvaluateAsync(\_:\_:\_:)](sectrustevaluateasync%28______%29.md) to receive the result of the trust evaluation.

# SecTrustCallback (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A block called with the results of an asynchronous trust evaluation.

## Declaration

```objectivec
typedef void (^)(struct __SecTrust *, enum SecTrustResultType) SecTrustCallback;
```

## Parameters

- `trustRef`: The trust that was evaluated.
- `trustResult`: The result of the trust evaluation. See [SecTrustResultType](sectrustresulttype.md) for a list of possible values.

<a id="Discussion"></a>

## Discussion

Use a block of this type when making a call to [SecTrustEvaluateAsync](sectrustevaluateasync%28______%29.md) to receive the result of the trust evaluation.
