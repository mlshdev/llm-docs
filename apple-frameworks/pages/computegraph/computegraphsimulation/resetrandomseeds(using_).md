> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computegraphsimulation/resetrandomseeds(using:)](https://developer.apple.com/documentation/computegraph/computegraphsimulation/resetrandomseeds(using:))

# resetRandomSeeds(using:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Resets random seeds using the provided randomness function.

## Declaration

```swift
final func resetRandomSeeds(using randomness: () -> UInt32)
```

<a id="discussion"></a>

## Discussion

`randomness` will be called multiple times, for each of seeds used by the simulation
