> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparametersprovider/localendpointreuseallowed(_:)](https://developer.apple.com/documentation/network/nwparametersprovider/localendpointreuseallowed(_:))

# localEndpointReuseAllowed(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Allow local endpoint reuse.

## Declaration

```swift
func localEndpointReuseAllowed(_ allowed: Bool) -> Self
```

## Parameters

- `allowed`: True if allowed, false otherwise.

<a id="discussion"></a>

## Discussion

Allow multiple connections to use the same local address and port (`SO_REUSEADDR` and `SO_REUSEPORT`).

## Default Implementations

### NWParametersProvider Implementations

- [localEndpointReuseAllowed(\_:)](localendpointreuseallowed%28__%29-1x9ep.md): Allow local endpoint reuse.
