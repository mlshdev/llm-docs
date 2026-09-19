> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsvolume/accessmask/execute

# execute (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

The file system allows file execution.

## Declaration

```swift
static var execute: FSVolume.AccessMask { get }
```

## See Also

### Declaring file maniulation access

- [delete](delete.md): The file system allows deleting a file.
- [appendData](appenddata.md): The file system allows appending data to a file.

# FSAccessExecute (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

The file system allows file execution.

## Declaration

```objectivec
FSAccessExecute
```

## See Also

### Declaring file maniulation access

- [FSAccessDelete](delete.md): The file system allows deleting a file.
- [FSAccessAppendData](appenddata.md): The file system allows appending data to a file.
