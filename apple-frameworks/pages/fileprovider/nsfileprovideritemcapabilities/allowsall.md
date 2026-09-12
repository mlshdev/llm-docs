> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemcapabilities/allowsall](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemcapabilities/allowsall)

# allowsAll (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 11.0+ (deprecated in 15.0) · macOS 11.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

A convenience value for enabling all capabilities.

> This capability is no longer supported, and does not contain all capabilities. Please migrate to directly specifying each of the individual capabilities that should be allowed for the item.

## Declaration

```swift
static var allowsAll: NSFileProviderItemCapabilities { get }
```

## See Also

### Constants

- [allowsAddingSubItems](allowsaddingsubitems.md): A value indicating that the user can add subitems.
- [allowsContentEnumerating](allowscontentenumerating.md): A value indicating that the item’s contents can be enumerated.
- [allowsDeleting](allowsdeleting.md): A value indicating that the item can be deleted.
- [allowsEvicting](allowsevicting.md): Deprecated. A value indicating that the system can delete the local copy of the item.
- [allowsReading](allowsreading.md): A value indicating that the value can be read from.
- [allowsRenaming](allowsrenaming.md): A value indicating that the item can be renamed.
- [allowsReparenting](allowsreparenting.md): A value indicating that the item can be moved.
- [allowsTrashing](allowstrashing.md): A value indicating that the item can be moved to the trash.
- [allowsWriting](allowswriting.md): A value indicating that the item can be written to.
- [allowsExcludingFromSync](allowsexcludingfromsync.md): A value indicating that the user can exclude the item from sync operations.

# NSFileProviderItemCapabilitiesAllowsAll (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 11.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

A convenience value for enabling all capabilities.

> This capability is no longer supported, and does not contain all capabilities. Please migrate to directly specifying each of the individual capabilities that should be allowed for the item.

## Declaration

```objectivec
NSFileProviderItemCapabilitiesAllowsAll
```

## See Also

### Constants

- [NSFileProviderItemCapabilitiesAllowsAddingSubItems](allowsaddingsubitems.md): A value indicating that the user can add subitems.
- [NSFileProviderItemCapabilitiesAllowsContentEnumerating](allowscontentenumerating.md): A value indicating that the item’s contents can be enumerated.
- [NSFileProviderItemCapabilitiesAllowsDeleting](allowsdeleting.md): A value indicating that the item can be deleted.
- [NSFileProviderItemCapabilitiesAllowsEvicting](allowsevicting.md): Deprecated. A value indicating that the system can delete the local copy of the item.
- [NSFileProviderItemCapabilitiesAllowsReading](allowsreading.md): A value indicating that the value can be read from.
- [NSFileProviderItemCapabilitiesAllowsRenaming](allowsrenaming.md): A value indicating that the item can be renamed.
- [NSFileProviderItemCapabilitiesAllowsReparenting](allowsreparenting.md): A value indicating that the item can be moved.
- [NSFileProviderItemCapabilitiesAllowsTrashing](allowstrashing.md): A value indicating that the item can be moved to the trash.
- [NSFileProviderItemCapabilitiesAllowsWriting](allowswriting.md): A value indicating that the item can be written to.
- [NSFileProviderItemCapabilitiesAllowsExcludingFromSync](allowsexcludingfromsync.md): A value indicating that the user can exclude the item from sync operations.
