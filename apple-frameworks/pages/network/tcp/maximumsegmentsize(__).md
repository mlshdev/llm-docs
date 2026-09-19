> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/tcp/maximumsegmentsize(_:)

# maximumSegmentSize(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set maximum segment size.

## Declaration

```swift
func maximumSegmentSize(_ bytes: UInt32) -> TCP
```

## Parameters

- `bytes`: The maximum segment size in bytes.

<a id="discussion"></a>

## Discussion

The maximum segment size in bytes (`TCP_MAXSEG`).
