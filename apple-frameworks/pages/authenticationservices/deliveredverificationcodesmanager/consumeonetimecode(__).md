> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/deliveredverificationcodesmanager/consumeonetimecode(_:)](https://developer.apple.com/documentation/authenticationservices/deliveredverificationcodesmanager/consumeonetimecode(_:))

# consumeOneTimeCode(\_:)

**Framework:** AuthenticationServices  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Mark a one-time code as “consumed” by the current process.

## Declaration

```swift
@MainActor func consumeOneTimeCode(_ oneTimeCode: ASVerificationCode) async throws
```

## Parameters

- `oneTimeCode`: The code to mark as consumed.

<a id="discussion"></a>

## Discussion

A code should only be marked as consumed if it was submitted to a service for the purposes of authentication.

Consuming a code will mark a code’s containing message as read in the Messages and Mail apps. Depending on the user’s preference, this may also delete the code’s containing message.

> **Throws**

> `DeliveredVerificationCodesManager.VerificationError` if the system failed to accept the update.

> **Note**

> Only consume codes that you submit to a service. You should make a best effort to ensure it is accepted before calling this.
