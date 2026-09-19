> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/ikcomponent/resource

# resource

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Reference to the resource describing the desired inverse kinematics setup.

## Declaration

```swift
var resource: IKResource?
```

<a id="discussion"></a>

## Discussion

> **Note**

> There is one engine tick delay between setting new resource and the change reflected in `solvers`.
