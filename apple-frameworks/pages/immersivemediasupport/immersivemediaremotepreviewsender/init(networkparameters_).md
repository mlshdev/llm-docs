> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivemediaremotepreviewsender/init(networkparameters:)](https://developer.apple.com/documentation/immersivemediasupport/immersivemediaremotepreviewsender/init(networkparameters:))

# init(networkParameters:)

**Framework:** Immersive Media Support  
**Kind:** Initializer  
**Availability:** macOS 26.0+

Creates a preview sender using the specified network parameters, if any.

## Declaration

```swift
init(networkParameters: NWParameters? = nil) async throws
```

## Parameters

- `networkParameters`: The network parameters to use when connecting to receivers (optional).

<a id="discussion"></a>

## Discussion

> **Throws**

> This function throws if anything fails during initialization.
