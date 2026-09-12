> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/manageusers(completionhandler:)](https://developer.apple.com/documentation/homekit/hmhome/manageusers(completionhandler:))

# manageUsers(completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · visionOS 1.0+

Presents a view controller to manage users of the home.

## Declaration

```swift
func manageUsers(completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func manageUsers() async throws
```

## Parameters

- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

Only users that have administrator access to the home can call this method. Otherwise, the completion handler returns the error [HMError.Code.insufficientPrivileges](../hmerror/code/insufficientprivileges.md).

## See Also

### Managing users

- [currentUser](currentuser.md): The current HomeKit user.
- [HMUser](../hmuser.md): A person in the home who may have access to control accessories and services in the home.

# manageUsersWithCompletionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Presents a view controller to manage users of the home.

## Declaration

```objectivec
- (void) manageUsersWithCompletionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

Only users that have administrator access to the home can call this method. Otherwise, the completion handler returns the error [HMErrorCodeInsufficientPrivileges](../hmerror/code/insufficientprivileges.md).

## See Also

### Managing users

- [currentUser](currentuser.md): The current HomeKit user.
- [HMUser](../hmuser.md): A person in the home who may have access to control accessories and services in the home.
