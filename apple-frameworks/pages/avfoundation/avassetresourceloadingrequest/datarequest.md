> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingrequest/datarequest](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/datarequest)

# dataRequest (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The range of requested resource data.

## Declaration

```swift
var dataRequest: AVAssetResourceLoadingDataRequest? { get }
```

<a id="Discussion"></a>

## Discussion

An instance of [AVAssetResourceLoadingDataRequest](../avassetresourceloadingdatarequest.md) that indicates the range of resource data that’s being requested. The value of this property is `nil` if no data is being requested.

If the loading request’s [contentInformationRequest](contentinformationrequest.md) isn’t `nil`, set that request’s properties before you respond to any data request.

## See Also

### Accessing the request data

- [request](request.md): The URL request object for the resource.
- [requestor](requestor.md): The asset resource requestor that made the request.
- [contentInformationRequest](contentinformationrequest.md): The information for a requested resource.
- [redirect](redirect.md): An URL request instance if the loading request was redirected.
- [streamingContentKeyRequestData(forApp:contentIdentifier:options:)](streamingcontentkeyrequestdata%28forapp_contentidentifier_options_%29.md): Deprecated. Obtains key request data for a specific combination of application and content.
- [persistentContentKey(fromKeyVendorResponse:options:)](persistentcontentkey%28fromkeyvendorresponse_options_%29.md): Deprecated. Obtains a persistable content key from a context.
- [AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey](../avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey.md): Deprecated. Specifies whether the content key request requires a persistable key to be returned from the key vendor.

# dataRequest (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The range of requested resource data.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVAssetResourceLoadingDataRequest * dataRequest;
```

<a id="Discussion"></a>

## Discussion

An instance of [AVAssetResourceLoadingDataRequest](../avassetresourceloadingdatarequest.md) that indicates the range of resource data that’s being requested. The value of this property is `nil` if no data is being requested.

If the loading request’s [contentInformationRequest](contentinformationrequest.md) isn’t `nil`, set that request’s properties before you respond to any data request.

## See Also

### Accessing the request data

- [request](request.md): The URL request object for the resource.
- [requestor](requestor.md): The asset resource requestor that made the request.
- [contentInformationRequest](contentinformationrequest.md): The information for a requested resource.
- [redirect](redirect.md): An URL request instance if the loading request was redirected.
- [streamingContentKeyRequestDataForApp:contentIdentifier:options:error:](streamingcontentkeyrequestdata%28forapp_contentidentifier_options_%29.md): Deprecated. Obtains key request data for a specific combination of application and content.
- [persistentContentKeyFromKeyVendorResponse:options:error:](persistentcontentkey%28fromkeyvendorresponse_options_%29.md): Deprecated. Obtains a persistable content key from a context.
- [AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey](../avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey.md): Deprecated. Specifies whether the content key request requires a persistable key to be returned from the key vendor.
