> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivemediaremotepreviewreceiver/start(connection:)](https://developer.apple.com/documentation/immersivemediasupport/immersivemediaremotepreviewreceiver/start(connection:))

# start(connection:)

**Framework:** Immersive Media Support  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 26.0+

Performs the necessary steps to start receiving remote Immersive video frames using the given network connection.

## Declaration

```swift
func start(connection: NWConnection) async throws
```

## Parameters

- `connection`: The network connection to use for communication and receive remote frames.

<a id="discussion"></a>

## Discussion

> **Throws**

> This function throws if anything fails establishing the connection.
