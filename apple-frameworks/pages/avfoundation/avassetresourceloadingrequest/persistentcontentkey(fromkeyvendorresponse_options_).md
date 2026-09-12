> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingrequest/persistentcontentkey(fromkeyvendorresponse:options:)](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/persistentcontentkey(fromkeyvendorresponse:options:))

# persistentContentKey(fromKeyVendorResponse:options:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0)

Obtains a persistable content key from a context.

> Use -\[AVPersistableContentKeyRequest persistableContentKeyFromKeyVendorResponse:options:error:\] instead

## Declaration

```swift
func persistentContentKey(fromKeyVendorResponse keyVendorResponse: Data, options: [String : Any]? = nil) throws -> Data
```

## Parameters

- `keyVendorResponse`: The response returned from the key vendor as a result of a request generated from [streamingContentKeyRequestData(forApp:contentIdentifier:options:)](streamingcontentkeyrequestdata%28forapp_contentidentifier_options_%29.md).
- `options`: Additional information necessary to obtain the key, or `nil` if no additional information is required.

<a id="return-value"></a>

## Return Value

The persistable content key.

<a id="Discussion"></a>

## Discussion

The data returned from this method may be used to immediately satisfy an [AVAssetResourceLoadingDataRequest](../avassetresourceloadingdatarequest.md), as well as any subsequent requests for the same key URL. The value of [contentType](../avassetresourceloadingcontentinformationrequest/contenttype.md) must be set to [AVStreamingKeyDeliveryPersistentContentKeyType](../avstreamingkeydeliverypersistentcontentkeytype.md) when responding with data created with this method.

## See Also

### Accessing the request data

- [request](request.md): The URL request object for the resource.
- [requestor](requestor.md): The asset resource requestor that made the request.
- [contentInformationRequest](contentinformationrequest.md): The information for a requested resource.
- [dataRequest](datarequest.md): The range of requested resource data.
- [redirect](redirect.md): An URL request instance if the loading request was redirected.
- [streamingContentKeyRequestData(forApp:contentIdentifier:options:)](streamingcontentkeyrequestdata%28forapp_contentidentifier_options_%29.md): Deprecated. Obtains key request data for a specific combination of application and content.
- [AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey](../avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey.md): Deprecated. Specifies whether the content key request requires a persistable key to be returned from the key vendor.

# persistentContentKeyFromKeyVendorResponse:options:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0)

Obtains a persistable content key from a context.

> Use -\[AVPersistableContentKeyRequest persistableContentKeyFromKeyVendorResponse:options:error:\] instead

## Declaration

```objectivec
- (NSData *) persistentContentKeyFromKeyVendorResponse:(NSData *) keyVendorResponse options:(NSDictionary<NSString *,id> *) options error:(NSError **) outError;
```

## Parameters

- `keyVendorResponse`: The response returned from the key vendor as a result of a request generated from [streamingContentKeyRequestDataForApp:contentIdentifier:options:error:](streamingcontentkeyrequestdata%28forapp_contentidentifier_options_%29.md).
- `options`: Additional information necessary to obtain the key, or `nil` if no additional information is required.
- `outError`: If an error occurs while obtaining the peristable content key, This parameter contains an instance of [NSError](../../foundation/nserror.md) describing the failure.

<a id="return-value"></a>

## Return Value

The persistable content key.

<a id="Discussion"></a>

## Discussion

The data returned from this method may be used to immediately satisfy an [AVAssetResourceLoadingDataRequest](../avassetresourceloadingdatarequest.md), as well as any subsequent requests for the same key URL. The value of [contentType](../avassetresourceloadingcontentinformationrequest/contenttype.md) must be set to [AVStreamingKeyDeliveryPersistentContentKeyType](../avstreamingkeydeliverypersistentcontentkeytype.md) when responding with data created with this method.

## See Also

### Accessing the request data

- [request](request.md): The URL request object for the resource.
- [requestor](requestor.md): The asset resource requestor that made the request.
- [contentInformationRequest](contentinformationrequest.md): The information for a requested resource.
- [dataRequest](datarequest.md): The range of requested resource data.
- [redirect](redirect.md): An URL request instance if the loading request was redirected.
- [streamingContentKeyRequestDataForApp:contentIdentifier:options:error:](streamingcontentkeyrequestdata%28forapp_contentidentifier_options_%29.md): Deprecated. Obtains key request data for a specific combination of application and content.
- [AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey](../avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey.md): Deprecated. Specifies whether the content key request requires a persistable key to be returned from the key vendor.
