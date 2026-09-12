> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/environmentprobeanchor/camerascalereference](https://developer.apple.com/documentation/arkit/environmentprobeanchor/camerascalereference)

# cameraScaleReference

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The camera scale reference of this anchor.

## Declaration

```swift
var cameraScaleReference: Float { get }
```

<a id="discussion"></a>

## Discussion

Returns the camera scale reference of a pixel with rgb value \[1,1,1\] in the environment texture.

In order to have a consistent brightness between texture updates, the cameraScaleReference allows you to translate the local brightness from the current environment texture to the absolute brightness range from the camera.

## See Also

### Getting anchor information

- [environmentTexture](environmenttexture.md): The environment texture of an anchor.
- [originFromAnchorTransform](originfromanchortransform.md): The transform from the environment probe anchor to the origin coordinate system.
