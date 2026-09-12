> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey)

# AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0)

Specifies whether the content key request requires a persistable key to be returned from the key vendor.

> Use -\[AVPersistableContentKeyRequest persistableContentKeyFromKeyVendorResponse:options:error:\] instead

## Declaration

```swift
let AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey: String
```

## See Also

### Accessing the request data

- [request](avassetresourceloadingrequest/request.md): The URL request object for the resource.
- [requestor](avassetresourceloadingrequest/requestor.md): The asset resource requestor that made the request.
- [contentInformationRequest](avassetresourceloadingrequest/contentinformationrequest.md): The information for a requested resource.
- [dataRequest](avassetresourceloadingrequest/datarequest.md): The range of requested resource data.
- [redirect](avassetresourceloadingrequest/redirect.md): An URL request instance if the loading request was redirected.
- [streamingContentKeyRequestData(forApp:contentIdentifier:options:)](avassetresourceloadingrequest/streamingcontentkeyrequestdata%28forapp_contentidentifier_options_%29.md): Deprecated. Obtains key request data for a specific combination of application and content.
- [persistentContentKey(fromKeyVendorResponse:options:)](avassetresourceloadingrequest/persistentcontentkey%28fromkeyvendorresponse_options_%29.md): Deprecated. Obtains a persistable content key from a context.

# AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0)

Specifies whether the content key request requires a persistable key to be returned from the key vendor.

> Use -\[AVPersistableContentKeyRequest persistableContentKeyFromKeyVendorResponse:options:error:\] instead

## Declaration

```objectivec
extern NSString * const AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey;
```

## See Also

### Accessing the request data

- [request](avassetresourceloadingrequest/request.md): The URL request object for the resource.
- [requestor](avassetresourceloadingrequest/requestor.md): The asset resource requestor that made the request.
- [contentInformationRequest](avassetresourceloadingrequest/contentinformationrequest.md): The information for a requested resource.
- [dataRequest](avassetresourceloadingrequest/datarequest.md): The range of requested resource data.
- [redirect](avassetresourceloadingrequest/redirect.md): An URL request instance if the loading request was redirected.
- [streamingContentKeyRequestDataForApp:contentIdentifier:options:error:](avassetresourceloadingrequest/streamingcontentkeyrequestdata%28forapp_contentidentifier_options_%29.md): Deprecated. Obtains key request data for a specific combination of application and content.
- [persistentContentKeyFromKeyVendorResponse:options:error:](avassetresourceloadingrequest/persistentcontentkey%28fromkeyvendorresponse_options_%29.md): Deprecated. Obtains a persistable content key from a context.
