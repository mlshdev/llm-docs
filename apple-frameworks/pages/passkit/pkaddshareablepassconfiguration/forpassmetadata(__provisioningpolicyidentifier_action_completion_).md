> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddshareablepassconfiguration/forpassmetadata(_:provisioningpolicyidentifier:action:completion:)](https://developer.apple.com/documentation/passkit/pkaddshareablepassconfiguration/forpassmetadata(_:provisioningpolicyidentifier:action:completion:))

# forPassMetaData(\_:provisioningPolicyIdentifier:action:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 16.0) · iPadOS 14.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0) · macOS · visionOS 1.0+ (deprecated in 1.0)

Creates and error checks a new shareable pass-configuration object.

> Use configurationForPassMetadata:primaryAction:completion:

## Declaration

```swift
class func forPassMetaData(_ passMetadata: [PKShareablePassMetadata], provisioningPolicyIdentifier: String, action: PKAddShareablePassConfigurationPrimaryAction, completion: @escaping @Sendable (PKAddShareablePassConfiguration?, (any Error)?) -> Void)
```

```swift
class func forPassMetaData(_ passMetadata: [PKShareablePassMetadata], provisioningPolicyIdentifier: String, action: PKAddShareablePassConfigurationPrimaryAction) async throws -> PKAddShareablePassConfiguration
```

## Parameters

- `passMetadata`:
- `provisioningPolicyIdentifier`:
- `action`: The action that the system performs with the shareable pass.
- `completion`: A completion handler that returns the shareable pass configuration or an error. This handler takes the following parameters:

  - **`shareableCredentialConfiguration`**: A [PKAddShareablePassConfiguration](../pkaddshareablepassconfiguration.md) that contains the shareable pass configuration, or `nil` if an error occurred.
  - **`error`**: An [NSError](../../foundation/nserror.md) that contains the error, or `nil` if no error occurred.

## See Also

### Creating a pass configuration

- [primaryAction](primaryaction.md): The action that the system performs with the shareable pass.
- [credentialsMetadata](credentialsmetadata.md): Information for a shareable pass.
- [provisioningPolicyIdentifier](provisioningpolicyidentifier.md): Deprecated.

# configurationForPassMetadata:provisioningPolicyIdentifier:primaryAction:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 16.0) · iPadOS 14.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0) · macOS · visionOS 1.0+ (deprecated in 1.0)

Creates and error checks a new shareable pass-configuration object.

> Use configurationForPassMetadata:primaryAction:completion:

## Declaration

```objectivec
+ (void) configurationForPassMetadata:(NSArray<PKShareablePassMetadata *> *) passMetadata provisioningPolicyIdentifier:(NSString *) provisioningPolicyIdentifier primaryAction:(PKAddShareablePassConfigurationPrimaryAction) action completion:(void (^)(PKAddShareablePassConfiguration *shareableCredentialConfiguration, NSError *error)) completion;
```

## Parameters

- `passMetadata`:
- `provisioningPolicyIdentifier`:
- `action`: The action that the system performs with the shareable pass.
- `completion`: A completion handler that returns the shareable pass configuration or an error. This handler takes the following parameters:

  - **`shareableCredentialConfiguration`**: A [PKAddShareablePassConfiguration](../pkaddshareablepassconfiguration.md) that contains the shareable pass configuration, or `nil` if an error occurred.
  - **`error`**: An [NSError](../../foundation/nserror.md) that contains the error, or `nil` if no error occurred.

## See Also

### Creating a pass configuration

- [primaryAction](primaryaction.md): The action that the system performs with the shareable pass.
- [credentialsMetadata](credentialsmetadata.md): Information for a shareable pass.
- [provisioningPolicyIdentifier](provisioningpolicyidentifier.md): Deprecated.
