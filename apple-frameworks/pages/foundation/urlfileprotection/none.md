> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlfileprotection/none](https://developer.apple.com/documentation/foundation/urlfileprotection/none)

# none (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option that indicates the file has no special protections associated with it.

## Declaration

```swift
static let none: URLFileProtection
```

<a id="Discussion"></a>

## Discussion

A file with this type of protection can be read from or written to at any time.

## See Also

### Protection levels

- [complete](complete.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access for reading or writing to while the device is locked or booting.
- [completeUnlessOpen](completeunlessopen.md): An option that instructs the system to store the file in an encrypted format on-disk after it closes.
- [completeUntilFirstUserAuthentication](completeuntilfirstuserauthentication.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access until after the device boots.
- [completeWhenUserInactive](completewhenuserinactive.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can access only after device unlock and before expiration.

# NSURLFileProtectionNone (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option that indicates the file has no special protections associated with it.

## Declaration

```objectivec
extern NSURLFileProtectionType const NSURLFileProtectionNone;
```

<a id="Discussion"></a>

## Discussion

A file with this type of protection can be read from or written to at any time.

## See Also

### Protection levels

- [NSURLFileProtectionComplete](complete.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access for reading or writing to while the device is locked or booting.
- [NSURLFileProtectionCompleteUnlessOpen](completeunlessopen.md): An option that instructs the system to store the file in an encrypted format on-disk after it closes.
- [NSURLFileProtectionCompleteUntilFirstUserAuthentication](completeuntilfirstuserauthentication.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access until after the device boots.
- [NSURLFileProtectionCompleteWhenUserInactive](completewhenuserinactive.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can access only after device unlock and before expiration.
