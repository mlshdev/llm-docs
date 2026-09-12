> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatch/voicechat(withname:)](https://developer.apple.com/documentation/gamekit/gkmatch/voicechat(withname:))

# voiceChat(withName:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 18.0) · iPadOS 4.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Joins the local player to a voice channel.

> No longer supported

## Declaration

```swift
func voiceChat(withName name: String) -> GKVoiceChat?
```

## Parameters

- `name`: The name of the channel to join.

<a id="return-value"></a>

## Return Value

A voice chat object for the channel, or `nil` if an error occurs or parental controls restrict the player from joining a voice chat.

<a id="Discussion"></a>

## Discussion

This method adds the local player to the named voice chat channel and creates it if necessary. GameKit connects players who join a channel with the same name. A match can have multiple channels and a player can join multiple channels.

When the local player disconnects from a match, all voice channels associated with the match stop working. Therefore, before you disconnect a player, you need to stop the associated voice channels and set the voice chat objects to `nil`.

# voiceChatWithName: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 18.0) · iPadOS 4.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Joins the local player to a voice channel.

> No longer supported

## Declaration

```objectivec
- (GKVoiceChat *) voiceChatWithName:(NSString *) name;
```

## Parameters

- `name`: The name of the channel to join.

<a id="return-value"></a>

## Return Value

A voice chat object for the channel, or `nil` if an error occurs or parental controls restrict the player from joining a voice chat.

<a id="Discussion"></a>

## Discussion

This method adds the local player to the named voice chat channel and creates it if necessary. GameKit connects players who join a channel with the same name. A match can have multiple channels and a player can join multiple channels.

When the local player disconnects from a match, all voice channels associated with the match stop working. Therefore, before you disconnect a player, you need to stop the associated voice channels and set the voice chat objects to `nil`.
