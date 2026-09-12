> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/writingoptions/completefileprotectionwhenuserinactive](https://developer.apple.com/documentation/foundation/nsdata/writingoptions/completefileprotectionwhenuserinactive)

# completeFileProtectionWhenUserInactive (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An option to allow the file to be accessible after a user first unlocks the device.

## Declaration

```swift
static var completeFileProtectionWhenUserInactive: NSData.WritingOptions { get }
```

<a id="discussion"></a>

## Discussion

The app can read or write to the file while the device is unlocked, but while it’s booting up, the file has the protection equivalent to `NSDataWritingFileProtectionComplete`.

## See Also

### Constants

- [atomic](atomic.md): An option to write data to an auxiliary file first and then replace the original file with the auxiliary file when the write completes.
- [withoutOverwriting](withoutoverwriting.md): An option that attempts to write data to a file and fails with an error if the destination file already exists.
- [noFileProtection](nofileprotection.md): An option to not encrypt the file when writing it out.
- [completeFileProtection](completefileprotection.md): An option to make the file accessible only while the device is unlocked.
- [completeFileProtectionUnlessOpen](completefileprotectionunlessopen.md): An option to allow the file to be accessible while the device is unlocked or the file is already open.
- [completeFileProtectionUntilFirstUserAuthentication](completefileprotectionuntilfirstuserauthentication.md): An option to allow the file to be accessible after a user first unlocks the device.
- [fileProtectionMask](fileprotectionmask.md): An option the system uses when determining the file protection options that the system assigns to the data.

# NSDataWritingFileProtectionCompleteWhenUserInactive (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An option to allow the file to be accessible after a user first unlocks the device.

## Declaration

```objectivec
NSDataWritingFileProtectionCompleteWhenUserInactive
```

<a id="discussion"></a>

## Discussion

The app can read or write to the file while the device is unlocked, but while it’s booting up, the file has the protection equivalent to `NSDataWritingFileProtectionComplete`.

## See Also

### Constants

- [NSDataWritingAtomic](atomic.md): An option to write data to an auxiliary file first and then replace the original file with the auxiliary file when the write completes.
- [NSDataWritingWithoutOverwriting](withoutoverwriting.md): An option that attempts to write data to a file and fails with an error if the destination file already exists.
- [NSDataWritingFileProtectionNone](nofileprotection.md): An option to not encrypt the file when writing it out.
- [NSDataWritingFileProtectionComplete](completefileprotection.md): An option to make the file accessible only while the device is unlocked.
- [NSDataWritingFileProtectionCompleteUnlessOpen](completefileprotectionunlessopen.md): An option to allow the file to be accessible while the device is unlocked or the file is already open.
- [NSDataWritingFileProtectionCompleteUntilFirstUserAuthentication](completefileprotectionuntilfirstuserauthentication.md): An option to allow the file to be accessible after a user first unlocks the device.
- [NSDataWritingFileProtectionMask](fileprotectionmask.md): An option the system uses when determining the file protection options that the system assigns to the data.
