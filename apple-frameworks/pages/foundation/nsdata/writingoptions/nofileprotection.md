> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/writingoptions/nofileprotection](https://developer.apple.com/documentation/foundation/nsdata/writingoptions/nofileprotection)

# noFileProtection (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option to not encrypt the file when writing it out.

## Declaration

```swift
static var noFileProtection: NSData.WritingOptions { get }
```

<a id="Discussion"></a>

## Discussion

In this case, the system doesn’t store the file in an encrypted format and your app can access this file at boot time and while the device is unlocked.

## See Also

### Constants

- [atomic](atomic.md): An option to write data to an auxiliary file first and then replace the original file with the auxiliary file when the write completes.
- [withoutOverwriting](withoutoverwriting.md): An option that attempts to write data to a file and fails with an error if the destination file already exists.
- [completeFileProtection](completefileprotection.md): An option to make the file accessible only while the device is unlocked.
- [completeFileProtectionUnlessOpen](completefileprotectionunlessopen.md): An option to allow the file to be accessible while the device is unlocked or the file is already open.
- [completeFileProtectionUntilFirstUserAuthentication](completefileprotectionuntilfirstuserauthentication.md): An option to allow the file to be accessible after a user first unlocks the device.
- [fileProtectionMask](fileprotectionmask.md): An option the system uses when determining the file protection options that the system assigns to the data.
- [completeFileProtectionWhenUserInactive](completefileprotectionwhenuserinactive.md): An option to allow the file to be accessible after a user first unlocks the device.

# NSDataWritingFileProtectionNone (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option to not encrypt the file when writing it out.

## Declaration

```objectivec
NSDataWritingFileProtectionNone
```

<a id="Discussion"></a>

## Discussion

In this case, the system doesn’t store the file in an encrypted format and your app can access this file at boot time and while the device is unlocked.

## See Also

### Constants

- [NSDataWritingAtomic](atomic.md): An option to write data to an auxiliary file first and then replace the original file with the auxiliary file when the write completes.
- [NSDataWritingWithoutOverwriting](withoutoverwriting.md): An option that attempts to write data to a file and fails with an error if the destination file already exists.
- [NSDataWritingFileProtectionComplete](completefileprotection.md): An option to make the file accessible only while the device is unlocked.
- [NSDataWritingFileProtectionCompleteUnlessOpen](completefileprotectionunlessopen.md): An option to allow the file to be accessible while the device is unlocked or the file is already open.
- [NSDataWritingFileProtectionCompleteUntilFirstUserAuthentication](completefileprotectionuntilfirstuserauthentication.md): An option to allow the file to be accessible after a user first unlocks the device.
- [NSDataWritingFileProtectionMask](fileprotectionmask.md): An option the system uses when determining the file protection options that the system assigns to the data.
- [NSDataWritingFileProtectionCompleteWhenUserInactive](completefileprotectionwhenuserinactive.md): An option to allow the file to be accessible after a user first unlocks the device.
