> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysession](https://developer.apple.com/documentation/avfoundation/avcontentkeysession)

# AVContentKeySession (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

An object that creates and tracks decryption keys for media data.

## Declaration

```swift
class AVContentKeySession
```

## Topics

### Creating a session

- [init(keySystem:)](avcontentkeysession/init%28keysystem_%29.md): Creates a content key session to manage a collection of content decryption keys.
- [init(keySystem:storageDirectoryAt:)](avcontentkeysession/init%28keysystem_storagedirectoryat_%29.md): Creates a content key session to manage a collection of content decryption keys; points to a directory that stores abnormal session termination reports.

### Inspecting the session

- [keySystem](avcontentkeysession/keysystem.md): The type of key system used to retrieve keys.
- [AVContentKeySystem](avcontentkeysystem.md): A key-delivery method for a content key session.
- [storageURL](avcontentkeysession/storageurl.md): A URL that points to a writable storage directory.

### Managing the delegate object

- [setDelegate(\_:queue:)](avcontentkeysession/setdelegate%28__queue_%29.md): Sets the session’s delegate object and the dispatch queue on which to call the delegate’s methods.
- [delegate](avcontentkeysession/delegate.md): The content key session’s delegate object.
- [delegateQueue](avcontentkeysession/delegatequeue.md): The dispatch queue the session uses to invoke delegate callbacks.

### Managing content key recipients

- [contentKeyRecipients](avcontentkeysession/contentkeyrecipients.md): An array of content key recipients.
- [AVContentKeyRecipient](avcontentkeyrecipient.md): A protocol for requiring decryption keys for media data.
- [addContentKeyRecipient(\_:)](avcontentkeysession/addcontentkeyrecipient%28__%29.md): Tells the delegate that the specified recipient should have access to the decryption keys loaded with the session.
- [removeContentKeyRecipient(\_:)](avcontentkeysession/removecontentkeyrecipient%28__%29.md): Tells the delegate to remove the specified recipient.

### Processing requests

- [processContentKeyRequest(withIdentifier:initializationData:options:)](avcontentkeysession/processcontentkeyrequest%28withidentifier_initializationdata_options_%29.md): Tells the delegate to start loading the content decryption key with the specified identifier and initialization data.

### Managing expiration

- [expire()](avcontentkeysession/expire%28%29.md): Tells the delegate that the session expired as the result of normal, intentional processes.
- [makeSecureTokenForExpirationDate(ofPersistableContentKey:completionHandler:)](avcontentkeysession/makesecuretokenforexpirationdate%28ofpersistablecontentkey_completionhandler_%29.md): Creates a secure server playback context that the client sends to the key server to get an expiration date for the given persistable content key data.
- [renewExpiringResponseData(for:)](avcontentkeysession/renewexpiringresponsedata%28for_%29.md): Tells the delegate that previously provided response data for a content key request is about to expire.
- [contentProtectionSessionIdentifier](avcontentkeysession/contentprotectionsessionidentifier.md): The identifier for the current content protection session.

### Invalidating content keys

- [invalidatePersistableContentKey(\_:options:completionHandler:)](avcontentkeysession/invalidatepersistablecontentkey%28__options_completionhandler_%29.md): Invalidates the persistable content key and creates a secure server playback context (SPC) to verify the outcome of an invalidation request.
- [invalidateAllPersistableContentKeys(forApp:options:completionHandler:)](avcontentkeysession/invalidateallpersistablecontentkeys%28forapp_options_completionhandler_%29.md): Invalidates all of an app’s persistable content keys and creates a secure server playback context (SPC) to verify the outcome of an invalidation request.
- [AVContentKeySessionServerPlaybackContextOption](avcontentkeysessionserverplaybackcontextoption.md): Options for specifying additional information for generating server playback context (SPC).

### Handling expired session reports

- [pendingExpiredSessionReports(withAppIdentifier:storageDirectoryAt:)](avcontentkeysession/pendingexpiredsessionreports%28withappidentifier_storagedirectoryat_%29.md): Returns the expired session reports for content key sessions created with the specified app identifier.
- [removePendingExpiredSessionReports(\_:withAppIdentifier:storageDirectoryAt:)](avcontentkeysession/removependingexpiredsessionreports%28__withappidentifier_storagedirectoryat_%29.md): Removes expired session reports from storage.

### Initializers

- [init(keySystem:storageDirectoryAtURL:)](avcontentkeysession/init%28keysystem_storagedirectoryaturl_%29.md)

### Instance Properties

- [supportsAdvisoryKeys](avcontentkeysession/supportsadvisorykeys.md): Boolean indicating whether advisory keys are enabled on the client.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

- [AVContentKeySessionDelegate](avcontentkeysessiondelegate.md): A protocol that handles content key requests.
- [AVContentKey](avcontentkey.md): An object that represents the content key decryptor.
- [AVContentKeySpecifier](avcontentkeyspecifier.md): An object that uniquely identifies a content key.
- [AVContentKeyRequest](avcontentkeyrequest.md): An object that encapsulates information about a content decryption key request issued from a content key session object.
- [AVPersistableContentKeyRequest](avpersistablecontentkeyrequest.md): An object that encapsulates information about a persistable content decryption key request issued from a content key session.
- [AVContentKeyResponse](avcontentkeyresponse.md): An object that encapsulates information about a response to a content decryption key request.
- [AVExternalContentProtectionStatus](avexternalcontentprotectionstatus.md): Constants that specify whether sufficient protection exists to display the content.
- [AVSampleBufferAttachContentKey(\_:\_:\_:)](avsamplebufferattachcontentkey%28______%29.md): Deprecated. Attaches a content key to a sample buffer for the purpose of content decryption.

# AVContentKeySession (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

An object that creates and tracks decryption keys for media data.

## Declaration

```objectivec
@interface AVContentKeySession : NSObject
```

## Topics

### Creating a session

- [contentKeySessionWithKeySystem:](avcontentkeysession/init%28keysystem_%29.md): Creates a content key session to manage a collection of content decryption keys.
- [contentKeySessionWithKeySystem:storageDirectoryAtURL:](avcontentkeysession/init%28keysystem_storagedirectoryat_%29.md): Creates a content key session to manage a collection of content decryption keys; points to a directory that stores abnormal session termination reports.

### Inspecting the session

- [keySystem](avcontentkeysession/keysystem.md): The type of key system used to retrieve keys.
- [AVContentKeySystem](avcontentkeysystem.md): A key-delivery method for a content key session.
- [storageURL](avcontentkeysession/storageurl.md): A URL that points to a writable storage directory.

### Managing the delegate object

- [setDelegate:queue:](avcontentkeysession/setdelegate%28__queue_%29.md): Sets the session’s delegate object and the dispatch queue on which to call the delegate’s methods.
- [delegate](avcontentkeysession/delegate.md): The content key session’s delegate object.
- [delegateQueue](avcontentkeysession/delegatequeue.md): The dispatch queue the session uses to invoke delegate callbacks.

### Managing content key recipients

- [contentKeyRecipients](avcontentkeysession/contentkeyrecipients.md): An array of content key recipients.
- [AVContentKeyRecipient](avcontentkeyrecipient.md): A protocol for requiring decryption keys for media data.
- [addContentKeyRecipient:](avcontentkeysession/addcontentkeyrecipient%28__%29.md): Tells the delegate that the specified recipient should have access to the decryption keys loaded with the session.
- [removeContentKeyRecipient:](avcontentkeysession/removecontentkeyrecipient%28__%29.md): Tells the delegate to remove the specified recipient.

### Processing requests

- [processContentKeyRequestWithIdentifier:initializationData:options:](avcontentkeysession/processcontentkeyrequest%28withidentifier_initializationdata_options_%29.md): Tells the delegate to start loading the content decryption key with the specified identifier and initialization data.

### Managing expiration

- [expire](avcontentkeysession/expire%28%29.md): Tells the delegate that the session expired as the result of normal, intentional processes.
- [makeSecureTokenForExpirationDateOfPersistableContentKey:completionHandler:](avcontentkeysession/makesecuretokenforexpirationdate%28ofpersistablecontentkey_completionhandler_%29.md): Creates a secure server playback context that the client sends to the key server to get an expiration date for the given persistable content key data.
- [renewExpiringResponseDataForContentKeyRequest:](avcontentkeysession/renewexpiringresponsedata%28for_%29.md): Tells the delegate that previously provided response data for a content key request is about to expire.
- [contentProtectionSessionIdentifier](avcontentkeysession/contentprotectionsessionidentifier.md): The identifier for the current content protection session.

### Invalidating content keys

- [invalidatePersistableContentKey:options:completionHandler:](avcontentkeysession/invalidatepersistablecontentkey%28__options_completionhandler_%29.md): Invalidates the persistable content key and creates a secure server playback context (SPC) to verify the outcome of an invalidation request.
- [invalidateAllPersistableContentKeysForApp:options:completionHandler:](avcontentkeysession/invalidateallpersistablecontentkeys%28forapp_options_completionhandler_%29.md): Invalidates all of an app’s persistable content keys and creates a secure server playback context (SPC) to verify the outcome of an invalidation request.
- [AVContentKeySessionServerPlaybackContextOption](avcontentkeysessionserverplaybackcontextoption.md): Options for specifying additional information for generating server playback context (SPC).

### Handling expired session reports

- [pendingExpiredSessionReportsWithAppIdentifier:storageDirectoryAtURL:](avcontentkeysession/pendingexpiredsessionreports%28withappidentifier_storagedirectoryat_%29.md): Returns the expired session reports for content key sessions created with the specified app identifier.
- [removePendingExpiredSessionReports:withAppIdentifier:storageDirectoryAtURL:](avcontentkeysession/removependingexpiredsessionreports%28__withappidentifier_storagedirectoryat_%29.md): Removes expired session reports from storage.

### Instance Properties

- [supportsAdvisoryKeys](avcontentkeysession/supportsadvisorykeys.md): Boolean indicating whether advisory keys are enabled on the client.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### FairPlay streaming

- [AVContentKeySessionDelegate](avcontentkeysessiondelegate.md): A protocol that handles content key requests.
- [AVContentKey](avcontentkey.md): An object that represents the content key decryptor.
- [AVContentKeySpecifier](avcontentkeyspecifier.md): An object that uniquely identifies a content key.
- [AVContentKeyRequest](avcontentkeyrequest.md): An object that encapsulates information about a content decryption key request issued from a content key session object.
- [AVPersistableContentKeyRequest](avpersistablecontentkeyrequest.md): An object that encapsulates information about a persistable content decryption key request issued from a content key session.
- [AVContentKeyResponse](avcontentkeyresponse.md): An object that encapsulates information about a response to a content decryption key request.
- [AVExternalContentProtectionStatus](avexternalcontentprotectionstatus.md): Constants that specify whether sufficient protection exists to display the content.
- [AVSampleBufferAttachContentKey](avsamplebufferattachcontentkey%28______%29.md): Deprecated. Attaches a content key to a sample buffer for the purpose of content decryption.
