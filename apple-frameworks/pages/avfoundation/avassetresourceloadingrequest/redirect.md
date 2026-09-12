> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingrequest/redirect](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/redirect)

# redirect (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An URL request instance if the loading request was redirected.

## Declaration

```swift
var redirect: URLRequest? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to an instance of [NSURLRequest](../../foundation/nsurlrequest.md) indicating a redirection of the loading request to another URL.

If no redirection is needed, the value of this property must be `nil`, which is the default.

## See Also

### Accessing the request data

- [request](request.md): The URL request object for the resource.
- [requestor](requestor.md): The asset resource requestor that made the request.
- [contentInformationRequest](contentinformationrequest.md): The information for a requested resource.
- [dataRequest](datarequest.md): The range of requested resource data.
- [streamingContentKeyRequestData(forApp:contentIdentifier:options:)](streamingcontentkeyrequestdata%28forapp_contentidentifier_options_%29.md): Deprecated. Obtains key request data for a specific combination of application and content.
- [persistentContentKey(fromKeyVendorResponse:options:)](persistentcontentkey%28fromkeyvendorresponse_options_%29.md): Deprecated. Obtains a persistable content key from a context.
- [AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey](../avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey.md): Deprecated. Specifies whether the content key request requires a persistable key to be returned from the key vendor.

# redirect (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An URL request instance if the loading request was redirected.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSURLRequest * redirect;
```

<a id="Discussion"></a>

## Discussion

Set this property to an instance of [NSURLRequest](../../foundation/nsurlrequest.md) indicating a redirection of the loading request to another URL.

If no redirection is needed, the value of this property must be `nil`, which is the default.

## See Also

### Accessing the request data

- [request](request.md): The URL request object for the resource.
- [requestor](requestor.md): The asset resource requestor that made the request.
- [contentInformationRequest](contentinformationrequest.md): The information for a requested resource.
- [dataRequest](datarequest.md): The range of requested resource data.
- [streamingContentKeyRequestDataForApp:contentIdentifier:options:error:](streamingcontentkeyrequestdata%28forapp_contentidentifier_options_%29.md): Deprecated. Obtains key request data for a specific combination of application and content.
- [persistentContentKeyFromKeyVendorResponse:options:error:](persistentcontentkey%28fromkeyvendorresponse_options_%29.md): Deprecated. Obtains a persistable content key from a context.
- [AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey](../avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey.md): Deprecated. Specifies whether the content key request requires a persistable key to be returned from the key vendor.
