> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlfileresourcetype](https://developer.apple.com/documentation/foundation/urlfileresourcetype)

# URLFileResourceType (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Possible values for the type of file resource.

## Declaration

```swift
struct URLFileResourceType
```

## Topics

### Creating a File Resource Type Instance

- [init(rawValue:)](urlfileresourcetype/init%28rawvalue_%29.md): Creates a file resource type from the provided constant string.

### Constants

- [namedPipe](urlfileresourcetype/namedpipe.md): The resource is a named pipe.
- [characterSpecial](urlfileresourcetype/characterspecial.md): The resource is a character special file.
- [directory](urlfileresourcetype/directory.md): The resource is a directory.
- [blockSpecial](urlfileresourcetype/blockspecial.md): The resource is a block special file.
- [regular](urlfileresourcetype/regular.md): The resource is a regular file.
- [symbolicLink](urlfileresourcetype/symboliclink.md): The resource is a symbolic link.
- [socket](urlfileresourcetype/socket.md): The resource is a socket.
- [unknown](urlfileresourcetype/unknown.md): The resource’s type is unknown.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### File keys

- [fileAllocatedSizeKey](urlresourcekey/fileallocatedsizekey.md): The key for the total allocated size on-disk for the file.
- [fileProtectionKey](urlresourcekey/fileprotectionkey.md): The key for the protection level of the file.
- [URLFileProtection](urlfileprotection.md): Protection-level values for a URL resource key.
- [fileContentIdentifierKey](urlresourcekey/filecontentidentifierkey.md): The key for a value that APFS assigns to identify a file’s content data stream.
- [fileResourceIdentifierKey](urlresourcekey/fileresourceidentifierkey.md): The key for the resource’s unique identifier.
- [fileResourceTypeKey](urlresourcekey/fileresourcetypekey.md): The key for the resource’s object type.
- [fileSecurityKey](urlresourcekey/filesecuritykey.md): The key for the resource’s security information.
- [fileSizeKey](urlresourcekey/filesizekey.md): The key for the file’s size, in bytes.
- [isAliasFileKey](urlresourcekey/isaliasfilekey.md): The key for determining whether the file is an alias.
- [isPackageKey](urlresourcekey/ispackagekey.md): The key for determining whether the resource is a file package.
- [isRegularFileKey](urlresourcekey/isregularfilekey.md): The key for determining whether the resource is a regular file rather than a directory or a symbolic link.
- [isPurgeableKey](urlresourcekey/ispurgeablekey.md): The key for a Boolean value that indicates whether the file system can delete a file when the system needs to free space.
- [isSparseKey](urlresourcekey/issparsekey.md): The key for a Boolean value that indicates whether the file has sparse regions.
- [mayHaveExtendedAttributesKey](urlresourcekey/mayhaveextendedattributeskey.md): The key for a Boolean value that indicates whether the file has extended attributes.
- [mayShareFileContentKey](urlresourcekey/maysharefilecontentkey.md): The key for a Boolean value that indicates whether cloned files and their original files may share data blocks.

# NSURLFileResourceType (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Possible values for the type of file resource.

## Declaration

```objectivec
typedef NSString * NSURLFileResourceType;
```

## Topics

### Constants

- [NSURLFileResourceTypeNamedPipe](urlfileresourcetype/namedpipe.md): The resource is a named pipe.
- [NSURLFileResourceTypeCharacterSpecial](urlfileresourcetype/characterspecial.md): The resource is a character special file.
- [NSURLFileResourceTypeDirectory](urlfileresourcetype/directory.md): The resource is a directory.
- [NSURLFileResourceTypeBlockSpecial](urlfileresourcetype/blockspecial.md): The resource is a block special file.
- [NSURLFileResourceTypeRegular](urlfileresourcetype/regular.md): The resource is a regular file.
- [NSURLFileResourceTypeSymbolicLink](urlfileresourcetype/symboliclink.md): The resource is a symbolic link.
- [NSURLFileResourceTypeSocket](urlfileresourcetype/socket.md): The resource is a socket.
- [NSURLFileResourceTypeUnknown](urlfileresourcetype/unknown.md): The resource’s type is unknown.

## See Also

### File keys

- [NSURLFileAllocatedSizeKey](urlresourcekey/fileallocatedsizekey.md): The key for the total allocated size on-disk for the file.
- [NSURLFileProtectionKey](urlresourcekey/fileprotectionkey.md): The key for the protection level of the file.
- [NSURLFileProtectionType](urlfileprotection.md): Protection-level values for a URL resource key.
- [NSURLFileContentIdentifierKey](urlresourcekey/filecontentidentifierkey.md): The key for a value that APFS assigns to identify a file’s content data stream.
- [NSURLFileResourceIdentifierKey](urlresourcekey/fileresourceidentifierkey.md): The key for the resource’s unique identifier.
- [NSURLFileResourceTypeKey](urlresourcekey/fileresourcetypekey.md): The key for the resource’s object type.
- [NSURLFileSecurityKey](urlresourcekey/filesecuritykey.md): The key for the resource’s security information.
- [NSURLFileSizeKey](urlresourcekey/filesizekey.md): The key for the file’s size, in bytes.
- [NSURLIsAliasFileKey](urlresourcekey/isaliasfilekey.md): The key for determining whether the file is an alias.
- [NSURLIsPackageKey](urlresourcekey/ispackagekey.md): The key for determining whether the resource is a file package.
- [NSURLIsRegularFileKey](urlresourcekey/isregularfilekey.md): The key for determining whether the resource is a regular file rather than a directory or a symbolic link.
- [NSURLIsPurgeableKey](urlresourcekey/ispurgeablekey.md): The key for a Boolean value that indicates whether the file system can delete a file when the system needs to free space.
- [NSURLIsSparseKey](urlresourcekey/issparsekey.md): The key for a Boolean value that indicates whether the file has sparse regions.
- [NSURLMayHaveExtendedAttributesKey](urlresourcekey/mayhaveextendedattributeskey.md): The key for a Boolean value that indicates whether the file has extended attributes.
- [NSURLMayShareFileContentKey](urlresourcekey/maysharefilecontentkey.md): The key for a Boolean value that indicates whether cloned files and their original files may share data blocks.
