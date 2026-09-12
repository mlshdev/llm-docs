> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/getuserwith(_:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/getuserwith(_:completion:))

# getUserWith(\_:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func getUserWith(_ params: MTRDoorLockClusterGetUserParams, completion: @escaping @Sendable (MTRDoorLockClusterGetUserResponseParams?, (any Error)?) -> Void)
```

```swift
func user(with params: MTRDoorLockClusterGetUserParams) async throws -> MTRDoorLockClusterGetUserResponseParams
```

# getUserWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) getUserWithParams:(MTRDoorLockClusterGetUserParams *) params completion:(void (^)(MTRDoorLockClusterGetUserResponseParams *data, NSError *error)) completion;
```
