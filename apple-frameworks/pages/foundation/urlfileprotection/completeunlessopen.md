> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlfileprotection/completeunlessopen](https://developer.apple.com/documentation/foundation/urlfileprotection/completeunlessopen)

# completeUnlessOpen (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option that instructs the system to store the file in an encrypted format on-disk after it closes.

## Declaration

```swift
static let completeUnlessOpen: URLFileProtection
```

<a id="Discussion"></a>

## Discussion

Files with this type of protection can be created while the device is locked, but once closed, cannot be opened again until the device is unlocked. If the file is opened when unlocked, you may continue to access the file normally, even if the user locks the device. There is a small performance penalty when the file is created and opened, though not when being written to or read from. This can be mitigated by changing the file protection to [complete](complete.md) when the device is unlocked.

## See Also

### Protection levels

- [complete](complete.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access for reading or writing to while the device is locked or booting.
- [completeUntilFirstUserAuthentication](completeuntilfirstuserauthentication.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access until after the device boots.
- [completeWhenUserInactive](completewhenuserinactive.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can access only after device unlock and before expiration.
- [none](none.md): An option that indicates the file has no special protections associated with it.

# NSURLFileProtectionCompleteUnlessOpen (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option that instructs the system to store the file in an encrypted format on-disk after it closes.

## Declaration

```objectivec
extern NSURLFileProtectionType const NSURLFileProtectionCompleteUnlessOpen;
```

<a id="Discussion"></a>

## Discussion

Files with this type of protection can be created while the device is locked, but once closed, cannot be opened again until the device is unlocked. If the file is opened when unlocked, you may continue to access the file normally, even if the user locks the device. There is a small performance penalty when the file is created and opened, though not when being written to or read from. This can be mitigated by changing the file protection to [NSURLFileProtectionComplete](complete.md) when the device is unlocked.

## See Also

### Protection levels

- [NSURLFileProtectionComplete](complete.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access for reading or writing to while the device is locked or booting.
- [NSURLFileProtectionCompleteUntilFirstUserAuthentication](completeuntilfirstuserauthentication.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access until after the device boots.
- [NSURLFileProtectionCompleteWhenUserInactive](completewhenuserinactive.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can access only after device unlock and before expiration.
- [NSURLFileProtectionNone](none.md): An option that indicates the file has no special protections associated with it.
