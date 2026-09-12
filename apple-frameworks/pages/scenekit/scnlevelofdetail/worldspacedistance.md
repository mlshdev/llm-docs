> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlevelofdetail/worldspacedistance](https://developer.apple.com/documentation/scenekit/scnlevelofdetail/worldspacedistance)

# worldSpaceDistance (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The minimum distance from the current point of view for this level of detail to appear.

## Declaration

```swift
var worldSpaceDistance: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

When rendering a geometry with associated levels of detail, SceneKit calculates the distance from the current point of view to the geometry’s parent node, then renders the geometry for the [SCNLevelOfDetail](../scnlevelofdetail.md) object with the largest `distance` parameter less than that distance.

## See Also

### Inspecting a Level of Detail

- [geometry](geometry.md): The geometry associated with this level of detail.
- [screenSpaceRadius](screenspaceradius.md): The maximum radius (in pixels) of the geometry’s bounding sphere for this level of detail to appear.

# worldSpaceDistance (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

The minimum distance from the current point of view for this level of detail to appear.

## Declaration

```objectivec
@property (readonly) CGFloat worldSpaceDistance;
```

<a id="Discussion"></a>

## Discussion

When rendering a geometry with associated levels of detail, SceneKit calculates the distance from the current point of view to the geometry’s parent node, then renders the geometry for the [SCNLevelOfDetail](../scnlevelofdetail.md) object with the largest `distance` parameter less than that distance.

## See Also

### Inspecting a Level of Detail

- [geometry](geometry.md): The geometry associated with this level of detail.
- [screenSpaceRadius](screenspaceradius.md): The maximum radius (in pixels) of the geometry’s bounding sphere for this level of detail to appear.
