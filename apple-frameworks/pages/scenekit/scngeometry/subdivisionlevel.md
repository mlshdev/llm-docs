> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometry/subdivisionlevel](https://developer.apple.com/documentation/scenekit/scngeometry/subdivisionlevel)

# subdivisionLevel (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The number of subdivisions SceneKit uses to smooth the geometry’s surface at render time.

## Declaration

```swift
var subdivisionLevel: Int { get set }
```

<a id="Discussion"></a>

## Discussion

*Surface subdivision* is a technique for using low-detail geometry to generate a smooth surface for rendering. When you increase the [subdivisionLevel](subdivisionlevel.md) value of a geometry, SceneKit automatically splits each face in the rendered surface, creating a more detailed, smoother geometry, as shown in . SceneKit performs this subdivision process at render time, preserving the original geometry data.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929791@2x.png)

Subdividing a surface rounds away any sharp edges and corners in the geometry; however, such details may be important to a model’s design. To preserve edges, use the [edgeCreasesElement](edgecreaseselement.md) property to identify edges and the [edgeCreasesSource](edgecreasessource.md) property to specify how smooth or sharp they should appear after subdivision. To preserve corners, include a geometry source whose [semantic](../scngeometrysource/semantic-swift.property.md) value is [vertexCrease](../scngeometrysource/semantic-swift.struct/vertexcrease.md) when creating the geometry.

The default subdivision level is zero, specifying no subdivision—SceneKit renders the geometry exactly as its vertex data specifies.

## See Also

### Smoothing and Subdividing Geometry

- [edgeCreasesElement](edgecreaseselement.md): The geometry element identifying which edges of the geometry’s surface should remain sharp after subdivision.
- [edgeCreasesSource](edgecreasessource.md): The geometry source specifying the smoothness or sharpness of edges after surface subdivision.
- [wantsAdaptiveSubdivision](wantsadaptivesubdivision.md)

# subdivisionLevel (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The number of subdivisions SceneKit uses to smooth the geometry’s surface at render time.

## Declaration

```objectivec
@property (nonatomic) NSUInteger subdivisionLevel;
```

<a id="Discussion"></a>

## Discussion

*Surface subdivision* is a technique for using low-detail geometry to generate a smooth surface for rendering. When you increase the [subdivisionLevel](subdivisionlevel.md) value of a geometry, SceneKit automatically splits each face in the rendered surface, creating a more detailed, smoother geometry, as shown in . SceneKit performs this subdivision process at render time, preserving the original geometry data.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929791@2x.png)

Subdividing a surface rounds away any sharp edges and corners in the geometry; however, such details may be important to a model’s design. To preserve edges, use the [edgeCreasesElement](edgecreaseselement.md) property to identify edges and the [edgeCreasesSource](edgecreasessource.md) property to specify how smooth or sharp they should appear after subdivision. To preserve corners, include a geometry source whose [semantic](../scngeometrysource/semantic-swift.property.md) value is [SCNGeometrySourceSemanticVertexCrease](../scngeometrysource/semantic-swift.struct/vertexcrease.md) when creating the geometry.

The default subdivision level is zero, specifying no subdivision—SceneKit renders the geometry exactly as its vertex data specifies.

## See Also

### Smoothing and Subdividing Geometry

- [edgeCreasesElement](edgecreaseselement.md): The geometry element identifying which edges of the geometry’s surface should remain sharp after subdivision.
- [edgeCreasesSource](edgecreasessource.md): The geometry source specifying the smoothness or sharpness of edges after surface subdivision.
- [wantsAdaptiveSubdivision](wantsadaptivesubdivision.md)
