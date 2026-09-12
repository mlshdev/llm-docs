> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysessiondelegate/contentkeysession(_:didprovide:forinitializationdata:)](https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/contentkeysession(_:didprovide:forinitializationdata:))

# contentKeySession(\_:didProvide:forInitializationData:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```swift
optional func contentKeySession(_ session: AVContentKeySession, didProvide keyRequests: [AVContentKeyRequest], forInitializationData initializationData: Data?)
```

## See Also

### Updating and retrying content key requests

- [contentKeySession(\_:externalProtectionStatusDidChangeFor:)](contentkeysession%28__externalprotectionstatusdidchangefor_%29.md): Tells the delegate when external protection state has changed.
- [contentKeySession(\_:didUpdatePersistableContentKey:forContentKeyIdentifier:)](contentkeysession%28__didupdatepersistablecontentkey_forcontentkeyidentifier_%29.md): Provides the receiver with an updated persistable content key for a specific key request.
- [contentKeySession(\_:shouldRetry:reason:)](contentkeysession%28__shouldretry_reason_%29.md): Provides the receiver with a content key request object to retry.
- [AVContentKeyRequest.RetryReason](../avcontentkeyrequest/retryreason.md): The reason for asking the client to retry a content key request.
- [contentKeySessionContentProtectionSessionIdentifierDidChange(\_:)](contentkeysessioncontentprotectionsessionidentifierdidchange%28__%29.md): Tells the receiver the content protection session identifier changed.
- [contentKeySession(\_:contentKeyRequest:didFailWithError:)](contentkeysession%28__contentkeyrequest_didfailwitherror_%29.md): Tells the receiver that the content key request failed.
- [contentKeySession(\_:contentKeyRequestDidSucceed:)](contentkeysession%28__contentkeyrequestdidsucceed_%29.md): Tells the content key session that the response to a content key requeset was successfully processed.
- [contentKeySessionDidGenerateExpiredSessionReport(\_:)](contentkeysessiondidgenerateexpiredsessionreport%28__%29.md): Notifies the sender that an expired session report has been generated.

# contentKeySession:didProvideContentKeyRequests:forInitializationData: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

## Declaration

```objectivec
- (void) contentKeySession:(AVContentKeySession *) session didProvideContentKeyRequests:(NSArray<AVContentKeyRequest *> *) keyRequests forInitializationData:(NSData *) initializationData;
```

## See Also

### Updating and retrying content key requests

- [contentKeySession:externalProtectionStatusDidChangeForContentKey:](contentkeysession%28__externalprotectionstatusdidchangefor_%29.md): Tells the delegate when external protection state has changed.
- [contentKeySession:didUpdatePersistableContentKey:forContentKeyIdentifier:](contentkeysession%28__didupdatepersistablecontentkey_forcontentkeyidentifier_%29.md): Provides the receiver with an updated persistable content key for a specific key request.
- [contentKeySession:shouldRetryContentKeyRequest:reason:](contentkeysession%28__shouldretry_reason_%29.md): Provides the receiver with a content key request object to retry.
- [AVContentKeyRequestRetryReason](../avcontentkeyrequest/retryreason.md): The reason for asking the client to retry a content key request.
- [contentKeySessionContentProtectionSessionIdentifierDidChange:](contentkeysessioncontentprotectionsessionidentifierdidchange%28__%29.md): Tells the receiver the content protection session identifier changed.
- [contentKeySession:contentKeyRequest:didFailWithError:](contentkeysession%28__contentkeyrequest_didfailwitherror_%29.md): Tells the receiver that the content key request failed.
- [contentKeySession:contentKeyRequestDidSucceed:](contentkeysession%28__contentkeyrequestdidsucceed_%29.md): Tells the content key session that the response to a content key requeset was successfully processed.
- [contentKeySessionDidGenerateExpiredSessionReport:](contentkeysessiondidgenerateexpiredsessionreport%28__%29.md): Notifies the sender that an expired session report has been generated.
