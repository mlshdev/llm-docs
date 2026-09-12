> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfaceobservation/init(requestrevision:boundingbox:roll:yaw:pitch:)](https://developer.apple.com/documentation/vision/vnfaceobservation/init(requestrevision:boundingbox:roll:yaw:pitch:))

# init(requestRevision:boundingBox:roll:yaw:pitch:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates an observation that contains the roll, yaw, and pitch of the face.

## Declaration

```swift
convenience init(requestRevision: Int, boundingBox: CGRect, roll: NSNumber?, yaw: NSNumber?, pitch: NSNumber?)
```

## Parameters

- `requestRevision`: The revision of the request.
- `boundingBox`: The bounding rectangle of the detected face landmark.
- `roll`: The rotational angle of the face landmark around the z-axis.
- `yaw`: The rotational angle of the face landmark around the y-axis.
- `pitch`: The rotational angle of the face landmark around the x-axis.

## See Also

### Creating an Observation

- [init(requestRevision:boundingBox:roll:yaw:)](init%28requestrevision_boundingbox_roll_yaw_%29.md): Deprecated. Creates an observation that contains the roll and yaw of the face.

# faceObservationWithRequestRevision:boundingBox:roll:yaw:pitch: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates an observation that contains the roll, yaw, and pitch of the face.

## Declaration

```objectivec
+ (instancetype) faceObservationWithRequestRevision:(NSUInteger) requestRevision boundingBox:(CGRect) boundingBox roll:(NSNumber *) roll yaw:(NSNumber *) yaw pitch:(NSNumber *) pitch;
```

## Parameters

- `requestRevision`: The revision of the request.
- `boundingBox`: The bounding rectangle of the detected face landmark.
- `roll`: The rotational angle of the face landmark around the z-axis.
- `yaw`: The rotational angle of the face landmark around the y-axis.
- `pitch`: The rotational angle of the face landmark around the x-axis.

## See Also

### Creating an Observation

- [faceObservationWithRequestRevision:boundingBox:roll:yaw:](init%28requestrevision_boundingbox_roll_yaw_%29.md): Deprecated. Creates an observation that contains the roll and yaw of the face.
