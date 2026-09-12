> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/imagepresentationcomponent/spatial3dimage/generate()](https://developer.apple.com/documentation/realitykit/imagepresentationcomponent/spatial3dimage/generate())

# generate()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Creates a 3D representation of the image if one does not already exist.

## Declaration

```swift
@abi(final func generateNonisolatedNonsendingFinal() async throws) nonisolated(nonsending) final func generate() async throws
```

<a id="discussion"></a>

## Discussion

This method checks for cancellation of an enclosing `Task` during generation, and cancels its own async generation early (by throwing an error) if task cancellation is detected.

> **Throws**

> Throws an error if the underlying monoscopic image does not contain valid data to generate a spatial 3D representation; or if a spatial 3D representation has already been generated.

Also throws an error if the image size does not meet the following requirements:

- At least 320 pixels on its shortest side
- At most 16,384 pixels on its largest side
- Aspect ratio between 1:3 and 3:1
