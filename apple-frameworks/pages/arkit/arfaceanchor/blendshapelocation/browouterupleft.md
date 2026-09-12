> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arfaceanchor/blendshapelocation/browouterupleft](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/browouterupleft)

# browOuterUpLeft (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The coefficient describing upward movement of the outer portion of the left eyebrow.

## Declaration

```swift
static let browOuterUpLeft: ARFaceAnchor.BlendShapeLocation
```

<a id="Discussion"></a>

## Discussion

The figure below shows a face geometry (see [ARSCNFaceGeometry](../../arscnfacegeometry.md)) in two states, demonstrating values of `0.0` and `1.0` for this coefficient. In both states, the values for all other [ARFaceAnchor.BlendShapeLocation](../blendshapelocation.md) coefficients are set to `0.0`.

![](https://developer.apple.com/images/com.apple.arkit/media-2930089@2x.png)

## See Also

### Eyebrows, Cheeks, and Nose

- [browDownLeft](browdownleft.md): The coefficient describing downward movement of the outer portion of the left eyebrow.
- [browDownRight](browdownright.md): The coefficient describing downward movement of the outer portion of the right eyebrow.
- [browInnerUp](browinnerup.md): The coefficient describing upward movement of the inner portion of both eyebrows.
- [browOuterUpRight](browouterupright.md): The coefficient describing upward movement of the outer portion of the right eyebrow.
- [cheekPuff](cheekpuff.md): The coefficient describing outward movement of both cheeks.
- [cheekSquintLeft](cheeksquintleft.md): The coefficient describing upward movement of the cheek around and below the left eye.
- [cheekSquintRight](cheeksquintright.md): The coefficient describing upward movement of the cheek around and below the right eye.
- [noseSneerLeft](nosesneerleft.md): The coefficient describing a raising of the left side of the nose around the nostril.
- [noseSneerRight](nosesneerright.md): The coefficient describing a raising of the right side of the nose around the nostril.

# ARBlendShapeLocationBrowOuterUpLeft (Objective-C)

**Framework:** ARKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The coefficient describing upward movement of the outer portion of the left eyebrow.

## Declaration

```objectivec
extern ARBlendShapeLocation const ARBlendShapeLocationBrowOuterUpLeft;
```

<a id="Discussion"></a>

## Discussion

The figure below shows a face geometry (see [ARSCNFaceGeometry](../../arscnfacegeometry.md)) in two states, demonstrating values of `0.0` and `1.0` for this coefficient. In both states, the values for all other [ARBlendShapeLocation](../blendshapelocation.md) coefficients are set to `0.0`.

![](https://developer.apple.com/images/com.apple.arkit/media-2930089@2x.png)

## See Also

### Eyebrows, Cheeks, and Nose

- [ARBlendShapeLocationBrowDownLeft](browdownleft.md): The coefficient describing downward movement of the outer portion of the left eyebrow.
- [ARBlendShapeLocationBrowDownRight](browdownright.md): The coefficient describing downward movement of the outer portion of the right eyebrow.
- [ARBlendShapeLocationBrowInnerUp](browinnerup.md): The coefficient describing upward movement of the inner portion of both eyebrows.
- [ARBlendShapeLocationBrowOuterUpRight](browouterupright.md): The coefficient describing upward movement of the outer portion of the right eyebrow.
- [ARBlendShapeLocationCheekPuff](cheekpuff.md): The coefficient describing outward movement of both cheeks.
- [ARBlendShapeLocationCheekSquintLeft](cheeksquintleft.md): The coefficient describing upward movement of the cheek around and below the left eye.
- [ARBlendShapeLocationCheekSquintRight](cheeksquintright.md): The coefficient describing upward movement of the cheek around and below the right eye.
- [ARBlendShapeLocationNoseSneerLeft](nosesneerleft.md): The coefficient describing a raising of the left side of the nose around the nostril.
- [ARBlendShapeLocationNoseSneerRight](nosesneerright.md): The coefficient describing a raising of the right side of the nose around the nostril.
