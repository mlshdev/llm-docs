> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/createsymboliclink(atpath:withdestinationpath:)](https://developer.apple.com/documentation/foundation/filemanager/createsymboliclink(atpath:withdestinationpath:))

# createSymbolicLink(atPath:withDestinationPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a symbolic link that points to the specified destination.

## Declaration

```swift
func createSymbolicLink(atPath path: String, withDestinationPath destPath: String) throws
```

## Parameters

- `path`: The path at which to create the new symbolic link. The last path component is used as the name of the link.
- `destPath`: The path that contains the item to be pointed to by the link. In other words, this is the destination of the link.

<a id="Discussion"></a>

## Discussion

This method does not traverse symbolic links contained in `destPath`, making it possible to create symbolic links to locations that do not yet exist. Also, if the final path component in `path` is a symbolic link, that link is not followed.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [removeItem(atPath:)](removeitem%28atpath_%29.md): Removes the file or directory at the specified path.

### Creating symbolic and hard links

- [createSymbolicLink(at:withDestinationURL:)](createsymboliclink%28at_withdestinationurl_%29.md): Creates a symbolic link at the specified URL that points to an item at the given URL.
- [linkItem(at:to:)](linkitem%28at_to_%29.md): Creates a hard link between the items at the specified URLs.
- [linkItem(atPath:toPath:)](linkitem%28atpath_topath_%29.md): Creates a hard link between the items at the specified paths.
- [destinationOfSymbolicLink(atPath:)](destinationofsymboliclink%28atpath_%29.md): Returns the path of the item pointed to by a symbolic link.

# createSymbolicLinkAtPath:withDestinationPath:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a symbolic link that points to the specified destination.

## Declaration

```objectivec
- (BOOL) createSymbolicLinkAtPath:(NSString *) path withDestinationPath:(NSString *) destPath error:(NSError **) error;
```

## Parameters

- `path`: The path at which to create the new symbolic link. The last path component is used as the name of the link.
- `destPath`: The path that contains the item to be pointed to by the link. In other words, this is the destination of the link.
- `error`: If an error occurs, upon return contains an [NSError](../nserror.md) object that describes the problem. Pass `NULL` if you do not want error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the symbolic link was created or [false](https://developer.apple.com/documentation/swift/false) if an error occurred. This method also returns [false](https://developer.apple.com/documentation/swift/false) if a file, directory, or link already exists at `path`.

<a id="Discussion"></a>

## Discussion

This method does not traverse symbolic links contained in `destPath`, making it possible to create symbolic links to locations that do not yet exist. Also, if the final path component in `path` is a symbolic link, that link is not followed.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [removeItemAtPath:error:](removeitem%28atpath_%29.md): Removes the file or directory at the specified path.

### Creating symbolic and hard links

- [createSymbolicLinkAtURL:withDestinationURL:error:](createsymboliclink%28at_withdestinationurl_%29.md): Creates a symbolic link at the specified URL that points to an item at the given URL.
- [linkItemAtURL:toURL:error:](linkitem%28at_to_%29.md): Creates a hard link between the items at the specified URLs.
- [linkItemAtPath:toPath:error:](linkitem%28atpath_topath_%29.md): Creates a hard link between the items at the specified paths.
- [destinationOfSymbolicLinkAtPath:error:](destinationofsymboliclink%28atpath_%29.md): Returns the path of the item pointed to by a symbolic link.
