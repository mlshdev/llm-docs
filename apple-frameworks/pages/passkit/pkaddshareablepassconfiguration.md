> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddshareablepassconfiguration](https://developer.apple.com/documentation/passkit/pkaddshareablepassconfiguration)

# PKAddShareablePassConfiguration (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

An object that represents the data and action for a shared copy of pass.

## Declaration

```swift
class PKAddShareablePassConfiguration
```

## Topics

### Creating a pass configuration

- [forPassMetaData(\_:provisioningPolicyIdentifier:action:completion:)](pkaddshareablepassconfiguration/forpassmetadata%28__provisioningpolicyidentifier_action_completion_%29.md): Deprecated. Creates and error checks a new shareable pass-configuration object.
- [primaryAction](pkaddshareablepassconfiguration/primaryaction.md): The action that the system performs with the shareable pass.
- [credentialsMetadata](pkaddshareablepassconfiguration/credentialsmetadata.md): Information for a shareable pass.
- [provisioningPolicyIdentifier](pkaddshareablepassconfiguration/provisioningpolicyidentifier.md): Deprecated.

### Type Methods

- [forPassMetadata(\_:action:completion:)](pkaddshareablepassconfiguration/forpassmetadata%28__action_completion_%29.md)

## Relationships

### Inherits From

- [PKAddSecureElementPassConfiguration](pkaddsecureelementpassconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Shareable passes

- [PKShareablePassMetadata](pkshareablepassmetadata.md): Information that you use to configure the sharing sheet for a pass.
- [PKAddShareablePassConfigurationPrimaryAction](pkaddshareablepassconfigurationprimaryaction.md): The kind of add action that the system performs with a pass.

# PKAddShareablePassConfiguration (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS · visionOS 1.0+

An object that represents the data and action for a shared copy of pass.

## Declaration

```objectivec
@interface PKAddShareablePassConfiguration : PKAddSecureElementPassConfiguration
```

## Topics

### Creating a pass configuration

- [configurationForPassMetadata:provisioningPolicyIdentifier:primaryAction:completion:](pkaddshareablepassconfiguration/forpassmetadata%28__provisioningpolicyidentifier_action_completion_%29.md): Deprecated. Creates and error checks a new shareable pass-configuration object.
- [primaryAction](pkaddshareablepassconfiguration/primaryaction.md): The action that the system performs with the shareable pass.
- [credentialsMetadata](pkaddshareablepassconfiguration/credentialsmetadata.md): Information for a shareable pass.
- [provisioningPolicyIdentifier](pkaddshareablepassconfiguration/provisioningpolicyidentifier.md): Deprecated.

### Type Methods

- [configurationForPassMetadata:primaryAction:completion:](pkaddshareablepassconfiguration/forpassmetadata%28__action_completion_%29.md)

## Relationships

### Inherits From

- [PKAddSecureElementPassConfiguration](pkaddsecureelementpassconfiguration.md)

## See Also

### Shareable passes

- [PKShareablePassMetadata](pkshareablepassmetadata.md): Information that you use to configure the sharing sheet for a pass.
- [PKAddShareablePassConfigurationPrimaryAction](pkaddshareablepassconfigurationprimaryaction.md): The kind of add action that the system performs with a pass.
