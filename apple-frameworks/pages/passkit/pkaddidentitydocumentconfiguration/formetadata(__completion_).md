> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkaddidentitydocumentconfiguration/formetadata(_:completion:)

# forMetadata(\_:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

Returns the identity document configuration.

## Declaration

```swift
class func forMetadata(_ metadata: PKIdentityDocumentMetadata, completion: @escaping @Sendable (PKAddIdentityDocumentConfiguration?, (any Error)?) -> Void)
```

```swift
class func forMetadata(_ metadata: PKIdentityDocumentMetadata) async throws -> PKAddIdentityDocumentConfiguration
```

## Parameters

- `metadata`: The configurable metadata that defines the required information to add the corresponding pass to Wallet.
- `completion`: Returns the identity document configration.

## See Also

### Setting the metadata

- [metadata](metadata.md): A set of configurable metadata that defines the required information to add the corresponding pass to Wallet.

# configurationForMetadata:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

Returns the identity document configuration.

## Declaration

```objectivec
+ (void) configurationForMetadata:(PKIdentityDocumentMetadata *) metadata completion:(void (^)(PKAddIdentityDocumentConfiguration *credentialConfiguration, NSError *error)) completion;
```

## Parameters

- `metadata`: The configurable metadata that defines the required information to add the corresponding pass to Wallet.
- `completion`: Returns the identity document configration.

## See Also

### Setting the metadata

- [metadata](metadata.md): A set of configurable metadata that defines the required information to add the corresponding pass to Wallet.
