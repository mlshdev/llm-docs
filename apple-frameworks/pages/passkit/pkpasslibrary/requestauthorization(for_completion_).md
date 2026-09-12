> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/requestauthorization(for:completion:)](https://developer.apple.com/documentation/passkit/pkpasslibrary/requestauthorization(for:completion:))

# requestAuthorization(for:completion:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
func requestAuthorization(for capability: PKPassLibrary.Capability, completion: @escaping @Sendable (PKPassLibrary.AuthorizationStatus) -> Void)
```

```swift
func requestAuthorization(for capability: PKPassLibrary.Capability) async -> PKPassLibrary.AuthorizationStatus
```

# requestAuthorizationForCapability:completion: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
- (void) requestAuthorizationForCapability:(PKPassLibraryCapability) capability completion:(void (^)(PKPassLibraryAuthorizationStatus status)) completion;
```
