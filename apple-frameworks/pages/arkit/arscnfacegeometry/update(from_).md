> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnfacegeometry/update(from:)](https://developer.apple.com/documentation/arkit/arscnfacegeometry/update(from:))

# update(from:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Deforms the SceneKit geometry to match the specified face mesh.

## Declaration

```swift
func update(from faceGeometry: ARFaceGeometry)
```

## Parameters

- `faceGeometry`: A coarse mesh representation of a face’s topology, dimensions, and expression.

<a id="Discussion"></a>

## Discussion

To update a SceneKit model of a face actively tracked in an AR session, call this method in your [ARSCNViewDelegate](../arscnviewdelegate.md) object’s [renderer(\_:didUpdate:for:)](../arscnviewdelegate/renderer%28__didupdate_for_%29.md) callback, passing the [geometry](../arfaceanchor/geometry.md) property from the [ARFaceAnchor](../arfaceanchor.md) object that callback provides.

Alternatively, you can create, configure, and visualize face models independent of an AR session by creating face geometry objects using the [ARFaceGeometry](../arfacegeometry.md) [init(blendShapes:)](../arfacegeometry/init%28blendshapes_%29.md) initializer and passing them to this method.

# updateFromFaceGeometry: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Deforms the SceneKit geometry to match the specified face mesh.

## Declaration

```objectivec
- (void) updateFromFaceGeometry:(ARFaceGeometry *) faceGeometry;
```

## Parameters

- `faceGeometry`: A coarse mesh representation of a face’s topology, dimensions, and expression.

<a id="Discussion"></a>

## Discussion

To update a SceneKit model of a face actively tracked in an AR session, call this method in your [ARSCNViewDelegate](../arscnviewdelegate.md) object’s [renderer:didUpdateNode:forAnchor:](../arscnviewdelegate/renderer%28__didupdate_for_%29.md) callback, passing the [geometry](../arfaceanchor/geometry.md) property from the [ARFaceAnchor](../arfaceanchor.md) object that callback provides.

Alternatively, you can create, configure, and visualize face models independent of an AR session by creating face geometry objects using the [ARFaceGeometry](../arfacegeometry.md) [initWithBlendShapes:](../arfacegeometry/init%28blendshapes_%29.md) initializer and passing them to this method.
