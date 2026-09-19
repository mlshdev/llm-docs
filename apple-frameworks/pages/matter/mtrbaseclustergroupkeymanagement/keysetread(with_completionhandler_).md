> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclustergroupkeymanagement/keysetread(with:completionhandler:)

# keySetRead(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use keySetReadWithParams:completion:

## Declaration

```swift
func keySetRead(with params: MTRGroupKeyManagementClusterKeySetReadParams, completionHandler: @escaping @Sendable (MTRGroupKeyManagementClusterKeySetReadResponseParams?, (any Error)?) -> Void)
```

```swift
func keySetRead(with params: MTRGroupKeyManagementClusterKeySetReadParams) async throws -> MTRGroupKeyManagementClusterKeySetReadResponseParams
```

# keySetReadWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use keySetReadWithParams:completion:

## Declaration

```objectivec
- (void) keySetReadWithParams:(MTRGroupKeyManagementClusterKeySetReadParams *) params completionHandler:(void (^)(MTRGroupKeyManagementClusterKeySetReadResponseParams *data, NSError *error)) completionHandler;
```
