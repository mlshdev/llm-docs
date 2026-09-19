> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/secureelementcredential/credentialsession/secureelementinfo-swift.property

# secureElementInfo

**Framework:** SecureElementCredential  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+

A property that provides information about the Secure Element hardware.

## Declaration

```swift
var secureElementInfo: CredentialSession.SecureElementInfo { get async throws }
```

<a id="discussion"></a>

## Discussion

You can use the certificate in the [CredentialSession.SecureElementInfo](secureelementinfo-swift.struct.md) to authenticate against the Certification Authority of the Secure Element hardware.

- The most common errors are:

  - [CredentialSession.ErrorCode.featureUnavailable](errorcode/featureunavailable.md): The Secure Element credential feature isn’t available on this platform.
  - [CredentialSession.ErrorCode.sessionInvalidated](errorcode/sessioninvalidated.md): The credential session has been invalidated.

## See Also

### Accessing hardware information

- [CredentialSession.SecureElementInfo](secureelementinfo-swift.struct.md): A type that provides information about the Secure Element hardware.
