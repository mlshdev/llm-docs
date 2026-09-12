> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/searchpathdomainmask](https://developer.apple.com/documentation/foundation/filemanager/searchpathdomainmask)

# FileManager.SearchPathDomainMask (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Domain constants specifying base locations to use when you search for significant directories.

## Declaration

```swift
struct SearchPathDomainMask
```

<a id="overview"></a>

## Overview

These constants are used by the [urls(for:in:)](urls%28for_in_%29.md) and [url(for:in:appropriateFor:create:)](url%28for_in_appropriatefor_create_%29.md) methods of FileManager.

## Topics

### Creating a Search Path Domain Mask

- [init(rawValue:)](searchpathdomainmask/init%28rawvalue_%29.md): Creates a search path domain mask.

### Specifying Search Path Domains

- [userDomainMask](searchpathdomainmask/userdomainmask.md): The user’s home directory—the place to install user’s personal items (`~`).
- [localDomainMask](searchpathdomainmask/localdomainmask.md): The place to install items available to everyone on this machine.
- [networkDomainMask](searchpathdomainmask/networkdomainmask.md): The place to install items available on the network (`/Network`).
- [systemDomainMask](searchpathdomainmask/systemdomainmask.md): A directory for system files provided by Apple (`/System`) .
- [allDomainsMask](searchpathdomainmask/alldomainsmask.md): All domains.

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

### Supporting Types

- [FileManager.DirectoryEnumerationOptions](directoryenumerationoptions.md): Options for enumerating the contents of directories.
- [FileManager.SearchPathDirectory](searchpathdirectory.md): The location of significant directories.
- [FileAttributeKey](../fileattributekey.md): Keys in dictionaries used to get and set file attributes.
- [FileAttributeType](../fileattributetype.md): Values representing a file’s type attribute.
- [FileProtectionType](../fileprotectiontype.md): Protection level values that can be associated with a file attribute key.
- [URLFileProtection](../urlfileprotection.md): Protection-level values for a URL resource key.

# NSSearchPathDomainMask (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Domain constants specifying base locations to use when you search for significant directories.

## Declaration

```objectivec
enum NSSearchPathDomainMask : NSUInteger;
```

<a id="overview"></a>

## Overview

These constants are used by the [URLsForDirectory:inDomains:](urls%28for_in_%29.md) and [URLForDirectory:inDomain:appropriateForURL:create:error:](url%28for_in_appropriatefor_create_%29.md) methods of FileManager.

## Topics

### Specifying Search Path Domains

- [NSUserDomainMask](searchpathdomainmask/userdomainmask.md): The user’s home directory—the place to install user’s personal items (`~`).
- [NSLocalDomainMask](searchpathdomainmask/localdomainmask.md): The place to install items available to everyone on this machine.
- [NSNetworkDomainMask](searchpathdomainmask/networkdomainmask.md): The place to install items available on the network (`/Network`).
- [NSSystemDomainMask](searchpathdomainmask/systemdomainmask.md): A directory for system files provided by Apple (`/System`) .
- [NSAllDomainsMask](searchpathdomainmask/alldomainsmask.md): All domains.

## See Also

### Supporting Types

- [NSDirectoryEnumerationOptions](directoryenumerationoptions.md): Options for enumerating the contents of directories.
- [NSSearchPathDirectory](searchpathdirectory.md): The location of significant directories.
- [NSFileAttributeKey](../fileattributekey.md): Keys in dictionaries used to get and set file attributes.
- [NSFileAttributeType](../fileattributetype.md): Values representing a file’s type attribute.
- [NSFileProtectionType](../fileprotectiontype.md): Protection level values that can be associated with a file attribute key.
- [NSURLFileProtectionType](../urlfileprotection.md): Protection-level values for a URL resource key.
