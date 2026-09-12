> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/managedbackgroundassetserror](https://developer.apple.com/documentation/backgroundassets/managedbackgroundassetserror)

# ManagedBackgroundAssetsError

**Framework:** Background Assets  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An error for a managed asset pack.

## Declaration

```swift
enum ManagedBackgroundAssetsError
```

## Topics

### Errors

- [ManagedBackgroundAssetsError.assetPackNotFound(withID:)](managedbackgroundassetserror/assetpacknotfound%28withid_%29.md): An error that’s thrown when the system can’t find an asset pack with the given ID.
- [ManagedBackgroundAssetsError.fileNotFound(at:)](managedbackgroundassetserror/filenotfound%28at_%29.md): An error that’s thrown when the system can’t find a file at the specified path.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [BAErrorDomain](baerrordomain.md)
- [BAErrorCode](baerrorcode.md)
- [AssetPackManager.LocalAvailabilityError](assetpackmanager/localavailabilityerror.md): An error that provides information about local asset pack availability, distinguishing between successes and failures.
