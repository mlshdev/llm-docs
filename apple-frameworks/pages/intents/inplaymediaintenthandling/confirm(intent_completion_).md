> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/inplaymediaintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Confirms the details of the media playback request.

## Declaration

```swift
optional func confirm(intent: INPlayMediaIntent, completion: @escaping @Sendable (INPlayMediaIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INPlayMediaIntent) async -> INPlayMediaIntentResponse
```

## Parameters

- `intent`: The [INPlayMediaIntent](../inplaymediaintent.md) object that contains details about the user’s request.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **`response`**: The [INPlayMediaIntentResponse](../inplaymediaintentresponse.md) object that contains the response code which determines whether your app can play back the media content. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to determine whether your app can play the requested media. If it can, respond with the [INPlayMediaIntentResponseCode.ready](../inplaymediaintentresponsecode/ready.md) response code. Include the [nowPlayingInfo](../inplaymediaintentresponse/nowplayinginfo.md) dictionary in the response, so the system can display information such as title, artist, and artwork, about the media.

When your Intents app extension doesn’t provide this method, the system assumes your app can play the media.

If your app can’t play the media, respond with the appropriate failure code.

# confirmPlayMedia:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

Confirms the details of the media playback request.

## Declaration

```objectivec
- (void) confirmPlayMedia:(INPlayMediaIntent *) intent completion:(void (^)(INPlayMediaIntentResponse *response)) completion;
```

## Parameters

- `intent`: The [INPlayMediaIntent](../inplaymediaintent.md) object that contains details about the user’s request.
- `completion`: The handler block to execute with your response. You must execute this handler while implementing this method. This handler has no return value and takes the following parameter:

  - **`response`**: The [INPlayMediaIntentResponse](../inplaymediaintentresponse.md) object that contains the response code which determines whether your app can play back the media content. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to determine whether your app can play the requested media. If it can, respond with the [INPlayMediaIntentResponseCodeReady](../inplaymediaintentresponsecode/ready.md) response code. Include the [nowPlayingInfo](../inplaymediaintentresponse/nowplayinginfo.md) dictionary in the response, so the system can display information such as title, artist, and artwork, about the media.

When your Intents app extension doesn’t provide this method, the system assumes your app can play the media.

If your app can’t play the media, respond with the appropriate failure code.
