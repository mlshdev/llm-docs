> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/familycontrols/authorizationcenter/revokeauthorization(completionhandler:)](https://developer.apple.com/documentation/familycontrols/authorizationcenter/revokeauthorization(completionhandler:))

# revokeAuthorization(completionHandler:)

**Framework:** Family Controls  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+

Revokes authorization to provide parental controls.

## Declaration

```swift
func revokeAuthorization(completionHandler: @escaping (Result<Void, any Error>) -> Void)
```

## Parameters

- `completionHandler`: A closure the system calls after it completes the authorization request. The system passes the following parameters:

  - **`result`**: A value that represents either a success or a failure, including an associated [Error](https://developer.apple.com/documentation/swift/error) object for failures.

<a id="discussion"></a>

## Discussion

If your app’s authentication status is [AuthorizationStatus.approved](../authorizationstatus/approved.md) this method revokes authentication.

> **Note**

> This method has no effect if your app’s current authentication status is [AuthorizationStatus.denied](../authorizationstatus/denied.md).

The completion handler’s [Result](https://developer.apple.com/documentation/swift/result) parameter indicates whether the request completed successfully. It doesn’t indicate your app’s authorization state.

After you revoke authorization, your app no longer provides parental controls, and the system no longer enforces restrictions, such as preventing the user from deleting your app.

## See Also

### Requesting and revoking authorization

- [requestAuthorization(for:)](requestauthorization%28for_%29.md): Requests authorization to provide parental controls for a child or individual.
