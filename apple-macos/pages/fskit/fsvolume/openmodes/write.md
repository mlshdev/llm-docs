> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsvolume/openmodes/write

# write (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

The write mode.

## Declaration

```swift
static var write: FSVolume.OpenModes { get }
```

<a id="discussion"></a>

## Discussion

This mode is equivalent to POSIX `FRWITE`.

## See Also

### Declaring open modes

- [read](read.md): The read mode.

# FSVolumeOpenModesWrite (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

The write mode.

## Declaration

```objectivec
FSVolumeOpenModesWrite
```

<a id="discussion"></a>

## Discussion

This mode is equivalent to POSIX `FRWITE`.

## See Also

### Declaring open modes

- [FSVolumeOpenModesRead](read.md): The read mode.
