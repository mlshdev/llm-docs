> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/mscriticalsmsmessenger/requestauthorization(for:)](https://developer.apple.com/documentation/messages/mscriticalsmsmessenger/requestauthorization(for:))

# requestAuthorization(for:)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+

Requests a person’s authorization to send messages to the provided recipients.

## Declaration

```swift
func requestAuthorization(for recipients: [MSRecipient]) async throws -> [MSRecipient : MSCriticalMessagingAuthorizationStatus]
```

## Parameters

- `recipients`: The full set of [MSRecipient](../msrecipient.md) structures the app requests access for. A non-conforming array throws an [MSCriticalMessagingError.invalidAuthenticationRequest](../mscriticalmessagingerror/invalidauthenticationrequest.md) error.

## Mentioned In

- [Sending SMS messages from an app](../critical-messaging-api.md)

<a id="Discussion"></a>

## Discussion

Request someone’s authorization to be able to send critical messages from this app. The framework shows an authorization alert for each recipient, one at a time, up to the maximum of recipients the framework allows, which you can determine by examining the constant [maximumCriticalMessagingRecipients](maximumcriticalmessagingrecipients.md).

You can call this method multiple times with the same or different recipients, the framework displays the permission alert with the latest block of recipients. When you call this method subsequent times, all previous recipients move automatically to [MSCriticalMessagingError.notAuthorized](../mscriticalmessagingerror/notauthorized.md) status.

Upon success, the method returns a dictionary that maps recipients to their corresponding authorization status.
