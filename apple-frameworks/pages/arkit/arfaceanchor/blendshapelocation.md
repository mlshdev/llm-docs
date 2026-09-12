> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arfaceanchor/blendshapelocation](https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation)

# ARFaceAnchor.BlendShapeLocation (Swift)

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Identifiers for specific facial features, for use with coefficients describing the relative movements of those features.

## Declaration

```swift
struct BlendShapeLocation
```

<a id="Discussion"></a>

## Discussion

The [blendShapes](blendshapes.md) dictionary provided by an [ARFaceAnchor](../arfaceanchor.md) object describes the facial expression of a detected face in terms of the movements of specific facial features. For each key in the dictionary, the corresponding value is a floating point number indicating the current position of that feature relative to its neutral configuration, ranging from `0.0` (neutral) to `1.0` (maximum movement).

ARKit provides many blend shape coefficients, resulting in a detailed model of a facial expression; however, you can use as many or as few of the coefficients as you desire to create a visual effect. For example, you might animate a simple cartoon character using only the [jawOpen](blendshapelocation/jawopen.md), [eyeBlinkLeft](blendshapelocation/eyeblinkleft.md), and [eyeBlinkRight](blendshapelocation/eyeblinkright.md) coefficients. A professional 3D artist could create a detailed character model rigged for realistic animation using a larger set, or the entire set, of coefficients.

> **Note**

>  In the naming of blend shape coefficients, the left and right directions are relative to the face. That is, the [eyeBlinkRight](blendshapelocation/eyeblinkright.md) coefficient refers to the face’s right eye. ARKit views running a face-tracking session mirror the camera image, so the face’s right eye appears on the right side in the view.

## Topics

### Left Eye

- [eyeBlinkLeft](blendshapelocation/eyeblinkleft.md): The coefficient describing closure of the eyelids over the left eye.
- [eyeLookDownLeft](blendshapelocation/eyelookdownleft.md): The coefficient describing movement of the left eyelids consistent with a downward gaze.
- [eyeLookInLeft](blendshapelocation/eyelookinleft.md): The coefficient describing movement of the left eyelids consistent with a rightward gaze.
- [eyeLookOutLeft](blendshapelocation/eyelookoutleft.md): The coefficient describing movement of the left eyelids consistent with a leftward gaze.
- [eyeLookUpLeft](blendshapelocation/eyelookupleft.md): The coefficient describing movement of the left eyelids consistent with an upward gaze.
- [eyeSquintLeft](blendshapelocation/eyesquintleft.md): The coefficient describing contraction of the face around the left eye.
- [eyeWideLeft](blendshapelocation/eyewideleft.md): The coefficient describing a widening of the eyelids around the left eye.

### Right Eye

- [eyeBlinkRight](blendshapelocation/eyeblinkright.md): The coefficient describing closure of the eyelids over the right eye.
- [eyeLookDownRight](blendshapelocation/eyelookdownright.md): The coefficient describing movement of the right eyelids consistent with a downward gaze.
- [eyeLookInRight](blendshapelocation/eyelookinright.md): The coefficient describing movement of the right eyelids consistent with a leftward gaze.
- [eyeLookOutRight](blendshapelocation/eyelookoutright.md): The coefficient describing movement of the right eyelids consistent with a rightward gaze.
- [eyeLookUpRight](blendshapelocation/eyelookupright.md): The coefficient describing movement of the right eyelids consistent with an upward gaze.
- [eyeSquintRight](blendshapelocation/eyesquintright.md): The coefficient describing contraction of the face around the right eye.
- [eyeWideRight](blendshapelocation/eyewideright.md): The coefficient describing a widening of the eyelids around the right eye.

### Mouth and Jaw

