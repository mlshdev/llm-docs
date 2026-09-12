> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloaderdelegate/resourceloader(_:shouldwaitforrenewalofrequestedresource:)](https://developer.apple.com/documentation/avfoundation/avassetresourceloaderdelegate/resourceloader(_:shouldwaitforrenewalofrequestedresource:))

# resourceLoader(\_:shouldWaitForRenewalOfRequestedResource:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate when assistance is required of the application to renew a resource.

## Declaration

```swift
optional func resourceLoader(_ resourceLoader: AVAssetResourceLoader, shouldWaitForRenewalOfRequestedResource renewalRequest: AVAssetResourceRenewalRequest) -> Bool
```

## Parameters

- `resourceLoader`: The resource loader.
- `renewalRequest`: An instance of `AVAssetResourceRenewalRequest` that provides information about the requested resource.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the delegate can renew the resource; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Delegates receive this message when assistance is required to renew a resource previously loaded by [resourceLoader(\_:shouldWaitForLoadingOfRequestedResource:)](resourceloader%28__shouldwaitforloadingofrequestedresource_%29.md). For example, this method is invoked to for decryption keys that require renewal, as indicated in a response to a prior invocation of [resourceLoader(\_:shouldWaitForLoadingOfRequestedResource:)](resourceloader%28__shouldwaitforloadingofrequestedresource_%29.md).

If the result is [true](https://developer.apple.com/documentation/swift/true), the resource loader expects invocation, either subsequently or immediately, of either the `AVAssetResourceRenewalRequest` method `finishLoading` or `finishLoadingWithError:`. If you intend to finish loading the resource after your handling of this message returns, you must retain the `renewalRequest` until after loading is finished.

If the result is [false](https://developer.apple.com/documentation/swift/false), the resource loader treats the loading of the resource as having failed.

> **Note**

>  If the delegate’s implementation of -[resourceLoader(\_:shouldWaitForLoadingOfRequestedResource:)](resourceloader%28__shouldwaitforloadingofrequestedresource_%29.md) returns [true](https://developer.apple.com/documentation/swift/true) without finishing the loading request immediately, it may be invoked again with another loading request before the prior request is finished; therefore in such cases the delegate should be prepared to manage multiple loading requests.

## See Also

### Processing resource requests

- [resourceLoader(\_:shouldWaitForLoadingOfRequestedResource:)](resourceloader%28__shouldwaitforloadingofrequestedresource_%29.md): Asks the delegate if it wants to load the requested resource.
- [resourceLoader(\_:didCancel:)](resourceloader%28__didcancel_%29-3nl51.md): Informs the delegate that a prior loading request has been cancelled.

# resourceLoader:shouldWaitForRenewalOfRequestedResource: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate when assistance is required of the application to renew a resource.

## Declaration

```objectivec
- (BOOL) resourceLoader:(AVAssetResourceLoader *) resourceLoader shouldWaitForRenewalOfRequestedResource:(AVAssetResourceRenewalRequest *) renewalRequest;
```

## Parameters

- `resourceLoader`: The resource loader.
- `renewalRequest`: An instance of `AVAssetResourceRenewalRequest` that provides information about the requested resource.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the delegate can renew the resource; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Delegates receive this message when assistance is required to renew a resource previously loaded by [resourceLoader:shouldWaitForLoadingOfRequestedResource:](resourceloader%28__shouldwaitforloadingofrequestedresource_%29.md). For example, this method is invoked to for decryption keys that require renewal, as indicated in a response to a prior invocation of [resourceLoader:shouldWaitForLoadingOfRequestedResource:](resourceloader%28__shouldwaitforloadingofrequestedresource_%29.md).

If the result is [true](https://developer.apple.com/documentation/swift/true), the resource loader expects invocation, either subsequently or immediately, of either the `AVAssetResourceRenewalRequest` method `finishLoading` or `finishLoadingWithError:`. If you intend to finish loading the resource after your handling of this message returns, you must retain the `renewalRequest` until after loading is finished.

If the result is [false](https://developer.apple.com/documentation/swift/false), the resource loader treats the loading of the resource as having failed.

> **Note**

>  If the delegate’s implementation of -[resourceLoader:shouldWaitForLoadingOfRequestedResource:](resourceloader%28__shouldwaitforloadingofrequestedresource_%29.md) returns [true](https://developer.apple.com/documentation/swift/true) without finishing the loading request immediately, it may be invoked again with another loading request before the prior request is finished; therefore in such cases the delegate should be prepared to manage multiple loading requests.

## See Also

### Processing resource requests

- [resourceLoader:shouldWaitForLoadingOfRequestedResource:](resourceloader%28__shouldwaitforloadingofrequestedresource_%29.md): Asks the delegate if it wants to load the requested resource.
- [resourceLoader:didCancelLoadingRequest:](resourceloader%28__didcancel_%29-3nl51.md): Informs the delegate that a prior loading request has been cancelled.
