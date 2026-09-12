> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/discoveruseridentities(foremailaddresses:completionhandler:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/discoveruseridentities(foremailaddresses:completionhandler:))

# discoverUserIdentities(forEmailAddresses:completionHandler:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · tvOS 15.0+ (deprecated in 17.0) · visionOS · watchOS 8.0+ (deprecated in 10.0)

Fetches the user identities for the specified email addresses.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```swift
@preconcurrency func discoverUserIdentities(forEmailAddresses emails: [String], completionHandler: @escaping @Sendable (Result<[String : CKUserIdentity], any Error>) -> Void)
```

## Parameters

- `emails`: The users’ email addresses.
- `completionHandler`: The handler to execute with the fetch results.

<a id="discussion"></a>

## Discussion

This closure doesn’t return a value and takes the following parameters:

- A [Result](https://developer.apple.com/documentation/swift/result) that contains either a dictionary of user identities, or an error that describes why CloudKit can’t discover the email addresses.

  In the successful case, the dictionary uses the email addresses you specify in `emails` as its keys. Only successfully discovered user identities are present in this dictionary.

Use this method to retrieve the identities of users who the current user knows. The users you’re searching for must meet the following criteria:

- The user has run the app.
- The user grants the [userDiscoverability](applicationpermissions/userdiscoverability.md) permission for the container.

This method searches for users asynchronously and with a low priority. If you want the task to execute the request with a higher priority, create an instance of [CKDiscoverUserIdentitiesOperation](../ckdiscoveruseridentitiesoperation.md) and configure it to use the necessary priority.
