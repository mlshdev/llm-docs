> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourcemanager/canceldatarequest(_:)](https://developer.apple.com/documentation/photos/phassetresourcemanager/canceldatarequest(_:))

# cancelDataRequest(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Cancels an asynchronous request.

## Declaration

```swift
func cancelDataRequest(_ requestID: PHAssetResourceDataRequestID)
```

## Parameters

- `requestID`: The numeric identifier of the request to be canceled.

<a id="Discussion"></a>

## Discussion

When you perform an asynchronous request for asset resource data using the [requestData(for:options:dataReceivedHandler:completionHandler:)](requestdata%28for_options_datareceivedhandler_completionhandler_%29.md) method, the image manager returns a numeric identifier for the request. To cancel the request before it completes, provide this identifier when calling the [cancelDataRequest(\_:)](canceldatarequest%28__%29.md) method.

## See Also

### Requesting Resources

- [requestData(for:options:dataReceivedHandler:completionHandler:)](requestdata%28for_options_datareceivedhandler_completionhandler_%29.md): Requests the underlying data for the specified asset resource, to be delivered asynchronously.
- [writeData(for:toFile:options:completionHandler:)](writedata%28for_tofile_options_completionhandler_%29.md): Requests the underlying data for the specified asset resource, to be asynchronously written to a local file.

# cancelDataRequest: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Cancels an asynchronous request.

## Declaration

```objectivec
- (void) cancelDataRequest:(PHAssetResourceDataRequestID) requestID;
```

## Parameters

- `requestID`: The numeric identifier of the request to be canceled.

<a id="Discussion"></a>

## Discussion

When you perform an asynchronous request for asset resource data using the [requestDataForAssetResource:options:dataReceivedHandler:completionHandler:](requestdata%28for_options_datareceivedhandler_completionhandler_%29.md) method, the image manager returns a numeric identifier for the request. To cancel the request before it completes, provide this identifier when calling the [cancelDataRequest:](canceldatarequest%28__%29.md) method.

## See Also

### Requesting Resources

- [requestDataForAssetResource:options:dataReceivedHandler:completionHandler:](requestdata%28for_options_datareceivedhandler_completionhandler_%29.md): Requests the underlying data for the specified asset resource, to be delivered asynchronously.
- [writeDataForAssetResource:toFile:options:completionHandler:](writedata%28for_tofile_options_completionhandler_%29.md): Requests the underlying data for the specified asset resource, to be asynchronously written to a local file.
