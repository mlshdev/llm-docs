> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshresource/generatetextoptions/containerframe

# containerFrame

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The size in points of the frame where the text is laid out.

## Declaration

```swift
var containerFrame: CGRect?
```

<a id="discussion"></a>

## Discussion

The points are scaled at a ratio of 72 points per meter.

The container frame has the same origin as the local coordinate system.

> **Note**

> Use a value of `nil` to denote an arbitrarily large frame.
