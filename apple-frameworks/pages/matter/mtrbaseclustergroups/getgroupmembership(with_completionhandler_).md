> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustergroups/getgroupmembership(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustergroups/getgroupmembership(with:completionhandler:))

# getGroupMembership(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use getGroupMembershipWithParams:completion:

## Declaration

```swift
func getGroupMembership(with params: MTRGroupsClusterGetGroupMembershipParams, completionHandler: @escaping @Sendable (MTRGroupsClusterGetGroupMembershipResponseParams?, (any Error)?) -> Void)
```

```swift
func groupMembership(with params: MTRGroupsClusterGetGroupMembershipParams) async throws -> MTRGroupsClusterGetGroupMembershipResponseParams
```

# getGroupMembershipWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use getGroupMembershipWithParams:completion:

## Declaration

```objectivec
- (void) getGroupMembershipWithParams:(MTRGroupsClusterGetGroupMembershipParams *) params completionHandler:(void (^)(MTRGroupsClusterGetGroupMembershipResponseParams *data, NSError *error)) completionHandler;
```
