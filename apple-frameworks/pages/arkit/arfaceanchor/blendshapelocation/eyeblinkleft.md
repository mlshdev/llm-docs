> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arfaceanchor/blendshapelocation/eyeblinkleft](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/eyeblinkleft)

# eyeBlinkLeft (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The coefficient describing closure of the eyelids over the left eye.

## Declaration

```swift
static let eyeBlinkLeft: ARFaceAnchor.BlendShapeLocation
```

<a id="Discussion"></a>

## Discussion

The figure below shows a face geometry (see [ARSCNFaceGeometry](../../arscnfacegeometry.md)) in two states, demonstrating values of `0.0` and `1.0` for this coefficient. In both states, the values for all other [ARFaceAnchor.BlendShapeLocation](../blendshapelocation.md) coefficients are set to `0.0`.

![](https://developer.apple.com/images/com.apple.arkit/media-2930022@2x.png)

## See Also

### Left Eye

- [eyeLookDownLeft](eyelookdownleft.md): The coefficient describing movement of the left eyelids consistent with a downward gaze.
- [eyeLookInLeft](eyelookinleft.md): The coefficient describing movement of the left eyelids consistent with a rightward gaze.
- [eyeLookOutLeft](eyelookoutleft.md): The coefficient describing movement of the left eyelids consistent with a leftward gaze.
- [eyeLookUpLeft](eyelookupleft.md): The coefficient describing movement of the left eyelids consistent with an upward gaze.
- [eyeSquintLeft](eyesquintleft.md): The coefficient describing contraction of the face around the left eye.
- [eyeWideLeft](eyewideleft.md): The coefficient describing a widening of the eyelids around the left eye.

# ARBlendShapeLocationEyeBlinkLeft (Objective-C)

**Framework:** ARKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The coefficient describing closure of the eyelids over the left eye.

## Declaration

```objectivec
extern ARBlendShapeLocation const ARBlendShapeLocationEyeBlinkLeft;
```

<a id="Discussion"></a>

## Discussion

The figure below shows a face geometry (see [ARSCNFaceGeometry](../../arscnfacegeometry.md)) in two states, demonstrating values of `0.0` and `1.0` for this coefficient. In both states, the values for all other [ARBlendShapeLocation](../blendshapelocation.md) coefficients are set to `0.0`.

![](https://developer.apple.com/images/com.apple.arkit/media-2930022@2x.png)

## See Also

### Left Eye

- [ARBlendShapeLocationEyeLookDownLeft](eyelookdownleft.md): The coefficient describing movement of the left eyelids consistent with a downward gaze.
- [ARBlendShapeLocationEyeLookInLeft](eyelookinleft.md): The coefficient describing movement of the left eyelids consistent with a rightward gaze.
- [ARBlendShapeLocationEyeLookOutLeft](eyelookoutleft.md): The coefficient describing movement of the left eyelids consistent with a leftward gaze.
- [ARBlendShapeLocationEyeLookUpLeft](eyelookupleft.md): The coefficient describing movement of the left eyelids consistent with an upward gaze.
- [ARBlendShapeLocationEyeSquintLeft](eyesquintleft.md): The coefficient describing contraction of the face around the left eye.
- [ARBlendShapeLocationEyeWideLeft](eyewideleft.md): The coefficient describing a widening of the eyelids around the left eye.
