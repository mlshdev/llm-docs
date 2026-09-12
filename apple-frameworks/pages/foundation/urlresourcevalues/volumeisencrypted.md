> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcevalues/volumeisencrypted](https://developer.apple.com/documentation/foundation/urlresourcevalues/volumeisencrypted)

# volumeIsEncrypted

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the volume is encrypted.

## Declaration

```swift
var volumeIsEncrypted: Bool? { get }
```

## See Also

### Volume status values

- [volumeIsAutomounted](volumeisautomounted.md): A Boolean value that indicates whether the volume is automounted.
- [volumeIsBrowsable](volumeisbrowsable.md): A Boolean value that indicates whether the volume is visible through the user interface.
- [volumeIsEjectable](volumeisejectable.md): A Boolean value that indicates whether the volume’s media is ejectable from the drive mechanism under software control.
- [volumeIsInternal](volumeisinternal.md): A Boolean value that indicates whether the volume’s device is connected to an internal bus, or nil if not available.
- [volumeIsJournaling](volumeisjournaling.md): A Boolean value that indicates whether the volume is currently using a journal for speedy recovery after an unplanned restart.
- [volumeIsLocal](volumeislocal.md): A Boolean value that indicates whether the volume is on a local device.
- [volumeIsReadOnly](volumeisreadonly.md): A Boolean value that indicates whether the volume is read-only.
- [volumeIsRemovable](volumeisremovable.md): A Boolean value that indicates whether the volume’s media is removable from the drive mechanism.
- [volumeIsRootFileSystem](volumeisrootfilesystem.md): A Boolean value that indicates whether the volume is the root file system.
- [volumeTypeName](volumetypename.md): The volume’s type name, as a string.
- [volumeSubtype](volumesubtype.md): An integer value that indicates the file system subtype.
- [volumeMountFromLocation](volumemountfromlocation.md): The file system device location, as a string.
