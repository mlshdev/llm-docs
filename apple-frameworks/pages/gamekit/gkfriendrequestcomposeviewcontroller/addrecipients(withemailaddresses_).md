> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkfriendrequestcomposeviewcontroller/addrecipients(withemailaddresses:)](https://developer.apple.com/documentation/gamekit/gkfriendrequestcomposeviewcontroller/addrecipients(withemailaddresses:))

# addRecipients(withEmailAddresses:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ (deprecated in 10.0) · iPadOS 4.2+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

Adds recipients based on their email addresses.

> No longer supported.

## Declaration

```swift
func addRecipients(withEmailAddresses emailAddresses: [String])
```

## Parameters

- `emailAddresses`: An array with one or more [NSString](../../foundation/nsstring.md) objects, each containing an email address.

<a id="Discussion"></a>

## Discussion

If you do not add at least once recipient, the recipients field is selected when the view controller is presented so that the player can type a list of recipients. Adding more players than defined by the [maxNumberOfRecipients()](maxnumberofrecipients%28%29.md) property causes an exception to be thrown.

## See Also

### Adding Recipients

- [addRecipientPlayers(\_:)](addrecipientplayers%28__%29.md): Deprecated. Adds recipients based on their Game Center player identifiers.
- [addRecipients(withPlayerIDs:)](addrecipients%28withplayerids_%29.md): Deprecated. Adds recipients based on their Game Center player identifiers.

# addRecipientsWithEmailAddresses: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ (deprecated in 10.0) · iPadOS 4.2+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

Adds recipients based on their email addresses.

> No longer supported.

## Declaration

```objectivec
- (void) addRecipientsWithEmailAddresses:(NSArray<NSString *> *) emailAddresses;
```

## Parameters

- `emailAddresses`: An array with one or more [NSString](../../foundation/nsstring.md) objects, each containing an email address.

<a id="Discussion"></a>

## Discussion

If you do not add at least once recipient, the recipients field is selected when the view controller is presented so that the player can type a list of recipients. Adding more players than defined by the [maxNumberOfRecipients](maxnumberofrecipients%28%29.md) property causes an exception to be thrown.

## See Also

### Adding Recipients

- [addRecipientPlayers:](addrecipientplayers%28__%29.md): Deprecated. Adds recipients based on their Game Center player identifiers.
- [addRecipientsWithPlayerIDs:](addrecipients%28withplayerids_%29.md): Deprecated. Adds recipients based on their Game Center player identifiers.
