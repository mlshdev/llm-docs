> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnplanegeometry/update(from:)](https://developer.apple.com/documentation/arkit/arscnplanegeometry/update(from:))

# update(from:) (Swift)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+

Reshapes the SceneKit geometry to match the specified plane mesh.

## Declaration

```swift
func update(from planeGeometry: ARPlaneGeometry)
```

## Parameters

- `planeGeometry`: A coarse mesh representation of a detected plane’s estimated shape.

<a id="Discussion"></a>

## Discussion

To update a SceneKit model of a plane actively tracked in an AR session, call this method in your [ARSCNViewDelegate](../arscnviewdelegate.md) object’s [renderer(\_:didUpdate:for:)](../arscnviewdelegate/renderer%28__didupdate_for_%29.md) callback, passing the [geometry](../arplaneanchor/geometry.md) property from the [ARPlaneAnchor](../arplaneanchor.md) object that callback provides.

# updateFromPlaneGeometry: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+

Reshapes the SceneKit geometry to match the specified plane mesh.

## Declaration

```objectivec
- (void) updateFromPlaneGeometry:(ARPlaneGeometry *) planeGeometry;
```

## Parameters

- `planeGeometry`: A coarse mesh representation of a detected plane’s estimated shape.

<a id="Discussion"></a>

## Discussion

To update a SceneKit model of a plane actively tracked in an AR session, call this method in your [ARSCNViewDelegate](../arscnviewdelegate.md) object’s [renderer:didUpdateNode:forAnchor:](../arscnviewdelegate/renderer%28__didupdate_for_%29.md) callback, passing the [geometry](../arplaneanchor/geometry.md) property from the [ARPlaneAnchor](../arplaneanchor.md) object that callback provides.
