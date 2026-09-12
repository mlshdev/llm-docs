> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatservice/client](https://developer.apple.com/documentation/gamekit/gkvoicechatservice/client)

# client (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

An object that the voice chat service uses to communicate with remote participants.

> No longer supported.

## Declaration

```swift
unowned(unsafe) var client: (any GKVoiceChatClient)! { get set }
```

<a id="Discussion"></a>

## Discussion

The client’s chief responsibility is to provide a network connection that the voice chat service can use to connect to another participant.

# client (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

An object that the voice chat service uses to communicate with remote participants.

> No longer supported.

## Declaration

```objectivec
@property (assign) id<GKVoiceChatClient> client;
```

<a id="Discussion"></a>

## Discussion

The client’s chief responsibility is to provide a network connection that the voice chat service can use to connect to another participant.
