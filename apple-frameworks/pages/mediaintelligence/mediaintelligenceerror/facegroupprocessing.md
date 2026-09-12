> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/mediaintelligenceerror/facegroupprocessing](https://developer.apple.com/documentation/mediaintelligence/mediaintelligenceerror/facegroupprocessing)

# MediaIntelligenceError.faceGroupProcessing

**Framework:** Media Intelligence  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The framework can’t complete a face grouping operation.

## Declaration

```swift
case faceGroupProcessing
```

<a id="discussion"></a>

## Discussion

This error occurs when the framework fails to detect faces, insert or delete face data, or update face cluster assignments. If this error occurs during [insertOrUpdateAssets(\_:)](../facegroupanalyzer/insertorupdateassets%28__%29.md) or [deleteAssets(\_:)](../facegroupanalyzer/deleteassets%28__%29.md), the framework automatically rolls back any partial changes.

## See Also

### Errors

- [MediaIntelligenceError.mediaProcessing](mediaprocessing.md): The framework can’t process a media asset.
- [MediaIntelligenceError.resultFetching](resultfetching.md): The framework can’t retrieve analysis results.
- [MediaIntelligenceError.workingDirectory](workingdirectory.md): The framework can’t access the working directory.
