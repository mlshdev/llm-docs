> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/useridentity(foremailaddress:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/useridentity(foremailaddress:))

# userIdentity(forEmailAddress:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · tvOS 15.0+ (deprecated in 17.0) · visionOS · watchOS 8.0+ (deprecated in 10.0)

Fetches the user identity for the specified email address.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```swift
func userIdentity(forEmailAddress email: String) async throws -> CKUserIdentity?
```

## Parameters

- `email`: The user’s email address.

<a id="return-value"></a>

## Return Value

The user identity for the email address.

<a id="discussion"></a>

## Discussion

Use this method to retrieve the identity of a user who the current user knows. The user you’re searching for must meet the following criteria:

- The user has run the app.
- The user grants the [userDiscoverability](applicationpermissions/userdiscoverability.md) permission for the container.

This method searches for the user asynchronously and with a low priority. If you want the task to execute the request with a higher priority, create an instance of [CKDiscoverUserIdentitiesOperation](../ckdiscoveruseridentitiesoperation.md) and configure it to use the necessary priority.
