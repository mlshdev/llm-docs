> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/emitter/periodicburst](https://developer.apple.com/documentation/computegraph/emitter/periodicburst)

# emitter::periodicBurst

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Emit a burst of particles periodically.

## Declaration

```swift
void emitter::periodicBurst(float2 intervalRange, uint burstSize)
```

## Parameters

- `intervalRange`: Minimum/Maximum duration between spawns. After each burst, the interval before the next burst will be chosen randomly in this interval.
- `burstSize`: Number of particles to emit at system creation or reset.

<a id="discussion"></a>

## Discussion

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/emitter__periodicBurst.svg)

> **Note**

> Reads from emitter state `PeriodicEmitterState state`, if it exists
