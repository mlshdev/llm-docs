> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phimagemanager/cancelimagerequest(_:)](https://developer.apple.com/documentation/photos/phimagemanager/cancelimagerequest(_:))

# cancelImageRequest(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Cancels an asynchronous request

## Declaration

```swift
func cancelImageRequest(_ requestID: PHImageRequestID)
```

## Parameters

- `requestID`: The numeric identifier of the request to be canceled.

<a id="Discussion"></a>

## Discussion

When you perform an asynchronous request for image data using the [requestImage(for:targetSize:contentMode:options:resultHandler:)](requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method, or for a video object using one of the methods listed in Requesting Video Objects, the image manager returns a numeric identifier for the request. To cancel the request before it completes, provide this identifier when calling the [cancelImageRequest(\_:)](cancelimagerequest%28__%29.md) method.

## See Also

### Canceling a Request

- [PHImageRequestID](../phimagerequestid.md): A numeric identifier for an asynchronous image request.
- [PHInvalidImageRequestID](../phinvalidimagerequestid.md): A special value provided for asynchronous image requests that cannot be canceled.

# cancelImageRequest: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Cancels an asynchronous request

## Declaration

```objectivec
- (void) cancelImageRequest:(PHImageRequestID) requestID;
```

## Parameters

- `requestID`: The numeric identifier of the request to be canceled.

<a id="Discussion"></a>

## Discussion

When you perform an asynchronous request for image data using the [requestImageForAsset:targetSize:contentMode:options:resultHandler:](requestimage%28for_targetsize_contentmode_options_resulthandler_%29.md) method, or for a video object using one of the methods listed in Requesting Video Objects, the image manager returns a numeric identifier for the request. To cancel the request before it completes, provide this identifier when calling the [cancelImageRequest:](cancelimagerequest%28__%29.md) method.

## See Also

### Canceling a Request

- [PHImageRequestID](../phimagerequestid.md): A numeric identifier for an asynchronous image request.
- [PHInvalidImageRequestID](../phinvalidimagerequestid.md): A special value provided for asynchronous image requests that cannot be canceled.
