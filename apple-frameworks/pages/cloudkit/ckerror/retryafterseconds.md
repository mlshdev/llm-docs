> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/ckerror/retryafterseconds

# retryAfterSeconds

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 3.0+

The number of seconds to wait before you retry the request.

## Declaration

```swift
var retryAfterSeconds: Double? { get }
```

<a id="discussion"></a>

## Discussion

This property’s value is available only when the error’s `code` is [serviceUnavailable](serviceunavailable.md) or [requestRateLimited](requestratelimited.md).

The error’s `userInfo` dictionary contains the same value as this property. You can access it using the [CKErrorRetryAfterKey](../ckerrorretryafterkey.md) key.
