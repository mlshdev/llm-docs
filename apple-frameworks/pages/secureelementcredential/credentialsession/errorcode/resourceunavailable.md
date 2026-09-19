> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/secureelementcredential/credentialsession/errorcode/resourceunavailable

# CredentialSession.ErrorCode.resourceUnavailable

**Framework:** SecureElementCredential  
**Kind:** Case  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The requested resource is unavailable.

## Declaration

```swift
case resourceUnavailable
```

<a id="discussion"></a>

## Discussion

You can try again after receiving this error.

## See Also

### Temporary error codes

- [CredentialSession.ErrorCode.acquiredResourceRelinquished](acquiredresourcerelinquished.md): The system relinquished an underlying shared resource, preventing the operation from completing.
