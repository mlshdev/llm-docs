> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/ip/minimummtu(_:)

# minimumMTU(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Configure IP to use the minimum MTU value.

## Declaration

```swift
func minimumMTU(_ useMinimumMTU: Bool) -> IP
```

## Parameters

- `useMinimumMTU`: True to use the minimum MTU value, false otherwise.

<a id="discussion"></a>

## Discussion

The minimum MTU value is 1280 bytes for IPv6 (`IPV6_USE_MIN_MTU`). This value has no effect for IPv4.
