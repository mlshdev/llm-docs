> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequest/makestreamingcontentkeyrequestdata(forapp:contentidentifier:options:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest/makestreamingcontentkeyrequestdata(forapp:contentidentifier:options:completionhandler:))

# makeStreamingContentKeyRequestData(forApp:contentIdentifier:options:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Obtains encrypted key request data for a specific combination of app and content.

## Declaration

```swift
func makeStreamingContentKeyRequestData(forApp appIdentifier: Data, contentIdentifier: Data?, options: [String : Any]? = nil, completionHandler handler: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func makeStreamingContentKeyRequestData(forApp appIdentifier: Data, contentIdentifier: Data?, options: [String : Any]? = nil) async throws -> Data
```

## Parameters

- `appIdentifier`: An opaque identifier for the app.
- `contentIdentifier`: An opaque identifier for the content. When you provide an identifier, its length must range from 2 to 200 bytes, inclusive.
- `options`: A dictionary containing any additional information required to obtain the key. The value of this parameter is `nil` when no additional information is required.
- `handler`: A block called after the streaming content key request has been prepared.

  - **contentKeyRequestData**: The streaming content key request data.
  - **error**: An object that describes the error, if one occurred; otherwise, the value is `nil`.

<a id="Discussion"></a>

## Discussion

If [AVContentKeyRequestProtocolVersionsKey](../avcontentkeyrequestprotocolversionskey.md) is not specified in the `options` parameter, the default protocol of `1` is used.

## See Also

### Getting content key request data

- [AVContentKeyRequestProtocolVersionsKey](../avcontentkeyrequestprotocolversionskey.md): A key that specifies the versions of the content protection protocol supported by the application.
- [AVContentKeyRequestRequiresValidationDataInSecureTokenKey](../avcontentkeyrequestrequiresvalidationdatainsecuretokenkey.md): A key that requires the secure token to have extended validation data.
- [AVContentKeyRequestRandomDeviceIdentifierSeedKey](../avcontentkeyrequestrandomdeviceidentifierseedkey.md): Value is an NSData containing a 16-byte seed to randomize the user’s deviceID contained in the SPC blob during FairPlay key exchange
- [AVContentKeyRequestShouldRandomizeDeviceIdentifierKey](../avcontentkeyrequestshouldrandomizedeviceidentifierkey.md): Value is an Boolean indicating whether the user’s deviceID contained in the SPC blob during FairPlay key exchange should be randomized using a system generated seed

# makeStreamingContentKeyRequestDataForApp:contentIdentifier:options:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Obtains encrypted key request data for a specific combination of app and content.

## Declaration

```objectivec
- (void) makeStreamingContentKeyRequestDataForApp:(NSData *) appIdentifier contentIdentifier:(NSData *) contentIdentifier options:(NSDictionary<NSString *,id> *) options completionHandler:(void (^)(NSData *contentKeyRequestData, NSError *error)) handler;
```

## Parameters

- `appIdentifier`: An opaque identifier for the app.
- `contentIdentifier`: An opaque identifier for the content. When you provide an identifier, its length must range from 2 to 200 bytes, inclusive.
- `options`: A dictionary containing any additional information required to obtain the key. The value of this parameter is `nil` when no additional information is required.
- `handler`: A block called after the streaming content key request has been prepared.

  - **contentKeyRequestData**: The streaming content key request data.
  - **error**: An object that describes the error, if one occurred; otherwise, the value is `nil`.

<a id="Discussion"></a>

## Discussion

If [AVContentKeyRequestProtocolVersionsKey](../avcontentkeyrequestprotocolversionskey.md) is not specified in the `options` parameter, the default protocol of `1` is used.

## See Also

### Getting content key request data

- [AVContentKeyRequestProtocolVersionsKey](../avcontentkeyrequestprotocolversionskey.md): A key that specifies the versions of the content protection protocol supported by the application.
- [AVContentKeyRequestRequiresValidationDataInSecureTokenKey](../avcontentkeyrequestrequiresvalidationdatainsecuretokenkey.md): A key that requires the secure token to have extended validation data.
- [AVContentKeyRequestRandomDeviceIdentifierSeedKey](../avcontentkeyrequestrandomdeviceidentifierseedkey.md): Value is an NSData containing a 16-byte seed to randomize the user’s deviceID contained in the SPC blob during FairPlay key exchange
- [AVContentKeyRequestShouldRandomizeDeviceIdentifierKey](../avcontentkeyrequestshouldrandomizedeviceidentifierkey.md): Value is an Boolean indicating whether the user’s deviceID contained in the SPC blob during FairPlay key exchange should be randomized using a system generated seed
