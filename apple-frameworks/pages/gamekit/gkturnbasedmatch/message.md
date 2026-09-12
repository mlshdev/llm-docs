> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/message](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/message)

# message (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A message from the current participant to all other participants when you end a turn, forfeit a match, or end a match.

## Declaration

```swift
var message: String? { get set }
```

## Mentioned In

- [Sending messages to players in turn-based games](../sending-messages-to-players-in-turn-based-games.md)

<a id="Discussion"></a>

## Discussion

Set this property only when the local player is the current participant and before you invoke a method that generates a turn-based event.

If your game instance isn’t running or is running in the background on other participant devices, a notification containing the message appears at the top of the screen. If the game is in the foreground, you can get the message from the match object when handling the turn-based event.

## See Also

### Sending Messages Between Participants

- [setLocalizableMessageWithKey(\_:arguments:)](setlocalizablemessagewithkey%28__arguments_%29.md): Sends a localized message from the current participant to all other participants when you end a turn, forfeit a match, or end a match.
- [sendReminder(to:localizableMessageKey:arguments:completionHandler:)](sendreminder%28to_localizablemessagekey_arguments_completionhandler_%29.md): Sends a reminder from one participant to a specific set of other participants.

# message (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A message from the current participant to all other participants when you end a turn, forfeit a match, or end a match.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * message;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSString * message;
```

## Mentioned In

- [Sending messages to players in turn-based games](../sending-messages-to-players-in-turn-based-games.md)

<a id="Discussion"></a>

## Discussion

Set this property only when the local player is the current participant and before you invoke a method that generates a turn-based event.

If your game instance isn’t running or is running in the background on other participant devices, a notification containing the message appears at the top of the screen. If the game is in the foreground, you can get the message from the match object when handling the turn-based event.

## See Also

### Sending Messages Between Participants

- [setLocalizableMessageWithKey:arguments:](setlocalizablemessagewithkey%28__arguments_%29.md): Sends a localized message from the current participant to all other participants when you end a turn, forfeit a match, or end a match.
- [sendReminderToParticipants:localizableMessageKey:arguments:completionHandler:](sendreminder%28to_localizablemessagekey_arguments_completionhandler_%29.md): Sends a reminder from one participant to a specific set of other participants.
