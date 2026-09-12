> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/writingoptions/completefileprotectionunlessopen](https://developer.apple.com/documentation/foundation/nsdata/writingoptions/completefileprotectionunlessopen)

# completeFileProtectionUnlessOpen (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option to allow the file to be accessible while the device is unlocked or the file is already open.

## Declaration

```swift
static var completeFileProtectionUnlessOpen: NSData.WritingOptions { get }
```

<a id="Discussion"></a>

## Discussion

In this case, your app cannot open the file to read it or write to it when the device is locked, but your app can create new files with this class. If one of these files is open when the device is locked, your app can read and write to the opened file.

## See Also

### Constants

- [atomic](atomic.md): An option to write data to an auxiliary file first and then replace the original file with the auxiliary file when the write completes.
- [withoutOverwriting](withoutoverwriting.md): An option that attempts to write data to a file and fails with an error if the destination file already exists.
- [noFileProtection](nofileprotection.md): An option to not encrypt the file when writing it out.
- [completeFileProtection](completefileprotection.md): An option to make the file accessible only while the device is unlocked.
- [completeFileProtectionUntilFirstUserAuthentication](completefileprotectionuntilfirstuserauthentication.md): An option to allow the file to be accessible after a user first unlocks the device.
- [fileProtectionMask](fileprotectionmask.md): An option the system uses when determining the file protection options that the system assigns to the data.
- [completeFileProtectionWhenUserInactive](completefileprotectionwhenuserinactive.md): An option to allow the file to be accessible after a user first unlocks the device.

# NSDataWritingFileProtectionCompleteUnlessOpen (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option to allow the file to be accessible while the device is unlocked or the file is already open.

## Declaration

```objectivec
NSDataWritingFileProtectionCompleteUnlessOpen
```

<a id="Discussion"></a>

## Discussion

In this case, your app cannot open the file to read it or write to it when the device is locked, but your app can create new files with this class. If one of these files is open when the device is locked, your app can read and write to the opened file.

## See Also

### Constants

- [NSDataWritingAtomic](atomic.md): An option to write data to an auxiliary file first and then replace the original file with the auxiliary file when the write completes.
- [NSDataWritingWithoutOverwriting](withoutoverwriting.md): An option that attempts to write data to a file and fails with an error if the destination file already exists.
- [NSDataWritingFileProtectionNone](nofileprotection.md): An option to not encrypt the file when writing it out.
- [NSDataWritingFileProtectionComplete](completefileprotection.md): An option to make the file accessible only while the device is unlocked.
- [NSDataWritingFileProtectionCompleteUntilFirstUserAuthentication](completefileprotectionuntilfirstuserauthentication.md): An option to allow the file to be accessible after a user first unlocks the device.
- [NSDataWritingFileProtectionMask](fileprotectionmask.md): An option the system uses when determining the file protection options that the system assigns to the data.
- [NSDataWritingFileProtectionCompleteWhenUserInactive](completefileprotectionwhenuserinactive.md): An option to allow the file to be accessible after a user first unlocks the device.
