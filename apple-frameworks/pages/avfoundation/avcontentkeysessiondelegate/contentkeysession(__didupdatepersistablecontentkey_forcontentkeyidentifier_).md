> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysessiondelegate/contentkeysession(_:didupdatepersistablecontentkey:forcontentkeyidentifier:)](https://developer.apple.com/documentation/avfoundation/avcontentkeysessiondelegate/contentkeysession(_:didupdatepersistablecontentkey:forcontentkeyidentifier:))

# contentKeySession(\_:didUpdatePersistableContentKey:forContentKeyIdentifier:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 7.0+

Provides the receiver with an updated persistable content key for a specific key request.

## Declaration

```swift
optional func contentKeySession(_ session: AVContentKeySession, didUpdatePersistableContentKey persistableContentKey: Data, forContentKeyIdentifier keyIdentifier: Any)
```

## Parameters

- `session`: The content key session that is providing the updated persistable content key.
- `persistableContentKey`: The updated persistent content key data. This data can be stored offline and used to answer future content key requests with the matching key identifier.
- `keyIdentifier`: A container- and protocol-specific identifier for the updated persistent content key.

<a id="Discussion"></a>

## Discussion

If the content key session provides updated persistable content key data, previous key data is no longer valid and cannot be used to answer future loading requests.

## See Also

### Updating and retrying content key requests

- [contentKeySession(\_:didProvide:forInitializationData:)](contentkeysession%28__didprovide_forinitializationdata_%29.md)
- [contentKeySession(\_:externalProtectionStatusDidChangeFor:)](contentkeysession%28__externalprotectionstatusdidchangefor_%29.md): Tells the delegate when external protection state has changed.
- [contentKeySession(\_:shouldRetry:reason:)](contentkeysession%28__shouldretry_reason_%29.md): Provides the receiver with a content key request object to retry.
- [AVContentKeyRequest.RetryReason](../avcontentkeyrequest/retryreason.md): The reason for asking the client to retry a content key request.
- [contentKeySessionContentProtectionSessionIdentifierDidChange(\_:)](contentkeysessioncontentprotectionsessionidentifierdidchange%28__%29.md): Tells the receiver the content protection session identifier changed.
- [contentKeySession(\_:contentKeyRequest:didFailWithError:)](contentkeysession%28__contentkeyrequest_didfailwitherror_%29.md): Tells the receiver that the content key request failed.
- [contentKeySession(\_:contentKeyRequestDidSucceed:)](contentkeysession%28__contentkeyrequestdidsucceed_%29.md): Tells the content key session that the response to a content key requeset was successfully processed.
- [contentKeySessionDidGenerateExpiredSessionReport(\_:)](contentkeysessiondidgenerateexpiredsessionreport%28__%29.md): Notifies the sender that an expired session report has been generated.

# contentKeySession:didUpdatePersistableContentKey:forContentKeyIdentifier: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 7.0+

Provides the receiver with an updated persistable content key for a specific key request.

## Declaration

```objectivec
- (void) contentKeySession:(AVContentKeySession *) session didUpdatePersistableContentKey:(NSData *) persistableContentKey forContentKeyIdentifier:(id) keyIdentifier;
```

## Parameters

- `session`: The content key session that is providing the updated persistable content key.
- `persistableContentKey`: The updated persistent content key data. This data can be stored offline and used to answer future content key requests with the matching key identifier.
- `keyIdentifier`: A container- and protocol-specific identifier for the updated persistent content key.

<a id="Discussion"></a>

## Discussion

If the content key session provides updated persistable content key data, previous key data is no longer valid and cannot be used to answer future loading requests.

## See Also

### Updating and retrying content key requests

- [contentKeySession:didProvideContentKeyRequests:forInitializationData:](contentkeysession%28__didprovide_forinitializationdata_%29.md)
- [contentKeySession:externalProtectionStatusDidChangeForContentKey:](contentkeysession%28__externalprotectionstatusdidchangefor_%29.md): Tells the delegate when external protection state has changed.
- [contentKeySession:shouldRetryContentKeyRequest:reason:](contentkeysession%28__shouldretry_reason_%29.md): Provides the receiver with a content key request object to retry.
- [AVContentKeyRequestRetryReason](../avcontentkeyrequest/retryreason.md): The reason for asking the client to retry a content key request.
- [contentKeySessionContentProtectionSessionIdentifierDidChange:](contentkeysessioncontentprotectionsessionidentifierdidchange%28__%29.md): Tells the receiver the content protection session identifier changed.
- [contentKeySession:contentKeyRequest:didFailWithError:](contentkeysession%28__contentkeyrequest_didfailwitherror_%29.md): Tells the receiver that the content key request failed.
- [contentKeySession:contentKeyRequestDidSucceed:](contentkeysession%28__contentkeyrequestdidsucceed_%29.md): Tells the content key session that the response to a content key requeset was successfully processed.
- [contentKeySessionDidGenerateExpiredSessionReport:](contentkeysessiondidgenerateexpiredsessionreport%28__%29.md): Notifies the sender that an expired session report has been generated.
