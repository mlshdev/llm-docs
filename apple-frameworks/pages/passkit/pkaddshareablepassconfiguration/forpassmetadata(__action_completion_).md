> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddshareablepassconfiguration/forpassmetadata(_:action:completion:)](https://developer.apple.com/documentation/passkit/pkaddshareablepassconfiguration/forpassmetadata(_:action:completion:))

# forPassMetadata(\_:action:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

## Declaration

```swift
class func forPassMetadata(_ passMetadata: [PKShareablePassMetadata], action: PKAddShareablePassConfigurationPrimaryAction, completion: @escaping @Sendable (PKAddShareablePassConfiguration?, (any Error)?) -> Void)
```

```swift
class func forPassMetadata(_ passMetadata: [PKShareablePassMetadata], action: PKAddShareablePassConfigurationPrimaryAction) async throws -> PKAddShareablePassConfiguration
```

# configurationForPassMetadata:primaryAction:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS · visionOS 1.0+

## Declaration

```objectivec
+ (void) configurationForPassMetadata:(NSArray<PKShareablePassMetadata *> *) passMetadata primaryAction:(PKAddShareablePassConfigurationPrimaryAction) action completion:(void (^)(PKAddShareablePassConfiguration *shareableCredentialConfiguration, NSError *error)) completion;
```
