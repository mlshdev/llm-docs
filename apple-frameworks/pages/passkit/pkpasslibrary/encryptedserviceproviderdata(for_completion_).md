> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/encryptedserviceproviderdata(for:completion:)](https://developer.apple.com/documentation/passkit/pkpasslibrary/encryptedserviceproviderdata(for:completion:))

# encryptedServiceProviderData(for:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.12+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
func encryptedServiceProviderData(for secureElementPass: PKSecureElementPass, completion: @escaping @Sendable ([AnyHashable : Any]?, (any Error)?) -> Void)
```

```swift
func encryptedServiceProviderData(for secureElementPass: PKSecureElementPass) async throws -> [AnyHashable : Any]
```

# encryptedServiceProviderDataForSecureElementPass:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.12+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
- (void) encryptedServiceProviderDataForSecureElementPass:(PKSecureElementPass *) secureElementPass completion:(void (^)(NSDictionary *encryptedServiceProviderData, NSError *error)) completion;
```
