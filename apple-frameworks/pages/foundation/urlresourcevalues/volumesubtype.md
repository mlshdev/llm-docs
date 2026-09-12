> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcevalues/volumesubtype](https://developer.apple.com/documentation/foundation/urlresourcevalues/volumesubtype)

# volumeSubtype

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

An integer value that indicates the file system subtype.

## Declaration

```swift
var volumeSubtype: Int? { get }
```

## See Also

### Volume status values

- [volumeIsAutomounted](volumeisautomounted.md): A Boolean value that indicates whether the volume is automounted.
- [volumeIsBrowsable](volumeisbrowsable.md): A Boolean value that indicates whether the volume is visible through the user interface.
- [volumeIsEjectable](volumeisejectable.md): A Boolean value that indicates whether the volume’s media is ejectable from the drive mechanism under software control.
- [volumeIsEncrypted](volumeisencrypted.md): A Boolean value that indicates whether the volume is encrypted.
- [volumeIsInternal](volumeisinternal.md): A Boolean value that indicates whether the volume’s device is connected to an internal bus, or nil if not available.
- [volumeIsJournaling](volumeisjournaling.md): A Boolean value that indicates whether the volume is currently using a journal for speedy recovery after an unplanned restart.
- [volumeIsLocal](volumeislocal.md): A Boolean value that indicates whether the volume is on a local device.
- [volumeIsReadOnly](volumeisreadonly.md): A Boolean value that indicates whether the volume is read-only.
- [volumeIsRemovable](volumeisremovable.md): A Boolean value that indicates whether the volume’s media is removable from the drive mechanism.
- [volumeIsRootFileSystem](volumeisrootfilesystem.md): A Boolean value that indicates whether the volume is the root file system.
- [volumeTypeName](volumetypename.md): The volume’s type name, as a string.
- [volumeMountFromLocation](volumemountfromlocation.md): The file system device location, as a string.
