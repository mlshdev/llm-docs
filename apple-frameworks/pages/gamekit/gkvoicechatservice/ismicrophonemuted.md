> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatservice/ismicrophonemuted](https://developer.apple.com/documentation/gamekit/gkvoicechatservice/ismicrophonemuted)

# isMicrophoneMuted (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

A Boolean value that determines whether the user’s microphone is muted.

> Use SharePlay instead

## Declaration

```swift
var isMicrophoneMuted: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the user’s microphone is turned off; [false](https://developer.apple.com/documentation/swift/false) if the user’s speech is being transmitted to remote participants. The default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Adjusting Audio Properties

- [remoteParticipantVolume](remoteparticipantvolume.md): Deprecated. A float that scales the volume of all remote participants.

# microphoneMuted (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

A Boolean value that determines whether the user’s microphone is muted.

> Use SharePlay instead

## Declaration

```objectivec
@property (nonatomic, getter=isMicrophoneMuted) BOOL microphoneMuted;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the user’s microphone is turned off; [false](https://developer.apple.com/documentation/swift/false) if the user’s speech is being transmitted to remote participants. The default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Adjusting Audio Properties

- [remoteParticipantVolume](remoteparticipantvolume.md): Deprecated. A float that scales the volume of all remote participants.
