> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computegraphsimulation/adduserresource(_:)](https://developer.apple.com/documentation/computegraph/computegraphsimulation/adduserresource(_:))

# addUserResource(\_:)

**Framework:** Compute Graph  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

Registers a resource for residency on all command encoders used by this simulation.

## Declaration

```swift
final func addUserResource(_ resource: any MTLResource)
```

<a id="discussion"></a>

## Discussion

Only needed when buffers or textures are passed indirectly through structures using Metal Tier 2 Argument Buffers, since Metal cannot discover those resources automatically.
