> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteroperationalcredentials/addtrustedrootcertificate(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusteroperationalcredentials/addtrustedrootcertificate(with:completion:))

# addTrustedRootCertificate(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func addTrustedRootCertificate(with params: MTROperationalCredentialsClusterAddTrustedRootCertificateParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func addTrustedRootCertificate(with params: MTROperationalCredentialsClusterAddTrustedRootCertificateParams) async throws
```

# addTrustedRootCertificateWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) addTrustedRootCertificateWithParams:(MTROperationalCredentialsClusterAddTrustedRootCertificateParams *) params completion:(MTRStatusCompletion) completion;
```
