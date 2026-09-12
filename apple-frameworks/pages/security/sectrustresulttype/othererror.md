> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustresulttype/othererror](https://developer.apple.com/documentation/security/sectrustresulttype/othererror)

# SecTrustResultType.otherError (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A value that indicates a failure other than trust evaluation.

## Declaration

```swift
case otherError
```

<a id="Discussion"></a>

## Discussion

This value indicates that evaluation failed for some other reason. This can be caused by either a revoked certificate or by OS-level errors that are unrelated to the certificates themselves.

You might receive the [SecTrustResultType.otherError](othererror.md) value after an evaluation, but you can’t store the value as part of the user trust settings with a call to the [SecTrustSettingsSetTrustSettings(\_:\_:\_:)](../sectrustsettingssettrustsettings%28______%29.md) method.

# kSecTrustResultOtherError (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A value that indicates a failure other than trust evaluation.

## Declaration

```objectivec
kSecTrustResultOtherError
```

<a id="Discussion"></a>

## Discussion

This value indicates that evaluation failed for some other reason. This can be caused by either a revoked certificate or by OS-level errors that are unrelated to the certificates themselves.

You might receive the [kSecTrustResultOtherError](othererror.md) value after an evaluation, but you can’t store the value as part of the user trust settings with a call to the [SecTrustSettingsSetTrustSettings](../sectrustsettingssettrustsettings%28______%29.md) method.
