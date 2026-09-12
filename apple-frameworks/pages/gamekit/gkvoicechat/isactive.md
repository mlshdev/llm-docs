> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechat/isactive](https://developer.apple.com/documentation/gamekit/gkvoicechat/isactive)

# isActive (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 18.0) · iPadOS 4.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A Boolean value that indicates whether the channel is sampling the microphone.

> No longer supported

## Declaration

```swift
var isActive: Bool { get set }
```

## Mentioned In

- [Adding voice chat to multiplayer games](../adding-voice-chat-to-multiplayer-games.md)

<a id="Discussion"></a>

## Discussion

If you set this property to [true](https://developer.apple.com/documentation/swift/true), the voice chat object transmits the voice data from the microphone to other players in the channel. If another voice chat object is using the microphone, GameKit switches the microphone to this channel and sets that voice chat object’s [isActive](isactive.md) property to [false](https://developer.apple.com/documentation/swift/false).

The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Starting and Stopping Voice Chat

- [start()](start%28%29.md): Deprecated. Starts communication with other players in a channel.
- [stop()](stop%28%29.md): Deprecated. Ends communication with other players in a channel.

# active (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ (deprecated in 18.0) · iPadOS 4.1+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

A Boolean value that indicates whether the channel is sampling the microphone.

> No longer supported

## Declaration

```objectivec
@property (nonatomic, assign, getter=isActive) BOOL active;
```

```objectivec
@property (atomic, assign, getter=isActive) BOOL active;
```

## Mentioned In

- [Adding voice chat to multiplayer games](../adding-voice-chat-to-multiplayer-games.md)

<a id="Discussion"></a>

## Discussion

If you set this property to [true](https://developer.apple.com/documentation/swift/true), the voice chat object transmits the voice data from the microphone to other players in the channel. If another voice chat object is using the microphone, GameKit switches the microphone to this channel and sets that voice chat object’s [active](isactive.md) property to [false](https://developer.apple.com/documentation/swift/false).

The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Starting and Stopping Voice Chat

- [start](start%28%29.md): Deprecated. Starts communication with other players in a channel.
- [stop](stop%28%29.md): Deprecated. Ends communication with other players in a channel.
