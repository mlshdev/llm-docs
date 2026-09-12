> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloadingrequest/streamingcontentkeyrequestdata(forapp:contentidentifier:options:)](https://developer.apple.com/documentation/avfoundation/avassetresourceloadingrequest/streamingcontentkeyrequestdata(forapp:contentidentifier:options:))

# streamingContentKeyRequestData(forApp:contentIdentifier:options:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 18.0) · iPadOS 7.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.9+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0)

Obtains key request data for a specific combination of application and content.

> Use -\[AVContentKeyRequest makeStreamingContentKeyRequestDataForApp:contentIdentifier:options:completionHandler:\] instead

## Declaration

```swift
func streamingContentKeyRequestData(forApp appIdentifier: Data, contentIdentifier: Data, options: [String : Any]? = nil) throws -> Data
```

## Parameters

- `appIdentifier`: An opaque content identifier for the application. The value of this identifier depends on the particular system used to provide the decryption key.
- `contentIdentifier`: An opaque identifier for the content. The value of this identifier depends on the particular system used to provide the decryption key.
- `options`: Additional information necessary to obtain the key, or `nil` if no additional information is required.

<a id="return-value"></a>

## Return Value

The key request data that must be transmitted to the key vendor to obtain the content key.

## Topics

### Configuration options

- [AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey](../avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey.md): Deprecated. Specifies whether the content key request requires a persistable key to be returned from the key vendor.

## See Also

### Accessing the request data

- [request](request.md): The URL request object for the resource.
- [requestor](requestor.md): The asset resource requestor that made the request.
- [contentInformationRequest](contentinformationrequest.md): The information for a requested resource.
- [dataRequest](datarequest.md): The range of requested resource data.
- [redirect](redirect.md): An URL request instance if the loading request was redirected.
- [persistentContentKey(fromKeyVendorResponse:options:)](persistentcontentkey%28fromkeyvendorresponse_options_%29.md): Deprecated. Obtains a persistable content key from a context.
- [AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey](../avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey.md): Deprecated. Specifies whether the content key request requires a persistable key to be returned from the key vendor.

# streamingContentKeyRequestDataForApp:contentIdentifier:options:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 18.0) · iPadOS 7.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.9+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0)

Obtains key request data for a specific combination of application and content.

> Use -\[AVContentKeyRequest makeStreamingContentKeyRequestDataForApp:contentIdentifier:options:completionHandler:\] instead

## Declaration

```objectivec
- (NSData *) streamingContentKeyRequestDataForApp:(NSData *) appIdentifier contentIdentifier:(NSData *) contentIdentifier options:(NSDictionary<NSString *,id> *) options error:(NSError **) outError;
```

## Parameters

- `appIdentifier`: An opaque content identifier for the application. The value of this identifier depends on the particular system used to provide the decryption key.
- `contentIdentifier`: An opaque identifier for the content. The value of this identifier depends on the particular system used to provide the decryption key.
- `options`: Additional information necessary to obtain the key, or `nil` if no additional information is required.
- `outError`: On input, a pointer to an error object. If an error occurs while obtaining the streaming content key, the pointer is set to an appropriate error object on output.

<a id="return-value"></a>

## Return Value

The key request data that must be transmitted to the key vendor to obtain the content key.

## Topics

### Configuration options

- [AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey](../avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey.md): Deprecated. Specifies whether the content key request requires a persistable key to be returned from the key vendor.

## See Also

### Accessing the request data

- [request](request.md): The URL request object for the resource.
- [requestor](requestor.md): The asset resource requestor that made the request.
- [contentInformationRequest](contentinformationrequest.md): The information for a requested resource.
- [dataRequest](datarequest.md): The range of requested resource data.
- [redirect](redirect.md): An URL request instance if the loading request was redirected.
- [persistentContentKeyFromKeyVendorResponse:options:error:](persistentcontentkey%28fromkeyvendorresponse_options_%29.md): Deprecated. Obtains a persistable content key from a context.
- [AVAssetResourceLoadingRequestStreamingContentKeyRequestRequiresPersistentKey](../avassetresourceloadingrequeststreamingcontentkeyrequestrequirespersistentkey.md): Deprecated. Specifies whether the content key request requires a persistable key to be returned from the key vendor.
