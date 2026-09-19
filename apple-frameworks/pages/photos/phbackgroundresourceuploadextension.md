> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phbackgroundresourceuploadextension

# PHBackgroundResourceUploadExtension

**Framework:** Photos  
**Kind:** Protocol  
**Availability:** iOS 26.1+ (deprecated in 27.0) · iPadOS 26.1+ (deprecated in 27.0)

A protocol to interact with asset resource upload jobs during background processing.

> Adopt PHBackgroundResourceUploadJobExtension instead

## Declaration

```swift
protocol PHBackgroundResourceUploadExtension : AppExtension
```

## Mentioned In

- [Uploading asset resources in the background](../photokit/uploading-asset-resources-in-the-background.md)

<a id="overview"></a>

## Overview

Use this protocol to create, acknowledge, retry asset resource upload jobs.

## Topics

### Processing upload requests

- [process()](phbackgroundresourceuploadextension/process%28%29.md): Deprecated. Request to initiate processing background upload jobs.
- [PHBackgroundResourceUploadProcessingResult](phbackgroundresourceuploadprocessingresult.md)

### Handling termination

- [notifyTermination()](phbackgroundresourceuploadextension/notifytermination%28%29.md): Deprecated. This notification will be called if the host is going to suspend/terminate the current execution. Extension clients should use this to stop the current execution. When the extension is activated, a new call will be presented by the host.

## Relationships

### Inherits From

- [AppExtension](../extensionfoundation/appextension.md)

## See Also

### Background resource upload extensions

- [Uploading asset resources in the background](../photokit/uploading-asset-resources-in-the-background.md): Enable reliable cloud backup for photo library assets with background processing.
- [PHAssetResourceUploadJob](phassetresourceuploadjob.md): An object that represents a request to upload an asset resource.
- [PHAssetResourceUploadJobChangeRequest](phassetresourceuploadjobchangerequest.md): Use within an application’s `com.apple.photos.background-upload` extension to create and change [PHAssetResourceUploadJob](phassetresourceuploadjob.md) records.
