> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkshareablepassmetadata/init(provisioningcredentialidentifier:cardconfigurationidentifier:sharinginstanceidentifier:passthumbnailimage:ownerdisplayname:localizeddescription:)](https://developer.apple.com/documentation/passkit/pkshareablepassmetadata/init(provisioningcredentialidentifier:cardconfigurationidentifier:sharinginstanceidentifier:passthumbnailimage:ownerdisplayname:localizeddescription:))

# init(provisioningCredentialIdentifier:cardConfigurationIdentifier:sharingInstanceIdentifier:passThumbnailImage:ownerDisplayName:localizedDescription:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 16.0) · iPadOS 14.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0) · macOS · visionOS 1.0+ (deprecated in 1.0)

Creates a shareable pass metadata object.

> Use initWithProvisioningCredentialIdentifier:sharingInstanceIdentifier:cardConfigurationIdentifier:passPreviewMetadata:

## Declaration

```swift
init?(provisioningCredentialIdentifier credentialIdentifier: String, cardConfigurationIdentifier: String, sharingInstanceIdentifier: String, passThumbnailImage: CGImage, ownerDisplayName: String, localizedDescription: String)
```

## Parameters

- `credentialIdentifier`: A value that represents the user credentials for the pass.
- `cardConfigurationIdentifier`: A value that represents the configuration of the pass.
- `sharingInstanceIdentifier`: A unique value that you use to validate the shared pass.
- `passThumbnailImage`: A thumbnail image for the pass.
- `ownerDisplayName`: The name of the person that receives the shared pass.
- `localizedDescription`: A longer form of the pass description.

## See Also

### Creating a shareable pass metadata object

- [init(provisioningCredentialIdentifier:sharingInstanceIdentifier:passThumbnailImage:ownerDisplayName:localizedDescription:accountHash:templateIdentifier:relyingPartyIdentifier:requiresUnifiedAccessCapableDevice:)](init%28provisioningcredentialidentifier_sharinginstanceidentifier_passthumbnailimage_ownerdisplayname_localizeddescription_accounthash_templateidentifier_relyingpartyidentifier_requi~eab8126f.md): Deprecated.

# initWithProvisioningCredentialIdentifier:cardConfigurationIdentifier:sharingInstanceIdentifier:passThumbnailImage:ownerDisplayName:localizedDescription: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 16.0) · iPadOS 14.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0) · macOS · visionOS 1.0+ (deprecated in 1.0)

Creates a shareable pass metadata object.

> Use initWithProvisioningCredentialIdentifier:sharingInstanceIdentifier:cardConfigurationIdentifier:passPreviewMetadata:

## Declaration

```objectivec
- (instancetype) initWithProvisioningCredentialIdentifier:(NSString *) credentialIdentifier cardConfigurationIdentifier:(NSString *) cardConfigurationIdentifier sharingInstanceIdentifier:(NSString *) sharingInstanceIdentifier passThumbnailImage:(CGImageRef) passThumbnailImage ownerDisplayName:(NSString *) ownerDisplayName localizedDescription:(NSString *) localizedDescription;
```

## Parameters

- `credentialIdentifier`: A value that represents the user credentials for the pass.
- `cardConfigurationIdentifier`: A value that represents the configuration of the pass.
- `sharingInstanceIdentifier`: A unique value that you use to validate the shared pass.
- `passThumbnailImage`: A thumbnail image for the pass.
- `ownerDisplayName`: The name of the person that receives the shared pass.
- `localizedDescription`: A longer form of the pass description.

## See Also

### Creating a shareable pass metadata object

- [initWithProvisioningCredentialIdentifier:sharingInstanceIdentifier:passThumbnailImage:ownerDisplayName:localizedDescription:accountHash:templateIdentifier:relyingPartyIdentifier:requiresUnifiedAccessCapableDevice:](init%28provisioningcredentialidentifier_sharinginstanceidentifier_passthumbnailimage_ownerdisplayname_localizeddescription_accounthash_templateidentifier_relyingpartyidentifier_requi~eab8126f.md): Deprecated.
