> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcekey/fileidentifierkey](https://developer.apple.com/documentation/foundation/urlresourcekey/fileidentifierkey)

# fileIdentifierKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

The key for the file system’s internal inode identifier for the item.

## Declaration

```swift
static let fileIdentifierKey: URLResourceKey
```

<a id="Discussion"></a>

## Discussion

The value associated with this key isn’t stable for all file systems or across all mounts. Use this value sparingly and don’t persist it. You can use it, for example, to match URLs from the URL enumerator with paths from `FSEvents`.

## See Also

### File keys

- [fileAllocatedSizeKey](fileallocatedsizekey.md): The key for the total allocated size on-disk for the file.
- [fileProtectionKey](fileprotectionkey.md): The key for the protection level of the file.
- [URLFileProtection](../urlfileprotection.md): Protection-level values for a URL resource key.
- [fileContentIdentifierKey](filecontentidentifierkey.md): The key for a value that APFS assigns to identify a file’s content data stream.
- [fileResourceIdentifierKey](fileresourceidentifierkey.md): The key for the resource’s unique identifier.
- [fileResourceTypeKey](fileresourcetypekey.md): The key for the resource’s object type.
- [URLFileResourceType](../urlfileresourcetype.md): Possible values for the type of file resource.
- [fileSecurityKey](filesecuritykey.md): The key for the resource’s security information.
- [fileSizeKey](filesizekey.md): The key for the file’s size, in bytes.
- [isAliasFileKey](isaliasfilekey.md): The key for determining whether the file is an alias.
- [isPackageKey](ispackagekey.md): The key for determining whether the resource is a file package.
- [isRegularFileKey](isregularfilekey.md): The key for determining whether the resource is a regular file rather than a directory or a symbolic link.
- [isPurgeableKey](ispurgeablekey.md): The key for a Boolean value that indicates whether the file system can delete a file when the system needs to free space.
- [isSparseKey](issparsekey.md): The key for a Boolean value that indicates whether the file has sparse regions.
- [mayHaveExtendedAttributesKey](mayhaveextendedattributeskey.md): The key for a Boolean value that indicates whether the file has extended attributes.

# NSURLFileIdentifierKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

The key for the file system’s internal inode identifier for the item.

## Declaration

```objectivec
extern NSURLResourceKey const NSURLFileIdentifierKey;
```

<a id="Discussion"></a>

## Discussion

The value associated with this key isn’t stable for all file systems or across all mounts. Use this value sparingly and don’t persist it. You can use it, for example, to match URLs from the URL enumerator with paths from `FSEvents`.

## See Also

### File keys

- [NSURLFileAllocatedSizeKey](fileallocatedsizekey.md): The key for the total allocated size on-disk for the file.
- [NSURLFileProtectionKey](fileprotectionkey.md): The key for the protection level of the file.
- [NSURLFileProtectionType](../urlfileprotection.md): Protection-level values for a URL resource key.
- [NSURLFileContentIdentifierKey](filecontentidentifierkey.md): The key for a value that APFS assigns to identify a file’s content data stream.
- [NSURLFileResourceIdentifierKey](fileresourceidentifierkey.md): The key for the resource’s unique identifier.
- [NSURLFileResourceTypeKey](fileresourcetypekey.md): The key for the resource’s object type.
- [NSURLFileResourceType](../urlfileresourcetype.md): Possible values for the type of file resource.
- [NSURLFileSecurityKey](filesecuritykey.md): The key for the resource’s security information.
- [NSURLFileSizeKey](filesizekey.md): The key for the file’s size, in bytes.
- [NSURLIsAliasFileKey](isaliasfilekey.md): The key for determining whether the file is an alias.
- [NSURLIsPackageKey](ispackagekey.md): The key for determining whether the resource is a file package.
- [NSURLIsRegularFileKey](isregularfilekey.md): The key for determining whether the resource is a regular file rather than a directory or a symbolic link.
- [NSURLIsPurgeableKey](ispurgeablekey.md): The key for a Boolean value that indicates whether the file system can delete a file when the system needs to free space.
- [NSURLIsSparseKey](issparsekey.md): The key for a Boolean value that indicates whether the file has sparse regions.
- [NSURLMayHaveExtendedAttributesKey](mayhaveextendedattributeskey.md): The key for a Boolean value that indicates whether the file has extended attributes.
