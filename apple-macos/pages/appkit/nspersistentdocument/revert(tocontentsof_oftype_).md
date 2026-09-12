> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspersistentdocument/revert(tocontentsof:oftype:)](https://developer.apple.com/documentation/appkit/nspersistentdocument/revert(tocontentsof:oftype:))

# revert(toContentsOf:ofType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden to clean up the managed object context and controllers during a revert.

## Declaration

```swift
func revert(toContentsOf inAbsoluteURL: URL, ofType inTypeName: String) throws
```

## Parameters

- `inAbsoluteURL`: An URL object that specifies the location of the file to which to revert.
- `inTypeName`: The type of the document at `inAbsoluteURL`.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Document Content Management

- [read(from:ofType:)](read%28from_oftype_%29.md): Sets the contents of the receiver by reading from a file of a given type located by a given URL.
- [write(to:ofType:for:originalContentsURL:)](write%28to_oftype_for_originalcontentsurl_%29.md): Saves changes in the document’s managed object context and saves the document’s persistent store to a given URL.

# revertToContentsOfURL:ofType:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overridden to clean up the managed object context and controllers during a revert.

## Declaration

```objectivec
- (BOOL) revertToContentsOfURL:(NSURL *) inAbsoluteURL ofType:(NSString *) inTypeName error:(NSError **) outError;
```

## Parameters

- `inAbsoluteURL`: An URL object that specifies the location of the file to which to revert.
- `inTypeName`: The type of the document at `inAbsoluteURL`.
- `outError`: If the method fails to complete correctly, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the method completes correctly, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Document Content Management

- [readFromURL:ofType:error:](read%28from_oftype_%29.md): Sets the contents of the receiver by reading from a file of a given type located by a given URL.
- [writeToURL:ofType:forSaveOperation:originalContentsURL:error:](write%28to_oftype_for_originalcontentsurl_%29.md): Saves changes in the document’s managed object context and saves the document’s persistent store to a given URL.
