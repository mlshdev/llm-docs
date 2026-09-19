> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arscndebugoptionshowfeaturepoints

# ARSCNDebugOptionShowFeaturePoints

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Display a point cloud showing intermediate results of the scene analysis that ARKit uses to track device position.

## Declaration

```objectivec
extern const SCNDebugOptions ARSCNDebugOptionShowFeaturePoints;
```

<a id="Discussion"></a>

## Discussion

This option is available only when running a [ARWorldTrackingConfiguration](arworldtrackingconfiguration.md) session.

## See Also

### AR Debugging Overlays

- [ARSCNDebugOptionShowWorldOrigin](arscndebugoptionshowworldorigin.md): Display a coordinate axis visualization indicating the position and orientation of the AR world coordinate system.
