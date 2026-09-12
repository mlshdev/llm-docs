> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/pathconfoperations](https://developer.apple.com/documentation/fskit/fsvolume/pathconfoperations)

# FSVolume.PathConfOperations (Swift)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+

Properties implemented by volumes that support providing the values of system limits or options.

## Declaration

```swift
protocol PathConfOperations : NSObjectProtocol
```

<a id="overview"></a>

## Overview

This protocol gathers properties related to the `pathconf` and `fpathconf` system calls.

For a file, the value of a property applies to just that file; for a directory, the value applies to all items in the directory.

Properties that represent limits and have a numeric type use `-1` to represent no limit.

## Topics

### Checking limits and configurations

- [maximumLinkCount](pathconfoperations/maximumlinkcount.md): A property that represents the maximum number of hard links to the object.
- [maximumNameLength](pathconfoperations/maximumnamelength.md): A property that represents the maximum length of a component of a filename.
- [restrictsOwnershipChanges](pathconfoperations/restrictsownershipchanges.md): A Boolean property that indicates whether the volume restricts ownership changes based on authorization.
- [truncatesLongNames](pathconfoperations/truncateslongnames.md): A property that indicates whether the volume truncates files longer than its maximum supported length.
- [maximumFileSize](pathconfoperations/maximumfilesize.md): The maximum size of a regular file allowed in the volume.
- [maximumFileSizeInBits](pathconfoperations/maximumfilesizeinbits.md): The minimum number of bits needed to represent, as a signed integer value, the maximum size of a regular file allowed in the volume.
- [maximumXattrSize](pathconfoperations/maximumxattrsize.md): The maximum extended attribute size in bytes.
- [maximumXattrSizeInBits](pathconfoperations/maximumxattrsizeinbits.md): The maximum extended attribute size in bits.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [FSVolume.Handler](handler.md)
- [FSVolume.Operations](operations.md)

## See Also

### Implementing required handlers

- [FSVolume.Handler](handler.md): Methods that all volumes implement to provide required capabilities.
- [FSVolumeHandlerResult](../fsvolumehandlerresult.md): An abstract base class for all result objects in FSKit handler-style protocols.

# FSVolumePathConfOperations (Objective-C)

**Framework:** FSKit  
**Kind:** Protocol  
**Availability:** macOS 15.4+

Properties implemented by volumes that support providing the values of system limits or options.

## Declaration

```objectivec
@protocol FSVolumePathConfOperations <NSObject>
```

<a id="overview"></a>

## Overview

This protocol gathers properties related to the `pathconf` and `fpathconf` system calls.

For a file, the value of a property applies to just that file; for a directory, the value applies to all items in the directory.

Properties that represent limits and have a numeric type use `-1` to represent no limit.

## Topics

### Checking limits and configurations

- [maximumLinkCount](pathconfoperations/maximumlinkcount.md): A property that represents the maximum number of hard links to the object.
- [maximumNameLength](pathconfoperations/maximumnamelength.md): A property that represents the maximum length of a component of a filename.
- [restrictsOwnershipChanges](pathconfoperations/restrictsownershipchanges.md): A Boolean property that indicates whether the volume restricts ownership changes based on authorization.
- [truncatesLongNames](pathconfoperations/truncateslongnames.md): A property that indicates whether the volume truncates files longer than its maximum supported length.
- [maximumFileSize](pathconfoperations/maximumfilesize.md): The maximum size of a regular file allowed in the volume.
- [maximumFileSizeInBits](pathconfoperations/maximumfilesizeinbits.md): The minimum number of bits needed to represent, as a signed integer value, the maximum size of a regular file allowed in the volume.
- [maximumXattrSize](pathconfoperations/maximumxattrsize.md): The maximum extended attribute size in bytes.
- [maximumXattrSizeInBits](pathconfoperations/maximumxattrsizeinbits.md): The maximum extended attribute size in bits.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [FSVolumeHandler](handler.md)
- [FSVolumeOperations](operations.md)

## See Also

### Implementing required handlers

- [FSVolumeHandler](handler.md): Methods that all volumes implement to provide required capabilities.
- [FSVolumeHandlerResult](../fsvolumehandlerresult.md): An abstract base class for all result objects in FSKit handler-style protocols.
