> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phbackgroundresourceuploadjobextension/processjobs()](https://developer.apple.com/documentation/photos/phbackgroundresourceuploadjobextension/processjobs())

# processJobs()

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Request to initiate processing background upload jobs.

## Declaration

```swift
func processJobs() async -> PHBackgroundResourceUploadProcessingResult
```

<a id="return-value"></a>

## Return Value

A result type of [PHBackgroundResourceUploadProcessingResult](../phbackgroundresourceuploadprocessingresult.md) based on the state of the processing task.

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)
