> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/openmodes/read](https://developer.apple.com/documentation/fskit/fsvolume/openmodes/read)

# read (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

The read mode.

## Declaration

```swift
static var read: FSVolume.OpenModes { get }
```

<a id="discussion"></a>

## Discussion

This mode is equivalent to POSIX `FREAD`.

## See Also

### Declaring open modes

- [write](write.md): The write mode.

# FSVolumeOpenModesRead (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

The read mode.

## Declaration

```objectivec
FSVolumeOpenModesRead
```

<a id="discussion"></a>

## Discussion

This mode is equivalent to POSIX `FREAD`.

## See Also

### Declaring open modes

- [FSVolumeOpenModesWrite](write.md): The write mode.
