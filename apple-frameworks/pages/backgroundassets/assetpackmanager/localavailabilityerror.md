> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager/localavailabilityerror](https://developer.apple.com/documentation/backgroundassets/assetpackmanager/localavailabilityerror)

# AssetPackManager.LocalAvailabilityError

**Framework:** Background Assets  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An error that provides information about local asset pack availability, distinguishing between successes and failures.

## Declaration

```swift
struct LocalAvailabilityError
```

## Mentioned In

- [Reducing download and storage demands with localized asset packs](../reducing-download-and-storage-demands-with-localized-asset-packs.md)

<a id="overview"></a>

## Overview

Inspect the [successes](localavailabilityerror/successes.md) property to determine the asset packs for which the system successfully ensured availability. The [failures](localavailabilityerror/failures.md) property provides a dictionary that maps from asset packs to errors that detail why the system couldn’t ensure their local availability.

## Topics

### Accessing availability status

- [successes](localavailabilityerror/successes.md): A set of asset packs for which the system successfully ensured local availability.
- [failures](localavailabilityerror/failures.md): A dictionary that maps asset packs to errors describing why the system couldn’t ensure their local availability.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [ManagedBackgroundAssetsError](../managedbackgroundassetserror.md): An error for a managed asset pack.
- [BAErrorDomain](../baerrordomain.md)
- [BAErrorCode](../baerrorcode.md)
