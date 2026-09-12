> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddshareablepassconfiguration/provisioningpolicyidentifier](https://developer.apple.com/documentation/passkit/pkaddshareablepassconfiguration/provisioningpolicyidentifier)

# provisioningPolicyIdentifier (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 16.0) · iPadOS 14.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0) · macOS · visionOS 1.0+ (deprecated in 1.0)

> provisioningPolicyIdentifier has been deprecated. You can stop setting this property in the init with no repercussions.

## Declaration

```swift
var provisioningPolicyIdentifier: String { get }
```

## See Also

### Creating a pass configuration

- [forPassMetaData(\_:provisioningPolicyIdentifier:action:completion:)](forpassmetadata%28__provisioningpolicyidentifier_action_completion_%29.md): Deprecated. Creates and error checks a new shareable pass-configuration object.
- [primaryAction](primaryaction.md): The action that the system performs with the shareable pass.
- [credentialsMetadata](credentialsmetadata.md): Information for a shareable pass.

# provisioningPolicyIdentifier (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 16.0) · iPadOS 14.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0) · macOS · visionOS 1.0+ (deprecated in 1.0)

> provisioningPolicyIdentifier has been deprecated. You can stop setting this property in the init with no repercussions.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSString * provisioningPolicyIdentifier;
```

## See Also

### Creating a pass configuration

- [configurationForPassMetadata:provisioningPolicyIdentifier:primaryAction:completion:](forpassmetadata%28__provisioningpolicyidentifier_action_completion_%29.md): Deprecated. Creates and error checks a new shareable pass-configuration object.
- [primaryAction](primaryaction.md): The action that the system performs with the shareable pass.
- [credentialsMetadata](credentialsmetadata.md): Information for a shareable pass.
