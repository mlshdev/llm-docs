> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/writingoptions/completefileprotectionuntilfirstuserauthentication](https://developer.apple.com/documentation/foundation/nsdata/writingoptions/completefileprotectionuntilfirstuserauthentication)

# completeFileProtectionUntilFirstUserAuthentication (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option to allow the file to be accessible after a user first unlocks the device.

## Declaration

```swift
static var completeFileProtectionUntilFirstUserAuthentication: NSData.WritingOptions { get }
```

<a id="Discussion"></a>

## Discussion

In this case, the app can read or write to the file while the device is unlocked, but while it’s booting up, the file has the protection equivalent to [completeFileProtection](completefileprotection.md).

## See Also

### Constants

- [atomic](atomic.md): An option to write data to an auxiliary file first and then replace the original file with the auxiliary file when the write completes.
- [withoutOverwriting](withoutoverwriting.md): An option that attempts to write data to a file and fails with an error if the destination file already exists.
- [noFileProtection](nofileprotection.md): An option to not encrypt the file when writing it out.
- [completeFileProtection](completefileprotection.md): An option to make the file accessible only while the device is unlocked.
- [completeFileProtectionUnlessOpen](completefileprotectionunlessopen.md): An option to allow the file to be accessible while the device is unlocked or the file is already open.
- [fileProtectionMask](fileprotectionmask.md): An option the system uses when determining the file protection options that the system assigns to the data.
- [completeFileProtectionWhenUserInactive](completefileprotectionwhenuserinactive.md): An option to allow the file to be accessible after a user first unlocks the device.

# NSDataWritingFileProtectionCompleteUntilFirstUserAuthentication (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option to allow the file to be accessible after a user first unlocks the device.

## Declaration

```objectivec
NSDataWritingFileProtectionCompleteUntilFirstUserAuthentication
```

<a id="Discussion"></a>

## Discussion

In this case, the app can read or write to the file while the device is unlocked, but while it’s booting up, the file has the protection equivalent to [NSDataWritingFileProtectionComplete](completefileprotection.md).

## See Also

### Constants

- [NSDataWritingAtomic](atomic.md): An option to write data to an auxiliary file first and then replace the original file with the auxiliary file when the write completes.
- [NSDataWritingWithoutOverwriting](withoutoverwriting.md): An option that attempts to write data to a file and fails with an error if the destination file already exists.
- [NSDataWritingFileProtectionNone](nofileprotection.md): An option to not encrypt the file when writing it out.
- [NSDataWritingFileProtectionComplete](completefileprotection.md): An option to make the file accessible only while the device is unlocked.
- [NSDataWritingFileProtectionCompleteUnlessOpen](completefileprotectionunlessopen.md): An option to allow the file to be accessible while the device is unlocked or the file is already open.
- [NSDataWritingFileProtectionMask](fileprotectionmask.md): An option the system uses when determining the file protection options that the system assigns to the data.
- [NSDataWritingFileProtectionCompleteWhenUserInactive](completefileprotectionwhenuserinactive.md): An option to allow the file to be accessible after a user first unlocks the device.
