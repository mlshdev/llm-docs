> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phlivephoto/cancelrequest(withrequestid:)](https://developer.apple.com/documentation/photos/phlivephoto/cancelrequest(withrequestid:))

# cancelRequest(withRequestID:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Cancels an asynchronous request

## Declaration

```swift
class func cancelRequest(withRequestID requestID: PHLivePhotoRequestID)
```

## Parameters

- `requestID`: The numeric identifier of the request to be canceled.

<a id="Discussion"></a>

## Discussion

When you use the [request(withResourceFileURLs:placeholderImage:targetSize:contentMode:resultHandler:)](request%28withresourcefileurls_placeholderimage_targetsize_contentmode_resulthandler_%29.md) method to asynchronously load a Live Photo from resource files, the method returns a numeric identifier for the request. To cancel the request before it completes, provide the identifier when calling the [cancelRequest(withRequestID:)](cancelrequest%28withrequestid_%29.md) method.

## See Also

### Loading a Live Photo from Data Files

- [request(withResourceFileURLs:placeholderImage:targetSize:contentMode:resultHandler:)](request%28withresourcefileurls_placeholderimage_targetsize_contentmode_resulthandler_%29.md): Asynchronously loads a Live Photo from the specified resource files.

# cancelLivePhotoRequestWithRequestID: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Cancels an asynchronous request

## Declaration

```objectivec
+ (void) cancelLivePhotoRequestWithRequestID:(PHLivePhotoRequestID) requestID;
```

## Parameters

- `requestID`: The numeric identifier of the request to be canceled.

<a id="Discussion"></a>

## Discussion

When you use the [requestLivePhotoWithResourceFileURLs:placeholderImage:targetSize:contentMode:resultHandler:](request%28withresourcefileurls_placeholderimage_targetsize_contentmode_resulthandler_%29.md) method to asynchronously load a Live Photo from resource files, the method returns a numeric identifier for the request. To cancel the request before it completes, provide the identifier when calling the [cancelLivePhotoRequestWithRequestID:](cancelrequest%28withrequestid_%29.md) method.

## See Also

### Loading a Live Photo from Data Files

- [requestLivePhotoWithResourceFileURLs:placeholderImage:targetSize:contentMode:resultHandler:](request%28withresourcefileurls_placeholderimage_targetsize_contentmode_resulthandler_%29.md): Asynchronously loads a Live Photo from the specified resource files.
