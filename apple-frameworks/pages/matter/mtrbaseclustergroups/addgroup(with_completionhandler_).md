> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustergroups/addgroup(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustergroups/addgroup(with:completionhandler:))

# addGroup(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use addGroupWithParams:completion:

## Declaration

```swift
func addGroup(with params: MTRGroupsClusterAddGroupParams, completionHandler: @escaping @Sendable (MTRGroupsClusterAddGroupResponseParams?, (any Error)?) -> Void)
```

```swift
func addGroup(with params: MTRGroupsClusterAddGroupParams) async throws -> MTRGroupsClusterAddGroupResponseParams
```

# addGroupWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use addGroupWithParams:completion:

## Declaration

```objectivec
- (void) addGroupWithParams:(MTRGroupsClusterAddGroupParams *) params completionHandler:(void (^)(MTRGroupsClusterAddGroupResponseParams *data, NSError *error)) completionHandler;
```
