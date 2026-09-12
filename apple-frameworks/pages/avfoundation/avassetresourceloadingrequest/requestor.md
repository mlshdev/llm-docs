> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingrequest/requestor](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/requestor)

# requestor (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The asset resource requestor that made the request.

## Declaration

```swift
var requestor: AVAssetResourceLoadingRequestor { get }
```

## See Also

### Accessing the request data

- [request](request.md): The URL request object for the resource.
- [contentInformationRequest](contentinformationrequest.md): The information for a requested resource.
- [dataRequest](datarequest.md): The range of requested resource data.
- [redirect](redirect.md): An URL request instance if the loading request was redirected.
- [streamingContentKeyRequestData(forApp:contentIdentifier:options:)](streamingcontentkeyrequestdata%28forapp_contentidentifier_options_%29.md): Deprecated. Obtains key request data for a specific combination of application and content.
- [persistentContentKey(fromKeyVendorResponse:options:)](persistentcontentkey%28fromkeyvendorresponse_options_%29.md): Deprecated. Obtains a persistable content key from a context.
- [AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey](../avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey.md): Deprecated. Specifies whether the content key request requires a persistable key to be returned from the key vendor.

# requestor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The asset resource requestor that made the request.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAssetResourceLoadingRequestor * requestor;
```

## See Also

### Accessing the request data

- [request](request.md): The URL request object for the resource.
- [contentInformationRequest](contentinformationrequest.md): The information for a requested resource.
- [dataRequest](datarequest.md): The range of requested resource data.
- [redirect](redirect.md): An URL request instance if the loading request was redirected.
- [streamingContentKeyRequestDataForApp:contentIdentifier:options:error:](streamingcontentkeyrequestdata%28forapp_contentidentifier_options_%29.md): Deprecated. Obtains key request data for a specific combination of application and content.
- [persistentContentKeyFromKeyVendorResponse:options:error:](persistentcontentkey%28fromkeyvendorresponse_options_%29.md): Deprecated. Obtains a persistable content key from a context.
- [AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey](../avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey.md): Deprecated. Specifies whether the content key request requires a persistable key to be returned from the key vendor.
