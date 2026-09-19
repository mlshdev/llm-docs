> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamekit/gkfriendrequestcomposeviewcontroller/addrecipients(withplayerids:)

# addRecipients(withPlayerIDs:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ (deprecated in 8.0) · iPadOS 4.2+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Adds recipients based on their Game Center player identifiers.

## Declaration

```swift
func addRecipients(withPlayerIDs playerIDs: [String])
```

## Parameters

- `playerIDs`: An array with one or more [NSString](../../foundation/nsstring.md) objects, each containing an player identifier.

<a id="Discussion"></a>

## Discussion

If you do not add at least once recipient, the recipients field is selected when the view controller is presented so that the player can type a list of recipients.

## See Also

### Adding Recipients

- [addRecipients(withEmailAddresses:)](addrecipients%28withemailaddresses_%29.md): Deprecated. Adds recipients based on their email addresses.
- [addRecipientPlayers(\_:)](addrecipientplayers%28__%29.md): Deprecated. Adds recipients based on their Game Center player identifiers.

# addRecipientsWithPlayerIDs: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ (deprecated in 8.0) · iPadOS 4.2+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Adds recipients based on their Game Center player identifiers.

## Declaration

```objectivec
- (void) addRecipientsWithPlayerIDs:(NSArray<NSString *> *) playerIDs;
```

## Parameters

- `playerIDs`: An array with one or more [NSString](../../foundation/nsstring.md) objects, each containing an player identifier.

<a id="Discussion"></a>

## Discussion

If you do not add at least once recipient, the recipients field is selected when the view controller is presented so that the player can type a list of recipients.

## See Also

### Adding Recipients

- [addRecipientsWithEmailAddresses:](addrecipients%28withemailaddresses_%29.md): Deprecated. Adds recipients based on their email addresses.
- [addRecipientPlayers:](addrecipientplayers%28__%29.md): Deprecated. Adds recipients based on their Game Center player identifiers.
