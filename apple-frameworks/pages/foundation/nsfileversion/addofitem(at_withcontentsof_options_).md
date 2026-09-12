> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileversion/addofitem(at:withcontentsof:options:)](https://developer.apple.com/documentation/foundation/nsfileversion/addofitem(at:withcontentsof:options:))

# addOfItem(at:withContentsOf:options:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Creates a version of the file at the specified location.

## Declaration

```swift
class func addOfItem(at url: URL, withContentsOf contentsURL: URL, options: NSFileVersion.AddingOptions = []) throws -> NSFileVersion
```

## Parameters

- `url`: The location at which to store the new file version.
- `contentsURL`: The URL that specifies the file to use for the version contents.
- `options`: Specify 0 for this parameter if you want to create a copy of the file at the location specified by the `url` parameter. Alternatively, specify one of the constants described in [NSFileVersion.AddingOptions](addingoptions.md).

<a id="return-value"></a>

## Return Value

The file version object representing the new version or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

You can use this method to save a version of your file to the location specified by the `url` parameter. The contents of the file are taken from the `contentsURL` parameter, whose value may be the same as the `url` parameter.

You should always add file versions as part of a coordinated write operation to a file. In other words, always call this method from a block passed to a file coordinator object to initiate a write operation. Doing so ensures that no other processes are operating on the file while you save the version to its new location.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

# addVersionOfItemAtURL:withContentsOfURL:options:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Creates a version of the file at the specified location.

## Declaration

```objectivec
+ (NSFileVersion *) addVersionOfItemAtURL:(NSURL *) url withContentsOfURL:(NSURL *) contentsURL options:(NSFileVersionAddingOptions) options error:(NSError **) outError;
```

## Parameters

- `url`: The location at which to store the new file version.
- `contentsURL`: The URL that specifies the file to use for the version contents.
- `options`: Specify 0 for this parameter if you want to create a copy of the file at the location specified by the `url` parameter. Alternatively, specify one of the constants described in [NSFileVersionAddingOptions](addingoptions.md).
- `outError`: On input, a pointer to an error object. If an error occurs, this pointer is set to an [NSError](../nserror.md) object with information about the error.

<a id="return-value"></a>

## Return Value

The file version object representing the new version or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

You can use this method to save a version of your file to the location specified by the `url` parameter. The contents of the file are taken from the `contentsURL` parameter, whose value may be the same as the `url` parameter.

You should always add file versions as part of a coordinated write operation to a file. In other words, always call this method from a block passed to a file coordinator object to initiate a write operation. Doing so ensures that no other processes are operating on the file while you save the version to its new location.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.
