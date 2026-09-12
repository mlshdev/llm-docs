> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlfileprotection/complete](https://developer.apple.com/documentation/foundation/urlfileprotection/complete)

# complete (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access for reading or writing to while the device is locked or booting.

## Declaration

```swift
static let complete: URLFileProtection
```

## See Also

### Protection levels

- [completeUnlessOpen](completeunlessopen.md): An option that instructs the system to store the file in an encrypted format on-disk after it closes.
- [completeUntilFirstUserAuthentication](completeuntilfirstuserauthentication.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access until after the device boots.
- [completeWhenUserInactive](completewhenuserinactive.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can access only after device unlock and before expiration.
- [none](none.md): An option that indicates the file has no special protections associated with it.

# NSURLFileProtectionComplete (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access for reading or writing to while the device is locked or booting.

## Declaration

```objectivec
extern NSURLFileProtectionType const NSURLFileProtectionComplete;
```

## See Also

### Protection levels

- [NSURLFileProtectionCompleteUnlessOpen](completeunlessopen.md): An option that instructs the system to store the file in an encrypted format on-disk after it closes.
- [NSURLFileProtectionCompleteUntilFirstUserAuthentication](completeuntilfirstuserauthentication.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access until after the device boots.
- [NSURLFileProtectionCompleteWhenUserInactive](completewhenuserinactive.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can access only after device unlock and before expiration.
- [NSURLFileProtectionNone](none.md): An option that indicates the file has no special protections associated with it.
