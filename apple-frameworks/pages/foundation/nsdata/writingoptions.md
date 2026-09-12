> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/writingoptions](https://developer.apple.com/documentation/foundation/nsdata/writingoptions)

# NSData.WritingOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for methods used to write data objects.

## Declaration

```swift
struct WritingOptions
```

## Topics

### Initializers

- [init(rawValue:)](writingoptions/init%28rawvalue_%29.md)

### Constants

- [atomic](writingoptions/atomic.md): An option to write data to an auxiliary file first and then replace the original file with the auxiliary file when the write completes.
- [withoutOverwriting](writingoptions/withoutoverwriting.md): An option that attempts to write data to a file and fails with an error if the destination file already exists.
- [noFileProtection](writingoptions/nofileprotection.md): An option to not encrypt the file when writing it out.
- [completeFileProtection](writingoptions/completefileprotection.md): An option to make the file accessible only while the device is unlocked.
- [completeFileProtectionUnlessOpen](writingoptions/completefileprotectionunlessopen.md): An option to allow the file to be accessible while the device is unlocked or the file is already open.
- [completeFileProtectionUntilFirstUserAuthentication](writingoptions/completefileprotectionuntilfirstuserauthentication.md): An option to allow the file to be accessible after a user first unlocks the device.
- [fileProtectionMask](writingoptions/fileprotectionmask.md): An option the system uses when determining the file protection options that the system assigns to the data.
- [completeFileProtectionWhenUserInactive](writingoptions/completefileprotectionwhenuserinactive.md): An option to allow the file to be accessible after a user first unlocks the device.

### Legacy Constants

- [atomicWrite](writingoptions/atomicwrite.md): Deprecated. An option that attempts to write data to an auxiliary file first and then exchange the files.
- [atomicWrite](writingoptions/atomicwrite.md): Deprecated. An option that attempts to write data to an auxiliary file first and then exchange the files.

### Entitlements

- [Data Protection Entitlement](../../bundleresources/entitlements/com.apple.developer.default-data-protection.md): The level of data protection for sensitive user data when an app accesses it on a device.

### Instance Methods

- [contains(\_:)](writingoptions/contains%28__%29.md)
- [formIntersection(\_:)](writingoptions/formintersection%28__%29.md)
- [formSymmetricDifference(\_:)](writingoptions/formsymmetricdifference%28__%29.md)
- [formUnion(\_:)](writingoptions/formunion%28__%29.md)
- [insert(\_:)](writingoptions/insert%28__%29.md)
- [isSubset(of:)](writingoptions/issubset%28of_%29.md)
- [remove(\_:)](writingoptions/remove%28__%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Writing Data to a File

- [write(toFile:atomically:)](write%28tofile_atomically_%29.md): Writes the data object’s bytes to the file specified by a given path.
- [write(toFile:options:)](write%28tofile_options_%29.md): Writes the data object’s bytes to the file specified by a given path.
- [write(to:atomically:)](write%28to_atomically_%29.md): Writes the data object’s bytes to the location specified by a given URL.
- [write(to:options:)](write%28to_options_%29.md): Writes the data object’s bytes to the location specified by a given URL.

# NSDataWritingOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for methods used to write data objects.

## Declaration

```objectivec
enum NSDataWritingOptions : NSUInteger;
```

## Topics

### Constants

- [NSDataWritingAtomic](writingoptions/atomic.md): An option to write data to an auxiliary file first and then replace the original file with the auxiliary file when the write completes.
- [NSDataWritingWithoutOverwriting](writingoptions/withoutoverwriting.md): An option that attempts to write data to a file and fails with an error if the destination file already exists.
- [NSDataWritingFileProtectionNone](writingoptions/nofileprotection.md): An option to not encrypt the file when writing it out.
- [NSDataWritingFileProtectionComplete](writingoptions/completefileprotection.md): An option to make the file accessible only while the device is unlocked.
- [NSDataWritingFileProtectionCompleteUnlessOpen](writingoptions/completefileprotectionunlessopen.md): An option to allow the file to be accessible while the device is unlocked or the file is already open.
- [NSDataWritingFileProtectionCompleteUntilFirstUserAuthentication](writingoptions/completefileprotectionuntilfirstuserauthentication.md): An option to allow the file to be accessible after a user first unlocks the device.
- [NSDataWritingFileProtectionMask](writingoptions/fileprotectionmask.md): An option the system uses when determining the file protection options that the system assigns to the data.
- [NSDataWritingFileProtectionCompleteWhenUserInactive](writingoptions/completefileprotectionwhenuserinactive.md): An option to allow the file to be accessible after a user first unlocks the device.

### Legacy Constants

- [NSAtomicWrite](writingoptions/atomicwrite.md): Deprecated. An option that attempts to write data to an auxiliary file first and then exchange the files.
- [NSAtomicWrite](writingoptions/atomicwrite.md): Deprecated. An option that attempts to write data to an auxiliary file first and then exchange the files.

### Entitlements

- [Data Protection Entitlement](../../bundleresources/entitlements/com.apple.developer.default-data-protection.md): The level of data protection for sensitive user data when an app accesses it on a device.

## See Also

### Writing Data to a File

- [writeToFile:atomically:](write%28tofile_atomically_%29.md): Writes the data object’s bytes to the file specified by a given path.
- [writeToFile:options:error:](write%28tofile_options_%29.md): Writes the data object’s bytes to the file specified by a given path.
- [writeToURL:atomically:](write%28to_atomically_%29.md): Writes the data object’s bytes to the location specified by a given URL.
- [writeToURL:options:error:](write%28to_options_%29.md): Writes the data object’s bytes to the location specified by a given URL.
