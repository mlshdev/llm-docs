> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcyololossdescriptor](https://developer.apple.com/documentation/mlcompute/mlcyololossdescriptor)

# MLCYOLOLossDescriptor (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The configuration object you use to create the YOLO loss layer.

## Declaration

```swift
class MLCYOLOLossDescriptor
```

## Topics

### Creating YOLO Loss Descriptors

- [init(anchorBoxes:anchorBoxCount:)](mlcyololossdescriptor/init%28anchorboxes_anchorboxcount_%29.md): Deprecated. Creates a YOLO loss filter descriptor with the anchor box data and number of anchor boxes you specify.

### Inspecting YOLO Loss Descriptors

- [anchorBoxCount](mlcyololossdescriptor/anchorboxcount.md): Deprecated. The number of anchor boxes you use to detect an object in each grid cell.
- [anchorBoxes](mlcyololossdescriptor/anchorboxes.md): Deprecated. Data that contains the width and height for all the anchor boxes.
- [maximumIOUForObjectAbsence](mlcyololossdescriptor/maximumiouforobjectabsence.md): Deprecated. The negative intersection over union (IOU).
- [minimumIOUForObjectPresence](mlcyololossdescriptor/minimumiouforobjectpresence.md): Deprecated. The positive intersection over union (IOU).
- [scaleClassLoss](mlcyololossdescriptor/scaleclassloss.md): Deprecated. The scale factor you use for loss when there are no object classes, and for loss gradient.
- [scaleObjectConfidenceLoss](mlcyololossdescriptor/scaleobjectconfidenceloss.md): Deprecated. The scale factor you use for object confidence loss and loss gradient.
- [scaleNoObjectConfidenceLoss](mlcyololossdescriptor/scalenoobjectconfidenceloss.md): Deprecated. The scale factor you use for no object confidence loss and loss gradient.
- [scaleSpatialPositionLoss](mlcyololossdescriptor/scalespatialpositionloss.md): Deprecated. The scale factor you use for spatial position loss and loss gradient.
- [scaleSpatialSizeLoss](mlcyololossdescriptor/scalespatialsizeloss.md): Deprecated. The scale factor you use for spatial size loss and loss gradient.
- [shouldRescore](mlcyololossdescriptor/shouldrescore.md): Deprecated. A Boolean that indicates whether the layer scales the object confidence loss by the intersection over union (IOU) overlap.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating YOLO Loss Layers

- [init(descriptor:)](mlcyololosslayer/init%28descriptor_%29.md): Deprecated. Creates a YOLO loss layer with the descriptor you specify.

# MLCYOLOLossDescriptor (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The configuration object you use to create the YOLO loss layer.

## Declaration

```objectivec
@interface MLCYOLOLossDescriptor : NSObject
```

## Topics

### Creating YOLO Loss Descriptors

- [descriptorWithAnchorBoxes:anchorBoxCount:](mlcyololossdescriptor/init%28anchorboxes_anchorboxcount_%29.md): Deprecated. Creates a YOLO loss filter descriptor with the anchor box data and number of anchor boxes you specify.

### Inspecting YOLO Loss Descriptors

- [anchorBoxCount](mlcyololossdescriptor/anchorboxcount.md): Deprecated. The number of anchor boxes you use to detect an object in each grid cell.
- [anchorBoxes](mlcyololossdescriptor/anchorboxes.md): Deprecated. Data that contains the width and height for all the anchor boxes.
- [maximumIOUForObjectAbsence](mlcyololossdescriptor/maximumiouforobjectabsence.md): Deprecated. The negative intersection over union (IOU).
- [minimumIOUForObjectPresence](mlcyololossdescriptor/minimumiouforobjectpresence.md): Deprecated. The positive intersection over union (IOU).
- [scaleClassLoss](mlcyololossdescriptor/scaleclassloss.md): Deprecated. The scale factor you use for loss when there are no object classes, and for loss gradient.
- [scaleObjectConfidenceLoss](mlcyololossdescriptor/scaleobjectconfidenceloss.md): Deprecated. The scale factor you use for object confidence loss and loss gradient.
- [scaleNoObjectConfidenceLoss](mlcyololossdescriptor/scalenoobjectconfidenceloss.md): Deprecated. The scale factor you use for no object confidence loss and loss gradient.
- [scaleSpatialPositionLoss](mlcyololossdescriptor/scalespatialpositionloss.md): Deprecated. The scale factor you use for spatial position loss and loss gradient.
- [scaleSpatialSizeLoss](mlcyololossdescriptor/scalespatialsizeloss.md): Deprecated. The scale factor you use for spatial size loss and loss gradient.
- [shouldRescore](mlcyololossdescriptor/shouldrescore.md): Deprecated. A Boolean that indicates whether the layer scales the object confidence loss by the intersection over union (IOU) overlap.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Creating YOLO Loss Layers

- [layerWithDescriptor:](mlcyololosslayer/init%28descriptor_%29.md): Deprecated. Creates a YOLO loss layer with the descriptor you specify.
