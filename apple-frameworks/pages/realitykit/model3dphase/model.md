> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/model3dphase/model](https://developer.apple.com/documentation/realitykit/model3dphase/model)

# model

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The loaded model, if any.

## Declaration

```swift
var model: ResolvedModel3D? { get }
```

<a id="discussion"></a>

## Discussion

If this value isn’t `nil`, the model load operation has finished, and you can use the model to update the view. You can use the model directly, or you can modify it in some way. For example, you can add a `ResolvedModel3D/resizable()` modifier to make the model resizable.

## See Also

### Accessing the model

- [error](error.md): The error that occurred when attempting to load a model, if any.