- [jawForward](blendshapelocation/jawforward.md): The coefficient describing forward movement of the lower jaw.
- [jawLeft](blendshapelocation/jawleft.md): The coefficient describing leftward movement of the lower jaw.
- [jawRight](blendshapelocation/jawright.md): The coefficient describing rightward movement of the lower jaw.
- [jawOpen](blendshapelocation/jawopen.md): The coefficient describing an opening of the lower jaw.
- [mouthClose](blendshapelocation/mouthclose.md): The coefficient describing closure of the lips *independent of jaw position*.
- [mouthFunnel](blendshapelocation/mouthfunnel.md): The coefficient describing contraction of both lips into an open shape.
- [mouthPucker](blendshapelocation/mouthpucker.md): The coefficient describing contraction and compression of both closed lips.
- [mouthLeft](blendshapelocation/mouthleft.md): The coefficient describing leftward movement of both lips together.
- [mouthRight](blendshapelocation/mouthright.md): The coefficient describing rightward movement of both lips together.
- [mouthSmileLeft](blendshapelocation/mouthsmileleft.md): The coefficient describing upward movement of the left corner of the mouth.
- [mouthSmileRight](blendshapelocation/mouthsmileright.md): The coefficient describing upward movement of the right corner of the mouth.
- [mouthFrownLeft](blendshapelocation/mouthfrownleft.md): The coefficient describing downward movement of the left corner of the mouth.
- [mouthFrownRight](blendshapelocation/mouthfrownright.md): The coefficient describing downward movement of the right corner of the mouth.
- [mouthDimpleLeft](blendshapelocation/mouthdimpleleft.md): The coefficient describing backward movement of the left corner of the mouth.
- [mouthDimpleRight](blendshapelocation/mouthdimpleright.md): The coefficient describing backward movement of the right corner of the mouth.
- [mouthStretchLeft](blendshapelocation/mouthstretchleft.md): The coefficient describing leftward movement of the left corner of the mouth.
- [mouthStretchRight](blendshapelocation/mouthstretchright.md): The coefficient describing rightward movement of the left corner of the mouth.
- [mouthRollLower](blendshapelocation/mouthrolllower.md): The coefficient describing movement of the lower lip toward the inside of the mouth.
- [mouthRollUpper](blendshapelocation/mouthrollupper.md): The coefficient describing movement of the upper lip toward the inside of the mouth.
- [mouthShrugLower](blendshapelocation/mouthshruglower.md): The coefficient describing outward movement of the lower lip.
- [mouthShrugUpper](blendshapelocation/mouthshrugupper.md): The coefficient describing outward movement of the upper lip.
- [mouthPressLeft](blendshapelocation/mouthpressleft.md): The coefficient describing upward compression of the lower lip on the left side.
- [mouthPressRight](blendshapelocation/mouthpressright.md): The coefficient describing upward compression of the lower lip on the right side.
- [mouthLowerDownLeft](blendshapelocation/mouthlowerdownleft.md): The coefficient describing downward movement of the lower lip on the left side.
- [mouthLowerDownRight](blendshapelocation/mouthlowerdownright.md): The coefficient describing downward movement of the lower lip on the right side.
- [mouthUpperUpLeft](blendshapelocation/mouthupperupleft.md): The coefficient describing upward movement of the upper lip on the left side.
- [mouthUpperUpRight](blendshapelocation/mouthupperupright.md): The coefficient describing upward movement of the upper lip on the right side.

### Eyebrows, Cheeks, and Nose

- [browDownLeft](blendshapelocation/browdownleft.md): The coefficient describing downward movement of the outer portion of the left eyebrow.
- [browDownRight](blendshapelocation/browdownright.md): The coefficient describing downward movement of the outer portion of the right eyebrow.
- [browInnerUp](blendshapelocation/browinnerup.md): The coefficient describing upward movement of the inner portion of both eyebrows.
- [browOuterUpLeft](blendshapelocation/browouterupleft.md): The coefficient describing upward movement of the outer portion of the left eyebrow.
- [browOuterUpRight](blendshapelocation/browouterupright.md): The coefficient describing upward movement of the outer portion of the right eyebrow.
- [cheekPuff](blendshapelocation/cheekpuff.md): The coefficient describing outward movement of both cheeks.
- [cheekSquintLeft](blendshapelocation/cheeksquintleft.md): The coefficient describing upward movement of the cheek around and below the left eye.
- [cheekSquintRight](blendshapelocation/cheeksquintright.md): The coefficient describing upward movement of the cheek around and below the right eye.
- [noseSneerLeft](blendshapelocation/nosesneerleft.md): The coefficient describing a raising of the left side of the nose around the nostril.
- [noseSneerRight](blendshapelocation/nosesneerright.md): The coefficient describing a raising of the right side of the nose around the nostril.

### Tongue

- [tongueOut](blendshapelocation/tongueout.md): The coefficient describing extension of the tongue.

### Creating a Blend Shape Location

- [init(rawValue:)](blendshapelocation/init%28rawvalue_%29.md): Creates a blend shape location.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Using Blend Shapes

- [blendShapes](blendshapes.md): A dictionary of named coefficients representing the detected facial expression in terms of the movement of specific facial features.

# ARBlendShapeLocation (Objective-C)

**Framework:** ARKit  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Identifiers for specific facial features, for use with coefficients describing the relative movements of those features.

## Declaration

```objectivec
typedef NSString * ARBlendShapeLocation;
```

<a id="Discussion"></a>

## Discussion

The [blendShapes](blendshapes.md) dictionary provided by an [ARFaceAnchor](../arfaceanchor.md) object describes the facial expression of a detected face in terms of the movements of specific facial features. For each key in the dictionary, the corresponding value is a floating point number indicating the current position of that feature relative to its neutral configuration, ranging from `0.0` (neutral) to `1.0` (maximum movement).

