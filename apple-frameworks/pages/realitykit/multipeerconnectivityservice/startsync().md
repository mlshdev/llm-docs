> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/multipeerconnectivityservice/startsync()](https://developer.apple.com/documentation/realitykit/multipeerconnectivityservice/startsync())

# startSync()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+

Begins multipeer synchronization.

## Declaration

```swift
func startSync()
```

<a id="discussion"></a>

## Discussion

Call this method to restart multipeer syncing with connected peers after calling [stopSync()](stopsync%28%29.md). You don’t need to call this method to begin syncing. RealityKit calls this method automatically when you assign a [MultipeerConnectivityService](../multipeerconnectivityservice.md) to a [Scene](../scene.md).

## See Also

### Pausing and resuming

- [stopSync()](stopsync%28%29.md): Stops multipeer synchronization.
