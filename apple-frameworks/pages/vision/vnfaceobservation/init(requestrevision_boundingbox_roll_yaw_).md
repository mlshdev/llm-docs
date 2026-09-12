> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfaceobservation/init(requestrevision:boundingbox:roll:yaw:)](https://developer.apple.com/documentation/vision/vnfaceobservation/init(requestrevision:boundingbox:roll:yaw:))

# init(requestRevision:boundingBox:roll:yaw:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 12.0+ (deprecated in 15.0) · iPadOS 12.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.14+ (deprecated in 12.0) · tvOS 12.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Creates an observation that contains the roll and yaw of the face.

> Use [init(requestRevision:boundingBox:roll:yaw:pitch:)](init%28requestrevision_boundingbox_roll_yaw_pitch_%29.md)instead.

## Declaration

```swift
convenience init(requestRevision: Int, boundingBox: CGRect, roll: NSNumber?, yaw: NSNumber?)
```

## Parameters

- `requestRevision`: The revision of the request.
- `boundingBox`: The bounding rectangle of the detected face landmark.
- `roll`: The rotational angle of the face landmark around the z-axis.
- `yaw`: The rotational angle of the face landmark around the y-axis.

## See Also

### Creating an Observation

- [init(requestRevision:boundingBox:roll:yaw:pitch:)](init%28requestrevision_boundingbox_roll_yaw_pitch_%29.md): Creates an observation that contains the roll, yaw, and pitch of the face.

# faceObservationWithRequestRevision:boundingBox:roll:yaw: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 12.0+ (deprecated in 15.0) · iPadOS 12.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.14+ (deprecated in 12.0) · tvOS 12.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Creates an observation that contains the roll and yaw of the face.

> Use [faceObservationWithRequestRevision:boundingBox:roll:yaw:pitch:](init%28requestrevision_boundingbox_roll_yaw_pitch_%29.md)instead.

## Declaration

```objectivec
+ (instancetype) faceObservationWithRequestRevision:(NSUInteger) requestRevision boundingBox:(CGRect) boundingBox roll:(NSNumber *) roll yaw:(NSNumber *) yaw;
```

## Parameters

- `requestRevision`: The revision of the request.
- `boundingBox`: The bounding rectangle of the detected face landmark.
- `roll`: The rotational angle of the face landmark around the z-axis.
- `yaw`: The rotational angle of the face landmark around the y-axis.

## See Also

### Creating an Observation

- [faceObservationWithRequestRevision:boundingBox:roll:yaw:pitch:](init%28requestrevision_boundingbox_roll_yaw_pitch_%29.md): Creates an observation that contains the roll, yaw, and pitch of the face.
