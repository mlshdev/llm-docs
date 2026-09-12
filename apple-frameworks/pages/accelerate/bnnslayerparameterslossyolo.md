> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparameterslossyolo](https://developer.apple.com/documentation/accelerate/bnnslayerparameterslossyolo)

# BNNSLayerParametersLossYolo (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the parameters of a You Only Look Once (YOLO) loss layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLayerParametersLossYolo
```

## Topics

### Initializers

- [init(function:i_desc:o_desc:reduction:huber_delta:number_of_grid_columns:number_of_grid_rows:number_of_anchor_boxes:anchor_box_size:rescore:scale_xy:scale_wh:scale_object:scale_no_object:scale_classification:object_minimum_iou:no_object_maximum_iou:anchors_data:)](bnnslayerparameterslossyolo/init%28function_i_desc_o_desc_reduction_huber_delta_number_of_grid_columns_number_of_grid_rows_number_of_anchor_boxes_anchor_box_size_rescore_scale_xy_scale_wh_scale_object_scale_no_~92e4a328.md): Deprecated. Returns a new You Only Look Once (YOLO) loss layer parameters structure from the specified parameters.

### Instance Properties

- [function](bnnslayerparameterslossyolo/function.md): Deprecated. The function that’s used to compute loss.
- [i_desc](bnnslayerparameterslossyolo/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparameterslossyolo/o_desc.md): Deprecated. The descriptor of the output.
- [reduction](bnnslayerparameterslossyolo/reduction.md): Deprecated. The function that’s used to reduce the computed loss (must be sum reduction for YOLO).
- [huber_delta](bnnslayerparameterslossyolo/huber_delta.md): Deprecated. A value that’s interpreted as width-height loss.
- [number_of_grid_columns](bnnslayerparameterslossyolo/number_of_grid_columns.md): Deprecated. The number of columns in the grid.
- [number_of_grid_rows](bnnslayerparameterslossyolo/number_of_grid_rows.md): Deprecated. The number of rows in the grid.
- [number_of_anchor_boxes](bnnslayerparameterslossyolo/number_of_anchor_boxes.md): Deprecated. The number of anchor boxes in each cell.
- [anchor_box_size](bnnslayerparameterslossyolo/anchor_box_size.md): Deprecated. The size of the anchor box.
- [rescore](bnnslayerparameterslossyolo/rescore.md): Deprecated. A Boolean value that determines whether to rescore confidence according to prediction verus ground truth Intersection Over Union (IOU).
- [scale_xy](bnnslayerparameterslossyolo/scale_xy.md): Deprecated. The value that specifies the x, y loss-scaling factor.
- [scale_wh](bnnslayerparameterslossyolo/scale_wh.md): Deprecated. A Boolean value that determines whether to rescore confidence according to prediction verus ground truth Intersection Over Union (IOU).
- [scale_object](bnnslayerparameterslossyolo/scale_object.md): Deprecated. The value that specifies the object confidence loss-scaling factor.
- [scale_no_object](bnnslayerparameterslossyolo/scale_no_object.md): Deprecated. The value that specifies the no-object confidence scaling factor.
- [object_minimum_iou](bnnslayerparameterslossyolo/object_minimum_iou.md): Deprecated. The value that specifies intersection over union (IOU) that’s the minimum the function treats as an object.
- [no_object_maximum_iou](bnnslayerparameterslossyolo/no_object_maximum_iou.md): Deprecated. The value that specifies intersection over union (IOU) that’s the maximum the function treats as not an object.
- [scale_classification](bnnslayerparameterslossyolo/scale_classification.md): Deprecated. The value that specifies the classification scaling factor.
- [anchors_data](bnnslayerparameterslossyolo/anchors_data.md): Deprecated. Maximum IOU for treating as no object.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Loss layers

- [BNNS.LossLayer](bnns/losslayer.md): Deprecated. A layer object that wraps a loss filter and manages its deinitialization.
- [BNNSLossFunction](bnnslossfunction.md): Constants that describe loss functions.
- [BNNSLossReductionFunction](bnnslossreductionfunction.md): Constants that describe reduction functions used by a loss layer.
- [BNNSLayerParametersLossBase](bnnslayerparameterslossbase.md): Deprecated. A structure that contains the parameters of a loss layer.
- [BNNSLayerParametersLossHuber](bnnslayerparameterslosshuber.md): Deprecated. A structure that contains the parameters of a Huber loss layer.
- [BNNSLayerParametersLossSigmoidCrossEntropy](bnnslayerparameterslosssigmoidcrossentropy.md): Deprecated. A structure that contains the parameters of a sigmoid cross entropy loss layer.
- [BNNSLayerParametersLossSoftmaxCrossEntropy](bnnslayerparameterslosssoftmaxcrossentropy.md): Deprecated. A structure that contains the parameters of a softmax cross entropy loss layer.
- [BNNSFilterCreateLayerLoss(\_:\_:)](bnnsfiltercreatelayerloss%28____%29.md): Deprecated. Returns a new loss layer.
- [BNNSLossFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnslossfilterapplybatch%28______________________%29.md): Deprecated. Applies a loss filter to a set of input objects, writing the result to a set of output objects.
- [BNNSLossFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnslossfilterapplybackwardbatch%28________________________%29.md): Deprecated. Applies a loss filter backward to generate gradients.

# BNNSLayerParametersLossYolo (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the parameters of a You Only Look Once (YOLO) loss layer.

## Declaration

```objectivec
typedef struct { ... } BNNSLayerParametersLossYolo;
```

## Topics

### Instance Properties

- [function](bnnslayerparameterslossyolo/function.md): Deprecated. The function that’s used to compute loss.
- [i_desc](bnnslayerparameterslossyolo/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparameterslossyolo/o_desc.md): Deprecated. The descriptor of the output.
- [reduction](bnnslayerparameterslossyolo/reduction.md): Deprecated. The function that’s used to reduce the computed loss (must be sum reduction for YOLO).
- [huber_delta](bnnslayerparameterslossyolo/huber_delta.md): Deprecated. A value that’s interpreted as width-height loss.
- [number_of_grid_columns](bnnslayerparameterslossyolo/number_of_grid_columns.md): Deprecated. The number of columns in the grid.
- [number_of_grid_rows](bnnslayerparameterslossyolo/number_of_grid_rows.md): Deprecated. The number of rows in the grid.
- [number_of_anchor_boxes](bnnslayerparameterslossyolo/number_of_anchor_boxes.md): Deprecated. The number of anchor boxes in each cell.
- [anchor_box_size](bnnslayerparameterslossyolo/anchor_box_size.md): Deprecated. The size of the anchor box.
- [rescore](bnnslayerparameterslossyolo/rescore.md): Deprecated. A Boolean value that determines whether to rescore confidence according to prediction verus ground truth Intersection Over Union (IOU).
- [scale_xy](bnnslayerparameterslossyolo/scale_xy.md): Deprecated. The value that specifies the x, y loss-scaling factor.
- [scale_wh](bnnslayerparameterslossyolo/scale_wh.md): Deprecated. A Boolean value that determines whether to rescore confidence according to prediction verus ground truth Intersection Over Union (IOU).
- [scale_object](bnnslayerparameterslossyolo/scale_object.md): Deprecated. The value that specifies the object confidence loss-scaling factor.
- [scale_no_object](bnnslayerparameterslossyolo/scale_no_object.md): Deprecated. The value that specifies the no-object confidence scaling factor.
- [object_minimum_iou](bnnslayerparameterslossyolo/object_minimum_iou.md): Deprecated. The value that specifies intersection over union (IOU) that’s the minimum the function treats as an object.
- [no_object_maximum_iou](bnnslayerparameterslossyolo/no_object_maximum_iou.md): Deprecated. The value that specifies intersection over union (IOU) that’s the maximum the function treats as not an object.
- [scale_classification](bnnslayerparameterslossyolo/scale_classification.md): Deprecated. The value that specifies the classification scaling factor.
- [anchors_data](bnnslayerparameterslossyolo/anchors_data.md): Deprecated. Maximum IOU for treating as no object.

## See Also

### Loss layers

- [BNNSLossFunction](bnnslossfunction.md): Constants that describe loss functions.
- [BNNSLossReductionFunction](bnnslossreductionfunction.md): Constants that describe reduction functions used by a loss layer.
- [BNNSLayerParametersLossBase](bnnslayerparameterslossbase.md): Deprecated. A structure that contains the parameters of a loss layer.
- [BNNSLayerParametersLossHuber](bnnslayerparameterslosshuber.md): Deprecated. A structure that contains the parameters of a Huber loss layer.
- [BNNSLayerParametersLossSigmoidCrossEntropy](bnnslayerparameterslosssigmoidcrossentropy.md): Deprecated. A structure that contains the parameters of a sigmoid cross entropy loss layer.
- [BNNSLayerParametersLossSoftmaxCrossEntropy](bnnslayerparameterslosssoftmaxcrossentropy.md): Deprecated. A structure that contains the parameters of a softmax cross entropy loss layer.
- [BNNSFilterCreateLayerLoss](bnnsfiltercreatelayerloss%28____%29.md): Deprecated. Returns a new loss layer.
- [BNNSLossFilterApplyBatch](bnnslossfilterapplybatch%28______________________%29.md): Deprecated. Applies a loss filter to a set of input objects, writing the result to a set of output objects.
- [BNNSLossFilterApplyBackwardBatch](bnnslossfilterapplybackwardbatch%28________________________%29.md): Deprecated. Applies a loss filter backward to generate gradients.
