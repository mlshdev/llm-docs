> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/bamanagederrorcode/bamanagederrorcodefilenotfound](https://developer.apple.com/documentation/backgroundassets/bamanagederrorcode/bamanagederrorcodefilenotfound)

# BAManagedErrorCodeFileNotFound

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An error code that indicates the system couldn’t find a file at the specified path.

## Declaration

```objectivec
BAManagedErrorCodeFileNotFound
```

<a id="discussion"></a>

## Discussion

Refer to the value in `-[NSError userInfo]` for the key `NSFilePathErrorKey` for the file path.

## See Also

### Errors

- [BAManagedErrorCodeAssetPackNotFound](bamanagederrorcodeassetpacknotfound.md): An error code that indicates the system couldn’t find an asset pack with the given identifier.
