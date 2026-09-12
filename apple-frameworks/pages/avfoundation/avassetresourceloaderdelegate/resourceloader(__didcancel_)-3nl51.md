> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloaderdelegate/resourceloader(_:didcancel:)-3nl51](https://developer.apple.com/documentation/avfoundation/avassetresourceloaderdelegate/resourceloader(_:didcancel:)-3nl51)

# resourceLoader(\_:didCancel:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Informs the delegate that a prior loading request has been cancelled.

## Declaration

```swift
optional func resourceLoader(_ resourceLoader: AVAssetResourceLoader, didCancel loadingRequest: AVAssetResourceLoadingRequest)
```

## Parameters

- `resourceLoader`: The resource loader.
- `loadingRequest`: The loading request that has been cancelled.

<a id="Discussion"></a>

## Discussion

Previously issued loading requests can be cancelled when data from the resource is no longer required or when a loading request is superseded by new requests for data from the same resource.

For example, if to complete a seek operation it becomes necessary to load a range of bytes that’s different from a range previously requested, the prior request may be cancelled while the delegate is still handling it.

## See Also

### Processing resource requests

- [resourceLoader(\_:shouldWaitForLoadingOfRequestedResource:)](resourceloader%28__shouldwaitforloadingofrequestedresource_%29.md): Asks the delegate if it wants to load the requested resource.
- [resourceLoader(\_:shouldWaitForRenewalOfRequestedResource:)](resourceloader%28__shouldwaitforrenewalofrequestedresource_%29.md): Tells the delegate when assistance is required of the application to renew a resource.

# resourceLoader:didCancelLoadingRequest: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Informs the delegate that a prior loading request has been cancelled.

## Declaration

```objectivec
- (void) resourceLoader:(AVAssetResourceLoader *) resourceLoader didCancelLoadingRequest:(AVAssetResourceLoadingRequest *) loadingRequest;
```

## Parameters

- `resourceLoader`: The resource loader.
- `loadingRequest`: The loading request that has been cancelled.

<a id="Discussion"></a>

## Discussion

Previously issued loading requests can be cancelled when data from the resource is no longer required or when a loading request is superseded by new requests for data from the same resource.

For example, if to complete a seek operation it becomes necessary to load a range of bytes that’s different from a range previously requested, the prior request may be cancelled while the delegate is still handling it.

## See Also

### Processing resource requests

- [resourceLoader:shouldWaitForLoadingOfRequestedResource:](resourceloader%28__shouldwaitforloadingofrequestedresource_%29.md): Asks the delegate if it wants to load the requested resource.
- [resourceLoader:shouldWaitForRenewalOfRequestedResource:](resourceloader%28__shouldwaitforrenewalofrequestedresource_%29.md): Tells the delegate when assistance is required of the application to renew a resource.
