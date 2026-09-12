> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/destinationofsymboliclink(atpath:)](https://developer.apple.com/documentation/foundation/filemanager/destinationofsymboliclink(atpath:))

# destinationOfSymbolicLink(atPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the path of the item pointed to by a symbolic link.

## Declaration

```swift
func destinationOfSymbolicLink(atPath path: String) throws -> String
```

## Parameters

- `path`: The path of a file or directory.

<a id="return-value"></a>

## Return Value

An [NSString](../nsstring.md) object containing the path of the directory or file to which the symbolic link `path` refers. When using Objective-C, returns `nil` upon failure. If the symbolic link is specified as a relative path, that relative path is returned.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating symbolic and hard links

- [createSymbolicLink(at:withDestinationURL:)](createsymboliclink%28at_withdestinationurl_%29.md): Creates a symbolic link at the specified URL that points to an item at the given URL.
- [createSymbolicLink(atPath:withDestinationPath:)](createsymboliclink%28atpath_withdestinationpath_%29.md): Creates a symbolic link that points to the specified destination.
- [linkItem(at:to:)](linkitem%28at_to_%29.md): Creates a hard link between the items at the specified URLs.
- [linkItem(atPath:toPath:)](linkitem%28atpath_topath_%29.md): Creates a hard link between the items at the specified paths.

# destinationOfSymbolicLinkAtPath:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the path of the item pointed to by a symbolic link.

## Declaration

```objectivec
- (NSString *) destinationOfSymbolicLinkAtPath:(NSString *) path error:(NSError **) error;
```

## Parameters

- `path`: The path of a file or directory.
- `error`: If an error occurs, upon return contains an [NSError](../nserror.md) object that describes the problem. Pass `NULL` if you do not want error information.

<a id="return-value"></a>

## Return Value

An [NSString](../nsstring.md) object containing the path of the directory or file to which the symbolic link `path` refers. When using Objective-C, returns `nil` upon failure. If the symbolic link is specified as a relative path, that relative path is returned.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating symbolic and hard links

- [createSymbolicLinkAtURL:withDestinationURL:error:](createsymboliclink%28at_withdestinationurl_%29.md): Creates a symbolic link at the specified URL that points to an item at the given URL.
- [createSymbolicLinkAtPath:withDestinationPath:error:](createsymboliclink%28atpath_withdestinationpath_%29.md): Creates a symbolic link that points to the specified destination.
- [linkItemAtURL:toURL:error:](linkitem%28at_to_%29.md): Creates a hard link between the items at the specified URLs.
- [linkItemAtPath:toPath:error:](linkitem%28atpath_topath_%29.md): Creates a hard link between the items at the specified paths.
