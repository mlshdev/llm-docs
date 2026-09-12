> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikrig/joint/limitsdefinition/weight](https://developer.apple.com/documentation/realitykit/ikrig/joint/limitsdefinition/weight)

# weight

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The weight of the joint rotation limit demand.

## Declaration

```swift
var weight: Float
```

<a id="discussion"></a>

## Discussion

The value is in the closed range `[0, 1]`, where `0` means no influence, and `1` is maximum correction.
