> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcekey/fileresourcetypekey](https://developer.apple.com/documentation/foundation/urlresourcekey/fileresourcetypekey)

# fileResourceTypeKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The key for the resource’s object type.

## Declaration

```swift
static let fileResourceTypeKey: URLResourceKey
```

<a id="Discussion"></a>

## Discussion

The system returns the read-only value as an [NSString](../nsstring.md). See [URLFileResourceType](../urlfileresourcetype.md) for possible values.

## See Also

### File keys

- [fileAllocatedSizeKey](fileallocatedsizekey.md): The key for the total allocated size on-disk for the file.
- [fileProtectionKey](fileprotectionkey.md): The key for the protection level of the file.
- [URLFileProtection](../urlfileprotection.md): Protection-level values for a URL resource key.
- [fileContentIdentifierKey](filecontentidentifierkey.md): The key for a value that APFS assigns to identify a file’s content data stream.
- [fileResourceIdentifierKey](fileresourceidentifierkey.md): The key for the resource’s unique identifier.
- [URLFileResourceType](../urlfileresourcetype.md): Possible values for the type of file resource.
- [fileSecurityKey](filesecuritykey.md): The key for the resource’s security information.
- [fileSizeKey](filesizekey.md): The key for the file’s size, in bytes.
- [isAliasFileKey](isaliasfilekey.md): The key for determining whether the file is an alias.
- [isPackageKey](ispackagekey.md): The key for determining whether the resource is a file package.
- [isRegularFileKey](isregularfilekey.md): The key for determining whether the resource is a regular file rather than a directory or a symbolic link.
- [isPurgeableKey](ispurgeablekey.md): The key for a Boolean value that indicates whether the file system can delete a file when the system needs to free space.
- [isSparseKey](issparsekey.md): The key for a Boolean value that indicates whether the file has sparse regions.
- [mayHaveExtendedAttributesKey](mayhaveextendedattributeskey.md): The key for a Boolean value that indicates whether the file has extended attributes.
- [mayShareFileContentKey](maysharefilecontentkey.md): The key for a Boolean value that indicates whether cloned files and their original files may share data blocks.

# NSURLFileResourceTypeKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The key for the resource’s object type.

## Declaration

```objectivec
extern NSURLResourceKey const NSURLFileResourceTypeKey;
```

<a id="Discussion"></a>

## Discussion

The system returns the read-only value as an [NSString](../nsstring.md). See [NSURLFileResourceType](../urlfileresourcetype.md) for possible values.

## See Also

### File keys

- [NSURLFileAllocatedSizeKey](fileallocatedsizekey.md): The key for the total allocated size on-disk for the file.
- [NSURLFileProtectionKey](fileprotectionkey.md): The key for the protection level of the file.
- [NSURLFileProtectionType](../urlfileprotection.md): Protection-level values for a URL resource key.
- [NSURLFileContentIdentifierKey](filecontentidentifierkey.md): The key for a value that APFS assigns to identify a file’s content data stream.
- [NSURLFileResourceIdentifierKey](fileresourceidentifierkey.md): The key for the resource’s unique identifier.
- [NSURLFileResourceType](../urlfileresourcetype.md): Possible values for the type of file resource.
- [NSURLFileSecurityKey](filesecuritykey.md): The key for the resource’s security information.
- [NSURLFileSizeKey](filesizekey.md): The key for the file’s size, in bytes.
- [NSURLIsAliasFileKey](isaliasfilekey.md): The key for determining whether the file is an alias.
- [NSURLIsPackageKey](ispackagekey.md): The key for determining whether the resource is a file package.
- [NSURLIsRegularFileKey](isregularfilekey.md): The key for determining whether the resource is a regular file rather than a directory or a symbolic link.
- [NSURLIsPurgeableKey](ispurgeablekey.md): The key for a Boolean value that indicates whether the file system can delete a file when the system needs to free space.
- [NSURLIsSparseKey](issparsekey.md): The key for a Boolean value that indicates whether the file has sparse regions.
- [NSURLMayHaveExtendedAttributesKey](mayhaveextendedattributeskey.md): The key for a Boolean value that indicates whether the file has extended attributes.
- [NSURLMayShareFileContentKey](maysharefilecontentkey.md): The key for a Boolean value that indicates whether cloned files and their original files may share data blocks.
