> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlevelofdetail/init(geometry:worldspacedistance:)](https://developer.apple.com/documentation/scenekit/scnlevelofdetail/init(geometry:worldspacedistance:))

# init(geometry:worldSpaceDistance:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a level of detail with the specified geometry and threshold camera distance.

## Declaration

```swift
convenience init(geometry: SCNGeometry?, worldSpaceDistance distance: CGFloat)
```

## Parameters

- `geometry`: The geometry to render for this level of detail, or `nil` if SceneKit should render no geometry at this level of detail.
- `distance`: The minimum distance from the current point of view for this level of detail to appear.

<a id="return-value"></a>

## Return Value

A level-of-detail object. You associate levels of detail with a [SCNGeometry](../scngeometry.md) object using its [levelsOfDetail](../scngeometry/levelsofdetail.md) property.

<a id="Discussion"></a>

## Discussion

When rendering a geometry with associated levels of detail, SceneKit calculates the distance from the current point of view to the geometry’s parent node, then renders the geometry for the [SCNLevelOfDetail](../scnlevelofdetail.md) object with the smallest `distance` parameter greater than that distance.

If you pass `nil` for the geometry parameter, SceneKit renders no geometry for the level of detail. Creating a level-of-detail object with no geometry allows you to skip rendering costs entirely for an object when it would appear very far away or very small.

## See Also

### Creating a Level of Detail

- [init(geometry:screenSpaceRadius:)](init%28geometry_screenspaceradius_%29.md): Creates a level of detail with the specified geometry and threshold pixel radius.

# levelOfDetailWithGeometry:worldSpaceDistance: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Creates a level of detail with the specified geometry and threshold camera distance.

## Declaration

```objectivec
+ (instancetype) levelOfDetailWithGeometry:(SCNGeometry *) geometry worldSpaceDistance:(CGFloat) distance;
```

## Parameters

- `geometry`: The geometry to render for this level of detail, or `nil` if SceneKit should render no geometry at this level of detail.
- `distance`: The minimum distance from the current point of view for this level of detail to appear.

<a id="return-value"></a>

## Return Value

A level-of-detail object. You associate levels of detail with a [SCNGeometry](../scngeometry.md) object using its [levelsOfDetail](../scngeometry/levelsofdetail.md) property.

<a id="Discussion"></a>

## Discussion

When rendering a geometry with associated levels of detail, SceneKit calculates the distance from the current point of view to the geometry’s parent node, then renders the geometry for the [SCNLevelOfDetail](../scnlevelofdetail.md) object with the smallest `distance` parameter greater than that distance.

If you pass `nil` for the geometry parameter, SceneKit renders no geometry for the level of detail. Creating a level-of-detail object with no geometry allows you to skip rendering costs entirely for an object when it would appear very far away or very small.

## See Also

### Creating a Level of Detail

- [levelOfDetailWithGeometry:screenSpaceRadius:](init%28geometry_screenspaceradius_%29.md): Creates a level of detail with the specified geometry and threshold pixel radius.
