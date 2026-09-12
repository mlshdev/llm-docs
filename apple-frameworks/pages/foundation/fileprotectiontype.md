> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/fileprotectiontype](https://developer.apple.com/documentation/foundation/fileprotectiontype)

# FileProtectionType (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Protection level values that can be associated with a file attribute key.

## Declaration

```swift
struct FileProtectionType
```

<a id="overview"></a>

## Overview

These values are associated with the [protectionKey](fileattributekey/protectionkey.md) key.

## Topics

### Creating a File Protection Type

- [init(rawValue:)](fileprotectiontype/init%28rawvalue_%29.md): Creates a file protection type value.

### Working with Protection Levels

- [complete](fileprotectiontype/complete.md): The file is stored in an encrypted format on disk and cannot be read from or written to while the device is locked or booting.
- [completeUnlessOpen](fileprotectiontype/completeunlessopen.md): The file is stored in an encrypted format on disk after it is closed.
- [completeUntilFirstUserAuthentication](fileprotectiontype/completeuntilfirstuserauthentication.md): The file is stored in an encrypted format on disk and cannot be accessed until after the device has booted.
- [none](fileprotectiontype/none.md): The file has no special protections associated with it.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting Types

- [FileManager.DirectoryEnumerationOptions](filemanager/directoryenumerationoptions.md): Options for enumerating the contents of directories.
- [FileManager.SearchPathDirectory](filemanager/searchpathdirectory.md): The location of significant directories.
- [FileManager.SearchPathDomainMask](filemanager/searchpathdomainmask.md): Domain constants specifying base locations to use when you search for significant directories.
- [FileAttributeKey](fileattributekey.md): Keys in dictionaries used to get and set file attributes.
- [FileAttributeType](fileattributetype.md): Values representing a file’s type attribute.
- [URLFileProtection](urlfileprotection.md): Protection-level values for a URL resource key.

# NSFileProtectionType (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Protection level values that can be associated with a file attribute key.

## Declaration

```objectivec
typedef NSString * NSFileProtectionType;
```

<a id="overview"></a>

## Overview

These values are associated with the [NSFileProtectionKey](fileattributekey/protectionkey.md) key.

## Topics

### Working with Protection Levels

- [NSFileProtectionComplete](fileprotectiontype/complete.md): The file is stored in an encrypted format on disk and cannot be read from or written to while the device is locked or booting.
- [NSFileProtectionCompleteUnlessOpen](fileprotectiontype/completeunlessopen.md): The file is stored in an encrypted format on disk after it is closed.
- [NSFileProtectionCompleteUntilFirstUserAuthentication](fileprotectiontype/completeuntilfirstuserauthentication.md): The file is stored in an encrypted format on disk and cannot be accessed until after the device has booted.
- [NSFileProtectionNone](fileprotectiontype/none.md): The file has no special protections associated with it.

## See Also

### Supporting Types

- [NSDirectoryEnumerationOptions](filemanager/directoryenumerationoptions.md): Options for enumerating the contents of directories.
- [NSSearchPathDirectory](filemanager/searchpathdirectory.md): The location of significant directories.
- [NSSearchPathDomainMask](filemanager/searchpathdomainmask.md): Domain constants specifying base locations to use when you search for significant directories.
- [NSFileAttributeKey](fileattributekey.md): Keys in dictionaries used to get and set file attributes.
- [NSFileAttributeType](fileattributetype.md): Values representing a file’s type attribute.
- [NSURLFileProtectionType](urlfileprotection.md): Protection-level values for a URL resource key.
