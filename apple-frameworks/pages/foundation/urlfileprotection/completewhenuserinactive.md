> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlfileprotection/completewhenuserinactive](https://developer.apple.com/documentation/foundation/urlfileprotection/completewhenuserinactive)

# completeWhenUserInactive (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An option that instructs the system to store the file in an encrypted format on-disk that your app can access only after device unlock and before expiration.

## Declaration

```swift
static let completeWhenUserInactive: URLFileProtection
```

<a id="Discussion"></a>

## Discussion

After the first unlock, your app can access the file and continue to access it even if the person using it subsequently locks the device. After access expires, your app can’t access the file until the person using the device unlocks it again.

## See Also

### Protection levels

- [complete](complete.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access for reading or writing to while the device is locked or booting.
- [completeUnlessOpen](completeunlessopen.md): An option that instructs the system to store the file in an encrypted format on-disk after it closes.
- [completeUntilFirstUserAuthentication](completeuntilfirstuserauthentication.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access until after the device boots.
- [none](none.md): An option that indicates the file has no special protections associated with it.

# NSURLFileProtectionCompleteWhenUserInactive (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An option that instructs the system to store the file in an encrypted format on-disk that your app can access only after device unlock and before expiration.

## Declaration

```objectivec
extern NSURLFileProtectionType const NSURLFileProtectionCompleteWhenUserInactive;
```

<a id="Discussion"></a>

## Discussion

After the first unlock, your app can access the file and continue to access it even if the person using it subsequently locks the device. After access expires, your app can’t access the file until the person using the device unlocks it again.

## See Also

### Protection levels

- [NSURLFileProtectionComplete](complete.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access for reading or writing to while the device is locked or booting.
- [NSURLFileProtectionCompleteUnlessOpen](completeunlessopen.md): An option that instructs the system to store the file in an encrypted format on-disk after it closes.
- [NSURLFileProtectionCompleteUntilFirstUserAuthentication](completeuntilfirstuserauthentication.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access until after the device boots.
- [NSURLFileProtectionNone](none.md): An option that indicates the file has no special protections associated with it.
