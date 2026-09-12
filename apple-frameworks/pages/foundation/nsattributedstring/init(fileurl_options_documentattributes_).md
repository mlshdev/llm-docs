> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/init(fileurl:options:documentattributes:)](https://developer.apple.com/documentation/foundation/nsattributedstring/init(fileurl:options:documentattributes:))

# init(fileURL:options:documentAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 7.0+ (deprecated in 9.0) · iPadOS 7.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 2.0)

Initializes a new attributed string object from the data at the specified URL.

> Use [init(URL:options:documentAttributes:)](init%28url_options_documentattributes_%29.md) instead.

## Declaration

```swift
init(fileURL url: URL, options: [AnyHashable : Any] = [:], documentAttributes dict: AutoreleasingUnsafeMutablePointer<NSDictionary?>?) throws
```

## Parameters

- `url`: An `NSURL` object specifying the document to load.
- `options`: Document attributes for interpreting the document contents. [documentType](documentattributekey/documenttype.md), [characterEncoding](documentattributekey/characterencoding.md), and [defaultAttributes](documentattributekey/defaultattributes.md) are supported option keys. If not specified, the method examines the data to attempt to determine the appropriate attributes.
- `dict`: If non-`NULL`, returns a dictionary with various document-wide attributes accessible via document attribute keys.

<a id="return-value"></a>

## Return Value

Returns an initialized attributed string object, or `nil` if the data can’t be decoded.

<a id="Discussion"></a>

## Discussion

The HTML importer should not be called from a background thread (that is, the `options` dictionary includes [documentType](documentattributekey/documenttype.md) with a value of [html](documenttype/html.md)). It will try to synchronize with the main thread, fail, and time out. Calling it from the main thread works (but can still time out if the HTML contains references to external resources, which should be avoided at all costs). The HTML import mechanism is meant for implementing something like markdown (that is, text styles, colors, and so on), not for general HTML import.

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Deprecated Initializers

- [init(path:documentAttributes:)](init%28path_documentattributes_%29.md): Deprecated. Initializes a new attribute string object from RTF or RTFD data in the file at the specified path.
- [init(URL:documentAttributes:)](init%28url_documentattributes_%29.md): Deprecated. Initializes a new attributed string object from the data at the specified URL.

# initWithFileURL:options:documentAttributes:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 9.0) · iPadOS 7.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 2.0)

Initializes a new attributed string object from the data at the specified URL.

> Use [initWithURL:options:documentAttributes:error:](init%28url_options_documentattributes_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithFileURL:(NSURL *) url options:(NSDictionary *) options documentAttributes:(NSDictionary **) dict error:(NSError **) error;
```

## Parameters

- `url`: An `NSURL` object specifying the document to load.
- `options`: Document attributes for interpreting the document contents. [documentType](documentattributekey/documenttype.md), [characterEncoding](documentattributekey/characterencoding.md), and [defaultAttributes](documentattributekey/defaultattributes.md) are supported option keys. If not specified, the method examines the data to attempt to determine the appropriate attributes.
- `dict`: If non-`NULL`, returns a dictionary with various document-wide attributes accessible via document attribute keys.
- `error`: An in-out variable containing an encountered error, if any.

<a id="return-value"></a>

## Return Value

Returns an initialized attributed string object, or `nil` if the data can’t be decoded.

<a id="Discussion"></a>

## Discussion

The HTML importer should not be called from a background thread (that is, the `options` dictionary includes [documentType](documentattributekey/documenttype.md) with a value of [html](documenttype/html.md)). It will try to synchronize with the main thread, fail, and time out. Calling it from the main thread works (but can still time out if the HTML contains references to external resources, which should be avoided at all costs). The HTML import mechanism is meant for implementing something like markdown (that is, text styles, colors, and so on), not for general HTML import.

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Deprecated Initializers

- [initWithPath:documentAttributes:](init%28path_documentattributes_%29.md): Deprecated. Initializes a new attribute string object from RTF or RTFD data in the file at the specified path.
- [initWithURL:documentAttributes:](init%28url_documentattributes_%29.md): Deprecated. Initializes a new attributed string object from the data at the specified URL.
