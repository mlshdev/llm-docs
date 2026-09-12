> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/bamanagederrorcode](https://developer.apple.com/documentation/backgroundassets/bamanagederrorcode)

# BAManagedErrorCode

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An error code for a managed asset pack.

## Declaration

```objectivec
enum BAManagedErrorCode : NSInteger;
```

## Topics

### Errors

- [BAManagedErrorCodeAssetPackNotFound](bamanagederrorcode/bamanagederrorcodeassetpacknotfound.md): An error code that indicates the system couldn’t find an asset pack with the given identifier.
- [BAManagedErrorCodeFileNotFound](bamanagederrorcode/bamanagederrorcodefilenotfound.md): An error code that indicates the system couldn’t find a file at the specified path.

### Enumeration Cases

- [BAManagedErrorCodeLocalAvailabilityFailure](bamanagederrorcode/bamanagederrorcodelocalavailabilityfailure.md): An error code that indicates that the system couldn’t ensure the local availability of some or all of the requested asset packs.

## See Also

### Errors

- [BAAssetPackIdentifierErrorKey](baassetpackidentifiererrorkey.md): The `-[NSError userInfo]` key for an asset pack’s identifier.
- [BAManagedErrorDomain](bamanagederrordomain.md): The error domain for managed asset packs.
- [BAErrorDomain](baerrordomain.md)
- [BAErrorCode](baerrorcode.md)
