> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectrustresultvalue](https://developer.apple.com/documentation/security/ksectrustresultvalue)

# kSecTrustResultValue (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value represents the trust evaluation result.

## Declaration

```swift
let kSecTrustResultValue: CFString
```

<a id="Discussion"></a>

## Discussion

The key is present after trust evaluation completes. Its value is a [CFNumber](../corefoundation/cfnumber.md) that holds one of the values listed in [SecTrustResultType](sectrustresulttype.md), indicating the outcome of the trust evaluation.

# kSecTrustResultValue (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value represents the trust evaluation result.

## Declaration

```objectivec
extern CFStringRef const kSecTrustResultValue;
```

<a id="Discussion"></a>

## Discussion

The key is present after trust evaluation completes. Its value is a [CFNumberRef](../corefoundation/cfnumber.md) that holds one of the values listed in [SecTrustResultType](sectrustresulttype.md), indicating the outcome of the trust evaluation.
