> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationproviderextensionloginmanager/attestkey(oftype:clientdatahash:)](https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginmanager/attestkey(oftype:clientdatahash:))

# attestKey(ofType:clientDataHash:)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

## Declaration

```swift
func attestKey(ofType keyType: ASAuthorizationProviderExtensionKeyType, clientDataHash: Data) async throws -> [SecCertificate]
```
