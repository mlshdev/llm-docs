> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteroperationalcredentials/certificatechainrequest(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusteroperationalcredentials/certificatechainrequest(with:completion:))

# certificateChainRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func certificateChainRequest(with params: MTROperationalCredentialsClusterCertificateChainRequestParams, completion: @escaping @Sendable (MTROperationalCredentialsClusterCertificateChainResponseParams?, (any Error)?) -> Void)
```

```swift
func certificateChainRequest(with params: MTROperationalCredentialsClusterCertificateChainRequestParams) async throws -> MTROperationalCredentialsClusterCertificateChainResponseParams
```

# certificateChainRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) certificateChainRequestWithParams:(MTROperationalCredentialsClusterCertificateChainRequestParams *) params completion:(void (^)(MTROperationalCredentialsClusterCertificateChainResponseParams *data, NSError *error)) completion;
```
