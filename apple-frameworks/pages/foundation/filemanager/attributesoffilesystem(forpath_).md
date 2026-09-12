> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/attributesoffilesystem(forpath:)](https://developer.apple.com/documentation/foundation/filemanager/attributesoffilesystem(forpath:))

# attributesOfFileSystem(forPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.

## Declaration

```swift
func attributesOfFileSystem(forPath path: String) throws -> [FileAttributeKey : Any]
```

## Parameters

- `path`: Any pathname within the mounted file system.

<a id="return-value"></a>

## Return Value

A dictionary object that describes the attributes of the mounted file system on which `path` resides. See `File-System Attribute Keys` for a description of the keys available in the dictionary.

## Mentioned In

- [About Apple File System](../about-apple-file-system.md)

<a id="Discussion"></a>

## Discussion

This method does not traverse a terminal symbolic link.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Getting and setting attributes

- [componentsToDisplay(forPath:)](componentstodisplay%28forpath_%29.md): Returns an array of strings representing the user-visible components of a given path.
- [displayName(atPath:)](displayname%28atpath_%29.md): Returns the display name of the file or directory at a specified path.
- [attributesOfItem(atPath:)](attributesofitem%28atpath_%29.md): Returns the attributes of the item at a given path.
- [setAttributes(\_:ofItemAtPath:)](setattributes%28__ofitematpath_%29.md): Sets the attributes of the specified file or directory.

# attributesOfFileSystemForPath:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a dictionary that describes the attributes of the mounted file system on which a given path resides.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) attributesOfFileSystemForPath:(NSString *) path error:(NSError **) error;
```

## Parameters

- `path`: Any pathname within the mounted file system.
- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify `nil` for this parameter if you do not want the error information.

<a id="return-value"></a>

## Return Value

A dictionary object that describes the attributes of the mounted file system on which `path` resides. See `File-System Attribute Keys` for a description of the keys available in the dictionary. On failure, this method returns `nil`.

## Mentioned In

- [About Apple File System](../about-apple-file-system.md)

<a id="Discussion"></a>

## Discussion

This method does not traverse a terminal symbolic link.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Getting and setting attributes

- [componentsToDisplayForPath:](componentstodisplay%28forpath_%29.md): Returns an array of strings representing the user-visible components of a given path.
- [displayNameAtPath:](displayname%28atpath_%29.md): Returns the display name of the file or directory at a specified path.
- [attributesOfItemAtPath:error:](attributesofitem%28atpath_%29.md): Returns the attributes of the item at a given path.
- [setAttributes:ofItemAtPath:error:](setattributes%28__ofitematpath_%29.md): Sets the attributes of the specified file or directory.
