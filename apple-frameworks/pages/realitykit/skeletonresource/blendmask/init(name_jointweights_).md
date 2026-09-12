> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/skeletonresource/blendmask/init(name:jointweights:)](https://developer.apple.com/documentation/realitykit/skeletonresource/blendmask/init(name:jointweights:))

# init(name:jointWeights:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a blend mask with the specified parameters.

## Declaration

```swift
init(name: String, jointWeights: [String : Float])
```

## Parameters

- `name`: The unique name of the blend mask within the skeleton
- `jointWeights`: Dictionary of joint weights keyed by joint name (0-1 range). Joints not in dictionary default to 1.0 (full animation effect).
