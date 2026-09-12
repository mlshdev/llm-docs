> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkshareablepassmetadata/init(provisioningcredentialidentifier:sharinginstanceidentifier:passthumbnailimage:ownerdisplayname:localizeddescription:accounthash:templateidentifier:relyingpartyidentifier:requiresunifiedaccesscapabledevice:)](https://developer.apple.com/documentation/passkit/pkshareablepassmetadata/init(provisioningcredentialidentifier:sharinginstanceidentifier:passthumbnailimage:ownerdisplayname:localizeddescription:accounthash:templateidentifier:relyingpartyidentifier:requiresunifiedaccesscapabledevice:))

# init(provisioningCredentialIdentifier:sharingInstanceIdentifier:passThumbnailImage:ownerDisplayName:localizedDescription:accountHash:templateIdentifier:relyingPartyIdentifier:requiresUnifiedAccessCapableDevice:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 15.0+ (deprecated in 16.0) · iPadOS 15.0+ (deprecated in 16.0) · Mac Catalyst 15.0+ (deprecated in 16.0) · macOS · visionOS 1.0+ (deprecated in 1.0)

> Use initWithProvisioningCredentialIdentifier:sharingInstanceIdentifier:cardTemplateIdentifier:passPreviewMetadata:

## Declaration

```swift
init(provisioningCredentialIdentifier credentialIdentifier: String, sharingInstanceIdentifier: String, passThumbnailImage: CGImage, ownerDisplayName: String, localizedDescription: String, accountHash: String, templateIdentifier: String, relyingPartyIdentifier: String, requiresUnifiedAccessCapableDevice: Bool)
```

## See Also

### Creating a shareable pass metadata object

- [init(provisioningCredentialIdentifier:cardConfigurationIdentifier:sharingInstanceIdentifier:passThumbnailImage:ownerDisplayName:localizedDescription:)](init%28provisioningcredentialidentifier_cardconfigurationidentifier_sharinginstanceidentifier_passthumbnailimage_ownerdisplayname_localizeddescription_%29.md): Deprecated. Creates a shareable pass metadata object.

# initWithProvisioningCredentialIdentifier:sharingInstanceIdentifier:passThumbnailImage:ownerDisplayName:localizedDescription:accountHash:templateIdentifier:relyingPartyIdentifier:requiresUnifiedAccessCapableDevice: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 16.0) · iPadOS 15.0+ (deprecated in 16.0) · Mac Catalyst 15.0+ (deprecated in 16.0) · macOS · visionOS 1.0+ (deprecated in 1.0)

> Use initWithProvisioningCredentialIdentifier:sharingInstanceIdentifier:cardTemplateIdentifier:passPreviewMetadata:

## Declaration

```objectivec
- (instancetype) initWithProvisioningCredentialIdentifier:(NSString *) credentialIdentifier sharingInstanceIdentifier:(NSString *) sharingInstanceIdentifier passThumbnailImage:(CGImageRef) passThumbnailImage ownerDisplayName:(NSString *) ownerDisplayName localizedDescription:(NSString *) localizedDescription accountHash:(NSString *) accountHash templateIdentifier:(NSString *) templateIdentifier relyingPartyIdentifier:(NSString *) relyingPartyIdentifier requiresUnifiedAccessCapableDevice:(BOOL) requiresUnifiedAccessCapableDevice;
```

## See Also

### Creating a shareable pass metadata object

- [initWithProvisioningCredentialIdentifier:cardConfigurationIdentifier:sharingInstanceIdentifier:passThumbnailImage:ownerDisplayName:localizedDescription:](init%28provisioningcredentialidentifier_cardconfigurationidentifier_sharinginstanceidentifier_passthumbnailimage_ownerdisplayname_localizeddescription_%29.md): Deprecated. Creates a shareable pass metadata object.
