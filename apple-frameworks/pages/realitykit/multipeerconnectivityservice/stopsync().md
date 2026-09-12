> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/multipeerconnectivityservice/stopsync()](https://developer.apple.com/documentation/realitykit/multipeerconnectivityservice/stopsync())

# stopSync()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+

Stops multipeer synchronization.

## Declaration

```swift
func stopSync()
```

<a id="discussion"></a>

## Discussion

Call this method to stop multipeer syncing with connected peers. To resume syncing after calling this method, call [startSync()](startsync%28%29.md).

## See Also

### Pausing and resuming

- [startSync()](startsync%28%29.md): Begins multipeer synchronization.
