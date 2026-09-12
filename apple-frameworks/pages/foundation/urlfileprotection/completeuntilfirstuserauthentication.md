> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlfileprotection/completeuntilfirstuserauthentication](https://developer.apple.com/documentation/foundation/urlfileprotection/completeuntilfirstuserauthentication)

# completeUntilFirstUserAuthentication (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access until after the device boots.

## Declaration

```swift
static let completeUntilFirstUserAuthentication: URLFileProtection
```

<a id="Discussion"></a>

## Discussion

After the user unlocks the device for the first time, your app can access the file and continue to access it even if the user subsequently locks the device.

## See Also

### Protection levels

- [complete](complete.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access for reading or writing to while the device is locked or booting.
- [completeUnlessOpen](completeunlessopen.md): An option that instructs the system to store the file in an encrypted format on-disk after it closes.
- [completeWhenUserInactive](completewhenuserinactive.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can access only after device unlock and before expiration.
- [none](none.md): An option that indicates the file has no special protections associated with it.

# NSURLFileProtectionCompleteUntilFirstUserAuthentication (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access until after the device boots.

## Declaration

```objectivec
extern NSURLFileProtectionType const NSURLFileProtectionCompleteUntilFirstUserAuthentication;
```

<a id="Discussion"></a>

## Discussion

After the user unlocks the device for the first time, your app can access the file and continue to access it even if the user subsequently locks the device.

## See Also

### Protection levels

- [NSURLFileProtectionComplete](complete.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access for reading or writing to while the device is locked or booting.
- [NSURLFileProtectionCompleteUnlessOpen](completeunlessopen.md): An option that instructs the system to store the file in an encrypted format on-disk after it closes.
- [NSURLFileProtectionCompleteWhenUserInactive](completewhenuserinactive.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can access only after device unlock and before expiration.
- [NSURLFileProtectionNone](none.md): An option that indicates the file has no special protections associated with it.
