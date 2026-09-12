> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlevelofdetail/init(geometry:screenspaceradius:)](https://developer.apple.com/documentation/scenekit/scnlevelofdetail/init(geometry:screenspaceradius:))

# init(geometry:screenSpaceRadius:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a level of detail with the specified geometry and threshold pixel radius.

## Declaration

```swift
convenience init(geometry: SCNGeometry?, screenSpaceRadius radius: CGFloat)
```

## Parameters

- `geometry`: The geometry to render for this level of detail.
- `radius`: The maximum radius (in pixels) of the geometry’s bounding sphere for this level of detail to appear.

<a id="return-value"></a>

## Return Value

A level-of-detail object. You associate levels of detail with a [SCNGeometry](../scngeometry.md) object using its [levelsOfDetail](../scngeometry/levelsofdetail.md) property.

<a id="Discussion"></a>

## Discussion

When rendering a geometry with associated levels of detail, SceneKit calculates the radius in pixels of the circle covered by a geometry’s bounding sphere, then renders the geometry for the [SCNLevelOfDetail](../scnlevelofdetail.md) object with the largest `radius` parameter smaller than that circle.

If you pass `nil` for the geometry parameter, SceneKit renders no geometry for the level of detail. Creating a level-of-detail object with no geometry allows you to skip rendering costs entirely for an object when it would appear very far away or very small.

## See Also

### Creating a Level of Detail

- [init(geometry:worldSpaceDistance:)](init%28geometry_worldspacedistance_%29.md): Creates a level of detail with the specified geometry and threshold camera distance.

# levelOfDetailWithGeometry:screenSpaceRadius: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Creates a level of detail with the specified geometry and threshold pixel radius.

## Declaration

```objectivec
+ (instancetype) levelOfDetailWithGeometry:(SCNGeometry *) geometry screenSpaceRadius:(CGFloat) radius;
```

## Parameters

- `geometry`: The geometry to render for this level of detail.
- `radius`: The maximum radius (in pixels) of the geometry’s bounding sphere for this level of detail to appear.

<a id="return-value"></a>

## Return Value

A level-of-detail object. You associate levels of detail with a [SCNGeometry](../scngeometry.md) object using its [levelsOfDetail](../scngeometry/levelsofdetail.md) property.

<a id="Discussion"></a>

## Discussion

When rendering a geometry with associated levels of detail, SceneKit calculates the radius in pixels of the circle covered by a geometry’s bounding sphere, then renders the geometry for the [SCNLevelOfDetail](../scnlevelofdetail.md) object with the largest `radius` parameter smaller than that circle.

If you pass `nil` for the geometry parameter, SceneKit renders no geometry for the level of detail. Creating a level-of-detail object with no geometry allows you to skip rendering costs entirely for an object when it would appear very far away or very small.

## See Also

### Creating a Level of Detail

- [levelOfDetailWithGeometry:worldSpaceDistance:](init%28geometry_worldspacedistance_%29.md): Creates a level of detail with the specified geometry and threshold camera distance.
