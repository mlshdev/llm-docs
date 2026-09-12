> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/accessmask/writeattributes](https://developer.apple.com/documentation/fskit/fsvolume/accessmask/writeattributes)

# writeAttributes (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

The file system allows writing file attributes.

## Declaration

```swift
static var writeAttributes: FSVolume.AccessMask { get }
```

## See Also

### Declaring attribute access

- [readAttributes](readattributes.md): The file system allows reading file attributes.
- [readXattr](readxattr.md): The file system allows reading extended file attributes.
- [writeXattr](writexattr.md): The file system allows writing extended file attributes.
- [readSecurity](readsecurity.md): The file system allows reading a file’s security descriptors.
- [writeSecurity](writesecurity.md): The file system allows writing a file’s security descriptors.

# FSAccessWriteAttributes (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

The file system allows writing file attributes.

## Declaration

```objectivec
FSAccessWriteAttributes
```

## See Also

### Declaring attribute access

- [FSAccessReadAttributes](readattributes.md): The file system allows reading file attributes.
- [FSAccessReadXattr](readxattr.md): The file system allows reading extended file attributes.
- [FSAccessWriteXattr](writexattr.md): The file system allows writing extended file attributes.
- [FSAccessReadSecurity](readsecurity.md): The file system allows reading a file’s security descriptors.
- [FSAccessWriteSecurity](writesecurity.md): The file system allows writing a file’s security descriptors.
