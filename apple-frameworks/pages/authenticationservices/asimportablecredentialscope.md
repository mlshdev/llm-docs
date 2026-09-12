> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablecredentialscope](https://developer.apple.com/documentation/authenticationservices/asimportablecredentialscope)

# ASImportableCredentialScope

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The scope for where a credential should be usable.

## Declaration

```swift
struct ASImportableCredentialScope
```

## Topics

### Structures

- [ASImportableCredentialScope.AndroidAppCertificationFingerprint](asimportablecredentialscope/androidappcertificationfingerprint.md)
- [ASImportableCredentialScope.AndroidAppID](asimportablecredentialscope/androidappid.md): An identifier for an Android app.

### Initializers

- [init(urls:androidApps:)](asimportablecredentialscope/init%28urls_androidapps_%29.md)

### Instance Properties

- [androidApps](asimportablecredentialscope/androidapps.md): Android apps that are associated with this credential.
- [urls](asimportablecredentialscope/urls.md): URLs where that are associated with this credential.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
