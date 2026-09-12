> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkfriendrequestcomposeviewcontroller/addrecipientplayers(_:)](https://developer.apple.com/documentation/gamekit/gkfriendrequestcomposeviewcontroller/addrecipientplayers(_:))

# addRecipientPlayers(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

Adds recipients based on their Game Center player identifiers.

## Declaration

```swift
func addRecipientPlayers(_ players: [GKPlayer])
```

## Parameters

- `players`: An array with one or more [GKPlayer](../gkplayer.md) objects, each containing an player identifier.

<a id="Discussion"></a>

## Discussion

If you do not add at least once recipient, the recipients field is selected when the view controller is presented so that the player can type a list of recipients. Adding more players than defined by the [maxNumberOfRecipients()](maxnumberofrecipients%28%29.md) property causes an exception to be thrown.

## See Also

### Adding Recipients

- [addRecipients(withEmailAddresses:)](addrecipients%28withemailaddresses_%29.md): Deprecated. Adds recipients based on their email addresses.
- [addRecipients(withPlayerIDs:)](addrecipients%28withplayerids_%29.md): Deprecated. Adds recipients based on their Game Center player identifiers.

# addRecipientPlayers: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.10+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

Adds recipients based on their Game Center player identifiers.

## Declaration

```objectivec
- (void) addRecipientPlayers:(NSArray<GKPlayer *> *) players;
```

## Parameters

- `players`: An array with one or more [GKPlayer](../gkplayer.md) objects, each containing an player identifier.

<a id="Discussion"></a>

## Discussion

If you do not add at least once recipient, the recipients field is selected when the view controller is presented so that the player can type a list of recipients. Adding more players than defined by the [maxNumberOfRecipients](maxnumberofrecipients%28%29.md) property causes an exception to be thrown.

## See Also

### Adding Recipients

- [addRecipientsWithEmailAddresses:](addrecipients%28withemailaddresses_%29.md): Deprecated. Adds recipients based on their email addresses.
- [addRecipientsWithPlayerIDs:](addrecipients%28withplayerids_%29.md): Deprecated. Adds recipients based on their Game Center player identifiers.
