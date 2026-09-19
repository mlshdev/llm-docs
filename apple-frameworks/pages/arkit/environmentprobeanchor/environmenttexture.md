> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/environmentprobeanchor/environmenttexture

# environmentTexture

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The environment texture of an anchor.

## Declaration

```swift
var environmentTexture: (any MTLTexture)? { get }
```

<a id="Discussion"></a>

## Discussion

Textures may be `nil` if the person isn’t in a well-lit environment.

## See Also

### Getting anchor information

- [cameraScaleReference](camerascalereference.md): The camera scale reference of this anchor.
- [originFromAnchorTransform](originfromanchortransform.md): The transform from the environment probe anchor to the origin coordinate system.
