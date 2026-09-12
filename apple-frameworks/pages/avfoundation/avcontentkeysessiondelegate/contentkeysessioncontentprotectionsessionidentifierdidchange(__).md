> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysessiondelegate/contentkeysessioncontentprotectionsessionidentifierdidchange(_:)](https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/contentkeysessioncontentprotectionsessionidentifierdidchange(_:))

# contentKeySessionContentProtectionSessionIdentifierDidChange(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Tells the receiver the content protection session identifier changed.

## Declaration

```swift
optional func contentKeySessionContentProtectionSessionIdentifierDidChange(_ session: AVContentKeySession)
```

## Parameters

- `session`: The content key session to be notified.

## See Also

### Updating and retrying content key requests

- [contentKeySession(\_:didProvide:forInitializationData:)](contentkeysession%28__didprovide_forinitializationdata_%29.md)
- [contentKeySession(\_:externalProtectionStatusDidChangeFor:)](contentkeysession%28__externalprotectionstatusdidchangefor_%29.md): Tells the delegate when external protection state has changed.
- [contentKeySession(\_:didUpdatePersistableContentKey:forContentKeyIdentifier:)](contentkeysession%28__didupdatepersistablecontentkey_forcontentkeyidentifier_%29.md): Provides the receiver with an updated persistable content key for a specific key request.
- [contentKeySession(\_:shouldRetry:reason:)](contentkeysession%28__shouldretry_reason_%29.md): Provides the receiver with a content key request object to retry.
- [AVContentKeyRequest.RetryReason](../avcontentkeyrequest/retryreason.md): The reason for asking the client to retry a content key request.
- [contentKeySession(\_:contentKeyRequest:didFailWithError:)](contentkeysession%28__contentkeyrequest_didfailwitherror_%29.md): Tells the receiver that the content key request failed.
- [contentKeySession(\_:contentKeyRequestDidSucceed:)](contentkeysession%28__contentkeyrequestdidsucceed_%29.md): Tells the content key session that the response to a content key requeset was successfully processed.
- [contentKeySessionDidGenerateExpiredSessionReport(\_:)](contentkeysessiondidgenerateexpiredsessionreport%28__%29.md): Notifies the sender that an expired session report has been generated.

# contentKeySessionContentProtectionSessionIdentifierDidChange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

Tells the receiver the content protection session identifier changed.

## Declaration

```objectivec
- (void) contentKeySessionContentProtectionSessionIdentifierDidChange:(AVContentKeySession *) session;
```

## Parameters

- `session`: The content key session to be notified.

## See Also

### Updating and retrying content key requests

- [contentKeySession:didProvideContentKeyRequests:forInitializationData:](contentkeysession%28__didprovide_forinitializationdata_%29.md)
- [contentKeySession:externalProtectionStatusDidChangeForContentKey:](contentkeysession%28__externalprotectionstatusdidchangefor_%29.md): Tells the delegate when external protection state has changed.
- [contentKeySession:didUpdatePersistableContentKey:forContentKeyIdentifier:](contentkeysession%28__didupdatepersistablecontentkey_forcontentkeyidentifier_%29.md): Provides the receiver with an updated persistable content key for a specific key request.
- [contentKeySession:shouldRetryContentKeyRequest:reason:](contentkeysession%28__shouldretry_reason_%29.md): Provides the receiver with a content key request object to retry.
- [AVContentKeyRequestRetryReason](../avcontentkeyrequest/retryreason.md): The reason for asking the client to retry a content key request.
- [contentKeySession:contentKeyRequest:didFailWithError:](contentkeysession%28__contentkeyrequest_didfailwitherror_%29.md): Tells the receiver that the content key request failed.
- [contentKeySession:contentKeyRequestDidSucceed:](contentkeysession%28__contentkeyrequestdidsucceed_%29.md): Tells the content key session that the response to a content key requeset was successfully processed.
- [contentKeySessionDidGenerateExpiredSessionReport:](contentkeysessiondidgenerateexpiredsessionreport%28__%29.md): Notifies the sender that an expired session report has been generated.
