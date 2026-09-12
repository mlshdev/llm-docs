> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspersistentdocument/read(from:oftype:)](https://developer.apple.com/documentation/appkit/nspersistentdocument/read(from:oftype:))

# read(from:ofType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the contents of the receiver by reading from a file of a given type located by a given URL.

## Declaration

```swift
nonisolated func read(from absoluteURL: URL, ofType typeName: String) throws
```

## Parameters

- `absoluteURL`: An URL that specifies the location from which to read the document.
- `typeName`: The document type at `absoluteURL`.

<a id="Discussion"></a>

## Discussion

This method sets the URL for the persistent object store associated with the receiver’s managed object context to `absoluteURL`.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [configurePersistentStoreCoordinator(for:ofType:modelConfiguration:storeOptions:)](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Configures the receiver’s persistent store coordinator with the appropriate stores for a given URL.

### Document Content Management

- [revert(toContentsOf:ofType:)](revert%28tocontentsof_oftype_%29.md): Overridden to clean up the managed object context and controllers during a revert.
- [write(to:ofType:for:originalContentsURL:)](write%28to_oftype_for_originalcontentsurl_%29.md): Saves changes in the document’s managed object context and saves the document’s persistent store to a given URL.

# readFromURL:ofType:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the contents of the receiver by reading from a file of a given type located by a given URL.

## Declaration

```objectivec
- (BOOL) readFromURL:(NSURL *) absoluteURL ofType:(NSString *) typeName error:(NSError **) error;
```

## Parameters

- `absoluteURL`: An URL that specifies the location from which to read the document.
- `typeName`: The document type at `absoluteURL`.
- `error`: If `absoluteURL` is not valid, or the store at `absoluteURL` cannot be read, upon return contains an `NSError` object that describes the problem

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `absoluteURL` is valid and the file is read correctly, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method sets the URL for the persistent object store associated with the receiver’s managed object context to `absoluteURL`.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error:](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Configures the receiver’s persistent store coordinator with the appropriate stores for a given URL.

### Document Content Management

- [revertToContentsOfURL:ofType:error:](revert%28tocontentsof_oftype_%29.md): Overridden to clean up the managed object context and controllers during a revert.
- [writeToURL:ofType:forSaveOperation:originalContentsURL:error:](write%28to_oftype_for_originalcontentsurl_%29.md): Saves changes in the document’s managed object context and saves the document’s persistent store to a given URL.
