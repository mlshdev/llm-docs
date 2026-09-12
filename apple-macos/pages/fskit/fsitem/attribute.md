> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/attribute](https://developer.apple.com/documentation/fskit/fsitem/attribute)

# FSItem.Attribute (Swift)

**Framework:** FSKit  
**Kind:** Structure  
**Availability:** macOS 15.4+

A value that indicates a set of item attributes to get or set.

## Declaration

```swift
struct Attribute
```

<a id="overview"></a>

## Overview

This type is an option set in Swift. In Objective-C, you use the cases of this enumeration to create a bit field.

## Topics

### Working with identifier attributes

- [fileID](attribute/fileid.md): The file ID attribute.
- [parentID](attribute/parentid.md): The parent ID attribute.

### Working with metadata attributes

- [type](attribute/type.md): The type attribute.
- [mode](attribute/mode.md): The mode attribute.
- [linkCount](attribute/linkcount.md): The link count attribute.
- [uid](attribute/uid.md): The user ID (uid) attribute.
- [gid](attribute/gid.md): The group ID (gid) attribute.
- [flags](attribute/flags.md): The flags attribute.
- [size](attribute/size.md): The size attribute.
- [allocSize](attribute/allocsize.md): The allocated size attribute.
- [supportsLimitedXAttrs](attribute/supportslimitedxattrs.md): The supports limited extended attributes attribute.
- [inhibitKernelOffloadedIO](attribute/inhibitkerneloffloadedio.md): The inhibit kernel offloaded I/O attribute.

### Working with time attributes

- [accessTime](attribute/accesstime.md): The last-accessed time attribute.
- [modifyTime](attribute/modifytime.md): The last-modified time attribute.
- [changeTime](attribute/changetime.md): The last-changed time attribute.
- [birthTime](attribute/birthtime.md): The creation time attribute.
- [backupTime](attribute/backuptime.md): The backup time attribute.
- [addedTime](attribute/addedtime.md): The time added attribute.

### Working with raw values

- [init(rawValue:)](attribute/init%28rawvalue_%29.md)

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

### Inspecting requested attributes

- [wantedAttributes](getattributesrequest/wantedattributes.md): The attributes requested by the request.
- [isAttributeWanted(\_:)](getattributesrequest/isattributewanted%28__%29.md): A method that indicates whether the request wants given attribute.

# FSItemAttribute (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

A value that indicates a set of item attributes to get or set.

## Declaration

```objectivec
enum FSItemAttribute : NSInteger;
```

<a id="overview"></a>

## Overview

This type is an option set in Swift. In Objective-C, you use the cases of this enumeration to create a bit field.

## Topics

### Working with identifier attributes

- [FSItemAttributeFileID](attribute/fileid.md): The file ID attribute.
- [FSItemAttributeParentID](attribute/parentid.md): The parent ID attribute.

### Working with metadata attributes

- [FSItemAttributeType](attribute/type.md): The type attribute.
- [FSItemAttributeMode](attribute/mode.md): The mode attribute.
- [FSItemAttributeLinkCount](attribute/linkcount.md): The link count attribute.
- [FSItemAttributeUID](attribute/uid.md): The user ID (uid) attribute.
- [FSItemAttributeGID](attribute/gid.md): The group ID (gid) attribute.
- [FSItemAttributeFlags](attribute/flags.md): The flags attribute.
- [FSItemAttributeSize](attribute/size.md): The size attribute.
- [FSItemAttributeAllocSize](attribute/allocsize.md): The allocated size attribute.
- [FSItemAttributeSupportsLimitedXAttrs](attribute/supportslimitedxattrs.md): The supports limited extended attributes attribute.
- [FSItemAttributeInhibitKernelOffloadedIO](attribute/inhibitkerneloffloadedio.md): The inhibit kernel offloaded I/O attribute.

### Working with time attributes

- [FSItemAttributeAccessTime](attribute/accesstime.md): The last-accessed time attribute.
- [FSItemAttributeModifyTime](attribute/modifytime.md): The last-modified time attribute.
- [FSItemAttributeChangeTime](attribute/changetime.md): The last-changed time attribute.
- [FSItemAttributeBirthTime](attribute/birthtime.md): The creation time attribute.
- [FSItemAttributeBackupTime](attribute/backuptime.md): The backup time attribute.
- [FSItemAttributeAddedTime](attribute/addedtime.md): The time added attribute.

## See Also

### Inspecting requested attributes

- [wantedAttributes](getattributesrequest/wantedattributes.md): The attributes requested by the request.
- [isAttributeWanted:](getattributesrequest/isattributewanted%28__%29.md): A method that indicates whether the request wants given attribute.
