> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginmanager/attestpendingkey(oftype:clientdatahash:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginmanager/attestpendingkey(oftype:clientdatahash:))

# attestPendingKey(ofType:clientDataHash:)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

## Declaration

```swift
func attestPendingKey(ofType pendingKeyType: ASAuthorizationProviderExtensionKeyType, clientDataHash: Data) async throws -> [SecCertificate]
```
