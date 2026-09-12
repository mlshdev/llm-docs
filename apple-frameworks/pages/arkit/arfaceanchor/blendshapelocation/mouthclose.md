> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arfaceanchor/blendshapelocation/mouthclose](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/mouthclose)

# mouthClose (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The coefficient describing closure of the lips *independent of jaw position*.

## Declaration

```swift
static let mouthClose: ARFaceAnchor.BlendShapeLocation
```

<a id="Discussion"></a>

## Discussion

This coefficient describes a closing of the lips without relation to the position of the jaw (the [jawOpen](jawopen.md) coefficient), so some values of the [mouthClose](mouthclose.md) coefficient can produce unrealistic facial expressions unless other coefficients are also set to realistic values.

The figure below shows a face geometry (see [ARSCNFaceGeometry](../../arscnfacegeometry.md)) in three states:

1. A neutral face (all [ARFaceAnchor.BlendShapeLocation](../blendshapelocation.md) coefficient values at `0.0`, including both [jawOpen](jawopen.md) and [mouthClose](mouthclose.md))
2. Setting only the [jawOpen](jawopen.md) coefficient to `1.0`, while keeping all other coefficient values (including [mouthClose](mouthclose.md)) at `0.0`
3. Setting both the [jawOpen](jawopen.md) and [mouthClose](mouthclose.md) coefficients to `1.0`, while keeping all other coefficient values at `0.0`

![](https://developer.apple.com/images/com.apple.arkit/media-2930045@2x.png)

## See Also

### Mouth and Jaw

- [jawForward](jawforward.md): The coefficient describing forward movement of the lower jaw.
- [jawLeft](jawleft.md): The coefficient describing leftward movement of the lower jaw.
- [jawRight](jawright.md): The coefficient describing rightward movement of the lower jaw.
- [jawOpen](jawopen.md): The coefficient describing an opening of the lower jaw.
- [mouthFunnel](mouthfunnel.md): The coefficient describing contraction of both lips into an open shape.
- [mouthPucker](mouthpucker.md): The coefficient describing contraction and compression of both closed lips.
- [mouthLeft](mouthleft.md): The coefficient describing leftward movement of both lips together.
- [mouthRight](mouthright.md): The coefficient describing rightward movement of both lips together.
- [mouthSmileLeft](mouthsmileleft.md): The coefficient describing upward movement of the left corner of the mouth.
- [mouthSmileRight](mouthsmileright.md): The coefficient describing upward movement of the right corner of the mouth.
- [mouthFrownLeft](mouthfrownleft.md): The coefficient describing downward movement of the left corner of the mouth.
- [mouthFrownRight](mouthfrownright.md): The coefficient describing downward movement of the right corner of the mouth.
- [mouthDimpleLeft](mouthdimpleleft.md): The coefficient describing backward movement of the left corner of the mouth.
- [mouthDimpleRight](mouthdimpleright.md): The coefficient describing backward movement of the right corner of the mouth.
- [mouthStretchLeft](mouthstretchleft.md): The coefficient describing leftward movement of the left corner of the mouth.

# ARBlendShapeLocationMouthClose (Objective-C)

**Framework:** ARKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The coefficient describing closure of the lips *independent of jaw position*.

## Declaration

```objectivec
extern ARBlendShapeLocation const ARBlendShapeLocationMouthClose;
```

<a id="Discussion"></a>

## Discussion

This coefficient describes a closing of the lips without relation to the position of the jaw (the [ARBlendShapeLocationJawOpen](jawopen.md) coefficient), so some values of the [ARBlendShapeLocationMouthClose](mouthclose.md) coefficient can produce unrealistic facial expressions unless other coefficients are also set to realistic values.

The figure below shows a face geometry (see [ARSCNFaceGeometry](../../arscnfacegeometry.md)) in three states:

1. A neutral face (all [ARBlendShapeLocation](../blendshapelocation.md) coefficient values at `0.0`, including both [ARBlendShapeLocationJawOpen](jawopen.md) and [ARBlendShapeLocationMouthClose](mouthclose.md))
2. Setting only the [ARBlendShapeLocationJawOpen](jawopen.md) coefficient to `1.0`, while keeping all other coefficient values (including [ARBlendShapeLocationMouthClose](mouthclose.md)) at `0.0`
3. Setting both the [ARBlendShapeLocationJawOpen](jawopen.md) and [ARBlendShapeLocationMouthClose](mouthclose.md) coefficients to `1.0`, while keeping all other coefficient values at `0.0`

![](https://developer.apple.com/images/com.apple.arkit/media-2930045@2x.png)

## See Also

### Mouth and Jaw

- [ARBlendShapeLocationJawForward](jawforward.md): The coefficient describing forward movement of the lower jaw.
- [ARBlendShapeLocationJawLeft](jawleft.md): The coefficient describing leftward movement of the lower jaw.
- [ARBlendShapeLocationJawRight](jawright.md): The coefficient describing rightward movement of the lower jaw.
- [ARBlendShapeLocationJawOpen](jawopen.md): The coefficient describing an opening of the lower jaw.
- [ARBlendShapeLocationMouthFunnel](mouthfunnel.md): The coefficient describing contraction of both lips into an open shape.
- [ARBlendShapeLocationMouthPucker](mouthpucker.md): The coefficient describing contraction and compression of both closed lips.
- [ARBlendShapeLocationMouthLeft](mouthleft.md): The coefficient describing leftward movement of both lips together.
- [ARBlendShapeLocationMouthRight](mouthright.md): The coefficient describing rightward movement of both lips together.
- [ARBlendShapeLocationMouthSmileLeft](mouthsmileleft.md): The coefficient describing upward movement of the left corner of the mouth.
- [ARBlendShapeLocationMouthSmileRight](mouthsmileright.md): The coefficient describing upward movement of the right corner of the mouth.
- [ARBlendShapeLocationMouthFrownLeft](mouthfrownleft.md): The coefficient describing downward movement of the left corner of the mouth.
- [ARBlendShapeLocationMouthFrownRight](mouthfrownright.md): The coefficient describing downward movement of the right corner of the mouth.
- [ARBlendShapeLocationMouthDimpleLeft](mouthdimpleleft.md): The coefficient describing backward movement of the left corner of the mouth.
- [ARBlendShapeLocationMouthDimpleRight](mouthdimpleright.md): The coefficient describing backward movement of the right corner of the mouth.
- [ARBlendShapeLocationMouthStretchLeft](mouthstretchleft.md): The coefficient describing leftward movement of the left corner of the mouth.
