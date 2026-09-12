> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusercancellederror-swift.var](https://developer.apple.com/documentation/foundation/nsusercancellederror-swift.var)

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
