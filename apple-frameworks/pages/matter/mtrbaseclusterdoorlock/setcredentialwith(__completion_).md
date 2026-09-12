> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/setcredentialwith(_:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/setcredentialwith(_:completion:))

# setCredentialWith(\_:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func setCredentialWith(_ params: MTRDoorLockClusterSetCredentialParams, completion: @escaping @Sendable (MTRDoorLockClusterSetCredentialResponseParams?, (any Error)?) -> Void)
```

```swift
func setCredentialWith(_ params: MTRDoorLockClusterSetCredentialParams) async throws -> MTRDoorLockClusterSetCredentialResponseParams
```

# setCredentialWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) setCredentialWithParams:(MTRDoorLockClusterSetCredentialParams *) params completion:(void (^)(MTRDoorLockClusterSetCredentialResponseParams *data, NSError *error)) completion;
```
