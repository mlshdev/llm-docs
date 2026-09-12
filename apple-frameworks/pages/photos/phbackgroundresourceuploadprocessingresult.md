> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phbackgroundresourceuploadprocessingresult](https://developer.apple.com/documentation/photos/phbackgroundresourceuploadprocessingresult)

# PHBackgroundResourceUploadProcessingResult

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

## Declaration

```swift
enum PHBackgroundResourceUploadProcessingResult
```

## Mentioned In

- [Uploading asset resources in the background](../photokit/uploading-asset-resources-in-the-background.md)

## Topics

### Processing results

- [PHBackgroundResourceUploadProcessingResult.completed](phbackgroundresourceuploadprocessingresult/completed.md): the extension has completed all processing required and is up to date with the photos library
- [PHBackgroundResourceUploadProcessingResult.failure](phbackgroundresourceuploadprocessingresult/failure.md): the extension failed the processing task with an error
- [PHBackgroundResourceUploadProcessingResult.processing](phbackgroundresourceuploadprocessingresult/processing.md): the extension has only partially completed its processing and still requires more time

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Processing upload requests

- [process()](phbackgroundresourceuploadextension/process%28%29.md): Deprecated. Request to initiate processing background upload jobs.
