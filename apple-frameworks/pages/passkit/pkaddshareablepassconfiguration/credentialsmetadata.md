> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddshareablepassconfiguration/credentialsmetadata](https://developer.apple.com/documentation/passkit/pkaddshareablepassconfiguration/credentialsmetadata)

# credentialsMetadata (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

Information for a shareable pass.

## Declaration

```swift
var credentialsMetadata: [PKShareablePassMetadata] { get }
```

## See Also

### Creating a pass configuration

- [forPassMetaData(\_:provisioningPolicyIdentifier:action:completion:)](forpassmetadata%28__provisioningpolicyidentifier_action_completion_%29.md): Deprecated. Creates and error checks a new shareable pass-configuration object.
- [primaryAction](primaryaction.md): The action that the system performs with the shareable pass.
- [provisioningPolicyIdentifier](provisioningpolicyidentifier.md): Deprecated.

# credentialsMetadata (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

Information for a shareable pass.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<PKShareablePassMetadata *> * credentialsMetadata;
```

## See Also

### Creating a pass configuration

- [configurationForPassMetadata:provisioningPolicyIdentifier:primaryAction:completion:](forpassmetadata%28__provisioningpolicyidentifier_action_completion_%29.md): Deprecated. Creates and error checks a new shareable pass-configuration object.
- [primaryAction](primaryaction.md): The action that the system performs with the shareable pass.
- [provisioningPolicyIdentifier](provisioningpolicyidentifier.md): Deprecated.
