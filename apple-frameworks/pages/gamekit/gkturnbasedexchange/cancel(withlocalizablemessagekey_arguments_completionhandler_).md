> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedexchange/cancel(withlocalizablemessagekey:arguments:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkturnbasedexchange/cancel(withlocalizablemessagekey:arguments:completionhandler:))

# cancel(withLocalizableMessageKey:arguments:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Cancels an exchange request.

## Declaration

```swift
func cancel(withLocalizableMessageKey key: String, arguments: [String], completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func cancel(withLocalizableMessageKey key: String, arguments: [String]) async throws
```

## Parameters

- `key`: The identifier for looking up the translated cancel message in the default `Localized.strings` file. If you use a formatted string with specifiers, provide the arguments.
- `arguments`: A list of arguments to substitute into the localized string if it’s formatted and contains specifiers.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameter:

  - ***error***: Describes an error if it occurs, or `nil` if the operation completes. An error occurs if you previously cancel this exchange request.

## Mentioned In

- [Exchanging data between players in turn-based games](../exchanging-data-between-players-in-turn-based-games.md)

<a id="Discussion"></a>

## Discussion

You can cancel both an active and completed exchange request.

If your game isn’t running or is in the background on recipient devices, a notification containing the localized message you provide appears. When the participant taps or clicks the notification, GameKit launches or brings the game to the foreground and then invokes the [player(\_:receivedExchangeCancellation:for:)](../gkturnbasedeventlistener/player%28__receivedexchangecancellation_for_%29.md) protocol method.

# cancelWithLocalizableMessageKey:arguments:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Cancels an exchange request.

## Declaration

```objectivec
- (void) cancelWithLocalizableMessageKey:(NSString *) key arguments:(NSArray<NSString *> *) arguments completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `key`: The identifier for looking up the translated cancel message in the default `Localized.strings` file. If you use a formatted string with specifiers, provide the arguments.
- `arguments`: A list of arguments to substitute into the localized string if it’s formatted and contains specifiers.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameter:

  - ***error***: Describes an error if it occurs, or `nil` if the operation completes. An error occurs if you previously cancel this exchange request.

## Mentioned In

- [Exchanging data between players in turn-based games](../exchanging-data-between-players-in-turn-based-games.md)

<a id="Discussion"></a>

## Discussion

You can cancel both an active and completed exchange request.

If your game isn’t running or is in the background on recipient devices, a notification containing the localized message you provide appears. When the participant taps or clicks the notification, GameKit launches or brings the game to the foreground and then invokes the [player:receivedExchangeCancellation:forMatch:](../gkturnbasedeventlistener/player%28__receivedexchangecancellation_for_%29.md) protocol method.
