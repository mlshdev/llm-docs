> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/revert(tocontentsof:oftype:)](https://developer.apple.com/documentation/appkit/nsdocument/revert(tocontentsof:oftype:))

# revert(toContentsOf:ofType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Discards all unsaved document modifications and replaces the document’s contents by reading a file or file package located by a URL of a specified type.

## Declaration

```swift
func revert(toContentsOf url: URL, ofType typeName: String) throws
```

## Parameters

- `url`: The location from which the document contents are read.
- `typeName`: The string that identifies the document type.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

# revertToContentsOfURL:ofType:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Discards all unsaved document modifications and replaces the document’s contents by reading a file or file package located by a URL of a specified type.

## Declaration

```objectivec
- (BOOL) revertToContentsOfURL:(NSURL *) url ofType:(NSString *) typeName error:(NSError **) outError;
```

## Parameters

- `url`: The location from which the document contents are read.
- `typeName`: The string that identifies the document type.
- `outError`: On return, if the document could not be reverted, a pointer to an error object that encapsulates the reason it could not be reverted.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the document could be reverted; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.
