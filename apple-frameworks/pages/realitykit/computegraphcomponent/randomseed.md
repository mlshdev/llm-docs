> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphcomponent/randomseed](https://developer.apple.com/documentation/realitykit/computegraphcomponent/randomseed)

# randomSeed

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An optional fixed random seed for the simulation.

## Declaration

```swift
var randomSeed: UInt32? { get set }
```

<a id="discussion"></a>

## Discussion

When `nil`, a random seed is chosen each time the simulation is (re)initialized.
