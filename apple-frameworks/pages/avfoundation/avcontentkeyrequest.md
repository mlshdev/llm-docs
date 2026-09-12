> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeyrequest](https://developer.apple.com/documentation/avfoundation/avcontentkeyrequest)

# AVContentKeyRequest (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

An object that encapsulates information about a content decryption key request issued from a content key session object.

## Declaration

```swift
class AVContentKeyRequest
```

## Topics

### Getting content key request data

- [makeStreamingContentKeyRequestData(forApp:contentIdentifier:options:completionHandler:)](avcontentkeyrequest/makestreamingcontentkeyrequestdata%28forapp_contentidentifier_options_completionhandler_%29.md): Obtains encrypted key request data for a specific combination of app and content.
- [AVContentKeyRequestProtocolVersionsKey](avcontentkeyrequestprotocolversionskey.md): A key that specifies the versions of the content protection protocol supported by the application.
- [AVContentKeyRequestRequiresValidationDataInSecureTokenKey](avcontentkeyrequestrequiresvalidationdatainsecuretokenkey.md): A key that requires the secure token to have extended validation data.
- [AVContentKeyRequestRandomDeviceIdentifierSeedKey](avcontentkeyrequestrandomdeviceidentifierseedkey.md): Value is an NSData containing a 16-byte seed to randomize the user’s deviceID contained in the SPC blob during FairPlay key exchange
- [AVContentKeyRequestShouldRandomizeDeviceIdentifierKey](avcontentkeyrequestshouldrandomizedeviceidentifierkey.md): Value is an Boolean indicating whether the user’s deviceID contained in the SPC blob during FairPlay key exchange should be randomized using a system generated seed

### Responding to the content key request

- [processContentKeyResponse(\_:)](avcontentkeyrequest/processcontentkeyresponse%28__%29.md): Sends the specified content key response to the receiver for processing.
- [processContentKeyResponseError(\_:)](avcontentkeyrequest/processcontentkeyresponseerror%28__%29.md): Tells the receiver that the app was unable to obtain a content key response.
- [respondByRequestingPersistableContentKeyRequest()](avcontentkeyrequest/respondbyrequestingpersistablecontentkeyrequest%28%29.md): Deprecated. Tells the receiver that the app requires a persistable content key request object for processing.

### Getting content key request properties

- [identifier](avcontentkeyrequest/identifier.md): The identifier for the content key.
- [originatingRecipient](avcontentkeyrequest/originatingrecipient.md): The AVContentKeyRecipient which initiated this request, if any.
- [canProvidePersistableContentKey](avcontentkeyrequest/canprovidepersistablecontentkey.md): The content key request used to create a persistable content key or respond to a previous request with a persistable content key.
- [error](avcontentkeyrequest/error.md): The error description for a failed key request.
- [initializationData](avcontentkeyrequest/initializationdata.md): The data used to obtain a key response.
- [renewsExpiringResponseData](avcontentkeyrequest/renewsexpiringresponsedata.md): A Boolean value that indicates whether the content key request renews previously provided response data.
- [status](avcontentkeyrequest/status-swift.property.md): The current state of the content key request.
- [AVContentKeyRequest.Status](avcontentkeyrequest/status-swift.enum.md): The status for a content key request.

### Inspecting a request

- [contentKey](avcontentkeyrequest/contentkey.md): The generated content key.
- [contentKeySpecifier](avcontentkeyrequest/contentkeyspecifier.md): The requested content key specifier.
- [options](avcontentkeyrequest/options.md): A dictionary of options used to initialize key loading.
- [AVContentKeyRequest.RetryReason](avcontentkeyrequest/retryreason.md): The reason for asking the client to retry a content key request.

### Instance Properties

- [canBeFulfilledWithAdvisoryKey](avcontentkeyrequest/canbefulfilledwithadvisorykey.md): Indicates whether this key request was initiated for an advisory key.

### Instance Methods

- [makeOptionalStreamingContentKeyRequestData(forApp:contentIdentifier:options:completionHandler:)](avcontentkeyrequest/makeoptionalstreamingcontentkeyrequestdata%28forapp_contentidentifier_options_completionhandler_%29.md): Obtains an optional content key request data for a specific combination of application and content.
- [respondByRequestingPersistableContentKeyRequestAndReturnError()](avcontentkeyrequest/respondbyrequestingpersistablecontentkeyrequestandreturnerror%28%29.md): Tells the receiver that the app requires a persistable content key request object for processing.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVPersistableContentKeyRequest](avpersistablecontentkeyrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### FairPlay streaming

- [AVContentKeySession](avcontentkeysession.md): An object that creates and tracks decryption keys for media data.
- [AVContentKeySessionDelegate](avcontentkeysessiondelegate.md): A protocol that handles content key requests.
- [AVContentKey](avcontentkey.md): An object that represents the content key decryptor.
- [AVContentKeySpecifier](avcontentkeyspecifier.md): An object that uniquely identifies a content key.
- [AVPersistableContentKeyRequest](avpersistablecontentkeyrequest.md): An object that encapsulates information about a persistable content decryption key request issued from a content key session.
- [AVContentKeyResponse](avcontentkeyresponse.md): An object that encapsulates information about a response to a content decryption key request.
- [AVExternalContentProtectionStatus](avexternalcontentprotectionstatus.md): Constants that specify whether sufficient protection exists to display the content.
- [AVSampleBufferAttachContentKey(\_:\_:\_:)](avsamplebufferattachcontentkey%28______%29.md): Deprecated. Attaches a content key to a sample buffer for the purpose of content decryption.

# AVContentKeyRequest (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

An object that encapsulates information about a content decryption key request issued from a content key session object.

## Declaration

```objectivec
@interface AVContentKeyRequest : NSObject
```

## Topics

### Getting content key request data

- [makeStreamingContentKeyRequestDataForApp:contentIdentifier:options:completionHandler:](avcontentkeyrequest/makestreamingcontentkeyrequestdata%28forapp_contentidentifier_options_completionhandler_%29.md): Obtains encrypted key request data for a specific combination of app and content.
- [AVContentKeyRequestProtocolVersionsKey](avcontentkeyrequestprotocolversionskey.md): A key that specifies the versions of the content protection protocol supported by the application.
- [AVContentKeyRequestRequiresValidationDataInSecureTokenKey](avcontentkeyrequestrequiresvalidationdatainsecuretokenkey.md): A key that requires the secure token to have extended validation data.
- [AVContentKeyRequestRandomDeviceIdentifierSeedKey](avcontentkeyrequestrandomdeviceidentifierseedkey.md): Value is an NSData containing a 16-byte seed to randomize the user’s deviceID contained in the SPC blob during FairPlay key exchange
- [AVContentKeyRequestShouldRandomizeDeviceIdentifierKey](avcontentkeyrequestshouldrandomizedeviceidentifierkey.md): Value is an Boolean indicating whether the user’s deviceID contained in the SPC blob during FairPlay key exchange should be randomized using a system generated seed

### Responding to the content key request

- [processContentKeyResponse:](avcontentkeyrequest/processcontentkeyresponse%28__%29.md): Sends the specified content key response to the receiver for processing.
- [processContentKeyResponseError:](avcontentkeyrequest/processcontentkeyresponseerror%28__%29.md): Tells the receiver that the app was unable to obtain a content key response.
- [respondByRequestingPersistableContentKeyRequest](avcontentkeyrequest/respondbyrequestingpersistablecontentkeyrequest%28%29.md): Deprecated. Tells the receiver that the app requires a persistable content key request object for processing.

### Getting content key request properties

- [identifier](avcontentkeyrequest/identifier.md): The identifier for the content key.
- [originatingRecipient](avcontentkeyrequest/originatingrecipient.md): The AVContentKeyRecipient which initiated this request, if any.
- [canProvidePersistableContentKey](avcontentkeyrequest/canprovidepersistablecontentkey.md): The content key request used to create a persistable content key or respond to a previous request with a persistable content key.
- [error](avcontentkeyrequest/error.md): The error description for a failed key request.
- [initializationData](avcontentkeyrequest/initializationdata.md): The data used to obtain a key response.
- [renewsExpiringResponseData](avcontentkeyrequest/renewsexpiringresponsedata.md): A Boolean value that indicates whether the content key request renews previously provided response data.
- [status](avcontentkeyrequest/status-swift.property.md): The current state of the content key request.
- [AVContentKeyRequestStatus](avcontentkeyrequest/status-swift.enum.md): The status for a content key request.

### Inspecting a request

- [contentKey](avcontentkeyrequest/contentkey.md): The generated content key.
- [contentKeySpecifier](avcontentkeyrequest/contentkeyspecifier.md): The requested content key specifier.
- [options](avcontentkeyrequest/options.md): A dictionary of options used to initialize key loading.
- [AVContentKeyRequestRetryReason](avcontentkeyrequest/retryreason.md): The reason for asking the client to retry a content key request.

### Instance Properties

- [canBeFulfilledWithAdvisoryKey](avcontentkeyrequest/canbefulfilledwithadvisorykey.md): Indicates whether this key request was initiated for an advisory key.

### Instance Methods

- [makeOptionalStreamingContentKeyRequestDataForApp:contentIdentifier:options:completionHandler:](avcontentkeyrequest/makeoptionalstreamingcontentkeyrequestdata%28forapp_contentidentifier_options_completionhandler_%29.md): Obtains an optional content key request data for a specific combination of application and content.
- [respondByRequestingPersistableContentKeyRequestAndReturnError:](avcontentkeyrequest/respondbyrequestingpersistablecontentkeyrequestandreturnerror%28%29.md): Tells the receiver that the app requires a persistable content key request object for processing.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVPersistableContentKeyRequest](avpersistablecontentkeyrequest.md)

## See Also

### FairPlay streaming

- [AVContentKeySession](avcontentkeysession.md): An object that creates and tracks decryption keys for media data.
- [AVContentKeySessionDelegate](avcontentkeysessiondelegate.md): A protocol that handles content key requests.
- [AVContentKey](avcontentkey.md): An object that represents the content key decryptor.
- [AVContentKeySpecifier](avcontentkeyspecifier.md): An object that uniquely identifies a content key.
- [AVPersistableContentKeyRequest](avpersistablecontentkeyrequest.md): An object that encapsulates information about a persistable content decryption key request issued from a content key session.
- [AVContentKeyResponse](avcontentkeyresponse.md): An object that encapsulates information about a response to a content decryption key request.
- [AVExternalContentProtectionStatus](avexternalcontentprotectionstatus.md): Constants that specify whether sufficient protection exists to display the content.
- [AVSampleBufferAttachContentKey](avsamplebufferattachcontentkey%28______%29.md): Deprecated. Attaches a content key to a sample buffer for the purpose of content decryption.
