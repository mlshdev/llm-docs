> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustergroups/viewgroup(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustergroups/viewgroup(with:completionhandler:))

# viewGroup(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use viewGroupWithParams:completion:

## Declaration

```swift
func viewGroup(with params: MTRGroupsClusterViewGroupParams, completionHandler: @escaping @Sendable (MTRGroupsClusterViewGroupResponseParams?, (any Error)?) -> Void)
```

```swift
func viewGroup(with params: MTRGroupsClusterViewGroupParams) async throws -> MTRGroupsClusterViewGroupResponseParams
```

# viewGroupWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use viewGroupWithParams:completion:

## Declaration

```objectivec
- (void) viewGroupWithParams:(MTRGroupsClusterViewGroupParams *) params completionHandler:(void (^)(MTRGroupsClusterViewGroupResponseParams *data, NSError *error)) completionHandler;
```
