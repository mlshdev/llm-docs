> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tcp/nopush(_:)](https://developer.apple.com/documentation/network/tcp/nopush(_:))

# noPush(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Enable no-push mode.

## Declaration

```swift
func noPush(_ noPush: Bool) -> TCP
```

## Parameters

- `noPush`: True to use no-push mode, false otherwise.

<a id="discussion"></a>

## Discussion

A boolean indicating that TCP should use no-push mode (`TCP_NOPUSH`).
