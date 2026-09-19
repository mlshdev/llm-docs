> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/quic/idletimeout(_:)

# idleTimeout(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set the idle timeout for the QUIC connection, in milliseconds.

## Declaration

```swift
func idleTimeout(_ timeout: Int) -> QUIC
```

## Parameters

- `timeout`: The idle timeout, in milliseconds.

<a id="discussion"></a>

## Discussion

If no packets are sent or received within this timeout, the QUIC connection will be closed.
