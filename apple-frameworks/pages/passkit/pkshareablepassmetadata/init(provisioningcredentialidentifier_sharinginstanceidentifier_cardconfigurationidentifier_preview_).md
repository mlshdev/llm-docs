> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkshareablepassmetadata/init(provisioningcredentialidentifier:sharinginstanceidentifier:cardconfigurationidentifier:preview:)

# init(provisioningCredentialIdentifier:sharingInstanceIdentifier:cardConfigurationIdentifier:preview:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

## Declaration

```swift
init(provisioningCredentialIdentifier credentialIdentifier: String, sharingInstanceIdentifier: String, cardConfigurationIdentifier templateIdentifier: String, preview: PKShareablePassMetadata.Preview)
```

# initWithProvisioningCredentialIdentifier:sharingInstanceIdentifier:cardConfigurationIdentifier:preview: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithProvisioningCredentialIdentifier:(NSString *) credentialIdentifier sharingInstanceIdentifier:(NSString *) sharingInstanceIdentifier cardConfigurationIdentifier:(NSString *) templateIdentifier preview:(PKShareablePassMetadataPreview *) preview;
```
