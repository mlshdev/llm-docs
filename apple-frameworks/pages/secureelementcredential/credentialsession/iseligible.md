> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/iseligible](https://developer.apple.com/documentation/secureelementcredential/credentialsession/iseligible)

# isEligible

**Framework:** SecureElementCredential  
**Kind:** Type Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+

A Boolean value that indicates whether the app or app extension is eligible to start a credential session.

## Declaration

```swift
static var isEligible: Bool { get async throws }
```

## Mentioned In

- [Accessing and using secure element credentials](../accessing-and-using-secure-element-credentials.md)

<a id="discussion"></a>

## Discussion

Always check the value of this property before calling [startSession()](startsession%28%29.md) to dynamically determine if the current device and user configuration can use the Secure Element credential service.

- The most common errors are:

  - [CredentialSession.ErrorCode.resourceUnavailable](errorcode/resourceunavailable.md): The system service is temporarily unavailable.
