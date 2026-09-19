> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwparametersprovider/localonly(_:)-8osdn

# localOnly(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Limit inbound connections to peers attached to the local link.

## Declaration

```swift
func localOnly(_ local: Bool) -> Self
```

## Parameters

- `local`: True if limited to local peers, false otherwise.

<a id="discussion"></a>

## Discussion

Listeners will only advertise services on the local link and will only accept connections from the local link.
