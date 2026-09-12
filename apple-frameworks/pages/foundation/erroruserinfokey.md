> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/erroruserinfokey](https://developer.apple.com/documentation/foundation/erroruserinfokey)

# ErrorUserInfoKey

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

These keys may exist in the user info dictionary.

## Declaration

```swift
struct ErrorUserInfoKey
```

## Topics

### Type Properties

- [NSURLErrorKey](erroruserinfokey/nsurlerrorkey.md): Deprecated.
- [filePathErrorKey](erroruserinfokey/filepatherrorkey.md): Deprecated.
- [helpAnchorErrorKey](erroruserinfokey/helpanchorerrorkey.md): Deprecated.
- [localizedDescriptionKey](erroruserinfokey/localizeddescriptionkey.md): Deprecated.
- [localizedFailureReasonErrorKey](erroruserinfokey/localizedfailurereasonerrorkey.md): Deprecated.
- [localizedRecoveryOptionsErrorKey](erroruserinfokey/localizedrecoveryoptionserrorkey.md): Deprecated.
- [localizedRecoverySuggestionErrorKey](erroruserinfokey/localizedrecoverysuggestionerrorkey.md): Deprecated.
- [recoveryAttempterErrorKey](erroruserinfokey/recoveryattemptererrorkey.md): Deprecated.
- [stringEncodingErrorKey](erroruserinfokey/stringencodingerrorkey.md): Deprecated.
- [underlyingErrorKey](erroruserinfokey/underlyingerrorkey.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Providing Error User Info

- [setUserInfoValueProvider(forDomain:provider:)](nserror/setuserinfovalueprovider%28fordomain_provider_%29.md): Specifies a block to call when the corresponding property is not present in the user info dictionary.
- [userInfoValueProvider(forDomain:)](nserror/userinfovalueprovider%28fordomain_%29.md): Returns any user info provider specified for a given error domain.
- [NSError.UserInfoKey](nserror/userinfokey.md): These keys may exist in the user info dictionary.
