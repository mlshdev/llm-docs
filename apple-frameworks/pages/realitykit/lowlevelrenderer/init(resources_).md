> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/init(resources:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/init(resources:))

# init(resources:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a renderer using pre-compiled GPU resources.

## Declaration

```swift
init(resources: LowLevelRenderer.Resources) throws(LowLevelRendererError)
```

## Parameters

- `resources`: Pre-compiled GPU resources for this renderer’s configuration.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if GPU buffer allocation fails.
