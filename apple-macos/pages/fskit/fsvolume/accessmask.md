> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/accessmask](https://developer.apple.com/documentation/fskit/fsvolume/accessmask)

# FSVolume.AccessMask (Swift)

**Framework:** FSKit  
**Kind:** Structure  
**Availability:** macOS 15.4+

A bitmask of access rights.

## Declaration

```swift
struct AccessMask
```

## Topics

### Declaring read and write access

- [readData](accessmask/readdata.md): The file system allows reading data.
- [writeData](accessmask/writedata.md): The file system allows writing data.

### Declaring directory access

- [listDirectory](accessmask/listdirectory.md): The file system allows listing directory contents.
- [addFile](accessmask/addfile.md): The file system allows adding files.
- [addSubdirectory](accessmask/addsubdirectory.md): The file system allows adding subdirectories.
- [deleteChild](accessmask/deletechild.md): The file system allows deleting subdirectories.
- [search](accessmask/search.md): The file system allows searching files.

### Declaring file maniulation access

- [execute](accessmask/execute.md): The file system allows file execution.
- [delete](accessmask/delete.md): The file system allows deleting a file.
- [appendData](accessmask/appenddata.md): The file system allows appending data to a file.

### Declaring attribute access

- [readAttributes](accessmask/readattributes.md): The file system allows reading file attributes.
- [writeAttributes](accessmask/writeattributes.md): The file system allows writing file attributes.
- [readXattr](accessmask/readxattr.md): The file system allows reading extended file attributes.
- [writeXattr](accessmask/writexattr.md): The file system allows writing extended file attributes.
- [readSecurity](accessmask/readsecurity.md): The file system allows reading a file’s security descriptors.
- [writeSecurity](accessmask/writesecurity.md): The file system allows writing a file’s security descriptors.

### Ownership access

- [takeOwnership](accessmask/takeownership.md): The file system allows taking ownership of a file.

### Working with raw values

- [init(rawValue:)](accessmask/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Checking access

- [checkAccess(to:requestedAccess:context:replyHandler:)](accesscheckhandler/checkaccess%28to_requestedaccess_context_replyhandler_%29.md): Checks whether the file system allows access to the given item.
- [FSCheckAccessResult](../fscheckaccessresult.md): The result of a check-access call.

# FSAccessMask (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

A bitmask of access rights.

## Declaration

```objectivec
enum FSAccessMask : NSUInteger;
```

## Topics

### Declaring read and write access

- [FSAccessReadData](accessmask/readdata.md): The file system allows reading data.
- [FSAccessWriteData](accessmask/writedata.md): The file system allows writing data.

### Declaring directory access

- [FSAccessListDirectory](accessmask/listdirectory.md): The file system allows listing directory contents.
- [FSAccessAddFile](accessmask/addfile.md): The file system allows adding files.
- [FSAccessAddSubdirectory](accessmask/addsubdirectory.md): The file system allows adding subdirectories.
- [FSAccessDeleteChild](accessmask/deletechild.md): The file system allows deleting subdirectories.
- [FSAccessSearch](accessmask/search.md): The file system allows searching files.

### Declaring file maniulation access

- [FSAccessExecute](accessmask/execute.md): The file system allows file execution.
- [FSAccessDelete](accessmask/delete.md): The file system allows deleting a file.
- [FSAccessAppendData](accessmask/appenddata.md): The file system allows appending data to a file.

### Declaring attribute access

- [FSAccessReadAttributes](accessmask/readattributes.md): The file system allows reading file attributes.
- [FSAccessWriteAttributes](accessmask/writeattributes.md): The file system allows writing file attributes.
- [FSAccessReadXattr](accessmask/readxattr.md): The file system allows reading extended file attributes.
- [FSAccessWriteXattr](accessmask/writexattr.md): The file system allows writing extended file attributes.
- [FSAccessReadSecurity](accessmask/readsecurity.md): The file system allows reading a file’s security descriptors.
- [FSAccessWriteSecurity](accessmask/writesecurity.md): The file system allows writing a file’s security descriptors.

### Ownership access

- [FSAccessTakeOwnership](accessmask/takeownership.md): The file system allows taking ownership of a file.

## See Also

### Checking access

- [checkAccessToItem:requestedAccess:context:replyHandler:](accesscheckhandler/checkaccess%28to_requestedaccess_context_replyhandler_%29.md): Checks whether the file system allows access to the given item.
- [FSCheckAccessResult](../fscheckaccessresult.md): The result of a check-access call.
