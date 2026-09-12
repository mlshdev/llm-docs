> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/mediaintelligenceerror/resultfetching](https://developer.apple.com/documentation/mediaintelligence/mediaintelligenceerror/resultfetching)

# MediaIntelligenceError.resultFetching

**Framework:** Media Intelligence  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The framework can’t retrieve analysis results.

## Declaration

```swift
case resultFetching
```

<a id="discussion"></a>

## Discussion

This error occurs when the framework can’t find a result that matches the type expected by a [VideoAnalyzer.Request](../videoanalyzer/request.md). Confirm that you’re passing the correct request type to [analyze(\_:for:)](../videoanalyzer/analyze%28__for_%29.md).

## See Also

### Errors

- [MediaIntelligenceError.faceGroupProcessing](facegroupprocessing.md): The framework can’t complete a face grouping operation.
- [MediaIntelligenceError.mediaProcessing](mediaprocessing.md): The framework can’t process a media asset.
- [MediaIntelligenceError.workingDirectory](workingdirectory.md): The framework can’t access the working directory.
