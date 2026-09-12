> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlevelofdetail/geometry](https://developer.apple.com/documentation/scenekit/scnlevelofdetail/geometry)

# geometry (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The geometry associated with this level of detail.

## Declaration

```swift
var geometry: SCNGeometry? { get }
```

<a id="Discussion"></a>

## Discussion

SceneKit renders this geometry instead of the original geometry when the level of detail is appropriate. Generally, levels of detail with larger [worldSpaceDistance](worldspacedistance.md) values or smaller [screenSpaceRadius](screenspaceradius.md) values should contain less complex geometries.

If the value of this property is `nil`, SceneKit renders no geometry at this level of detail.

## See Also

### Inspecting a Level of Detail

- [screenSpaceRadius](screenspaceradius.md): The maximum radius (in pixels) of the geometry’s bounding sphere for this level of detail to appear.
- [worldSpaceDistance](worldspacedistance.md): The minimum distance from the current point of view for this level of detail to appear.

# geometry (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

The geometry associated with this level of detail.

## Declaration

```objectivec
@property (readonly, nullable) SCNGeometry * geometry;
```

<a id="Discussion"></a>

## Discussion

SceneKit renders this geometry instead of the original geometry when the level of detail is appropriate. Generally, levels of detail with larger [worldSpaceDistance](worldspacedistance.md) values or smaller [screenSpaceRadius](screenspaceradius.md) values should contain less complex geometries.

If the value of this property is `nil`, SceneKit renders no geometry at this level of detail.

## See Also

### Inspecting a Level of Detail

- [screenSpaceRadius](screenspaceradius.md): The maximum radius (in pixels) of the geometry’s bounding sphere for this level of detail to appear.
- [worldSpaceDistance](worldspacedistance.md): The minimum distance from the current point of view for this level of detail to appear.
