> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/accessmask/readattributes](https://developer.apple.com/documentation/fskit/fsvolume/accessmask/readattributes)

# readAttributes (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

The file system allows reading file attributes.

## Declaration

```swift
static var readAttributes: FSVolume.AccessMask { get }
```

## See Also

### Declaring attribute access

- [writeAttributes](writeattributes.md): The file system allows writing file attributes.
- [readXattr](readxattr.md): The file system allows reading extended file attributes.
- [writeXattr](writexattr.md): The file system allows writing extended file attributes.
- [readSecurity](readsecurity.md): The file system allows reading a file’s security descriptors.
- [writeSecurity](writesecurity.md): The file system allows writing a file’s security descriptors.

# FSAccessReadAttributes (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

The file system allows reading file attributes.

## Declaration

```objectivec
FSAccessReadAttributes
```

## See Also

### Declaring attribute access

- [FSAccessWriteAttributes](writeattributes.md): The file system allows writing file attributes.
- [FSAccessReadXattr](readxattr.md): The file system allows reading extended file attributes.
- [FSAccessWriteXattr](writexattr.md): The file system allows writing extended file attributes.
- [FSAccessReadSecurity](readsecurity.md): The file system allows reading a file’s security descriptors.
- [FSAccessWriteSecurity](writesecurity.md): The file system allows writing a file’s security descriptors.
