> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arfaceanchor/blendshapelocation/mouthpucker](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/mouthpucker)

# mouthPucker (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The coefficient describing contraction and compression of both closed lips.

## Declaration

```swift
static let mouthPucker: ARFaceAnchor.BlendShapeLocation
```

<a id="Discussion"></a>

## Discussion

The figure below shows a face geometry (see [ARSCNFaceGeometry](../../arscnfacegeometry.md)) in two states, demonstrating values of `0.0` and `1.0` for this coefficient. In both states, the values for all other [ARFaceAnchor.BlendShapeLocation](../blendshapelocation.md) coefficients are set to `0.0`.

![](https://developer.apple.com/images/com.apple.arkit/media-2930070@2x.png)

## See Also

### Mouth and Jaw

- [jawForward](jawforward.md): The coefficient describing forward movement of the lower jaw.
- [jawLeft](jawleft.md): The coefficient describing leftward movement of the lower jaw.
- [jawRight](jawright.md): The coefficient describing rightward movement of the lower jaw.
- [jawOpen](jawopen.md): The coefficient describing an opening of the lower jaw.
- [mouthClose](mouthclose.md): The coefficient describing closure of the lips *independent of jaw position*.
- [mouthFunnel](mouthfunnel.md): The coefficient describing contraction of both lips into an open shape.
- [mouthLeft](mouthleft.md): The coefficient describing leftward movement of both lips together.
- [mouthRight](mouthright.md): The coefficient describing rightward movement of both lips together.
- [mouthSmileLeft](mouthsmileleft.md): The coefficient describing upward movement of the left corner of the mouth.
- [mouthSmileRight](mouthsmileright.md): The coefficient describing upward movement of the right corner of the mouth.
- [mouthFrownLeft](mouthfrownleft.md): The coefficient describing downward movement of the left corner of the mouth.
- [mouthFrownRight](mouthfrownright.md): The coefficient describing downward movement of the right corner of the mouth.
- [mouthDimpleLeft](mouthdimpleleft.md): The coefficient describing backward movement of the left corner of the mouth.
- [mouthDimpleRight](mouthdimpleright.md): The coefficient describing backward movement of the right corner of the mouth.
- [mouthStretchLeft](mouthstretchleft.md): The coefficient describing leftward movement of the left corner of the mouth.

# ARBlendShapeLocationMouthPucker (Objective-C)

**Framework:** ARKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The coefficient describing contraction and compression of both closed lips.

## Declaration

```objectivec
extern ARBlendShapeLocation const ARBlendShapeLocationMouthPucker;
```

<a id="Discussion"></a>

## Discussion

The figure below shows a face geometry (see [ARSCNFaceGeometry](../../arscnfacegeometry.md)) in two states, demonstrating values of `0.0` and `1.0` for this coefficient. In both states, the values for all other [ARBlendShapeLocation](../blendshapelocation.md) coefficients are set to `0.0`.

![](https://developer.apple.com/images/com.apple.arkit/media-2930070@2x.png)

## See Also

### Mouth and Jaw

- [ARBlendShapeLocationJawForward](jawforward.md): The coefficient describing forward movement of the lower jaw.
- [ARBlendShapeLocationJawLeft](jawleft.md): The coefficient describing leftward movement of the lower jaw.
- [ARBlendShapeLocationJawRight](jawright.md): The coefficient describing rightward movement of the lower jaw.
- [ARBlendShapeLocationJawOpen](jawopen.md): The coefficient describing an opening of the lower jaw.
- [ARBlendShapeLocationMouthClose](mouthclose.md): The coefficient describing closure of the lips *independent of jaw position*.
- [ARBlendShapeLocationMouthFunnel](mouthfunnel.md): The coefficient describing contraction of both lips into an open shape.
- [ARBlendShapeLocationMouthLeft](mouthleft.md): The coefficient describing leftward movement of both lips together.
- [ARBlendShapeLocationMouthRight](mouthright.md): The coefficient describing rightward movement of both lips together.
- [ARBlendShapeLocationMouthSmileLeft](mouthsmileleft.md): The coefficient describing upward movement of the left corner of the mouth.
- [ARBlendShapeLocationMouthSmileRight](mouthsmileright.md): The coefficient describing upward movement of the right corner of the mouth.
- [ARBlendShapeLocationMouthFrownLeft](mouthfrownleft.md): The coefficient describing downward movement of the left corner of the mouth.
- [ARBlendShapeLocationMouthFrownRight](mouthfrownright.md): The coefficient describing downward movement of the right corner of the mouth.
- [ARBlendShapeLocationMouthDimpleLeft](mouthdimpleleft.md): The coefficient describing backward movement of the left corner of the mouth.
- [ARBlendShapeLocationMouthDimpleRight](mouthdimpleright.md): The coefficient describing backward movement of the right corner of the mouth.
- [ARBlendShapeLocationMouthStretchLeft](mouthstretchleft.md): The coefficient describing leftward movement of the left corner of the mouth.
