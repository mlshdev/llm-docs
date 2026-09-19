> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsusercancellederror-swift.var

# NSUserCancelledError

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user canceled the operation (for example, by pressing Command-period).

## Declaration

```swift
var NSUserCancelledError: Int { get }
```

<a id="Discussion"></a>

## Discussion

This code is for errors that do not require a dialog displayed and might be candidates for special-casing.
