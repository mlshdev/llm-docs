> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/mscriticalsmsmessenger/send(_:to:)](https://developer.apple.com/documentation/messages/mscriticalsmsmessenger/send(_:to:))

# send(\_:to:)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+

Sends a critical message to the specified recipient.

## Declaration

```swift
func send(_ message: MSCriticalMessage, to recipient: MSRecipient) async throws -> Bool
```

## Parameters

- `message`: The message to send.
- `recipient`: The recipient to send the message to.

<a id="return-value"></a>

## Return Value

`true` if the message successfully sends.

## Mentioned In

- [Sending SMS messages from an app](../critical-messaging-api.md)

<a id="Discussion"></a>

## Discussion

There’s no user interaction necessary for the framework to send this message. If the message sends successfully, the framework displays a notification indicating sending the message was successful. Upon error, this method throws a `MSCriticalMessagingError/errorDomain` error.

> **Note**

> The system may impose a rate limit on frequency of messages sent, if usage exceeds this limit the framework  returns a  [MSCriticalMessagingError.sendFailed](../mscriticalmessagingerror/sendfailed.md) error.
