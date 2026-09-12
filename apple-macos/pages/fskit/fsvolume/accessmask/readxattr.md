> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/accessmask/readxattr](https://developer.apple.com/documentation/fskit/fsvolume/accessmask/readxattr)

# readXattr (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

The file system allows reading extended file attributes.

## Declaration

```swift
static var readXattr: FSVolume.AccessMask { get }
```

## See Also

### Declaring attribute access

- [readAttributes](readattributes.md): The file system allows reading file attributes.
- [writeAttributes](writeattributes.md): The file system allows writing file attributes.
- [writeXattr](writexattr.md): The file system allows writing extended file attributes.
- [readSecurity](readsecurity.md): The file system allows reading a file’s security descriptors.
- [writeSecurity](writesecurity.md): The file system allows writing a file’s security descriptors.

# FSAccessReadXattr (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

The file system allows reading extended file attributes.

## Declaration

```objectivec
FSAccessReadXattr
```

## See Also

### Declaring attribute access

- [FSAccessReadAttributes](readattributes.md): The file system allows reading file attributes.
- [FSAccessWriteAttributes](writeattributes.md): The file system allows writing file attributes.
- [FSAccessWriteXattr](writexattr.md): The file system allows writing extended file attributes.
- [FSAccessReadSecurity](readsecurity.md): The file system allows reading a file’s security descriptors.
- [FSAccessWriteSecurity](writesecurity.md): The file system allows writing a file’s security descriptors.
