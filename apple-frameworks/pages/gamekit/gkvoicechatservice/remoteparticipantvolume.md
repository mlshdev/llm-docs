> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatservice/remoteparticipantvolume](https://developer.apple.com/documentation/gamekit/gkvoicechatservice/remoteparticipantvolume)

# remoteParticipantVolume (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

A float that scales the volume of all remote participants.

> Use SharePlay instead

## Declaration

```swift
var remoteParticipantVolume: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The value should be between `0.0` (muted) and `1.0` (full volume). The default is `1.0`.

## See Also

### Adjusting Audio Properties

- [isMicrophoneMuted](ismicrophonemuted.md): Deprecated. A Boolean value that determines whether the user’s microphone is muted.

# remoteParticipantVolume (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

A float that scales the volume of all remote participants.

> Use SharePlay instead

## Declaration

```objectivec
@property (nonatomic) float remoteParticipantVolume;
```

<a id="Discussion"></a>

## Discussion

The value should be between `0.0` (muted) and `1.0` (full volume). The default is `1.0`.

## See Also

### Adjusting Audio Properties

- [microphoneMuted](ismicrophonemuted.md): Deprecated. A Boolean value that determines whether the user’s microphone is muted.
