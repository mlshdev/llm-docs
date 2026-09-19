> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsvolume/accessmask/addfile

# addFile (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

The file system allows adding files.

## Declaration

```swift
static var addFile: FSVolume.AccessMask { get }
```

## See Also

### Declaring directory access

- [listDirectory](listdirectory.md): The file system allows listing directory contents.
- [addSubdirectory](addsubdirectory.md): The file system allows adding subdirectories.
- [deleteChild](deletechild.md): The file system allows deleting subdirectories.
- [search](search.md): The file system allows searching files.

# FSAccessAddFile (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

The file system allows adding files.

## Declaration

```objectivec
FSAccessAddFile
```

## See Also

### Declaring directory access

- [FSAccessListDirectory](listdirectory.md): The file system allows listing directory contents.
- [FSAccessAddSubdirectory](addsubdirectory.md): The file system allows adding subdirectories.
- [FSAccessDeleteChild](deletechild.md): The file system allows deleting subdirectories.
- [FSAccessSearch](search.md): The file system allows searching files.
