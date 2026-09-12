> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparametersprovider/requiredinterface(_:)](https://developer.apple.com/documentation/network/nwparametersprovider/requiredinterface(_:))

# requiredInterface(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Require an interface when connecting, listening, and browsing.

## Declaration

```swift
func requiredInterface(_ interface: NWInterface) -> Self
```

## Parameters

- `interface`: The interface to require.

<a id="discussion"></a>

## Discussion

Connections will fail if this interface is not available.

## Default Implementations

### NWParametersProvider Implementations

- [requiredInterface(\_:)](requiredinterface%28__%29-tfqe.md): Require an interface when connecting, listening, and browsing.
