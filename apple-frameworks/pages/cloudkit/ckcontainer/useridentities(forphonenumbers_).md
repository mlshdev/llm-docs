> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckcontainer/useridentities(forphonenumbers:)](https://developer.apple.com/documentation/cloudkit/ckcontainer/useridentities(forphonenumbers:))

# userIdentities(forPhoneNumbers:)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · tvOS 15.0+ (deprecated in 17.0) · visionOS · watchOS 8.0+ (deprecated in 10.0)

Fetches the user identities for the specified phone numbers and returns them to an awaiting caller.

> No longer supported. Please see Sharing CloudKit Data with Other iCloud Users.

## Declaration

```swift
func userIdentities(forPhoneNumbers phoneNumbers: [String]) async throws -> [String : CKUserIdentity]
```

## Parameters

- `phoneNumbers`: The users’ phone numbers.

<a id="return-value"></a>

## Return Value

A [Result](https://developer.apple.com/documentation/swift/result) that contains either a dictionary of user identities, or an error that describes why CloudKit can’t discover the phone numbers.

In the successful case, the dictionary uses the phone numbers you specify in `phoneNumbers` as its keys. Only successfully discovered user identities are present in this dictionary.

<a id="discussion"></a>

## Discussion

Use this method to retrieve the identities of users who the current user knows. The users you’re searching for must meet the following criteria:

- The user has run the app.
- The user grants the [userDiscoverability](applicationpermissions/userdiscoverability.md) permission for the container.

This method searches for users asynchronously and with a low priority. If you want the task to execute the request with a higher priority, create an instance of [CKDiscoverUserIdentitiesOperation](../ckdiscoveruseridentitiesoperation.md) and configure it to use the necessary priority.
