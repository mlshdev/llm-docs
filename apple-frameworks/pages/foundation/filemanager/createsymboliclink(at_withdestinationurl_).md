> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/createsymboliclink(at:withdestinationurl:)](https://developer.apple.com/documentation/foundation/filemanager/createsymboliclink(at:withdestinationurl:))

# createSymbolicLink(at:withDestinationURL:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a symbolic link at the specified URL that points to an item at the given URL.

## Declaration

```swift
func createSymbolicLink(at url: URL, withDestinationURL destURL: URL) throws
```

## Parameters

- `url`: The file URL at which to create the new symbolic link. The last path component of the URL issued as the name of the link.
- `destURL`: The file URL that contains the item to be pointed to by the link. In other words, this is the destination of the link.

<a id="Discussion"></a>

## Discussion

This method does not traverse symbolic links contained in `destURL`, making it possible to create symbolic links to locations that do not yet exist. Also, if the final path component in `url` is a symbolic link, that link is not followed.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating symbolic and hard links

- [createSymbolicLink(atPath:withDestinationPath:)](createsymboliclink%28atpath_withdestinationpath_%29.md): Creates a symbolic link that points to the specified destination.
- [linkItem(at:to:)](linkitem%28at_to_%29.md): Creates a hard link between the items at the specified URLs.
- [linkItem(atPath:toPath:)](linkitem%28atpath_topath_%29.md): Creates a hard link between the items at the specified paths.
- [destinationOfSymbolicLink(atPath:)](destinationofsymboliclink%28atpath_%29.md): Returns the path of the item pointed to by a symbolic link.

# createSymbolicLinkAtURL:withDestinationURL:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a symbolic link at the specified URL that points to an item at the given URL.

## Declaration

```objectivec
- (BOOL) createSymbolicLinkAtURL:(NSURL *) url withDestinationURL:(NSURL *) destURL error:(NSError **) error;
```

## Parameters

- `url`: The file URL at which to create the new symbolic link. The last path component of the URL issued as the name of the link.
- `destURL`: The file URL that contains the item to be pointed to by the link. In other words, this is the destination of the link.
- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify `nil` for this parameter if you do not want the error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the symbolic link was created or [false](https://developer.apple.com/documentation/swift/false) if an error occurred. This method also returns [false](https://developer.apple.com/documentation/swift/false) if a file, directory, or link already exists at `url`.

<a id="Discussion"></a>

## Discussion

This method does not traverse symbolic links contained in `destURL`, making it possible to create symbolic links to locations that do not yet exist. Also, if the final path component in `url` is a symbolic link, that link is not followed.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating symbolic and hard links

- [createSymbolicLinkAtPath:withDestinationPath:error:](createsymboliclink%28atpath_withdestinationpath_%29.md): Creates a symbolic link that points to the specified destination.
- [linkItemAtURL:toURL:error:](linkitem%28at_to_%29.md): Creates a hard link between the items at the specified URLs.
- [linkItemAtPath:toPath:error:](linkitem%28atpath_topath_%29.md): Creates a hard link between the items at the specified paths.
- [destinationOfSymbolicLinkAtPath:error:](destinationofsymboliclink%28atpath_%29.md): Returns the path of the item pointed to by a symbolic link.
