> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderextension/writeplaceholder(at:withmetadata:)](https://developer.apple.com/documentation/fileprovider/nsfileproviderextension/writeplaceholder(at:withmetadata:))

# writePlaceholder(at:withMetadata:) (Swift)

**Framework:** File Provider  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 8.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Writes a document placeholder with the provided metadata.

> Use the [NSFileProviderManager](../nsfileprovidermanager.md) class’s [writePlaceholder(at:withMetadata:)](../nsfileprovidermanager/writeplaceholder%28at_withmetadata_%29.md) method instead.

## Declaration

```swift
class func writePlaceholder(at placeholderURL: URL, withMetadata metadata: [URLResourceKey : Any]) throws
```

## Parameters

- `placeholderURL`: The placeholder URL for the document. You can generate a placeholder URL from a document URL by calling [placeholderURL(for:)](placeholderurl%28for_%29.md).
- `metadata`: The metadata for this document.

<a id="Discussion"></a>

## Discussion

Call this method whenever you need to create a placeholder for a document. The metadata that you provide depends largely on the needs of your document picker’s user interface; however, the common options include file size, filename, and thumbnails.

You must not override this method.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing placeholders

- [placeholderURL(for:)](placeholderurl%28for_%29.md): Deprecated. Returns a placeholder URL for a given document URL.

# writePlaceholderAtURL:withMetadata:error: (Objective-C)

**Framework:** File Provider  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 11.0) · iPadOS 11.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Writes a document placeholder with the provided metadata.

> Use the [NSFileProviderManager](../nsfileprovidermanager.md) class’s [writePlaceholderAtURL:withMetadata:error:](../nsfileprovidermanager/writeplaceholder%28at_withmetadata_%29.md) method instead.

## Declaration

```objectivec
+ (BOOL) writePlaceholderAtURL:(NSURL *) placeholderURL withMetadata:(NSDictionary<NSString *,id> *) metadata error:(NSError **) error;
```

## Parameters

- `placeholderURL`: The placeholder URL for the document. You can generate a placeholder URL from a document URL by calling [placeholderURLForURL:](placeholderurl%28for_%29.md).
- `metadata`: The metadata for this document.
- `error`: If an error occurs while writing the placeholder, the error parameter is set to an `NSError` object that describes the problem. If you are not interested in the error details, you may pass in `NULL`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true), if the placeholder is written successfully; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Call this method whenever you need to create a placeholder for a document. The metadata that you provide depends largely on the needs of your document picker’s user interface; however, the common options include file size, filename, and thumbnails.

You must not override this method.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing placeholders

- [placeholderURLForURL:](placeholderurl%28for_%29.md): Deprecated. Returns a placeholder URL for a given document URL.
