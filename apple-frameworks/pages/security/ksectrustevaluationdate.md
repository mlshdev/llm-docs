> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/ksectrustevaluationdate

# kSecTrustEvaluationDate (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the time that the trust evaluation took place.

## Declaration

```swift
let kSecTrustEvaluationDate: CFString
```

<a id="Discussion"></a>

## Discussion

This key is present after the results become available from performing the trust evaluation. The value is a [CFDate](../corefoundation/cfdate.md) object representing when the evaluation took place.

# kSecTrustEvaluationDate (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the time that the trust evaluation took place.

## Declaration

```objectivec
extern CFStringRef const kSecTrustEvaluationDate;
```

<a id="Discussion"></a>

## Discussion

This key is present after the results become available from performing the trust evaluation. The value is a [CFDateRef](../corefoundation/cfdate.md) object representing when the evaluation took place.
