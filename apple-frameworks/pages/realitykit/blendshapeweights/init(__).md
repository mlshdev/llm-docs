> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blendshapeweights/init(_:)](https://developer.apple.com/documentation/realitykit/blendshapeweights/init(_:))

# init(\_:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Initializes a collection of weights for a single blend shape.

## Declaration

```swift
init<S>(_ weights: S) where S : Sequence, S.Element == Float
```

## Parameters

- `weights`: An array of float weights for the blend shape.
