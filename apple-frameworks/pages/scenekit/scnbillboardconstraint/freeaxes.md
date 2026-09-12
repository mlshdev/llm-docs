> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnbillboardconstraint/freeaxes](https://developer.apple.com/documentation/scenekit/scnbillboardconstraint/freeaxes)

# freeAxes (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An option that specifies which degrees of freedom the constraint affects.

## Declaration

```swift
var freeAxes: SCNBillboardAxis { get set }
```

<a id="Discussion"></a>

## Discussion

With the default constraint type of [all](../scnbillboardaxis/all.md), a node affected by the constraint never rotates with respect to the scene’s point of view. Change this property to partially constrain a node’s orientation. For example, the [Y](../scnbillboardaxis/y.md) constraint type keeps only the node’s y-axis parallel to the screen—this option can be useful for applications like drawing trees in the distance with 2D sprites instead of with 3D geometry.

# freeAxes (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option that specifies which degrees of freedom the constraint affects.

## Declaration

```objectivec
@property (nonatomic) SCNBillboardAxis freeAxes;
```

<a id="Discussion"></a>

## Discussion

With the default constraint type of [SCNBillboardAxisAll](../scnbillboardaxis/all.md), a node affected by the constraint never rotates with respect to the scene’s point of view. Change this property to partially constrain a node’s orientation. For example, the [SCNBillboardAxisY](../scnbillboardaxis/y.md) constraint type keeps only the node’s y-axis parallel to the screen—this option can be useful for applications like drawing trees in the distance with 2D sprites instead of with 3D geometry.
