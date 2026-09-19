> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/tcp/nodelay(_:)

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
