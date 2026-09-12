> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjobchangerequest/createjob(destination:resource:)](https://developer.apple.com/documentation/photos/phassetresourceuploadjobchangerequest/createjob(destination:resource:))

# createJob(destination:resource:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 26.1+ (deprecated in 26.4) · iPadOS 26.1+ (deprecated in 26.4) · Mac Catalyst 26.1+ (deprecated in 26.4) · macOS 27.0+

Creates an asset resource upload job.

## Declaration

```swift
class func createJob(destination: URLRequest, resource: PHAssetResource)
```

<a id="discussion"></a>

## Discussion

- Parameter:

  - destination: the destination NSURLRequest to which this asset resource will be sent.
  - resource: the asset resource to be uploaded.

If the number of jobs exceeds [jobLimit](../phassetresourceuploadjob/joblimit.md) the photo library [performChanges(\_:completionHandler:)](../phphotolibrary/performchanges%28__completionhandler_%29.md) request will fail with a [limitExceeded](../phphotoserror-swift.struct/limitexceeded.md) error. To generate jobs after this limit is triggered, you must acknowledge succeeded/failed jobs, and wait for the registered/pending ones to finish uploading, which will make those jobs also succeeded/failed.

# createJobWithDestination:resource: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 26.1+ (deprecated in 26.4) · iPadOS 26.1+ (deprecated in 26.4) · Mac Catalyst 27.0+ (deprecated in 26.4) · macOS 27.0+

Creates an asset resource upload job.

## Declaration

```objectivec
+ (void) createJobWithDestination:(NSURLRequest *) destination resource:(PHAssetResource *) resource;
```

<a id="discussion"></a>

## Discussion

- Parameter:

  - destination: the destination NSURLRequest to which this asset resource will be sent.
  - resource: the asset resource to be uploaded.

If the number of jobs exceeds [jobLimit](../phassetresourceuploadjob/joblimit.md) the photo library [performChanges:completionHandler:](../phphotolibrary/performchanges%28__completionhandler_%29.md) request will fail with a [limitExceeded](../phphotoserror-swift.struct/limitexceeded.md) error. To generate jobs after this limit is triggered, you must acknowledge succeeded/failed jobs, and wait for the registered/pending ones to finish uploading, which will make those jobs also succeeded/failed.
