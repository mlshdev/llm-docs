> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phbackgroundresourceuploadjobextension](https://developer.apple.com/documentation/photos/phbackgroundresourceuploadjobextension)

# PHBackgroundResourceUploadJobExtension

**Framework:** Photos  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

## Declaration

```swift
protocol PHBackgroundResourceUploadJobExtension : AppExtension
```

## Mentioned In

- [Uploading asset resources in the background](../photokit/uploading-asset-resources-in-the-background.md)

## Topics

### Instance Methods

- [processJobs()](phbackgroundresourceuploadjobextension/processjobs%28%29.md): Request to initiate processing background upload jobs.
- [willTerminate()](phbackgroundresourceuploadjobextension/willterminate%28%29.md): Called by the host before suspending or terminating the extension process. Extension clients should use this to stop any in-progress work. When the extension is activated again, a new call will be made by the host.

## Relationships

### Inherits From

- [AppExtension](../extensionfoundation/appextension.md)
