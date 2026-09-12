> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arfaceanchor/blendshapelocation/eyesquintright](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/eyesquintright)

# eyeSquintRight (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The coefficient describing contraction of the face around the right eye.

## Declaration

```swift
static let eyeSquintRight: ARFaceAnchor.BlendShapeLocation
```

<a id="Discussion"></a>

## Discussion

The figure below shows a face geometry (see [ARSCNFaceGeometry](../../arscnfacegeometry.md)) in two states, demonstrating values of `0.0` and `1.0` for this coefficient. In both states, the values for all other [ARFaceAnchor.BlendShapeLocation](../blendshapelocation.md) coefficients are set to `0.0`.

![](https://developer.apple.com/images/com.apple.arkit/media-2929209@2x.png)

## See Also

### Right Eye

- [eyeBlinkRight](eyeblinkright.md): The coefficient describing closure of the eyelids over the right eye.
- [eyeLookDownRight](eyelookdownright.md): The coefficient describing movement of the right eyelids consistent with a downward gaze.
- [eyeLookInRight](eyelookinright.md): The coefficient describing movement of the right eyelids consistent with a leftward gaze.
- [eyeLookOutRight](eyelookoutright.md): The coefficient describing movement of the right eyelids consistent with a rightward gaze.
- [eyeLookUpRight](eyelookupright.md): The coefficient describing movement of the right eyelids consistent with an upward gaze.
- [eyeWideRight](eyewideright.md): The coefficient describing a widening of the eyelids around the right eye.

# ARBlendShapeLocationEyeSquintRight (Objective-C)

**Framework:** ARKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The coefficient describing contraction of the face around the right eye.

## Declaration

```objectivec
extern ARBlendShapeLocation const ARBlendShapeLocationEyeSquintRight;
```

<a id="Discussion"></a>

## Discussion

The figure below shows a face geometry (see [ARSCNFaceGeometry](../../arscnfacegeometry.md)) in two states, demonstrating values of `0.0` and `1.0` for this coefficient. In both states, the values for all other [ARBlendShapeLocation](../blendshapelocation.md) coefficients are set to `0.0`.

![](https://developer.apple.com/images/com.apple.arkit/media-2929209@2x.png)

## See Also

### Right Eye

- [ARBlendShapeLocationEyeBlinkRight](eyeblinkright.md): The coefficient describing closure of the eyelids over the right eye.
- [ARBlendShapeLocationEyeLookDownRight](eyelookdownright.md): The coefficient describing movement of the right eyelids consistent with a downward gaze.
- [ARBlendShapeLocationEyeLookInRight](eyelookinright.md): The coefficient describing movement of the right eyelids consistent with a leftward gaze.
- [ARBlendShapeLocationEyeLookOutRight](eyelookoutright.md): The coefficient describing movement of the right eyelids consistent with a rightward gaze.
- [ARBlendShapeLocationEyeLookUpRight](eyelookupright.md): The coefficient describing movement of the right eyelids consistent with an upward gaze.
- [ARBlendShapeLocationEyeWideRight](eyewideright.md): The coefficient describing a widening of the eyelids around the right eye.
