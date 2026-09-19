> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsvolume/accessmask/delete

# delete (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

The file system allows deleting a file.

## Declaration

```swift
static var delete: FSVolume.AccessMask { get }
```

## See Also

### Declaring file maniulation access

- [execute](execute.md): The file system allows file execution.
- [appendData](appenddata.md): The file system allows appending data to a file.

# FSAccessDelete (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

The file system allows deleting a file.

## Declaration

```objectivec
FSAccessDelete
```

## See Also

### Declaring file maniulation access

- [FSAccessExecute](execute.md): The file system allows file execution.
- [FSAccessAppendData](appenddata.md): The file system allows appending data to a file.
