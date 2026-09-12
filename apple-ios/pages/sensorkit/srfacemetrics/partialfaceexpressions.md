> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srfacemetrics/partialfaceexpressions](https://developer.apple.com/documentation/sensorkit/srfacemetrics/partialfaceexpressions)

# partialFaceExpressions (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The partial face expressions that the algorithm detects.

## Declaration

```swift
var partialFaceExpressions: [SRFaceMetricsExpression] { get }
```

## See Also

### Getting face analytics

- [faceAnchor](faceanchor.md): The anchor for the face that the sensor detects in front of the camera.
- [wholeFaceExpressions](wholefaceexpressions.md): The whole face expressions that the algorithm detects.
- [SRFaceMetricsExpression](../srfacemetricsexpression.md): An object that represents a facial expression.

# partialFaceExpressions (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The partial face expressions that the algorithm detects.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<SRFaceMetricsExpression *> * partialFaceExpressions;
```

## See Also

### Getting face analytics

- [faceAnchor](faceanchor.md): The anchor for the face that the sensor detects in front of the camera.
- [wholeFaceExpressions](wholefaceexpressions.md): The whole face expressions that the algorithm detects.
- [SRFaceMetricsExpression](../srfacemetricsexpression.md): An object that represents a facial expression.
