> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterotasoftwareupdateprovider-2vync/applyupdaterequest(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclusterotasoftwareupdateprovider-2vync/applyupdaterequest(with:completionhandler:))

# applyUpdateRequest(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use applyUpdateRequestWithParams:completion:

## Declaration

```swift
func applyUpdateRequest(with params: MTROtaSoftwareUpdateProviderClusterApplyUpdateRequestParams, completionHandler: @escaping @Sendable (MTROtaSoftwareUpdateProviderClusterApplyUpdateResponseParams?, (any Error)?) -> Void)
```

```swift
func applyUpdateRequest(with params: MTROtaSoftwareUpdateProviderClusterApplyUpdateRequestParams) async throws -> MTROtaSoftwareUpdateProviderClusterApplyUpdateResponseParams
```

# applyUpdateRequestWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use applyUpdateRequestWithParams:completion:

## Declaration

```objectivec
- (void) applyUpdateRequestWithParams:(MTROtaSoftwareUpdateProviderClusterApplyUpdateRequestParams *) params completionHandler:(void (^)(MTROtaSoftwareUpdateProviderClusterApplyUpdateResponseParams *data, NSError *error)) completionHandler;
```
