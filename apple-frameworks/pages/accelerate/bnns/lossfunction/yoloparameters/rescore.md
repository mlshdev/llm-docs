> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/lossfunction/yoloparameters/rescore](https://developer.apple.com/documentation/accelerate/bnns/lossfunction/yoloparameters/rescore)

# rescore

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A Boolean value that determines whether to rescore confidence according to prediction verus ground truth Intersection Over Union (IOU).

> Use the BNNSGraph API instead.

## Declaration

```swift
let rescore: Bool
```

## See Also

### Instance Properties

- [anchorBoxCount](anchorboxcount.md): Deprecated. The number of anchor boxes in each cell.
- [anchorBoxSize](anchorboxsize.md): Deprecated. The size of the anchor box.
- [anchorsData](anchorsdata.md): Deprecated. Maximum IOU for treating as no object.
- [classificationScale](classificationscale.md): Deprecated. The value that specifies the classification scaling factor.
- [gridColumnCount](gridcolumncount.md): Deprecated. The number of columns in the grid.
- [gridRowsCount](gridrowscount.md): Deprecated. The number of rows in the grid.
- [huberDelta](huberdelta.md): Deprecated. A value that’s interpreted as width-height loss.
- [noObjectMaximumIoU](noobjectmaximumiou.md): Deprecated. The value that specifies intersection over union (IOU) that’s the maximum the function treats as not an object.
- [noObjectScale](noobjectscale.md): Deprecated. The value that specifies the no-object confidence scaling factor.
- [objectMinimumIoU](objectminimumiou.md): Deprecated. The value that specifies intersection over union (IOU) that’s the minimum the function treats as an object.
- [objectScale](objectscale.md): Deprecated. The value that specifies the object confidence loss-scaling factor.
- [whScale](whscale.md): Deprecated. A Boolean value that determines whether to rescore confidence according to prediction verus ground truth Intersection Over Union (IOU).
- [xyScale](xyscale.md): Deprecated. The value that specifies the x, y loss-scaling factor.
