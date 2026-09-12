> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikcomponent/resource](https://developer.apple.com/documentation/realitykit/ikcomponent/resource)

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
