> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/dispositionnotification/init(disposition:disposedmessageid:)

# init(disposition:disposedMessageID:)

**Framework:** TelephonyMessagingKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+

Creates a disposition notification content instance with the given disposition and a message identifier.

## Declaration

```swift
init(disposition: RCSMessage.Disposition, disposedMessageID: RCSMessageID)
```

## Parameters

- `disposition`: The disposition of a message.
- `disposedMessageID`: The message identifier of the message.
