> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/getrelationship(_:of:in:toitemat:)](https://developer.apple.com/documentation/foundation/filemanager/getrelationship(_:of:in:toitemat:))

# getRelationship(\_:of:in:toItemAt:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines the type of relationship that exists between a system directory and the specified item.

## Declaration

```swift
func getRelationship(_ outRelationship: UnsafeMutablePointer<FileManager.URLRelationship>, of directory: FileManager.SearchPathDirectory, in domainMask: FileManager.SearchPathDomainMask, toItemAt url: URL) throws
```

## Parameters

- `outRelationship`: A pointer to a variable in which to put the relationship between `directoryURL` and `otherURL`. For a list of possible values, see [FileManager.URLRelationship](urlrelationship.md).
- `directory`: The search path directory. For a list of possible values, see [FileManager.SearchPathDirectory](searchpathdirectory.md).
- `domainMask`: The file system domain to search. Specify `0` for this parameter if you want the file manager to choose the domain that is most appropriate for the specified `url`.
- `url`: The URL of the file or directory whose relationship to `directoryURL` is being tested. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to determine the relationship between an item and one of the system-specific directories. For example, you might use this method to determine if the specified item is in the user’s `Documents` directory or is in the trash. If the relationship between the items is determined successfully, this method sets the value of the `outRelationship` parameter to an appropriate value. The directory may contain the item, it may be the same as the item, or it may not have a direct relationship to the item.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Getting the relationship between items

- [getRelationship(\_:ofDirectoryAt:toItemAt:)](getrelationship%28__ofdirectoryat_toitemat_%29.md): Determines the type of relationship that exists between a directory and an item.
- [FileManager.URLRelationship](urlrelationship.md): Constants indicating the relationship between a directory and an item.

# getRelationship:ofDirectory:inDomain:toItemAtURL:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Determines the type of relationship that exists between a system directory and the specified item.

## Declaration

```objectivec
- (BOOL) getRelationship:(NSURLRelationship *) outRelationship ofDirectory:(NSSearchPathDirectory) directory inDomain:(NSSearchPathDomainMask) domainMask toItemAtURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `outRelationship`: A pointer to a variable in which to put the relationship between `directoryURL` and `otherURL`. For a list of possible values, see [NSURLRelationship](urlrelationship.md).
- `directory`: The search path directory. For a list of possible values, see [NSSearchPathDirectory](searchpathdirectory.md).
- `domainMask`: The file system domain to search. Specify `0` for this parameter if you want the file manager to choose the domain that is most appropriate for the specified `url`.
- `url`: The URL of the file or directory whose relationship to `directoryURL` is being tested. This parameter must not be `nil`.
- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify `nil` for this parameter if you do not want the error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the relationship between the items was successfully determined, or [false](https://developer.apple.com/documentation/swift/false) if an error occurred.

<a id="Discussion"></a>

## Discussion

Use this method to determine the relationship between an item and one of the system-specific directories. For example, you might use this method to determine if the specified item is in the user’s `Documents` directory or is in the trash. If the relationship between the items is determined successfully, this method sets the value of the `outRelationship` parameter to an appropriate value. The directory may contain the item, it may be the same as the item, or it may not have a direct relationship to the item.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Getting the relationship between items

- [getRelationship:ofDirectoryAtURL:toItemAtURL:error:](getrelationship%28__ofdirectoryat_toitemat_%29.md): Determines the type of relationship that exists between a directory and an item.
- [NSURLRelationship](urlrelationship.md): Constants indicating the relationship between a directory and an item.
