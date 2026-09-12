> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemcapabilities/allowsexcludingfromsync](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemcapabilities/allowsexcludingfromsync)

# allowsExcludingFromSync (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** macOS 11.3+

A value indicating that the user can exclude the item from sync operations.

## Declaration

```swift
static var allowsExcludingFromSync: NSFileProviderItemCapabilities { get }
```

<a id="Discussion"></a>

## Discussion

The user can choose to exclude the item from syncs (for example, in Finder’s user interface). If the user excludes an item, the system stops monitoring changes for the item and its children, and removes the item from the file provider.

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
- [allowsAll](allowsall.md): Deprecated. A convenience value for enabling all capabilities.

# NSFileProviderItemCapabilitiesAllowsExcludingFromSync (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** macOS 11.3+

A value indicating that the user can exclude the item from sync operations.

## Declaration

```objectivec
NSFileProviderItemCapabilitiesAllowsExcludingFromSync
```

<a id="Discussion"></a>

## Discussion

The user can choose to exclude the item from syncs (for example, in Finder’s user interface). If the user excludes an item, the system stops monitoring changes for the item and its children, and removes the item from the file provider.

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
- [NSFileProviderItemCapabilitiesAllowsAll](allowsall.md): Deprecated. A convenience value for enabling all capabilities.
