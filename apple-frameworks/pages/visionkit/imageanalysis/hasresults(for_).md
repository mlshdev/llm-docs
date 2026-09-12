> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysis/hasresults(for:)](https://developer.apple.com/documentation/visionkit/imageanalysis/hasresults(for:))

# hasResults(for:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 13.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the analysis finds the specified types in the image.

## Declaration

```swift
final func hasResults(for analysisTypes: ImageAnalyzer.AnalysisTypes) -> Bool
```

## Parameters

- `analysisTypes`: The data types you want to find in the image.

<a id="return-value"></a>

## Return Value

`true` if the image analysis has results for the specified types; otherwise, `false`.
