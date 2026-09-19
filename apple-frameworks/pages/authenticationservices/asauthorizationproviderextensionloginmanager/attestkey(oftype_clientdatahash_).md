> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationproviderextensionloginmanager/attestkey(oftype:clientdatahash:)

# attestKey(ofType:clientDataHash:)

**Framework:** Authentication Services  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

## Declaration

```swift
func attestKey(ofType keyType: ASAuthorizationProviderExtensionKeyType, clientDataHash: Data) async throws -> [SecCertificate]
```
