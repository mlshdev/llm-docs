> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/supportedcapabilities](https://developer.apple.com/documentation/fskit/fsvolume/supportedcapabilities)

# FSVolume.SupportedCapabilities (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A type that represents capabilities supported by a volume, such as hard and symbolic links, journaling, and large file sizes.

## Declaration

```swift
class SupportedCapabilities
```

## Topics

### Declaring identifier capabilities

- [supportsPersistentObjectIDs](supportedcapabilities/supportspersistentobjectids.md): A Boolean property that indicates whether the volume supports persistent object identifiers and can look up file system objects by their IDs.
- [supports64BitObjectIDs](supportedcapabilities/supports64bitobjectids.md): A Boolean property that indicates whether the volume supports 64-bit object IDs.
- [supportsDocumentID](supportedcapabilities/supportsdocumentid.md): A Boolean property that indicates whether the volume supports document IDs for document revisions.

### Declaring linking capabilities

- [supportsSymbolicLinks](supportedcapabilities/supportssymboliclinks.md): A Boolean property that indicates whether the volume supports symbolic links.
- [supportsHardLinks](supportedcapabilities/supportshardlinks.md): A Boolean property that indicates whether the volume supports hard links.

### Declaring journaling capabilities

- [supportsJournal](supportedcapabilities/supportsjournal.md): A Boolean property that indicates whether the volume supports a journal used to speed recovery in case of unplanned restart, such as a power outage or crash.
- [supportsActiveJournal](supportedcapabilities/supportsactivejournal.md): A Boolean property that indicates whether the volume currently uses a journal for speeding recovery after an unplanned shutdown.

### Declaring root capabilites

- [doesNotSupportRootTimes](supportedcapabilities/doesnotsupportroottimes.md): A Boolean property that indicates the volume doesn’t store reliable times for the root directory.

### Declaring file capabilities

- [supportsSparseFiles](supportedcapabilities/supportssparsefiles.md): A Boolean property that indicates whether the volume supports sparse files.
- [supportsZeroRuns](supportedcapabilities/supportszeroruns.md): A Boolean property that indicates whether the volume supports zero runs
- [supportsFastStatFS](supportedcapabilities/supportsfaststatfs.md): A Boolean property that indicates whether the volume supports fast results when fetching file system statistics.
- [supports2TBFiles](supportedcapabilities/supports2tbfiles.md): A Boolean property that indicates whether the volume supports file sizes larger than 4GB, and potentially up to 2TB.
- [supportsOpenDenyModes](supportedcapabilities/supportsopendenymodes.md): A Boolean property that indicates whether the volume supports open deny modes.
- [supportsHiddenFiles](supportedcapabilities/supportshiddenfiles.md): A Boolean property that indicates whether the volume supports hidden files.
- [doesNotSupportImmutableFiles](supportedcapabilities/doesnotsupportimmutablefiles.md): A Boolean property that indicates the volume doesn’t support immutable files.
- [doesNotSupportSettingFilePermissions](supportedcapabilities/doesnotsupportsettingfilepermissions.md): A Boolean property that indicates the volume doesn’t set file permissions.

### Declaring volume capabilities

- [supportsSharedSpace](supportedcapabilities/supportssharedspace.md): A Boolean property that indicates whether the volume supports multiple logical file systems that share space in a single “partition.”
- [supportsVolumeGroups](supportedcapabilities/supportsvolumegroups.md): A Boolean property that indicates whether the volume supports volume groups.
- [doesNotSupportVolumeSizes](supportedcapabilities/doesnotsupportvolumesizes.md): A Boolean property that indicates the volume doesn’t support certain volume size reports.

### Working with case sensitivity

- [caseFormat](supportedcapabilities/caseformat.md): A value that indicates the volume’s support for case sensitivity.
- [FSVolume.CaseFormat](caseformat.md): An enumeration of case-sensitivity support types.

### Initializers

- [init(coder:)](supportedcapabilities/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Inspecting required volume properties

- [supportedVolumeCapabilities](handler/supportedvolumecapabilities.md)
- [volumeStatistics](handler/volumestatistics.md): A property that provides up-to-date statistics of the volume.
- [FSStatFSResult](../fsstatfsresult.md): A type used to report a volume’s statistics.

# FSVolumeSupportedCapabilities (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A type that represents capabilities supported by a volume, such as hard and symbolic links, journaling, and large file sizes.

## Declaration

```objectivec
@interface FSVolumeSupportedCapabilities : NSObject
```

## Topics

### Declaring identifier capabilities

- [supportsPersistentObjectIDs](supportedcapabilities/supportspersistentobjectids.md): A Boolean property that indicates whether the volume supports persistent object identifiers and can look up file system objects by their IDs.
- [supports64BitObjectIDs](supportedcapabilities/supports64bitobjectids.md): A Boolean property that indicates whether the volume supports 64-bit object IDs.
- [supportsDocumentID](supportedcapabilities/supportsdocumentid.md): A Boolean property that indicates whether the volume supports document IDs for document revisions.

### Declaring linking capabilities

- [supportsSymbolicLinks](supportedcapabilities/supportssymboliclinks.md): A Boolean property that indicates whether the volume supports symbolic links.
- [supportsHardLinks](supportedcapabilities/supportshardlinks.md): A Boolean property that indicates whether the volume supports hard links.

### Declaring journaling capabilities

- [supportsJournal](supportedcapabilities/supportsjournal.md): A Boolean property that indicates whether the volume supports a journal used to speed recovery in case of unplanned restart, such as a power outage or crash.
- [supportsActiveJournal](supportedcapabilities/supportsactivejournal.md): A Boolean property that indicates whether the volume currently uses a journal for speeding recovery after an unplanned shutdown.

### Declaring root capabilites

- [doesNotSupportRootTimes](supportedcapabilities/doesnotsupportroottimes.md): A Boolean property that indicates the volume doesn’t store reliable times for the root directory.

### Declaring file capabilities

- [supportsSparseFiles](supportedcapabilities/supportssparsefiles.md): A Boolean property that indicates whether the volume supports sparse files.
- [supportsZeroRuns](supportedcapabilities/supportszeroruns.md): A Boolean property that indicates whether the volume supports zero runs
- [supportsFastStatFS](supportedcapabilities/supportsfaststatfs.md): A Boolean property that indicates whether the volume supports fast results when fetching file system statistics.
- [supports2TBFiles](supportedcapabilities/supports2tbfiles.md): A Boolean property that indicates whether the volume supports file sizes larger than 4GB, and potentially up to 2TB.
- [supportsOpenDenyModes](supportedcapabilities/supportsopendenymodes.md): A Boolean property that indicates whether the volume supports open deny modes.
- [supportsHiddenFiles](supportedcapabilities/supportshiddenfiles.md): A Boolean property that indicates whether the volume supports hidden files.
- [doesNotSupportImmutableFiles](supportedcapabilities/doesnotsupportimmutablefiles.md): A Boolean property that indicates the volume doesn’t support immutable files.
- [doesNotSupportSettingFilePermissions](supportedcapabilities/doesnotsupportsettingfilepermissions.md): A Boolean property that indicates the volume doesn’t set file permissions.

### Declaring volume capabilities

- [supportsSharedSpace](supportedcapabilities/supportssharedspace.md): A Boolean property that indicates whether the volume supports multiple logical file systems that share space in a single “partition.”
- [supportsVolumeGroups](supportedcapabilities/supportsvolumegroups.md): A Boolean property that indicates whether the volume supports volume groups.
- [doesNotSupportVolumeSizes](supportedcapabilities/doesnotsupportvolumesizes.md): A Boolean property that indicates the volume doesn’t support certain volume size reports.

### Working with case sensitivity

- [caseFormat](supportedcapabilities/caseformat.md): A value that indicates the volume’s support for case sensitivity.
- [FSVolumeCaseFormat](caseformat.md): An enumeration of case-sensitivity support types.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Inspecting required volume properties

- [supportedVolumeCapabilities](handler/supportedvolumecapabilities.md)
- [volumeStatistics](handler/volumestatistics.md): A property that provides up-to-date statistics of the volume.
- [FSStatFSResult](../fsstatfsresult.md): A type used to report a volume’s statistics.
