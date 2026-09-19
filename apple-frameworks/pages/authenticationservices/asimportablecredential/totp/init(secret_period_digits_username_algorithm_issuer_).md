> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asimportablecredential/totp/init(secret:period:digits:username:algorithm:issuer:)

# init(secret:period:digits:userName:algorithm:issuer:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

## Declaration

```swift
init(secret: Data, period: UInt16, digits: UInt16, userName: String?, algorithm: ASImportableCredential.TOTP.Algorithm, issuer: String? = nil)
```
