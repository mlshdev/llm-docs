> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcyololossdescriptor/anchorboxcount](https://developer.apple.com/documentation/mlcompute/mlcyololossdescriptor/anchorboxcount)

# anchorBoxCount (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The number of anchor boxes you use to detect an object in each grid cell.

## Declaration

```swift
var anchorBoxCount: Int { get }
```

## See Also

### Inspecting YOLO Loss Descriptors

- [anchorBoxes](anchorboxes.md): Deprecated. Data that contains the width and height for all the anchor boxes.
- [maximumIOUForObjectAbsence](maximumiouforobjectabsence.md): Deprecated. The negative intersection over union (IOU).
- [minimumIOUForObjectPresence](minimumiouforobjectpresence.md): Deprecated. The positive intersection over union (IOU).
- [scaleClassLoss](scaleclassloss.md): Deprecated. The scale factor you use for loss when there are no object classes, and for loss gradient.
- [scaleObjectConfidenceLoss](scaleobjectconfidenceloss.md): Deprecated. The scale factor you use for object confidence loss and loss gradient.
- [scaleNoObjectConfidenceLoss](scalenoobjectconfidenceloss.md): Deprecated. The scale factor you use for no object confidence loss and loss gradient.
- [scaleSpatialPositionLoss](scalespatialpositionloss.md): Deprecated. The scale factor you use for spatial position loss and loss gradient.
- [scaleSpatialSizeLoss](scalespatialsizeloss.md): Deprecated. The scale factor you use for spatial size loss and loss gradient.
- [shouldRescore](shouldrescore.md): Deprecated. A Boolean that indicates whether the layer scales the object confidence loss by the intersection over union (IOU) overlap.

# anchorBoxCount (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The number of anchor boxes you use to detect an object in each grid cell.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger anchorBoxCount;
```

## See Also

### Inspecting YOLO Loss Descriptors

- [anchorBoxes](anchorboxes.md): Deprecated. Data that contains the width and height for all the anchor boxes.
- [maximumIOUForObjectAbsence](maximumiouforobjectabsence.md): Deprecated. The negative intersection over union (IOU).
- [minimumIOUForObjectPresence](minimumiouforobjectpresence.md): Deprecated. The positive intersection over union (IOU).
- [scaleClassLoss](scaleclassloss.md): Deprecated. The scale factor you use for loss when there are no object classes, and for loss gradient.
- [scaleObjectConfidenceLoss](scaleobjectconfidenceloss.md): Deprecated. The scale factor you use for object confidence loss and loss gradient.
- [scaleNoObjectConfidenceLoss](scalenoobjectconfidenceloss.md): Deprecated. The scale factor you use for no object confidence loss and loss gradient.
- [scaleSpatialPositionLoss](scalespatialpositionloss.md): Deprecated. The scale factor you use for spatial position loss and loss gradient.
- [scaleSpatialSizeLoss](scalespatialsizeloss.md): Deprecated. The scale factor you use for spatial size loss and loss gradient.
- [shouldRescore](shouldrescore.md): Deprecated. A Boolean that indicates whether the layer scales the object confidence loss by the intersection over union (IOU) overlap.
