> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingrequest/contentinformationrequest](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/contentinformationrequest)

# contentInformationRequest (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The information for a requested resource.

## Declaration

```swift
var contentInformationRequest: AVAssetResourceLoadingContentInformationRequest? { get }
```

<a id="Discussion"></a>

## Discussion

An instance of [AVAssetResourceLoadingContentInformationRequest](../avassetresourceloadingcontentinformationrequest.md) that you populate with information about the resource. The value of this property is `nil` if no such information is being requested.

## See Also

### Accessing the request data

- [request](request.md): The URL request object for the resource.
- [requestor](requestor.md): The asset resource requestor that made the request.
- [dataRequest](datarequest.md): The range of requested resource data.
- [redirect](redirect.md): An URL request instance if the loading request was redirected.
- [streamingContentKeyRequestData(forApp:contentIdentifier:options:)](streamingcontentkeyrequestdata%28forapp_contentidentifier_options_%29.md): Deprecated. Obtains key request data for a specific combination of application and content.
- [persistentContentKey(fromKeyVendorResponse:options:)](persistentcontentkey%28fromkeyvendorresponse_options_%29.md): Deprecated. Obtains a persistable content key from a context.
- [AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey](../avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey.md): Deprecated. Specifies whether the content key request requires a persistable key to be returned from the key vendor.

# contentInformationRequest (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The information for a requested resource.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AVAssetResourceLoadingContentInformationRequest * contentInformationRequest;
```

<a id="Discussion"></a>

## Discussion

An instance of [AVAssetResourceLoadingContentInformationRequest](../avassetresourceloadingcontentinformationrequest.md) that you populate with information about the resource. The value of this property is `nil` if no such information is being requested.

## See Also

### Accessing the request data

- [request](request.md): The URL request object for the resource.
- [requestor](requestor.md): The asset resource requestor that made the request.
- [dataRequest](datarequest.md): The range of requested resource data.
- [redirect](redirect.md): An URL request instance if the loading request was redirected.
- [streamingContentKeyRequestDataForApp:contentIdentifier:options:error:](streamingcontentkeyrequestdata%28forapp_contentidentifier_options_%29.md): Deprecated. Obtains key request data for a specific combination of application and content.
- [persistentContentKeyFromKeyVendorResponse:options:error:](persistentcontentkey%28fromkeyvendorresponse_options_%29.md): Deprecated. Obtains a persistable content key from a context.
- [AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey](../avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey.md): Deprecated. Specifies whether the content key request requires a persistable key to be returned from the key vendor.
