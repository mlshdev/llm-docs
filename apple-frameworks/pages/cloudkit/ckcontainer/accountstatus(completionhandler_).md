> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/accountstatus(completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/accountstatus(completionhandler:))

# accountStatus(completionHandler:) (Swift)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Determines whether the system can access the user’s iCloud account.

## Declaration

```swift
func accountStatus(completionHandler: @escaping @Sendable (CKAccountStatus, (any Error)?) -> Void)
```

```swift
func accountStatus() async throws -> CKAccountStatus
```

## Parameters

- `completionHandler`: The handler to execute when the call completes.

<a id="discussion"></a>

## Discussion

The closure has no return value and takes the following parameters:

- The status of the user’s iCloud account.
- An error that describes the failure, or `nil` if the system successfully determines the status.

This method determines the status of the user’s iCloud account asynchronously, passing the results to the closure that you provide. Call this method before accessing the private database to determine whether that database is available. While your app is running, use the [CKAccountChanged](../../foundation/nsnotification/name-swift.struct/ckaccountchanged.md) notification to detect account changes, and call this method again to determine the status of the new account.

## See Also

### Determining the User’s iCloud Access Status

- [CKAccountStatus](../ckaccountstatus.md): Constants that indicate the availability of the user’s iCloud account.

# accountStatusWithCompletionHandler: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Determines whether the system can access the user’s iCloud account.

## Declaration

```objectivec
- (void) accountStatusWithCompletionHandler:(void (^)(CKAccountStatus accountStatus, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The handler to execute when the call completes.

<a id="discussion"></a>

## Discussion

The closure has no return value and takes the following parameters:

- The status of the user’s iCloud account.
- An error that describes the failure, or `nil` if the system successfully determines the status.

This method determines the status of the user’s iCloud account asynchronously, passing the results to the closure that you provide. Call this method before accessing the private database to determine whether that database is available. While your app is running, use the [CKAccountChanged](../../foundation/nsnotification/name-swift.struct/ckaccountchanged.md) notification to detect account changes, and call this method again to determine the status of the new account.

## See Also

### Determining the User’s iCloud Access Status

- [CKAccountStatus](../ckaccountstatus.md): Constants that indicate the availability of the user’s iCloud account.
