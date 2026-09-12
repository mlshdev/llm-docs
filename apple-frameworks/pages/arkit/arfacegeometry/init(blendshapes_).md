> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arfacegeometry/init(blendshapes:)](https://developer.apple.com/documentation/arkit/arfacegeometry/init(blendshapes:))

# init(blendShapes:) (Swift)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Creates a face geometry matching the facial expression described in the specified dictionary.

## Declaration

```swift
init?(blendShapes: [ARFaceAnchor.BlendShapeLocation : NSNumber])
```

## Parameters

- `blendShapes`: A dictionary of blend shape coefficients describing a facial expression in terms of the positions of specific facial features. For any coefficient not specified in this dictionary, ARKit assumes a value of `0.0`.

<a id="return-value"></a>

## Return Value

A face geometry object, or `nil` if ARKit face tracking is not supported on the current device.

<a id="Discussion"></a>

## Discussion

Each key in the `blendShapes` dictionary is an [ARFaceAnchor.BlendShapeLocation](../arfaceanchor/blendshapelocation.md) constant identifying a facial feature. The corresponding value is the position of that feature relative to its neutral configuration, ranging from `0.0` (neutral) to `1.0` (maximum movement).

The format of this dictionary is identical to that provided by the [ARFaceAnchor](../arfaceanchor.md) [blendShapes](../arfaceanchor/blendshapes.md) property. You can use that property and this initializer to efficiently save and restore facial expression data; the serialized form of a blend shapes dictionary is more portable than that of the face mesh those coefficients describe.

# initWithBlendShapes: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Creates a face geometry matching the facial expression described in the specified dictionary.

## Declaration

```objectivec
- (instancetype) initWithBlendShapes:(NSDictionary<NSString *,NSNumber *> *) blendShapes;
```

## Parameters

- `blendShapes`: A dictionary of blend shape coefficients describing a facial expression in terms of the positions of specific facial features. For any coefficient not specified in this dictionary, ARKit assumes a value of `0.0`.

<a id="return-value"></a>

## Return Value

A face geometry object, or `nil` if ARKit face tracking is not supported on the current device.

<a id="Discussion"></a>

## Discussion

Each key in the `blendShapes` dictionary is an [ARBlendShapeLocation](../arfaceanchor/blendshapelocation.md) constant identifying a facial feature. The corresponding value is the position of that feature relative to its neutral configuration, ranging from `0.0` (neutral) to `1.0` (maximum movement).

The format of this dictionary is identical to that provided by the [ARFaceAnchor](../arfaceanchor.md) [blendShapes](../arfaceanchor/blendshapes.md) property. You can use that property and this initializer to efficiently save and restore facial expression data; the serialized form of a blend shapes dictionary is more portable than that of the face mesh those coefficients describe.
