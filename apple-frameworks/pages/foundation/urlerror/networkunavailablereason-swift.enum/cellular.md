> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/urlerror/networkunavailablereason-swift.enum/cellular

# URLError.NetworkUnavailableReason.cellular

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A reason that indicates network is unavailable because the interface is cellular and cellular network is disabled.

## Declaration

```swift
case cellular
```

<a id="Discussion"></a>

## Discussion

This reason occurs when cellular is the only available network interface, but the [URLSessionConfiguration](../../urlsessionconfiguration.md) property [allowsCellularAccess](../../urlsessionconfiguration/allowscellularaccess.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Unavailability reasons

- [URLError.NetworkUnavailableReason.constrained](constrained.md): A reason that indicates network is unavailable because the user enabled “Low Data Mode” in the Settings app.
- [URLError.NetworkUnavailableReason.expensive](expensive.md): A reason that indicates network is unavailable because the system marked the interface as expensive.
