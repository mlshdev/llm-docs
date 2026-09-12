> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileversion/remove()](https://developer.apple.com/documentation/foundation/nsfileversion/remove())

# remove() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Remove this version object and its associated file from the version store.

## Declaration

```swift
func remove() throws
```

<a id="Discussion"></a>

## Discussion

This method removes this version object and its file from the version store, freeing up the associated storage space. You must not call this method for the current file version—that is, the version object returned by the [currentVersionOfItem(at:)](currentversionofitem%28at_%29.md) method.

You should always remove file versions as part of a coordinated write operation to a file. In other words, always call this method from a block passed to a file coordinator object to initiate a write operation. Doing so ensures that no other processes are operating on the file while you remove the version information.

If successful, subsequent requests for the versions of the file do not include this version object (or any object with the same information). You can use this method to free up disk space by removing versions that are no longer needed.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Replacing and Deleting Versions

- [replaceItem(at:options:)](replaceitem%28at_options_%29.md): Replace the contents of the specified file with the contents of the current version’s file.
- [removeOtherVersionsOfItem(at:)](removeotherversionsofitem%28at_%29.md): Removes all versions of a file, except the current one, from the version store.

# removeAndReturnError: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Remove this version object and its associated file from the version store.

## Declaration

```objectivec
- (BOOL) removeAndReturnError:(NSError **) outError;
```

## Parameters

- `outError`: On input, a pointer to an error object. If an error occurs, this pointer is set to an [NSError](../nserror.md) object with information about the error.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this version was removed successfully or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

This method removes this version object and its file from the version store, freeing up the associated storage space. You must not call this method for the current file version—that is, the version object returned by the [currentVersionOfItemAtURL:](currentversionofitem%28at_%29.md) method.

You should always remove file versions as part of a coordinated write operation to a file. In other words, always call this method from a block passed to a file coordinator object to initiate a write operation. Doing so ensures that no other processes are operating on the file while you remove the version information.

If successful, subsequent requests for the versions of the file do not include this version object (or any object with the same information). You can use this method to free up disk space by removing versions that are no longer needed.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Replacing and Deleting Versions

- [replaceItemAtURL:options:error:](replaceitem%28at_options_%29.md): Replace the contents of the specified file with the contents of the current version’s file.
- [removeOtherVersionsOfItemAtURL:error:](removeotherversionsofitem%28at_%29.md): Removes all versions of a file, except the current one, from the version store.