ARKit provides many blend shape coefficients, resulting in a detailed model of a facial expression; however, you can use as many or as few of the coefficients as you desire to create a visual effect. For example, you might animate a simple cartoon character using only the [ARBlendShapeLocationJawOpen](blendshapelocation/jawopen.md), [ARBlendShapeLocationEyeBlinkLeft](blendshapelocation/eyeblinkleft.md), and [ARBlendShapeLocationEyeBlinkRight](blendshapelocation/eyeblinkright.md) coefficients. A professional 3D artist could create a detailed character model rigged for realistic animation using a larger set, or the entire set, of coefficients.

> **Note**

>  In the naming of blend shape coefficients, the left and right directions are relative to the face. That is, the [ARBlendShapeLocationEyeBlinkRight](blendshapelocation/eyeblinkright.md) coefficient refers to the face’s right eye. ARKit views running a face-tracking session mirror the camera image, so the face’s right eye appears on the right side in the view.

## Topics

### Left Eye

- [ARBlendShapeLocationEyeBlinkLeft](blendshapelocation/eyeblinkleft.md): The coefficient describing closure of the eyelids over the left eye.
- [ARBlendShapeLocationEyeLookDownLeft](blendshapelocation/eyelookdownleft.md): The coefficient describing movement of the left eyelids consistent with a downward gaze.
- [ARBlendShapeLocationEyeLookInLeft](blendshapelocation/eyelookinleft.md): The coefficient describing movement of the left eyelids consistent with a rightward gaze.
- [ARBlendShapeLocationEyeLookOutLeft](blendshapelocation/eyelookoutleft.md): The coefficient describing movement of the left eyelids consistent with a leftward gaze.
- [ARBlendShapeLocationEyeLookUpLeft](blendshapelocation/eyelookupleft.md): The coefficient describing movement of the left eyelids consistent with an upward gaze.
- [ARBlendShapeLocationEyeSquintLeft](blendshapelocation/eyesquintleft.md): The coefficient describing contraction of the face around the left eye.
- [ARBlendShapeLocationEyeWideLeft](blendshapelocation/eyewideleft.md): The coefficient describing a widening of the eyelids around the left eye.

### Right Eye

- [ARBlendShapeLocationEyeBlinkRight](blendshapelocation/eyeblinkright.md): The coefficient describing closure of the eyelids over the right eye.
- [ARBlendShapeLocationEyeLookDownRight](blendshapelocation/eyelookdownright.md): The coefficient describing movement of the right eyelids consistent with a downward gaze.
- [ARBlendShapeLocationEyeLookInRight](blendshapelocation/eyelookinright.md): The coefficient describing movement of the right eyelids consistent with a leftward gaze.
- [ARBlendShapeLocationEyeLookOutRight](blendshapelocation/eyelookoutright.md): The coefficient describing movement of the right eyelids consistent with a rightward gaze.
- [ARBlendShapeLocationEyeLookUpRight](blendshapelocation/eyelookupright.md): The coefficient describing movement of the right eyelids consistent with an upward gaze.
- [ARBlendShapeLocationEyeSquintRight](blendshapelocation/eyesquintright.md): The coefficient describing contraction of the face around the right eye.
- [ARBlendShapeLocationEyeWideRight](blendshapelocation/eyewideright.md): The coefficient describing a widening of the eyelids around the right eye.

### Mouth and Jaw

