> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/getuserwith(_:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/getuserwith(_:completionhandler:))

# getUserWith(\_:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use getUserWithParams:completion:

## Declaration

```swift
func getUserWith(_ params: MTRDoorLockClusterGetUserParams, completionHandler: @escaping @Sendable (MTRDoorLockClusterGetUserResponseParams?, (any Error)?) -> Void)
```

```swift
func user(with params: MTRDoorLockClusterGetUserParams) async throws -> MTRDoorLockClusterGetUserResponseParams
```

# getUserWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use getUserWithParams:completion:

## Declaration

```objectivec
- (void) getUserWithParams:(MTRDoorLockClusterGetUserParams *) params completionHandler:(void (^)(MTRDoorLockClusterGetUserResponseParams *data, NSError *error)) completionHandler;
```
