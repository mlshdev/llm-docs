> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/secureelementcredential/credentialsession/errorcode/network

# CredentialSession.ErrorCode.network

**Framework:** SecureElementCredential  
**Kind:** Case  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The device’s internet connection is offline.

## Declaration

```swift
case network
```

<a id="discussion"></a>

## Discussion

Your app can try again after receiving this error, to see if network communication is restored.
