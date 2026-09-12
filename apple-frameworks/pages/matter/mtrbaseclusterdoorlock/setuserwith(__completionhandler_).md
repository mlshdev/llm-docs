> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterdoorlock/setuserwith(_:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterdoorlock/setuserwith(_:completionhandler:))

# setUserWith(\_:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use setUserWithParams:completion:

## Declaration

```swift
func setUserWith(_ params: MTRDoorLockClusterSetUserParams, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func setUserWith(_ params: MTRDoorLockClusterSetUserParams) async throws
```

# setUserWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use setUserWithParams:completion:

## Declaration

```objectivec
- (void) setUserWithParams:(MTRDoorLockClusterSetUserParams *) params completionHandler:(MTRStatusCompletion) completionHandler;
```