- [ARBlendShapeLocationJawForward](blendshapelocation/jawforward.md): The coefficient describing forward movement of the lower jaw.
- [ARBlendShapeLocationJawLeft](blendshapelocation/jawleft.md): The coefficient describing leftward movement of the lower jaw.
- [ARBlendShapeLocationJawRight](blendshapelocation/jawright.md): The coefficient describing rightward movement of the lower jaw.
- [ARBlendShapeLocationJawOpen](blendshapelocation/jawopen.md): The coefficient describing an opening of the lower jaw.
- [ARBlendShapeLocationMouthClose](blendshapelocation/mouthclose.md): The coefficient describing closure of the lips *independent of jaw position*.
- [ARBlendShapeLocationMouthFunnel](blendshapelocation/mouthfunnel.md): The coefficient describing contraction of both lips into an open shape.
- [ARBlendShapeLocationMouthPucker](blendshapelocation/mouthpucker.md): The coefficient describing contraction and compression of both closed lips.
- [ARBlendShapeLocationMouthLeft](blendshapelocation/mouthleft.md): The coefficient describing leftward movement of both lips together.
- [ARBlendShapeLocationMouthRight](blendshapelocation/mouthright.md): The coefficient describing rightward movement of both lips together.
- [ARBlendShapeLocationMouthSmileLeft](blendshapelocation/mouthsmileleft.md): The coefficient describing upward movement of the left corner of the mouth.
- [ARBlendShapeLocationMouthSmileRight](blendshapelocation/mouthsmileright.md): The coefficient describing upward movement of the right corner of the mouth.
- [ARBlendShapeLocationMouthFrownLeft](blendshapelocation/mouthfrownleft.md): The coefficient describing downward movement of the left corner of the mouth.
- [ARBlendShapeLocationMouthFrownRight](blendshapelocation/mouthfrownright.md): The coefficient describing downward movement of the right corner of the mouth.
- [ARBlendShapeLocationMouthDimpleLeft](blendshapelocation/mouthdimpleleft.md): The coefficient describing backward movement of the left corner of the mouth.
- [ARBlendShapeLocationMouthDimpleRight](blendshapelocation/mouthdimpleright.md): The coefficient describing backward movement of the right corner of the mouth.
- [ARBlendShapeLocationMouthStretchLeft](blendshapelocation/mouthstretchleft.md): The coefficient describing leftward movement of the left corner of the mouth.
- [ARBlendShapeLocationMouthStretchRight](blendshapelocation/mouthstretchright.md): The coefficient describing rightward movement of the left corner of the mouth.
- [ARBlendShapeLocationMouthRollLower](blendshapelocation/mouthrolllower.md): The coefficient describing movement of the lower lip toward the inside of the mouth.
- [ARBlendShapeLocationMouthRollUpper](blendshapelocation/mouthrollupper.md): The coefficient describing movement of the upper lip toward the inside of the mouth.
- [ARBlendShapeLocationMouthShrugLower](blendshapelocation/mouthshruglower.md): The coefficient describing outward movement of the lower lip.
- [ARBlendShapeLocationMouthShrugUpper](blendshapelocation/mouthshrugupper.md): The coefficient describing outward movement of the upper lip.
- [ARBlendShapeLocationMouthPressLeft](blendshapelocation/mouthpressleft.md): The coefficient describing upward compression of the lower lip on the left side.
- [ARBlendShapeLocationMouthPressRight](blendshapelocation/mouthpressright.md): The coefficient describing upward compression of the lower lip on the right side.
- [ARBlendShapeLocationMouthLowerDownLeft](blendshapelocation/mouthlowerdownleft.md): The coefficient describing downward movement of the lower lip on the left side.
- [ARBlendShapeLocationMouthLowerDownRight](blendshapelocation/mouthlowerdownright.md): The coefficient describing downward movement of the lower lip on the right side.
- [ARBlendShapeLocationMouthUpperUpLeft](blendshapelocation/mouthupperupleft.md): The coefficient describing upward movement of the upper lip on the left side.
- [ARBlendShapeLocationMouthUpperUpRight](blendshapelocation/mouthupperupright.md): The coefficient describing upward movement of the upper lip on the right side.

### Eyebrows, Cheeks, and Nose

- [ARBlendShapeLocationBrowDownLeft](blendshapelocation/browdownleft.md): The coefficient describing downward movement of the outer portion of the left eyebrow.
- [ARBlendShapeLocationBrowDownRight](blendshapelocation/browdownright.md): The coefficient describing downward movement of the outer portion of the right eyebrow.
- [ARBlendShapeLocationBrowInnerUp](blendshapelocation/browinnerup.md): The coefficient describing upward movement of the inner portion of both eyebrows.
- [ARBlendShapeLocationBrowOuterUpLeft](blendshapelocation/browouterupleft.md): The coefficient describing upward movement of the outer portion of the left eyebrow.
- [ARBlendShapeLocationBrowOuterUpRight](blendshapelocation/browouterupright.md): The coefficient describing upward movement of the outer portion of the right eyebrow.
- [ARBlendShapeLocationCheekPuff](blendshapelocation/cheekpuff.md): The coefficient describing outward movement of both cheeks.
- [ARBlendShapeLocationCheekSquintLeft](blendshapelocation/cheeksquintleft.md): The coefficient describing upward movement of the cheek around and below the left eye.
- [ARBlendShapeLocationCheekSquintRight](blendshapelocation/cheeksquintright.md): The coefficient describing upward movement of the cheek around and below the right eye.
- [ARBlendShapeLocationNoseSneerLeft](blendshapelocation/nosesneerleft.md): The coefficient describing a raising of the left side of the nose around the nostril.
- [ARBlendShapeLocationNoseSneerRight](blendshapelocation/nosesneerright.md): The coefficient describing a raising of the right side of the nose around the nostril.

### Tongue

- [ARBlendShapeLocationTongueOut](blendshapelocation/tongueout.md): The coefficient describing extension of the tongue.

## See Also

### Using Blend Shapes

- [blendShapes](blendshapes.md): A dictionary of named coefficients representing the detected facial expression in terms of the movement of specific facial features.
