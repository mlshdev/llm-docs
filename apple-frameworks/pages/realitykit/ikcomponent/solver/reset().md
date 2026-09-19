> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/ikcomponent/solver/reset()

# reset()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Enqueues a solver reset call that executes before the next solve.

## Declaration

```swift
func reset()
```

<a id="discussion"></a>

## Discussion

Resets the solver to its rest pose. Useful if the source animation or constraint demands change significantly.
