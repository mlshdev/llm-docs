> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/writingoptions/completefileprotection](https://developer.apple.com/documentation/foundation/nsdata/writingoptions/completefileprotection)

# completeFileProtection (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option to make the file accessible only while the device is unlocked.

## Declaration

```swift
static var completeFileProtection: NSData.WritingOptions { get }
```

<a id="Discussion"></a>

## Discussion

In this case, the system stores the file in an encrypted format and your app may only read or write to the file while the device is unlocked. At all other times, any  attempts your app makes to read and write the file will fail.

## See Also

### Constants

- [atomic](atomic.md): An option to write data to an auxiliary file first and then replace the original file with the auxiliary file when the write completes.
- [withoutOverwriting](withoutoverwriting.md): An option that attempts to write data to a file and fails with an error if the destination file already exists.
- [noFileProtection](nofileprotection.md): An option to not encrypt the file when writing it out.
- [completeFileProtectionUnlessOpen](completefileprotectionunlessopen.md): An option to allow the file to be accessible while the device is unlocked or the file is already open.
- [completeFileProtectionUntilFirstUserAuthentication](completefileprotectionuntilfirstuserauthentication.md): An option to allow the file to be accessible after a user first unlocks the device.
- [fileProtectionMask](fileprotectionmask.md): An option the system uses when determining the file protection options that the system assigns to the data.
- [completeFileProtectionWhenUserInactive](completefileprotectionwhenuserinactive.md): An option to allow the file to be accessible after a user first unlocks the device.

# NSDataWritingFileProtectionComplete (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option to make the file accessible only while the device is unlocked.

## Declaration

```objectivec
NSDataWritingFileProtectionComplete
```

<a id="Discussion"></a>

## Discussion

In this case, the system stores the file in an encrypted format and your app may only read or write to the file while the device is unlocked. At all other times, any  attempts your app makes to read and write the file will fail.

## See Also

### Constants

- [NSDataWritingAtomic](atomic.md): An option to write data to an auxiliary file first and then replace the original file with the auxiliary file when the write completes.
- [NSDataWritingWithoutOverwriting](withoutoverwriting.md): An option that attempts to write data to a file and fails with an error if the destination file already exists.
- [NSDataWritingFileProtectionNone](nofileprotection.md): An option to not encrypt the file when writing it out.
- [NSDataWritingFileProtectionCompleteUnlessOpen](completefileprotectionunlessopen.md): An option to allow the file to be accessible while the device is unlocked or the file is already open.
- [NSDataWritingFileProtectionCompleteUntilFirstUserAuthentication](completefileprotectionuntilfirstuserauthentication.md): An option to allow the file to be accessible after a user first unlocks the device.
- [NSDataWritingFileProtectionMask](fileprotectionmask.md): An option the system uses when determining the file protection options that the system assigns to the data.
- [NSDataWritingFileProtectionCompleteWhenUserInactive](completefileprotectionwhenuserinactive.md): An option to allow the file to be accessible after a user first unlocks the device.
