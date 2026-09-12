> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlfileprotection](https://developer.apple.com/documentation/foundation/urlfileprotection)

# URLFileProtection (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Protection-level values for a URL resource key.

## Declaration

```swift
struct URLFileProtection
```

<a id="overview"></a>

## Overview

These are values for the [URLResourceKey](urlresourcekey.md) key [fileProtectionKey](urlresourcekey/fileprotectionkey.md).

## Topics

### Creating a URL File Protection Type

- [init(rawValue:)](urlfileprotection/init%28rawvalue_%29.md): Creates a URL file protection type value.

### Protection levels

- [complete](urlfileprotection/complete.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access for reading or writing to while the device is locked or booting.
- [completeUnlessOpen](urlfileprotection/completeunlessopen.md): An option that instructs the system to store the file in an encrypted format on-disk after it closes.
- [completeUntilFirstUserAuthentication](urlfileprotection/completeuntilfirstuserauthentication.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access until after the device boots.
- [completeWhenUserInactive](urlfileprotection/completewhenuserinactive.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can access only after device unlock and before expiration.
- [none](urlfileprotection/none.md): An option that indicates the file has no special protections associated with it.

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
- [FileProtectionType](fileprotectiontype.md): Protection level values that can be associated with a file attribute key.

# NSURLFileProtectionType (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Protection-level values for a URL resource key.

## Declaration

```objectivec
typedef NSString * NSURLFileProtectionType;
```

<a id="overview"></a>

## Overview

These are values for the [NSURLResourceKey](urlresourcekey.md) key [NSURLFileProtectionKey](urlresourcekey/fileprotectionkey.md).

## Topics

### Protection levels

- [NSURLFileProtectionComplete](urlfileprotection/complete.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access for reading or writing to while the device is locked or booting.
- [NSURLFileProtectionCompleteUnlessOpen](urlfileprotection/completeunlessopen.md): An option that instructs the system to store the file in an encrypted format on-disk after it closes.
- [NSURLFileProtectionCompleteUntilFirstUserAuthentication](urlfileprotection/completeuntilfirstuserauthentication.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can’t access until after the device boots.
- [NSURLFileProtectionCompleteWhenUserInactive](urlfileprotection/completewhenuserinactive.md): An option that instructs the system to store the file in an encrypted format on-disk that your app can access only after device unlock and before expiration.
- [NSURLFileProtectionNone](urlfileprotection/none.md): An option that indicates the file has no special protections associated with it.

## See Also

### Supporting Types

- [NSDirectoryEnumerationOptions](filemanager/directoryenumerationoptions.md): Options for enumerating the contents of directories.
- [NSSearchPathDirectory](filemanager/searchpathdirectory.md): The location of significant directories.
- [NSSearchPathDomainMask](filemanager/searchpathdomainmask.md): Domain constants specifying base locations to use when you search for significant directories.
- [NSFileAttributeKey](fileattributekey.md): Keys in dictionaries used to get and set file attributes.
- [NSFileAttributeType](fileattributetype.md): Values representing a file’s type attribute.
- [NSFileProtectionType](fileprotectiontype.md): Protection level values that can be associated with a file attribute key.
