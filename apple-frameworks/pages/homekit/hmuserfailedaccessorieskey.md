> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmuserfailedaccessorieskey](https://developer.apple.com/documentation/homekit/hmuserfailedaccessorieskey)

# HMUserFailedAccessoriesKey (Swift)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 8.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

The key for retrieving details of what accessories failed to add or remove a user.

> No longer supported

## Declaration

```swift
let HMUserFailedAccessoriesKey: String
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSArray](../foundation/nsarray.md) of [NSDictionary](../foundation/nsdictionary.md) objects. Each dictionary contains the [NSUUID](../foundation/nsuuid.md) of the accessory that failed to be added/removed and the value corresponding to the dictionary key is an [NSError](../foundation/nserror.md) that provides more details on the underlying error for that accessory.

## See Also

### Controlling user access

- [homeAccessControl(for:)](hmhome/homeaccesscontrol%28for_%29.md): Retrieves the access level of a user associated with the home.
- [HMHomeAccessControl](hmhomeaccesscontrol.md): The access privileges of a user associated with a home.
- [HMAccessControl](hmaccesscontrol.md): An abstract superclass for accessing user privileges.

# HMUserFailedAccessoriesKey (Objective-C)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

The key for retrieving details of what accessories failed to add or remove a user.

> No longer supported

## Declaration

```objectivec
extern NSString * const HMUserFailedAccessoriesKey;
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSArray](../foundation/nsarray.md) of [NSDictionary](../foundation/nsdictionary.md) objects. Each dictionary contains the [NSUUID](../foundation/nsuuid.md) of the accessory that failed to be added/removed and the value corresponding to the dictionary key is an [NSError](../foundation/nserror.md) that provides more details on the underlying error for that accessory.

## See Also

### Controlling user access

- [homeAccessControlForUser:](hmhome/homeaccesscontrol%28for_%29.md): Retrieves the access level of a user associated with the home.
- [HMHomeAccessControl](hmhomeaccesscontrol.md): The access privileges of a user associated with a home.
- [HMAccessControl](hmaccesscontrol.md): An abstract superclass for accessing user privileges.
