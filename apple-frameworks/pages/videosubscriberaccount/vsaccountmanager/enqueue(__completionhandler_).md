> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmanager/enqueue(_:completionhandler:)](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmanager/enqueue(_:completionhandler:))

# enqueue(\_:completionHandler:) (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+

Submits a request for subscriber account information.

## Declaration

```swift
func enqueue(_ request: VSAccountMetadataRequest, completionHandler: @escaping (VSAccountMetadata?, (any Error)?) -> Void) -> VSAccountManagerResult
```

## Parameters

- `request`: A [VSAccountMetadataRequest](../vsaccountmetadatarequest.md) object that contains the information that your app requests.
- `completionHandler`: The closure that the account manager executes after the request completes. This closure has no return value and takes the following parameters:

  - **metadata**: A [VSAccountMetadata](../vsaccountmetadata.md) object that contains the requested information if the request was successful.
  - **error**: An error object that contains information about a problem, or `nil` if the operation completed successfully.

<a id="return-value"></a>

## Return Value

Returns a [VSAccountManagerResult](../vsaccountmanagerresult.md) object that your app can use with [cancel()](../vsaccountmanagerresult/cancel%28%29.md) to cancel the request.

## See Also

### Enqueuing requests

- [VSAccountMetadataRequest](../vsaccountmetadatarequest.md): An object that specifies what subscriber account information your app retrieves.
- [VSAccountMetadata](../vsaccountmetadata.md): A collection of information for a subscriber’s account.
- [VSAccountManagerResult](../vsaccountmanagerresult.md): An object that represents a request made for subscriber account information.
- [VSAccountProviderResponse](../vsaccountproviderresponse.md): An object that contains the response from the account provider.
- [VSAccountProviderAuthenticationScheme](../vsaccountproviderauthenticationscheme.md): Authentication schemes for account provider requests and responses.

# enqueueAccountMetadataRequest:completionHandler: (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · tvOS 10.0+ · visionOS 1.0+

Submits a request for subscriber account information.

## Declaration

```objectivec
- (VSAccountManagerResult *) enqueueAccountMetadataRequest:(VSAccountMetadataRequest *) request completionHandler:(void (^)(VSAccountMetadata *metadata, NSError *error)) completionHandler;
```

## Parameters

- `request`: A [VSAccountMetadataRequest](../vsaccountmetadatarequest.md) object that contains the information that your app requests.
- `completionHandler`: The closure that the account manager executes after the request completes. This closure has no return value and takes the following parameters:

  - **metadata**: A [VSAccountMetadata](../vsaccountmetadata.md) object that contains the requested information if the request was successful.
  - **error**: An error object that contains information about a problem, or `nil` if the operation completed successfully.

<a id="return-value"></a>

## Return Value

Returns a [VSAccountManagerResult](../vsaccountmanagerresult.md) object that your app can use with [cancel](../vsaccountmanagerresult/cancel%28%29.md) to cancel the request.

## See Also

### Enqueuing requests

- [VSAccountMetadataRequest](../vsaccountmetadatarequest.md): An object that specifies what subscriber account information your app retrieves.
- [VSAccountMetadata](../vsaccountmetadata.md): A collection of information for a subscriber’s account.
- [VSAccountManagerResult](../vsaccountmanagerresult.md): An object that represents a request made for subscriber account information.
- [VSAccountProviderResponse](../vsaccountproviderresponse.md): An object that contains the response from the account provider.
- [VSAccountProviderAuthenticationScheme](../vsaccountproviderauthenticationscheme.md): Authentication schemes for account provider requests and responses.
