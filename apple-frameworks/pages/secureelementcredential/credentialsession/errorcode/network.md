> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/errorcode/network](https://developer.apple.com/documentation/secureelementcredential/credentialsession/errorcode/network)

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
