> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/init(volumeid:volumename:)](https://developer.apple.com/documentation/fskit/fsvolume/init(volumeid:volumename:))

# init(volumeID:volumeName:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 15.4+

Creates a volume with the given identifier and name.

## Declaration

```swift
init(volumeID: FSVolume.Identifier, volumeName: FSFileName)
```

## Parameters

- `volumeID`: An [FSVolume.Identifier](identifier.md) to uniquely identify the volume. For a network file system that supports multiple authenticated users, disambiguate the users by using qualifying data in the identifier.
- `volumeName`: A name for the volume.

## See Also

### Creating a volume

- [FSVolume.Identifier](identifier.md): A type that identifies a volume.
- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.

# initWithVolumeID:volumeName: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Creates a volume with the given identifier and name.

## Declaration

```objectivec
- (instancetype) initWithVolumeID:(FSVolumeIdentifier *) volumeID volumeName:(FSFileName *) volumeName;
```

## Parameters

- `volumeID`: An [FSVolumeIdentifier](identifier.md) to uniquely identify the volume. For a network file system that supports multiple authenticated users, disambiguate the users by using qualifying data in the identifier.
- `volumeName`: A name for the volume.

## See Also

### Creating a volume

- [FSVolumeIdentifier](identifier.md): A type that identifies a volume.
- [FSFileName](../fsfilename.md): The name of a file, expressed as a data buffer.
