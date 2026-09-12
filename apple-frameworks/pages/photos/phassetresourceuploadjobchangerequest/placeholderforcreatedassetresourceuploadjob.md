> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjobchangerequest/placeholderforcreatedassetresourceuploadjob](https://developer.apple.com/documentation/photos/phassetresourceuploadjobchangerequest/placeholderforcreatedassetresourceuploadjob)

# placeholderForCreatedAssetResourceUploadJob (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

A placeholder for the asset resource upload job created by this request.

## Declaration

```swift
var placeholderForCreatedAssetResourceUploadJob: PHObjectPlaceholder? { get }
```

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

<a id="discussion"></a>

## Discussion

The placeholder can be used to obtain the local identifier of the job that will be created when the change block completes.

# placeholderForCreatedAssetResourceUploadJob (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

A placeholder for the asset resource upload job created by this request.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) PHObjectPlaceholder * placeholderForCreatedAssetResourceUploadJob;
```

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

<a id="discussion"></a>

## Discussion

The placeholder can be used to obtain the local identifier of the job that will be created when the change block completes.
