> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecuseuserindependentkeychain](https://developer.apple.com/documentation/security/ksecuseuserindependentkeychain)

# kSecUseUserIndependentKeychain (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** tvOS 16.0+

A key with a value that indicates whether to store the data in a keychain available to anyone who uses the device.

## Declaration

```swift
let kSecUseUserIndependentKeychain: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBoolean](../corefoundation/cfboolean.md). A value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) stores the item in a shared keychain that your app can access even when a different user is active. A value of [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) or omitting this key-value pair stores the item in the current user’s keychain.

To view a sample code project that uses this key to streamline experiences like family media accounts, see [Mapping Apple TV users to app profiles](../tvservices/mapping-apple-tv-users-to-app-profiles.md).

# kSecUseUserIndependentKeychain (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** tvOS 16.0+

A key with a value that indicates whether to store the data in a keychain available to anyone who uses the device.

## Declaration

```objectivec
extern CFStringRef const kSecUseUserIndependentKeychain;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBooleanRef](../corefoundation/cfboolean.md). A value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) stores the item in a shared keychain that your app can access even when a different user is active. A value of [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) or omitting this key-value pair stores the item in the current user’s keychain.

To view a sample code project that uses this key to streamline experiences like family media accounts, see [Mapping Apple TV users to app profiles](../tvservices/mapping-apple-tv-users-to-app-profiles.md).
