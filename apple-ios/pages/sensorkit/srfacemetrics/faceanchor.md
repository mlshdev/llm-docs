> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sensorkit/srfacemetrics/faceanchor

# faceAnchor (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+

The anchor for the face that the sensor detects in front of the camera.

## Declaration

```swift
@NSCopying var faceAnchor: ARFaceAnchor { get }
```

## See Also

### Getting face analytics

- [partialFaceExpressions](partialfaceexpressions.md): The partial face expressions that the algorithm detects.
- [wholeFaceExpressions](wholefaceexpressions.md): The whole face expressions that the algorithm detects.
- [SRFaceMetricsExpression](../srfacemetricsexpression.md): An object that represents a facial expression.

# faceAnchor (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+

The anchor for the face that the sensor detects in front of the camera.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) ARFaceAnchor * faceAnchor;
```

## See Also

### Getting face analytics

- [partialFaceExpressions](partialfaceexpressions.md): The partial face expressions that the algorithm detects.
- [wholeFaceExpressions](wholefaceexpressions.md): The whole face expressions that the algorithm detects.
- [SRFaceMetricsExpression](../srfacemetricsexpression.md): An object that represents a facial expression.
