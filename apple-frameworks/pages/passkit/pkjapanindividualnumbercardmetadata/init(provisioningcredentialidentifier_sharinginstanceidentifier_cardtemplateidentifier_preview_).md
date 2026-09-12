> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkjapanindividualnumbercardmetadata/init(provisioningcredentialidentifier:sharinginstanceidentifier:cardtemplateidentifier:preview:)](https://developer.apple.com/documentation/passkit/pkjapanindividualnumbercardmetadata/init(provisioningcredentialidentifier:sharinginstanceidentifier:cardtemplateidentifier:preview:))

# init(provisioningCredentialIdentifier:sharingInstanceIdentifier:cardTemplateIdentifier:preview:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

Creates the product instance to provision.

## Declaration

```swift
init(provisioningCredentialIdentifier credentialIdentifier: String, sharingInstanceIdentifier: String, cardTemplateIdentifier templateIdentifier: String, preview: PKAddPassMetadataPreview)
```

## See Also

### Initializing the digital card metadata

- [init(provisioningCredentialIdentifier:sharingInstanceIdentifier:cardConfigurationIdentifier:preview:)](init%28provisioningcredentialidentifier_sharinginstanceidentifier_cardconfigurationidentifier_preview_%29.md): Initializes the user instance for provisioning.

# initWithProvisioningCredentialIdentifier:sharingInstanceIdentifier:cardTemplateIdentifier:preview: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

Creates the product instance to provision.

## Declaration

```objectivec
- (instancetype) initWithProvisioningCredentialIdentifier:(NSString *) credentialIdentifier sharingInstanceIdentifier:(NSString *) sharingInstanceIdentifier cardTemplateIdentifier:(NSString *) templateIdentifier preview:(PKAddPassMetadataPreview *) preview;
```

## See Also

### Initializing the digital card metadata

- [initWithProvisioningCredentialIdentifier:sharingInstanceIdentifier:cardConfigurationIdentifier:preview:](init%28provisioningcredentialidentifier_sharinginstanceidentifier_cardconfigurationidentifier_preview_%29.md): Initializes the user instance for provisioning.
