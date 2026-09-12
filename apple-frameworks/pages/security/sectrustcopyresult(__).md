> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustcopyresult(_:)](https://developer.apple.com/documentation/security/sectrustcopyresult(_:))

# SecTrustCopyResult(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary containing information about an evaluated trust.

## Declaration

```swift
func SecTrustCopyResult(_ trust: SecTrust) -> CFDictionary?
```

## Parameters

- `trust`: The evaluated trust.

<a id="return-value"></a>

## Return Value

A dictionary containing keys with values that describe the result of the trust evaluation, or `NULL` when no information is available or if the trust has not been evaluated. See [Trust Result Dictionary Keys](trust-result-dictionary-keys.md) for the list of possible keys. In Objective-C, use [CFRelease](../corefoundation/cfrelease.md) to free the dictionary’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

Call one of the [SecTrustEvaluateWithError(\_:\_:)](sectrustevaluatewitherror%28____%29.md) or [SecTrustEvaluateAsyncWithError(\_:\_:\_:)](sectrustevaluateasyncwitherror%28______%29.md) methods before calling [SecTrustCopyResult(\_:)](sectrustcopyresult%28__%29.md).

# SecTrustCopyResult (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary containing information about an evaluated trust.

## Declaration

```objectivec
CFDictionaryRefSecTrustCopyResult(SecTrustRef trust);
```

## Parameters

- `trust`: The evaluated trust.

<a id="return-value"></a>

## Return Value

A dictionary containing keys with values that describe the result of the trust evaluation, or `NULL` when no information is available or if the trust has not been evaluated. See [Trust Result Dictionary Keys](trust-result-dictionary-keys.md) for the list of possible keys. In Objective-C, use [CFRelease](../corefoundation/cfrelease.md) to free the dictionary’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

Call one of the [SecTrustEvaluateWithError](sectrustevaluatewitherror%28____%29.md) or [SecTrustEvaluateAsyncWithError](sectrustevaluateasyncwitherror%28______%29.md) methods before calling [SecTrustCopyResult](sectrustcopyresult%28__%29.md).
