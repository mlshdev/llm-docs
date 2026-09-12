> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusteradministratorcommissioning/revokecommissioning(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusteradministratorcommissioning/revokecommissioning(with:completionhandler:))

# revokeCommissioning(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use revokeCommissioningWithParams:completion:

## Declaration

```swift
func revokeCommissioning(with params: MTRAdministratorCommissioningClusterRevokeCommissioningParams?, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func revokeCommissioning(with params: MTRAdministratorCommissioningClusterRevokeCommissioningParams?) async throws
```

# revokeCommissioningWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use revokeCommissioningWithParams:completion:

## Declaration

```objectivec
- (void) revokeCommissioningWithParams:(MTRAdministratorCommissioningClusterRevokeCommissioningParams *) params completionHandler:(MTRStatusCompletion) completionHandler;
```
