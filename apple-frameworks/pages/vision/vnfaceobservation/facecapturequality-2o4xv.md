> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfaceobservation/facecapturequality-2o4xv](https://developer.apple.com/documentation/vision/vnfaceobservation/facecapturequality-2o4xv)

# faceCaptureQuality

**Interface language:** Objective-C

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A value that indicates the quality of the face capture.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSNumber * faceCaptureQuality;
```

<a id="Discussion"></a>

## Discussion

The capture quality of the face allows you to compare the quality of the face in terms of its capture attributes: lighting, blur, and prime positioning. Use this value to compare the capture quality of a face against other captures of the same face in a specified set.

The value of this property value ranges from `0.0` to `1.0`. Faces with quality closer to `1.0` are better lit, sharper, and more centrally positioned than faces with quality closer to `0.0`.
