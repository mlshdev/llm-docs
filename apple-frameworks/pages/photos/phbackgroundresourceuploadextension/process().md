> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phbackgroundresourceuploadextension/process()

# process()

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 26.1+ (deprecated in 27.0) · iPadOS 26.1+ (deprecated in 27.0)

Request to initiate processing background upload jobs.

> Adopt PHBackgroundResourceUploadJobExtension instead

## Declaration

```swift
func process() -> PHBackgroundResourceUploadProcessingResult
```

<a id="return-value"></a>

## Return Value

A result type of [PHBackgroundResourceUploadProcessingResult](../phbackgroundresourceuploadprocessingresult.md) based on the state of the processing task.

## See Also

### Processing upload requests

- [PHBackgroundResourceUploadProcessingResult](../phbackgroundresourceuploadprocessingresult.md)
