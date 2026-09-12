> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddidentitydocumentconfiguration/metadata](https://developer.apple.com/documentation/passkit/pkaddidentitydocumentconfiguration/metadata)

# metadata (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

A set of configurable metadata that defines the required information to add the corresponding pass to Wallet.

## Declaration

```swift
var metadata: PKIdentityDocumentMetadata { get }
```

## See Also

### Setting the metadata

- [forMetadata(\_:completion:)](formetadata%28__completion_%29.md): Returns the identity document configuration.

# metadata (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

A set of configurable metadata that defines the required information to add the corresponding pass to Wallet.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nonnull) PKIdentityDocumentMetadata * metadata;
```

## See Also

### Setting the metadata

- [configurationForMetadata:completion:](formetadata%28__completion_%29.md): Returns the identity document configuration.
