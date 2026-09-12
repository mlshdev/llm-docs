> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/elementspawnparameters/lifetime](https://developer.apple.com/documentation/computegraph/elementspawnparameters/lifetime)

# lifetime

**Framework:** Compute Graph  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

The initial lifetime of the particle in seconds.

## Declaration

```swift
var lifetime: Float { get set }
```

<a id="discussion"></a>

## Discussion

This determines how long the particle will exist before being automatically removed from the simulation. A value of 0 or negative means the particle will be removed immediately or never spawn.
