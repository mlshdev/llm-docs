> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfileversion/removeotherversionsofitem(at:)](https://developer.apple.com/documentation/foundation/nsfileversion/removeotherversionsofitem(at:))

# removeOtherVersionsOfItem(at:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes all versions of a file, except the current one, from the version store.

## Declaration

```swift
class func removeOtherVersionsOfItem(at url: URL) throws
```

## Parameters

- `url`: The file whose older versions you want to delete. If the file at this URL does not exist, a new file is created at the location.

<a id="Discussion"></a>

## Discussion

This method removes all versions except the current one from the version store, freeing up the associated storage space.

You should always remove file versions as part of a coordinated write operation to a file. In other words, always call this method from a block passed to a file coordinator object to initiate a write operation. Doing so ensures that no other processes are operating on the file while you remove the version information.

If successful, subsequent requests for the versions of the file reflect that only the current version is available. You can use this method to free up disk space by removing versions that are no longer needed.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Replacing and Deleting Versions

- [replaceItem(at:options:)](replaceitem%28at_options_%29.md): Replace the contents of the specified file with the contents of the current version’s file.
- [remove()](remove%28%29.md): Remove this version object and its associated file from the version store.

# removeOtherVersionsOfItemAtURL:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes all versions of a file, except the current one, from the version store.

## Declaration

```objectivec
+ (BOOL) removeOtherVersionsOfItemAtURL:(NSURL *) url error:(NSError **) outError;
```

## Parameters

- `url`: The file whose older versions you want to delete. If the file at this URL does not exist, a new file is created at the location.
- `outError`: On input, a pointer to an error object. If an error occurs, this pointer is set to an [NSError](../nserror.md) object with information about the error.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the older file versions were removed successfully or [false](https://developer.apple.com/documentation/swift/false) if an error occurred.

<a id="Discussion"></a>

## Discussion

This method removes all versions except the current one from the version store, freeing up the associated storage space.

You should always remove file versions as part of a coordinated write operation to a file. In other words, always call this method from a block passed to a file coordinator object to initiate a write operation. Doing so ensures that no other processes are operating on the file while you remove the version information.

If successful, subsequent requests for the versions of the file reflect that only the current version is available. You can use this method to free up disk space by removing versions that are no longer needed.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Replacing and Deleting Versions

- [replaceItemAtURL:options:error:](replaceitem%28at_options_%29.md): Replace the contents of the specified file with the contents of the current version’s file.
- [removeAndReturnError:](remove%28%29.md): Remove this version object and its associated file from the version store.
