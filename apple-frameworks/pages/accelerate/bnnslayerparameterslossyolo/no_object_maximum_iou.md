> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterslossyolo/no_object_maximum_iou](https://developer.apple.com/documentation/accelerate/bnnslayerparameterslossyolo/no_object_maximum_iou)

# no_object_maximum_iou (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

The value that specifies intersection over union (IOU) that’s the maximum the function treats as not an object.

> Use BNNSGraph\* APIs

## Declaration

```swift
var no_object_maximum_iou: Float
```

## See Also

### Instance Properties

- [function](function.md): Deprecated. The function that’s used to compute loss.
- [i_desc](i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.
- [reduction](reduction.md): Deprecated. The function that’s used to reduce the computed loss (must be sum reduction for YOLO).
- [huber_delta](huber_delta.md): Deprecated. A value that’s interpreted as width-height loss.
- [number_of_grid_columns](number_of_grid_columns.md): Deprecated. The number of columns in the grid.
- [number_of_grid_rows](number_of_grid_rows.md): Deprecated. The number of rows in the grid.
- [number_of_anchor_boxes](number_of_anchor_boxes.md): Deprecated. The number of anchor boxes in each cell.
- [anchor_box_size](anchor_box_size.md): Deprecated. The size of the anchor box.
- [rescore](rescore.md): Deprecated. A Boolean value that determines whether to rescore confidence according to prediction verus ground truth Intersection Over Union (IOU).
- [scale_xy](scale_xy.md): Deprecated. The value that specifies the x, y loss-scaling factor.
- [scale_wh](scale_wh.md): Deprecated. A Boolean value that determines whether to rescore confidence according to prediction verus ground truth Intersection Over Union (IOU).
- [scale_object](scale_object.md): Deprecated. The value that specifies the object confidence loss-scaling factor.
- [scale_no_object](scale_no_object.md): Deprecated. The value that specifies the no-object confidence scaling factor.
- [object_minimum_iou](object_minimum_iou.md): Deprecated. The value that specifies intersection over union (IOU) that’s the minimum the function treats as an object.

# no_object_maximum_iou (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The value that specifies intersection over union (IOU) that’s the maximum the function treats as not an object.

## Declaration

```objectivec
float no_object_maximum_iou;
```

## See Also

### Instance Properties

- [function](function.md): Deprecated. The function that’s used to compute loss.
- [i_desc](i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.
- [reduction](reduction.md): Deprecated. The function that’s used to reduce the computed loss (must be sum reduction for YOLO).
- [huber_delta](huber_delta.md): Deprecated. A value that’s interpreted as width-height loss.
- [number_of_grid_columns](number_of_grid_columns.md): Deprecated. The number of columns in the grid.
- [number_of_grid_rows](number_of_grid_rows.md): Deprecated. The number of rows in the grid.
- [number_of_anchor_boxes](number_of_anchor_boxes.md): Deprecated. The number of anchor boxes in each cell.
- [anchor_box_size](anchor_box_size.md): Deprecated. The size of the anchor box.
- [rescore](rescore.md): Deprecated. A Boolean value that determines whether to rescore confidence according to prediction verus ground truth Intersection Over Union (IOU).
- [scale_xy](scale_xy.md): Deprecated. The value that specifies the x, y loss-scaling factor.
- [scale_wh](scale_wh.md): Deprecated. A Boolean value that determines whether to rescore confidence according to prediction verus ground truth Intersection Over Union (IOU).
- [scale_object](scale_object.md): Deprecated. The value that specifies the object confidence loss-scaling factor.
- [scale_no_object](scale_no_object.md): Deprecated. The value that specifies the no-object confidence scaling factor.
- [object_minimum_iou](object_minimum_iou.md): Deprecated. The value that specifies intersection over union (IOU) that’s the minimum the function treats as an object.
