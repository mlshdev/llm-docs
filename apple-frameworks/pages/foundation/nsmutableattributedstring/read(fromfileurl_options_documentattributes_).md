> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/read(fromfileurl:options:documentattributes:)](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/read(fromfileurl:options:documentattributes:))

# read(fromFileURL:options:documentAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 9.0) · iPadOS 7.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 2.0)

Sets the contents of the receiver from the file at the given URL.

> Use [read(from:options:documentAttributes:)](read%28from_options_documentattributes_%29-54wth.md) instead.

## Declaration

```swift
func read(fromFileURL url: URL, options opts: [AnyHashable : Any] = [:], documentAttributes dict: AutoreleasingUnsafeMutablePointer<NSDictionary?>?) throws
```

## Parameters

- `url`: The location of the file providing text data.
- `opts`: The option keys for importing the document. For a list of possible values, see “Option keys for importing documents” in [NSAttributedString](../nsattributedstring.md).
- `dict`: On return, contains the document attributes. For a list of possible values, see “Document Attributes” in [NSAttributedString](../nsattributedstring.md).

<a id="Discussion"></a>

## Discussion

For RTF formatted files, the contents of the file are appended to the previous string instead of replacing the previous string.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Deprecated

- [read(from:options:documentAttributes:)](read%28from_options_documentattributes_%29-967j7.md): Deprecated. Sets the contents of the receiver from the specified data object`.`
- [read(from:options:documentAttributes:)](read%28from_options_documentattributes_%29-85y1d.md): Deprecated. Sets the contents of receiver from the file at the specified URL.

# readFromFileURL:options:documentAttributes:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 9.0) · iPadOS 7.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 2.0)

Sets the contents of the receiver from the file at the given URL.

> Use [readFromURL:options:documentAttributes:error:](read%28from_options_documentattributes_%29-54wth.md) instead.

## Declaration

```objectivec
- (BOOL) readFromFileURL:(NSURL *) url options:(NSDictionary *) opts documentAttributes:(NSDictionary **) dict error:(NSError **) error;
```

## Parameters

- `url`: The location of the file providing text data.
- `opts`: The option keys for importing the document. For a list of possible values, see “Option keys for importing documents” in [NSAttributedString](../nsattributedstring.md).
- `dict`: On return, contains the document attributes. For a list of possible values, see “Document Attributes” in [NSAttributedString](../nsattributedstring.md).
- `error`: Upon return, if an error occurs, contains an `NSError` object that describes the problem. If you are not interested in possible errors, pass in `NULL`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the attributed string is created successfully or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

For RTF formatted files, the contents of the file are appended to the previous string instead of replacing the previous string.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Deprecated

- [readFromData:options:documentAttributes:](read%28from_options_documentattributes_%29-967j7.md): Deprecated. Sets the contents of the receiver from the specified data object`.`
- [readFromURL:options:documentAttributes:](read%28from_options_documentattributes_%29-85y1d.md): Deprecated. Sets the contents of receiver from the file at the specified URL.
