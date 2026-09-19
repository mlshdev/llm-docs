> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwparametersprovider/noproxiespreferred(_:)-ostv

# noProxiesPreferred(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Prefer not using proxies when making connections.

## Declaration

```swift
func noProxiesPreferred(_ noProxies: Bool) -> Self
```

## Parameters

- `noProxies`: True if connections should not use proxies, false otherwise.

<a id="discussion"></a>

## Discussion

Attempt connections without using proxies, only using any configured proxies if the connection cannot otherwise be completed.
