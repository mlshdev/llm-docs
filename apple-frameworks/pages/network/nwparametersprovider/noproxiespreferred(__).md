> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparametersprovider/noproxiespreferred(_:)](https://developer.apple.com/documentation/network/nwparametersprovider/noproxiespreferred(_:))

# noProxiesPreferred(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Prefer not using proxies when making connections.

## Declaration

```swift
func noProxiesPreferred(_ preferred: Bool) -> Self
```

<a id="discussion"></a>

## Discussion

Attempt connections without using proxies, only using any configured proxies if the connection cannot otherwise be completed.

## Default Implementations

### NWParametersProvider Implementations

- [noProxiesPreferred(\_:)](noproxiespreferred%28__%29-ostv.md): Prefer not using proxies when making connections.
