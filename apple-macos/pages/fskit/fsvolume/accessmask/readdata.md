> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsvolume/accessmask/readdata

# readData (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

The file system allows reading data.

## Declaration

```swift
static var readData: FSVolume.AccessMask { get }
```

## See Also

### Declaring read and write access

- [writeData](writedata.md): The file system allows writing data.

# FSAccessReadData (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

The file system allows reading data.

## Declaration

```objectivec
FSAccessReadData
```

## See Also

### Declaring read and write access

- [FSAccessWriteData](writedata.md): The file system allows writing data.
