> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjobchangerequest/init(for:)](https://developer.apple.com/documentation/photos/phassetresourceuploadjobchangerequest/init(for:))

# init(for:) (Swift)

**Framework:** Photos  
**Kind:** Initializer  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

Creates a request for modifying the specified upload job.

## Declaration

```swift
convenience init?(for job: PHAssetResourceUploadJob)
```

## Parameters

- `job`: A job to be modified.

# changeRequestForUploadJob: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

Creates a request for modifying the specified upload job.

## Declaration

```objectivec
+ (instancetype) changeRequestForUploadJob:(PHAssetResourceUploadJob *) job;
```

## Parameters

- `job`: A job to be modified.
