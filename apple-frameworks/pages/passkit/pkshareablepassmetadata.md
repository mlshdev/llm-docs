> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkshareablepassmetadata](https://developer.apple.com/documentation/passkit/pkshareablepassmetadata)

# PKShareablePassMetadata (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

Information that you use to configure the sharing sheet for a pass.

## Declaration

```swift
class PKShareablePassMetadata
```

## Topics

### Creating a shareable pass metadata object

- [init(provisioningCredentialIdentifier:cardConfigurationIdentifier:sharingInstanceIdentifier:passThumbnailImage:ownerDisplayName:localizedDescription:)](pkshareablepassmetadata/init%28provisioningcredentialidentifier_cardconfigurationidentifier_sharinginstanceidentifier_passthumbnailimage_ownerdisplayname_localizeddescription_%29.md): Deprecated. Creates a shareable pass metadata object.
- [init(provisioningCredentialIdentifier:sharingInstanceIdentifier:passThumbnailImage:ownerDisplayName:localizedDescription:accountHash:templateIdentifier:relyingPartyIdentifier:requiresUnifiedAccessCapableDevice:)](pkshareablepassmetadata/init%28provisioningcredentialidentifier_sharinginstanceidentifier_passthumbnailimage_ownerdisplayname_localizeddescription_accounthash_templateidentifier_relyingpartyidentifier_requi~eab8126f.md): Deprecated.

### Displaying information on the share sheet

- [ownerDisplayName](pkshareablepassmetadata/ownerdisplayname.md): Deprecated. The name of the person that receives a shared pass.
- [passThumbnailImage](pkshareablepassmetadata/passthumbnailimage.md): Deprecated. A thumbnail image of a pass that the system displays on the sharing sheet.
- [localizedDescription](pkshareablepassmetadata/localizeddescription.md): Deprecated. A longer form of the pass description that the system displays on the sharing sheet.

### Reading notification properties

- [accountHash](pkshareablepassmetadata/accounthash.md): An Apple Push Notification push token.
- [relyingPartyIdentifier](pkshareablepassmetadata/relyingpartyidentifier.md): An identifier used in push notifications.
- [templateIdentifier](pkshareablepassmetadata/templateidentifier.md): Deprecated. An identifier used in push notifications.
- [cardTemplateIdentifier](pkshareablepassmetadata/cardtemplateidentifier.md)

### Requiring a unified access capable device

- [requiresUnifiedAccessCapableDevice](pkshareablepassmetadata/requiresunifiedaccesscapabledevice.md)

### Initializers

- [init(provisioningCredentialIdentifier:sharingInstanceIdentifier:cardConfigurationIdentifier:preview:)](pkshareablepassmetadata/init%28provisioningcredentialidentifier_sharinginstanceidentifier_cardconfigurationidentifier_preview_%29.md)
- [init(provisioningCredentialIdentifier:sharingInstanceIdentifier:cardTemplateIdentifier:preview:)](pkshareablepassmetadata/init%28provisioningcredentialidentifier_sharinginstanceidentifier_cardtemplateidentifier_preview_%29.md)

### Instance Properties

- [cardConfigurationIdentifier](pkshareablepassmetadata/cardconfigurationidentifier.md): A developer-defined value that represents the configuration of a pass.
- [credentialIdentifier](pkshareablepassmetadata/credentialidentifier.md): A developer-defined value that represents the user credentials of a pass.
- [preview](pkshareablepassmetadata/preview-swift.property.md)
- [serverEnvironmentIdentifier](pkshareablepassmetadata/serverenvironmentidentifier.md)
- [sharingInstanceIdentifier](pkshareablepassmetadata/sharinginstanceidentifier.md): A developer-defined unique value that you use to validate a shared pass.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Shareable passes

- [PKAddShareablePassConfiguration](pkaddshareablepassconfiguration.md): An object that represents the data and action for a shared copy of pass.
- [PKAddShareablePassConfigurationPrimaryAction](pkaddshareablepassconfigurationprimaryaction.md): The kind of add action that the system performs with a pass.

# PKShareablePassMetadata (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

Information that you use to configure the sharing sheet for a pass.

## Declaration

```objectivec
@interface PKShareablePassMetadata : NSObject
```

## Topics

### Creating a shareable pass metadata object

- [initWithProvisioningCredentialIdentifier:cardConfigurationIdentifier:sharingInstanceIdentifier:passThumbnailImage:ownerDisplayName:localizedDescription:](pkshareablepassmetadata/init%28provisioningcredentialidentifier_cardconfigurationidentifier_sharinginstanceidentifier_passthumbnailimage_ownerdisplayname_localizeddescription_%29.md): Deprecated. Creates a shareable pass metadata object.
- [initWithProvisioningCredentialIdentifier:sharingInstanceIdentifier:passThumbnailImage:ownerDisplayName:localizedDescription:accountHash:templateIdentifier:relyingPartyIdentifier:requiresUnifiedAccessCapableDevice:](pkshareablepassmetadata/init%28provisioningcredentialidentifier_sharinginstanceidentifier_passthumbnailimage_ownerdisplayname_localizeddescription_accounthash_templateidentifier_relyingpartyidentifier_requi~eab8126f.md): Deprecated.

### Displaying information on the share sheet

- [ownerDisplayName](pkshareablepassmetadata/ownerdisplayname.md): Deprecated. The name of the person that receives a shared pass.
- [passThumbnailImage](pkshareablepassmetadata/passthumbnailimage.md): Deprecated. A thumbnail image of a pass that the system displays on the sharing sheet.
- [localizedDescription](pkshareablepassmetadata/localizeddescription.md): Deprecated. A longer form of the pass description that the system displays on the sharing sheet.

### Reading notification properties

- [accountHash](pkshareablepassmetadata/accounthash.md): An Apple Push Notification push token.
- [relyingPartyIdentifier](pkshareablepassmetadata/relyingpartyidentifier.md): An identifier used in push notifications.
- [templateIdentifier](pkshareablepassmetadata/templateidentifier.md): Deprecated. An identifier used in push notifications.
- [cardTemplateIdentifier](pkshareablepassmetadata/cardtemplateidentifier.md)

### Requiring a unified access capable device

- [requiresUnifiedAccessCapableDevice](pkshareablepassmetadata/requiresunifiedaccesscapabledevice.md)

### Instance Properties

- [cardConfigurationIdentifier](pkshareablepassmetadata/cardconfigurationidentifier.md): A developer-defined value that represents the configuration of a pass.
- [credentialIdentifier](pkshareablepassmetadata/credentialidentifier.md): A developer-defined value that represents the user credentials of a pass.
- [preview](pkshareablepassmetadata/preview-swift.property.md)
- [serverEnvironmentIdentifier](pkshareablepassmetadata/serverenvironmentidentifier.md)
- [sharingInstanceIdentifier](pkshareablepassmetadata/sharinginstanceidentifier.md): A developer-defined unique value that you use to validate a shared pass.

### Instance Methods

- [initWithProvisioningCredentialIdentifier:sharingInstanceIdentifier:cardConfigurationIdentifier:preview:](pkshareablepassmetadata/init%28provisioningcredentialidentifier_sharinginstanceidentifier_cardconfigurationidentifier_preview_%29.md)
- [initWithProvisioningCredentialIdentifier:sharingInstanceIdentifier:cardTemplateIdentifier:preview:](pkshareablepassmetadata/init%28provisioningcredentialidentifier_sharinginstanceidentifier_cardtemplateidentifier_preview_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Shareable passes

- [PKAddShareablePassConfiguration](pkaddshareablepassconfiguration.md): An object that represents the data and action for a shared copy of pass.
- [PKAddShareablePassConfigurationPrimaryAction](pkaddshareablepassconfigurationprimaryaction.md): The kind of add action that the system performs with a pass.
