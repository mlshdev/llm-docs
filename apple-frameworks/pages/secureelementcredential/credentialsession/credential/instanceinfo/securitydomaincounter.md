> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/credential/instanceinfo/securitydomaincounter](https://developer.apple.com/documentation/secureelementcredential/credentialsession/credential/instanceinfo/securitydomaincounter)

# securityDomainCounter

**Framework:** SecureElementCredential  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The authentication counter of the security domain.

## Declaration

```swift
var securityDomainCounter: Int { get async throws }
```

<a id="discussion"></a>

## Discussion

Accessing this property fetches the latest counter from the remote hardware.

- The most common errors are:

  - [CredentialSession.ErrorCode.resourceUnavailable](../../errorcode/resourceunavailable.md): The system service is temporarily unavailable.
