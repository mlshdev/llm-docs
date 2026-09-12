> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/sendreminder(to:localizablemessagekey:arguments:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/sendreminder(to:localizablemessagekey:arguments:completionhandler:))

# sendReminder(to:localizableMessageKey:arguments:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Sends a reminder from one participant to a specific set of other participants.

## Declaration

```swift
func sendReminder(to participants: [GKTurnBasedParticipant], localizableMessageKey key: String, arguments: [String], completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func sendReminder(to participants: [GKTurnBasedParticipant], localizableMessageKey key: String, arguments: [String]) async throws
```

## Parameters

- `participants`: The participants who Game Center sends the reminder to.
- `key`: The identifier for looking up the translated string in the default `Localized.strings` file. If you use a formatted string with specifiers, provide the arguments.
- `arguments`: A list of arguments to substitute into the localized string if it’s formatted and contains specifiers.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameter:

  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Sending messages to players in turn-based games](../sending-messages-to-players-in-turn-based-games.md)

<a id="Discussion"></a>

## Discussion

Use this method to send a localized message to participants of a turn-based event or exchange request that needs their attention.

If your game isn’t running on recipient devices, the notification containing the localized message appears immediately at the top of the screen. When the participant taps or clicks the notification, GameKit launches your game and invokes the `GKTurnBasedEventListener` [player(\_:receivedTurnEventFor:didBecomeActive:)](../gkturnbasedeventlistener/player%28__receivedturneventfor_didbecomeactive_%29.md) protocol method.

GameKit uses the recipient’s language and region to localize the message. If the recipient doesn’t have the game installed on their device, GameKit uses the sender’s localization settings instead. See [Sending messages to players in turn-based games](../sending-messages-to-players-in-turn-based-games.md).

## See Also

### Sending Messages Between Participants

- [message](message.md): A message from the current participant to all other participants when you end a turn, forfeit a match, or end a match.
- [setLocalizableMessageWithKey(\_:arguments:)](setlocalizablemessagewithkey%28__arguments_%29.md): Sends a localized message from the current participant to all other participants when you end a turn, forfeit a match, or end a match.

# sendReminderToParticipants:localizableMessageKey:arguments:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Sends a reminder from one participant to a specific set of other participants.

## Declaration

```objectivec
- (void) sendReminderToParticipants:(NSArray<GKTurnBasedParticipant *> *) participants localizableMessageKey:(NSString *) key arguments:(NSArray<NSString *> *) arguments completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `participants`: The participants who Game Center sends the reminder to.
- `key`: The identifier for looking up the translated string in the default `Localized.strings` file. If you use a formatted string with specifiers, provide the arguments.
- `arguments`: A list of arguments to substitute into the localized string if it’s formatted and contains specifiers.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameter:

  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Sending messages to players in turn-based games](../sending-messages-to-players-in-turn-based-games.md)

<a id="Discussion"></a>

## Discussion

Use this method to send a localized message to participants of a turn-based event or exchange request that needs their attention.

If your game isn’t running on recipient devices, the notification containing the localized message appears immediately at the top of the screen. When the participant taps or clicks the notification, GameKit launches your game and invokes the `GKTurnBasedEventListener` [player:receivedTurnEventForMatch:didBecomeActive:](../gkturnbasedeventlistener/player%28__receivedturneventfor_didbecomeactive_%29.md) protocol method.

GameKit uses the recipient’s language and region to localize the message. If the recipient doesn’t have the game installed on their device, GameKit uses the sender’s localization settings instead. See [Sending messages to players in turn-based games](../sending-messages-to-players-in-turn-based-games.md).

## See Also

### Sending Messages Between Participants

- [message](message.md): A message from the current participant to all other participants when you end a turn, forfeit a match, or end a match.
- [setLocalizableMessageWithKey:arguments:](setlocalizablemessagewithkey%28__arguments_%29.md): Sends a localized message from the current participant to all other participants when you end a turn, forfeit a match, or end a match.
