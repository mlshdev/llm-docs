> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/homeaccesscontrol(for:)](https://developer.apple.com/documentation/homekit/hmhome/homeaccesscontrol(for:))

# homeAccessControl(for:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the access level of a user associated with the home.

## Declaration

```swift
func homeAccessControl(for user: HMUser) -> HMHomeAccessControl
```

## Parameters

- `user`: The user whose access level you wish to retrieve.

<a id="return-value"></a>

## Return Value

The access level associated with the user.

## See Also

### Controlling user access

- [HMHomeAccessControl](../hmhomeaccesscontrol.md): The access privileges of a user associated with a home.
- [HMAccessControl](../hmaccesscontrol.md): An abstract superclass for accessing user privileges.
- [HMUserFailedAccessoriesKey](../hmuserfailedaccessorieskey.md): Deprecated. The key for retrieving details of what accessories failed to add or remove a user.

# homeAccessControlForUser: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the access level of a user associated with the home.

## Declaration

```objectivec
- (HMHomeAccessControl *) homeAccessControlForUser:(HMUser *) user;
```

## Parameters

- `user`: The user whose access level you wish to retrieve.

<a id="return-value"></a>

## Return Value

The access level associated with the user.

## See Also

### Controlling user access

- [HMHomeAccessControl](../hmhomeaccesscontrol.md): The access privileges of a user associated with a home.
- [HMAccessControl](../hmaccesscontrol.md): An abstract superclass for accessing user privileges.
- [HMUserFailedAccessoriesKey](../hmuserfailedaccessorieskey.md): Deprecated. The key for retrieving details of what accessories failed to add or remove a user.
