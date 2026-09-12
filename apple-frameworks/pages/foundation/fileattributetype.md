> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/fileattributetype](https://developer.apple.com/documentation/foundation/fileattributetype)

# FileAttributeType (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Values representing a file’s type attribute.

## Declaration

```swift
struct FileAttributeType
```

<a id="Discussion"></a>

## Discussion

These strings are the possible values for the [type](fileattributekey/type.md) attribute key contained in the dictionary object returned by [attributesOfItem(atPath:)](filemanager/attributesofitem%28atpath_%29.md).

## Topics

### Creating a File Attribute Type

- [init(rawValue:)](fileattributetype/init%28rawvalue_%29.md): Creates a file attribute type value.

### Accessing File Type Attributes

- [typeBlockSpecial](fileattributetype/typeblockspecial.md): A block special file.
- [typeCharacterSpecial](fileattributetype/typecharacterspecial.md): A character special file.
- [typeDirectory](fileattributetype/typedirectory.md): A directory.
- [typeRegular](fileattributetype/typeregular.md): A regular file.
- [typeSocket](fileattributetype/typesocket.md): A socket.
- [typeSymbolicLink](fileattributetype/typesymboliclink.md): A symbolic link.
- [typeUnknown](fileattributetype/typeunknown.md): A file whose type is unknown.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting Types

- [FileManager.DirectoryEnumerationOptions](filemanager/directoryenumerationoptions.md): Options for enumerating the contents of directories.
- [FileManager.SearchPathDirectory](filemanager/searchpathdirectory.md): The location of significant directories.
- [FileManager.SearchPathDomainMask](filemanager/searchpathdomainmask.md): Domain constants specifying base locations to use when you search for significant directories.
- [FileAttributeKey](fileattributekey.md): Keys in dictionaries used to get and set file attributes.
- [FileProtectionType](fileprotectiontype.md): Protection level values that can be associated with a file attribute key.
- [URLFileProtection](urlfileprotection.md): Protection-level values for a URL resource key.

# NSFileAttributeType (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Values representing a file’s type attribute.

## Declaration

```objectivec
typedef NSString * NSFileAttributeType;
```

<a id="Discussion"></a>

## Discussion

These strings are the possible values for the [NSFileType](fileattributekey/type.md) attribute key contained in the dictionary object returned by [attributesOfItemAtPath:error:](filemanager/attributesofitem%28atpath_%29.md).

## Topics

### Accessing File Type Attributes

- [NSFileTypeBlockSpecial](fileattributetype/typeblockspecial.md): A block special file.
- [NSFileTypeCharacterSpecial](fileattributetype/typecharacterspecial.md): A character special file.
- [NSFileTypeDirectory](fileattributetype/typedirectory.md): A directory.
- [NSFileTypeRegular](fileattributetype/typeregular.md): A regular file.
- [NSFileTypeSocket](fileattributetype/typesocket.md): A socket.
- [NSFileTypeSymbolicLink](fileattributetype/typesymboliclink.md): A symbolic link.
- [NSFileTypeUnknown](fileattributetype/typeunknown.md): A file whose type is unknown.

## See Also

### Supporting Types

- [NSDirectoryEnumerationOptions](filemanager/directoryenumerationoptions.md): Options for enumerating the contents of directories.
- [NSSearchPathDirectory](filemanager/searchpathdirectory.md): The location of significant directories.
- [NSSearchPathDomainMask](filemanager/searchpathdomainmask.md): Domain constants specifying base locations to use when you search for significant directories.
- [NSFileAttributeKey](fileattributekey.md): Keys in dictionaries used to get and set file attributes.
- [NSFileProtectionType](fileprotectiontype.md): Protection level values that can be associated with a file attribute key.
- [NSURLFileProtectionType](urlfileprotection.md): Protection-level values for a URL resource key.
