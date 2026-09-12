> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysessiondelegate](https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate)

# AVContentKeySessionDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

A protocol that handles content key requests.

## Declaration

```swift
protocol AVContentKeySessionDelegate : NSObjectProtocol, Sendable
```

## Topics

### Providing new content key requests

- [contentKeySession(\_:didProvide:)](avcontentkeysessiondelegate/contentkeysession%28__didprovide_%29-3coq5.md): Provides the receiver with a new content key request object.
- [contentKeySession(\_:didProvideRenewingContentKeyRequest:)](avcontentkeysessiondelegate/contentkeysession%28__didproviderenewingcontentkeyrequest_%29.md): Provides the receiver with a new content key request object for the renewal of an existing content key.
- [contentKeySession(\_:didProvide:)](avcontentkeysessiondelegate/contentkeysession%28__didprovide_%29-2wdgz.md): Provides the receiver with a new content key request object to process a persistable content key.

### Updating and retrying content key requests

- [contentKeySession(\_:didProvide:forInitializationData:)](avcontentkeysessiondelegate/contentkeysession%28__didprovide_forinitializationdata_%29.md)
- [contentKeySession(\_:externalProtectionStatusDidChangeFor:)](avcontentkeysessiondelegate/contentkeysession%28__externalprotectionstatusdidchangefor_%29.md): Tells the delegate when external protection state has changed.
- [contentKeySession(\_:didUpdatePersistableContentKey:forContentKeyIdentifier:)](avcontentkeysessiondelegate/contentkeysession%28__didupdatepersistablecontentkey_forcontentkeyidentifier_%29.md): Provides the receiver with an updated persistable content key for a specific key request.
- [contentKeySession(\_:shouldRetry:reason:)](avcontentkeysessiondelegate/contentkeysession%28__shouldretry_reason_%29.md): Provides the receiver with a content key request object to retry.
- [AVContentKeyRequest.RetryReason](avcontentkeyrequest/retryreason.md): The reason for asking the client to retry a content key request.
- [contentKeySessionContentProtectionSessionIdentifierDidChange(\_:)](avcontentkeysessiondelegate/contentkeysessioncontentprotectionsessionidentifierdidchange%28__%29.md): Tells the receiver the content protection session identifier changed.
- [contentKeySession(\_:contentKeyRequest:didFailWithError:)](avcontentkeysessiondelegate/contentkeysession%28__contentkeyrequest_didfailwitherror_%29.md): Tells the receiver that the content key request failed.
- [contentKeySession(\_:contentKeyRequestDidSucceed:)](avcontentkeysessiondelegate/contentkeysession%28__contentkeyrequestdidsucceed_%29.md): Tells the content key session that the response to a content key requeset was successfully processed.
- [contentKeySessionDidGenerateExpiredSessionReport(\_:)](avcontentkeysessiondelegate/contentkeysessiondidgenerateexpiredsessionreport%28__%29.md): Notifies the sender that an expired session report has been generated.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### FairPlay streaming

- [AVContentKeySession](avcontentkeysession.md): An object that creates and tracks decryption keys for media data.
- [AVContentKey](avcontentkey.md): An object that represents the content key decryptor.
- [AVContentKeySpecifier](avcontentkeyspecifier.md): An object that uniquely identifies a content key.
- [AVContentKeyRequest](avcontentkeyrequest.md): An object that encapsulates information about a content decryption key request issued from a content key session object.
- [AVPersistableContentKeyRequest](avpersistablecontentkeyrequest.md): An object that encapsulates information about a persistable content decryption key request issued from a content key session.
- [AVContentKeyResponse](avcontentkeyresponse.md): An object that encapsulates information about a response to a content decryption key request.
- [AVExternalContentProtectionStatus](avexternalcontentprotectionstatus.md): Constants that specify whether sufficient protection exists to display the content.
- [AVSampleBufferAttachContentKey(\_:\_:\_:)](avsamplebufferattachcontentkey%28______%29.md): Deprecated. Attaches a content key to a sample buffer for the purpose of content decryption.

# AVContentKeySessionDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

A protocol that handles content key requests.

## Declaration

```objectivec
@protocol AVContentKeySessionDelegate <NSObject>
```

## Topics

### Providing new content key requests

- [contentKeySession:didProvideContentKeyRequest:](avcontentkeysessiondelegate/contentkeysession%28__didprovide_%29-3coq5.md): Provides the receiver with a new content key request object.
- [contentKeySession:didProvideRenewingContentKeyRequest:](avcontentkeysessiondelegate/contentkeysession%28__didproviderenewingcontentkeyrequest_%29.md): Provides the receiver with a new content key request object for the renewal of an existing content key.
- [contentKeySession:didProvidePersistableContentKeyRequest:](avcontentkeysessiondelegate/contentkeysession%28__didprovide_%29-2wdgz.md): Provides the receiver with a new content key request object to process a persistable content key.

### Updating and retrying content key requests

- [contentKeySession:didProvideContentKeyRequests:forInitializationData:](avcontentkeysessiondelegate/contentkeysession%28__didprovide_forinitializationdata_%29.md)
- [contentKeySession:externalProtectionStatusDidChangeForContentKey:](avcontentkeysessiondelegate/contentkeysession%28__externalprotectionstatusdidchangefor_%29.md): Tells the delegate when external protection state has changed.
- [contentKeySession:didUpdatePersistableContentKey:forContentKeyIdentifier:](avcontentkeysessiondelegate/contentkeysession%28__didupdatepersistablecontentkey_forcontentkeyidentifier_%29.md): Provides the receiver with an updated persistable content key for a specific key request.
- [contentKeySession:shouldRetryContentKeyRequest:reason:](avcontentkeysessiondelegate/contentkeysession%28__shouldretry_reason_%29.md): Provides the receiver with a content key request object to retry.
- [AVContentKeyRequestRetryReason](avcontentkeyrequest/retryreason.md): The reason for asking the client to retry a content key request.
- [contentKeySessionContentProtectionSessionIdentifierDidChange:](avcontentkeysessiondelegate/contentkeysessioncontentprotectionsessionidentifierdidchange%28__%29.md): Tells the receiver the content protection session identifier changed.
- [contentKeySession:contentKeyRequest:didFailWithError:](avcontentkeysessiondelegate/contentkeysession%28__contentkeyrequest_didfailwitherror_%29.md): Tells the receiver that the content key request failed.
- [contentKeySession:contentKeyRequestDidSucceed:](avcontentkeysessiondelegate/contentkeysession%28__contentkeyrequestdidsucceed_%29.md): Tells the content key session that the response to a content key requeset was successfully processed.
- [contentKeySessionDidGenerateExpiredSessionReport:](avcontentkeysessiondelegate/contentkeysessiondidgenerateexpiredsessionreport%28__%29.md): Notifies the sender that an expired session report has been generated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### FairPlay streaming

- [AVContentKeySession](avcontentkeysession.md): An object that creates and tracks decryption keys for media data.
- [AVContentKey](avcontentkey.md): An object that represents the content key decryptor.
- [AVContentKeySpecifier](avcontentkeyspecifier.md): An object that uniquely identifies a content key.
- [AVContentKeyRequest](avcontentkeyrequest.md): An object that encapsulates information about a content decryption key request issued from a content key session object.
- [AVPersistableContentKeyRequest](avpersistablecontentkeyrequest.md): An object that encapsulates information about a persistable content decryption key request issued from a content key session.
- [AVContentKeyResponse](avcontentkeyresponse.md): An object that encapsulates information about a response to a content decryption key request.
- [AVExternalContentProtectionStatus](avexternalcontentprotectionstatus.md): Constants that specify whether sufficient protection exists to display the content.
- [AVSampleBufferAttachContentKey](avsamplebufferattachcontentkey%28______%29.md): Deprecated. Attaches a content key to a sample buffer for the purpose of content decryption.
