> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/generateiterativesegmentationrequest/addexcludedpoint(_:)](https://developer.apple.com/documentation/vision/generateiterativesegmentationrequest/addexcludedpoint(_:))

# addExcludedPoint(\_:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Refines the mask with a point that is excluded from the desired segmentation. Throws an error if the total number of added points exceeds the limit. (13 points when seedPoint or seedScribbleBuffer was used, or 11 points when seedBox was used)

## Declaration

```swift
final func addExcludedPoint(_ point: NormalizedPoint) throws
```

## See Also

### Updating the mask

- [addIncludedPoint(\_:)](addincludedpoint%28__%29.md): Refines the mask with a point that is part of the desired segmentation. Throws an error if the total number of added points exceeds the limit. (13 points when seedPoint or seedScribbleBuffer was used, or 11 points when seedBox was used)
