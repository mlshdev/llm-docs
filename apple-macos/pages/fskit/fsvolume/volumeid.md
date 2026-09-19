> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsvolume/volumeid

# volumeID (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

An identifier that uniquely identifies the volume.

## Declaration

```swift
var volumeID: FSVolume.Identifier { get }
```

## See Also

### Accessing volume properties

- [name](name.md): The name of the volume.

# volumeID (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

An identifier that uniquely identifies the volume.

## Declaration

```objectivec
@property (strong, readonly) FSVolumeIdentifier * volumeID;
```

## See Also

### Accessing volume properties

- [name](name.md): The name of the volume.
