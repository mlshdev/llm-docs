> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tcp/nodelay(_:)](https://developer.apple.com/documentation/network/tcp/nodelay(_:))

# noDelay(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Disable Nagle’s algorithm.

## Declaration

```swift
func noDelay(_ noDelay: Bool) -> TCP
```

## Parameters

- `noDelay`: True to disable Nagle’s algorithm, false otherwise.

<a id="discussion"></a>

## Discussion

A boolean indicating that TCP should disable Nagle’s algorithm (`TCP_NODELAY`).
