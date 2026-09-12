> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/getcredentialstatus(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/getcredentialstatus(with:completion:))

# getCredentialStatus(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func getCredentialStatus(with params: MTRDoorLockClusterGetCredentialStatusParams, completion: @escaping @Sendable (MTRDoorLockClusterGetCredentialStatusResponseParams?, (any Error)?) -> Void)
```

```swift
func credentialStatus(with params: MTRDoorLockClusterGetCredentialStatusParams) async throws -> MTRDoorLockClusterGetCredentialStatusResponseParams
```

# getCredentialStatusWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) getCredentialStatusWithParams:(MTRDoorLockClusterGetCredentialStatusParams *) params completion:(void (^)(MTRDoorLockClusterGetCredentialStatusResponseParams *data, NSError *error)) completion;
```
