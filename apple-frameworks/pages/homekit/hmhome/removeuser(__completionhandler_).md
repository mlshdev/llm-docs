> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/removeuser(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmhome/removeuser(_:completionhandler:))

# removeUser(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Removes a user from the home.

> Use [manageUsers(completionHandler:)](manageusers%28completionhandler_%29.md) instead.

## Declaration

```swift
func removeUser(_ user: HMUser, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeUser(_ user: HMUser) async throws
```

## Parameters

- `user`: The user to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure. `error.userInfo[HMUserFailedAccessoriesKey]` contains more information in case of failure. See [HMUserFailedAccessoriesKey](../hmuserfailedaccessorieskey.md) for more details.

## See Also

### Deprecated symbols

- [users](users.md): Deprecated. All users associated with the home.
- [addUser(completionHandler:)](adduser%28completionhandler_%29.md): Deprecated. Adds a user to the home.

# removeUser:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Removes a user from the home.

> Use [manageUsersWithCompletionHandler:](manageusers%28completionhandler_%29.md) instead.

## Declaration

```objectivec
- (void) removeUser:(HMUser *) user completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `user`: The user to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure. `error.userInfo[HMUserFailedAccessoriesKey]` contains more information in case of failure. See [HMUserFailedAccessoriesKey](../hmuserfailedaccessorieskey.md) for more details.

## See Also

### Deprecated symbols

- [users](users.md): Deprecated. All users associated with the home.
- [addUserWithCompletionHandler:](adduser%28completionhandler_%29.md): Deprecated. Adds a user to the home.
