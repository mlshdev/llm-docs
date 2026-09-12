> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pushkit/pkpushcredentials/token](https://developer.apple.com/documentation/pushkit/pkpushcredentials/token)

# token (Swift)

**Framework:** PushKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

A unique device token to use when sending push notifications to the current device.

## Declaration

```swift
var token: Data { get }
```

<a id="Discussion"></a>

## Discussion

Forward this token to the server you use to generate push notifications. When preparing to deliver a push notification to the current device, include the token in the HTTP request you send to Apple Push Notification service (APNs).

## See Also

### Getting the Token

- [type](type.md): The push type constant associated with the token.

# token (Objective-C)

**Framework:** PushKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

A unique device token to use when sending push notifications to the current device.

## Declaration

```objectivec
@property (copy, readonly) NSData * token;
```

<a id="Discussion"></a>

## Discussion

Forward this token to the server you use to generate push notifications. When preparing to deliver a push notification to the current device, include the token in the HTTP request you send to Apple Push Notification service (APNs).

## See Also

### Getting the Token

- [type](type.md): The push type constant associated with the token.
