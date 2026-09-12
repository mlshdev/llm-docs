> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequestrequiresvalidationdatainsecuretokenkey](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequestrequiresvalidationdatainsecuretokenkey)

# AVContentKeyRequestRequiresValidationDataInSecureTokenKey (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A key that requires the secure token to have extended validation data.

## Declaration

```swift
let AVContentKeyRequestRequiresValidationDataInSecureTokenKey: String
```

<a id="Discussion"></a>

## Discussion

You create the value for this key by using [persistableContentKey(fromKeyVendorResponse:options:)](avpersistablecontentkeyrequest/persistablecontentkey%28fromkeyvendorresponse_options_%29.md).

## See Also

### Getting content key request data

- [makeStreamingContentKeyRequestData(forApp:contentIdentifier:options:completionHandler:)](avcontentkeyrequest/makestreamingcontentkeyrequestdata%28forapp_contentidentifier_options_completionhandler_%29.md): Obtains encrypted key request data for a specific combination of app and content.
- [AVContentKeyRequestProtocolVersionsKey](avcontentkeyrequestprotocolversionskey.md): A key that specifies the versions of the content protection protocol supported by the application.
- [AVContentKeyRequestRandomDeviceIdentifierSeedKey](avcontentkeyrequestrandomdeviceidentifierseedkey.md): Value is an NSData containing a 16-byte seed to randomize the user’s deviceID contained in the SPC blob during FairPlay key exchange
- [AVContentKeyRequestShouldRandomizeDeviceIdentifierKey](avcontentkeyrequestshouldrandomizedeviceidentifierkey.md): Value is an Boolean indicating whether the user’s deviceID contained in the SPC blob during FairPlay key exchange should be randomized using a system generated seed

# AVContentKeyRequestRequiresValidationDataInSecureTokenKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A key that requires the secure token to have extended validation data.

## Declaration

```objectivec
extern NSString * const AVContentKeyRequestRequiresValidationDataInSecureTokenKey;
```

<a id="Discussion"></a>

## Discussion

You create the value for this key by using [persistableContentKeyFromKeyVendorResponse:options:error:](avpersistablecontentkeyrequest/persistablecontentkey%28fromkeyvendorresponse_options_%29.md).

## See Also

### Getting content key request data

- [makeStreamingContentKeyRequestDataForApp:contentIdentifier:options:completionHandler:](avcontentkeyrequest/makestreamingcontentkeyrequestdata%28forapp_contentidentifier_options_completionhandler_%29.md): Obtains encrypted key request data for a specific combination of app and content.
- [AVContentKeyRequestProtocolVersionsKey](avcontentkeyrequestprotocolversionskey.md): A key that specifies the versions of the content protection protocol supported by the application.
- [AVContentKeyRequestRandomDeviceIdentifierSeedKey](avcontentkeyrequestrandomdeviceidentifierseedkey.md): Value is an NSData containing a 16-byte seed to randomize the user’s deviceID contained in the SPC blob during FairPlay key exchange
- [AVContentKeyRequestShouldRandomizeDeviceIdentifierKey](avcontentkeyrequestshouldrandomizedeviceidentifierkey.md): Value is an Boolean indicating whether the user’s deviceID contained in the SPC blob during FairPlay key exchange should be randomized using a system generated seed
