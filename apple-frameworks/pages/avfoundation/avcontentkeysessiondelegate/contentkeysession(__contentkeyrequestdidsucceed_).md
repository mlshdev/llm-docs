> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysessiondelegate/contentkeysession(_:contentkeyrequestdidsucceed:)](https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/contentkeysession(_:contentkeyrequestdidsucceed:))

# contentKeySession(\_:contentKeyRequestDidSucceed:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Tells the content key session that the response to a content key requeset was successfully processed.

## Declaration

```swift
optional func contentKeySession(_ session: AVContentKeySession, contentKeyRequestDidSucceed keyRequest: AVContentKeyRequest)
```

## Parameters

- `session`: The [AVContentKeySession](../avcontentkeysession.md) instance that initiated the content key request.
- `keyRequest`: The [AVContentKeyRequest](../avcontentkeyrequest.md) instance whose response was successfully processed.

## See Also

### Updating and retrying content key requests

- [contentKeySession(\_:didProvide:forInitializationData:)](contentkeysession%28__didprovide_forinitializationdata_%29.md)
- [contentKeySession(\_:externalProtectionStatusDidChangeFor:)](contentkeysession%28__externalprotectionstatusdidchangefor_%29.md): Tells the delegate when external protection state has changed.
- [contentKeySession(\_:didUpdatePersistableContentKey:forContentKeyIdentifier:)](contentkeysession%28__didupdatepersistablecontentkey_forcontentkeyidentifier_%29.md): Provides the receiver with an updated persistable content key for a specific key request.
- [contentKeySession(\_:shouldRetry:reason:)](contentkeysession%28__shouldretry_reason_%29.md): Provides the receiver with a content key request object to retry.
- [AVContentKeyRequest.RetryReason](../avcontentkeyrequest/retryreason.md): The reason for asking the client to retry a content key request.
- [contentKeySessionContentProtectionSessionIdentifierDidChange(\_:)](contentkeysessioncontentprotectionsessionidentifierdidchange%28__%29.md): Tells the receiver the content protection session identifier changed.
- [contentKeySession(\_:contentKeyRequest:didFailWithError:)](contentkeysession%28__contentkeyrequest_didfailwitherror_%29.md): Tells the receiver that the content key request failed.
- [contentKeySessionDidGenerateExpiredSessionReport(\_:)](contentkeysessiondidgenerateexpiredsessionreport%28__%29.md): Notifies the sender that an expired session report has been generated.

# contentKeySession:contentKeyRequestDidSucceed: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

Tells the content key session that the response to a content key requeset was successfully processed.

## Declaration

```objectivec
- (void) contentKeySession:(AVContentKeySession *) session contentKeyRequestDidSucceed:(AVContentKeyRequest *) keyRequest;
```

## Parameters

- `session`: The [AVContentKeySession](../avcontentkeysession.md) instance that initiated the content key request.
- `keyRequest`: The [AVContentKeyRequest](../avcontentkeyrequest.md) instance whose response was successfully processed.

## See Also

### Updating and retrying content key requests

- [contentKeySession:didProvideContentKeyRequests:forInitializationData:](contentkeysession%28__didprovide_forinitializationdata_%29.md)
- [contentKeySession:externalProtectionStatusDidChangeForContentKey:](contentkeysession%28__externalprotectionstatusdidchangefor_%29.md): Tells the delegate when external protection state has changed.
- [contentKeySession:didUpdatePersistableContentKey:forContentKeyIdentifier:](contentkeysession%28__didupdatepersistablecontentkey_forcontentkeyidentifier_%29.md): Provides the receiver with an updated persistable content key for a specific key request.
- [contentKeySession:shouldRetryContentKeyRequest:reason:](contentkeysession%28__shouldretry_reason_%29.md): Provides the receiver with a content key request object to retry.
- [AVContentKeyRequestRetryReason](../avcontentkeyrequest/retryreason.md): The reason for asking the client to retry a content key request.
- [contentKeySessionContentProtectionSessionIdentifierDidChange:](contentkeysessioncontentprotectionsessionidentifierdidchange%28__%29.md): Tells the receiver the content protection session identifier changed.
- [contentKeySession:contentKeyRequest:didFailWithError:](contentkeysession%28__contentkeyrequest_didfailwitherror_%29.md): Tells the receiver that the content key request failed.
- [contentKeySessionDidGenerateExpiredSessionReport:](contentkeysessiondidgenerateexpiredsessionreport%28__%29.md): Notifies the sender that an expired session report has been generated.
