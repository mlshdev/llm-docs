> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/errorcode/acquiredresourcerelinquished](https://developer.apple.com/documentation/secureelementcredential/credentialsession/errorcode/acquiredresourcerelinquished)

# CredentialSession.ErrorCode.acquiredResourceRelinquished

**Framework:** SecureElementCredential  
**Kind:** Case  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The system relinquished an underlying shared resource, preventing the operation from completing.

## Declaration

```swift
case acquiredResourceRelinquished
```

<a id="discussion"></a>

## Discussion

When the system throws this error, it also reverts the session state to [CredentialSession.State.management](../state-swift.enum/management.md).

You can attempt your operation again after receiving this error.

## See Also

### Temporary error codes

- [CredentialSession.ErrorCode.resourceUnavailable](resourceunavailable.md): The requested resource is unavailable.
