> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlevelofdetail/screenspaceradius](https://developer.apple.com/documentation/scenekit/scnlevelofdetail/screenspaceradius)

# screenSpaceRadius (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The maximum radius (in pixels) of the geometry’s bounding sphere for this level of detail to appear.

## Declaration

```swift
var screenSpaceRadius: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

When rendering a geometry with associated levels of detail, SceneKit calculates the radius in pixels of the circle covered by a geometry’s bounding sphere, then renders the geometry for the [SCNLevelOfDetail](../scnlevelofdetail.md) object with the smallest `radius` parameter larger than that circle.

## See Also

### Inspecting a Level of Detail

- [geometry](geometry.md): The geometry associated with this level of detail.
- [worldSpaceDistance](worldspacedistance.md): The minimum distance from the current point of view for this level of detail to appear.

# screenSpaceRadius (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

The maximum radius (in pixels) of the geometry’s bounding sphere for this level of detail to appear.

## Declaration

```objectivec
@property (readonly) CGFloat screenSpaceRadius;
```

<a id="Discussion"></a>

## Discussion

When rendering a geometry with associated levels of detail, SceneKit calculates the radius in pixels of the circle covered by a geometry’s bounding sphere, then renders the geometry for the [SCNLevelOfDetail](../scnlevelofdetail.md) object with the smallest `radius` parameter larger than that circle.

## See Also

### Inspecting a Level of Detail

- [geometry](geometry.md): The geometry associated with this level of detail.
- [worldSpaceDistance](worldspacedistance.md): The minimum distance from the current point of view for this level of detail to appear.
