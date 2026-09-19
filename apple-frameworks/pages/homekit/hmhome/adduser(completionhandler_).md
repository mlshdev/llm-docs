> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmhome/adduser(completionhandler:)

# addUser(completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 8.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Adds a user to the home.

> Use [manageUsers(completionHandler:)](manageusers%28completionhandler_%29.md) instead.

## Declaration

```swift
func addUser(completionHandler completion: @escaping @Sendable (HMUser?, (any Error)?) -> Void)
```

```swift
func addUser() async throws -> HMUser
```

## Parameters

- `completion`: The block executed after the request is processed.

  - **user**: The user that was added to the home.
  - **error**: `nil` on success; otherwise, error object indicating the reason for failure. `error.userInfo[HMUserFailedAccessoriesKey]` contains more information in case of failure. See [HMUserFailedAccessoriesKey](../hmuserfailedaccessorieskey.md) for more details.

## See Also

### Deprecated symbols

- [users](users.md): Deprecated. All users associated with the home.
- [removeUser(\_:completionHandler:)](removeuser%28__completionhandler_%29.md): Deprecated. Removes a user from the home.

# addUserWithCompletionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Adds a user to the home.

> Use [manageUsersWithCompletionHandler:](manageusers%28completionhandler_%29.md) instead.

## Declaration

```objectivec
- (void) addUserWithCompletionHandler:(void (^)(HMUser *user, NSError *error)) completion;
```

## Parameters

- `completion`: The block executed after the request is processed.

  - **user**: The user that was added to the home.
  - **error**: `nil` on success; otherwise, error object indicating the reason for failure. `error.userInfo[HMUserFailedAccessoriesKey]` contains more information in case of failure. See [HMUserFailedAccessoriesKey](../hmuserfailedaccessorieskey.md) for more details.

## See Also

### Deprecated symbols

- [users](users.md): Deprecated. All users associated with the home.
- [removeUser:completionHandler:](removeuser%28__completionhandler_%29.md): Deprecated. Removes a user from the home.
