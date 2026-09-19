> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/emitter/continuous

# emitter::continuous

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Continuously emit particles at a fixed rate.

## Declaration

```swift
void emitter::continuous(float rate, float maxBurst)
```

## Parameters

- `rate`: Number of particles per second to emit. If this value results in a fractional number of particles to emit in a given frame, the remainder will be carried into the next frame.
- `maxBurst`: Maximum number of particles to emit in a single frame.

<a id="discussion"></a>

## Discussion

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/emitter__continuous.svg)

> **Note**

> Reads from emitter state `ContinuousEmitterState state`, if it exists
