> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/initialize/spawnindex](https://developer.apple.com/documentation/computegraph/initialize/spawnindex)

# initialize::spawnIndex

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

For a derived element spawned from an emitter, returns the sequential index of the spawn from that emitter. If this was spawned from an EventSource or from the CPU, this value is the index within the current spawn request.

## Declaration

```swift
int initialize::spawnIndex()
```

<a id="discussion"></a>

## Discussion

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/initialize__spawnIndex.svg)
