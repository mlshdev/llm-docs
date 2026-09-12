> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkjapanindividualnumbercardmetadata/init(provisioningcredentialidentifier:sharinginstanceidentifier:cardconfigurationidentifier:preview:)](https://developer.apple.com/documentation/passkit/pkjapanindividualnumbercardmetadata/init(provisioningcredentialidentifier:sharinginstanceidentifier:cardconfigurationidentifier:preview:))

# init(provisioningCredentialIdentifier:sharingInstanceIdentifier:cardConfigurationIdentifier:preview:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

Initializes the user instance for provisioning.

## Declaration

```swift
init(provisioningCredentialIdentifier credentialIdentifier: String, sharingInstanceIdentifier: String, cardConfigurationIdentifier: String, preview: PKAddPassMetadataPreview)
```

## Parameters

- `credentialIdentifier`: An identifier for the user instance to provision.
- `sharingInstanceIdentifier`: A short-lived token to prevent replayability.
- `preview`: An object that contains information representing the provisioned pass in UI.

## See Also

### Initializing the digital card metadata

- [init(provisioningCredentialIdentifier:sharingInstanceIdentifier:cardTemplateIdentifier:preview:)](init%28provisioningcredentialidentifier_sharinginstanceidentifier_cardtemplateidentifier_preview_%29.md): Creates the product instance to provision.

# initWithProvisioningCredentialIdentifier:sharingInstanceIdentifier:cardConfigurationIdentifier:preview: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

Initializes the user instance for provisioning.

## Declaration

```objectivec
- (instancetype) initWithProvisioningCredentialIdentifier:(NSString *) credentialIdentifier sharingInstanceIdentifier:(NSString *) sharingInstanceIdentifier cardConfigurationIdentifier:(NSString *) cardConfigurationIdentifier preview:(PKAddPassMetadataPreview *) preview;
```

## Parameters

- `credentialIdentifier`: An identifier for the user instance to provision.
- `sharingInstanceIdentifier`: A short-lived token to prevent replayability.
- `preview`: An object that contains information representing the provisioned pass in UI.

## See Also

### Initializing the digital card metadata

- [initWithProvisioningCredentialIdentifier:sharingInstanceIdentifier:cardTemplateIdentifier:preview:](init%28provisioningcredentialidentifier_sharinginstanceidentifier_cardtemplateidentifier_preview_%29.md): Creates the product instance to provision.
