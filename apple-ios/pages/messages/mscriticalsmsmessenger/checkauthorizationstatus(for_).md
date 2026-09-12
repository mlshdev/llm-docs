> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/mscriticalsmsmessenger/checkauthorizationstatus(for:)](https://developer.apple.com/documentation/messages/mscriticalsmsmessenger/checkauthorizationstatus(for:))

# checkAuthorizationStatus(for:)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+

Confirms the current authorization status for sending critical messages from this app.

## Declaration

```swift
func checkAuthorizationStatus(for recipients: [MSRecipient]) async throws -> [MSRecipient : MSCriticalMessagingAuthorizationStatus]
```

## Parameters

- `recipients`: An array of recipients to check the authorization status for.

<a id="return-value"></a>

## Return Value

A dictionary that maps recipients to their corresponding authorization status.

## Mentioned In

- [Sending SMS messages from an app](../critical-messaging-api.md)

<a id="Discussion"></a>

## Discussion

You can call this method multiple times to check the authorization status for multiple recipients. Upon an error, the method throws an error of \`MSCriticalMessagingErrorDomain\`\`.
