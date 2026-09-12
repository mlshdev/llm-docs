> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspersistentdocument/write(to:oftype:for:originalcontentsurl:)](https://developer.apple.com/documentation/appkit/nspersistentdocument/write(to:oftype:for:originalcontentsurl:))

# write(to:ofType:for:originalContentsURL:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Saves changes in the document’s managed object context and saves the document’s persistent store to a given URL.

## Declaration

```swift
nonisolated func write(to absoluteURL: URL, ofType typeName: String, for saveOperation: NSDocument.SaveOperationType, originalContentsURL absoluteOriginalContentsURL: URL?) throws
```

## Parameters

- `absoluteURL`: An URL that specifies the new location for the document store. It must not be a relative URL.
- `typeName`: The document type.
- `saveOperation`: The save operation type. See the “Constants” section in [NSDocument](../nsdocument.md) for possible values.
- `absoluteOriginalContentsURL`: An URL that specifies the location of the original document store.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [configurePersistentStoreCoordinator(for:ofType:modelConfiguration:storeOptions:)](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Configures the receiver’s persistent store coordinator with the appropriate stores for a given URL.

### Document Content Management

- [read(from:ofType:)](read%28from_oftype_%29.md): Sets the contents of the receiver by reading from a file of a given type located by a given URL.
- [revert(toContentsOf:ofType:)](revert%28tocontentsof_oftype_%29.md): Overridden to clean up the managed object context and controllers during a revert.

# writeToURL:ofType:forSaveOperation:originalContentsURL:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Saves changes in the document’s managed object context and saves the document’s persistent store to a given URL.

## Declaration

```objectivec
- (BOOL) writeToURL:(NSURL *) absoluteURL ofType:(NSString *) typeName forSaveOperation:(NSSaveOperationType) saveOperation originalContentsURL:(NSURL *) absoluteOriginalContentsURL error:(NSError **) error;
```

## Parameters

- `absoluteURL`: An URL that specifies the new location for the document store. It must not be a relative URL.
- `typeName`: The document type.
- `saveOperation`: The save operation type. See the “Constants” section in [NSDocument](../nsdocument.md) for possible values.
- `absoluteOriginalContentsURL`: An URL that specifies the location of the original document store.
- `error`: If the save fails to complete correctly, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the save completes correctly, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error:](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Configures the receiver’s persistent store coordinator with the appropriate stores for a given URL.

### Document Content Management

- [readFromURL:ofType:error:](read%28from_oftype_%29.md): Sets the contents of the receiver by reading from a file of a given type located by a given URL.
- [revertToContentsOfURL:ofType:error:](revert%28tocontentsof_oftype_%29.md): Overridden to clean up the managed object context and controllers during a revert.
