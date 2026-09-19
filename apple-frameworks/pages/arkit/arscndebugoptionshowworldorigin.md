> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arscndebugoptionshowworldorigin

# ARSCNDebugOptionShowWorldOrigin

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Display a coordinate axis visualization indicating the position and orientation of the AR world coordinate system.

## Declaration

```objectivec
extern const SCNDebugOptions ARSCNDebugOptionShowWorldOrigin;
```

<a id="Discussion"></a>

## Discussion

This visualization is available to all session configurations and session [worldAlignment](arconfiguration/worldalignment-swift.property.md) options, but is most useful with a [ARWorldTrackingConfiguration](arworldtrackingconfiguration.md) session. For example, if you start running a session when this option is enabled, then take a step backward, the real-world position tracked by the AR world coordinate system should become visible on your device screen.

## See Also

### AR Debugging Overlays

- [ARSCNDebugOptionShowFeaturePoints](arscndebugoptionshowfeaturepoints.md): Display a point cloud showing intermediate results of the scene analysis that ARKit uses to track device position.
