> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequestprotocolversionskey](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequestprotocolversionskey)

# AVContentKeyRequestProtocolVersionsKey (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

A key that specifies the versions of the content protection protocol supported by the application.

## Declaration

```swift
let AVContentKeyRequestProtocolVersionsKey: String
```

<a id="Discussion"></a>

## Discussion

The contents of this key are an [NSArray](../foundation/nsarray.md) or one or more [NSNumber](../foundation/nsnumber.md) objects.

## See Also

### Getting content key request data

- [makeStreamingContentKeyRequestData(forApp:contentIdentifier:options:completionHandler:)](avcontentkeyrequest/makestreamingcontentkeyrequestdata%28forapp_contentidentifier_options_completionhandler_%29.md): Obtains encrypted key request data for a specific combination of app and content.
- [AVContentKeyRequestRequiresValidationDataInSecureTokenKey](avcontentkeyrequestrequiresvalidationdatainsecuretokenkey.md): A key that requires the secure token to have extended validation data.
- [AVContentKeyRequestRandomDeviceIdentifierSeedKey](avcontentkeyrequestrandomdeviceidentifierseedkey.md): Value is an NSData containing a 16-byte seed to randomize the user’s deviceID contained in the SPC blob during FairPlay key exchange
- [AVContentKeyRequestShouldRandomizeDeviceIdentifierKey](avcontentkeyrequestshouldrandomizedeviceidentifierkey.md): Value is an Boolean indicating whether the user’s deviceID contained in the SPC blob during FairPlay key exchange should be randomized using a system generated seed

# AVContentKeyRequestProtocolVersionsKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

A key that specifies the versions of the content protection protocol supported by the application.

## Declaration

```objectivec
extern NSString * const AVContentKeyRequestProtocolVersionsKey;
```

<a id="Discussion"></a>

## Discussion

The contents of this key are an [NSArray](../foundation/nsarray.md) or one or more [NSNumber](../foundation/nsnumber.md) objects.

## See Also

### Getting content key request data

- [makeStreamingContentKeyRequestDataForApp:contentIdentifier:options:completionHandler:](avcontentkeyrequest/makestreamingcontentkeyrequestdata%28forapp_contentidentifier_options_completionhandler_%29.md): Obtains encrypted key request data for a specific combination of app and content.
- [AVContentKeyRequestRequiresValidationDataInSecureTokenKey](avcontentkeyrequestrequiresvalidationdatainsecuretokenkey.md): A key that requires the secure token to have extended validation data.
- [AVContentKeyRequestRandomDeviceIdentifierSeedKey](avcontentkeyrequestrandomdeviceidentifierseedkey.md): Value is an NSData containing a 16-byte seed to randomize the user’s deviceID contained in the SPC blob during FairPlay key exchange
- [AVContentKeyRequestShouldRandomizeDeviceIdentifierKey](avcontentkeyrequestshouldrandomizedeviceidentifierkey.md): Value is an Boolean indicating whether the user’s deviceID contained in the SPC blob during FairPlay key exchange should be randomized using a system generated seed
