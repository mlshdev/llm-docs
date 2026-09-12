> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/init(data:options:documentattributes:)](https://developer.apple.com/documentation/foundation/nsattributedstring/init(data:options:documentattributes:))

# init(data:options:documentAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an attributed string from the contents of the specified data object.

## Declaration

```swift
init(data: Data, options: [NSAttributedString.DocumentReadingOptionKey : Any] = [:], documentAttributes dict: AutoreleasingUnsafeMutablePointer<NSDictionary?>?) throws
```

## Parameters

- `data`: The data from which to create the string.
- `options`: Attributes for interpreting the document contents. Specify the [documentType](documentattributekey/documenttype.md) or [fileType](documentreadingoptionkey/filetype.md) option to interpret the data as a specific type. When sharing files between different platforms, specify the [sourceTextScaling](documentreadingoptionkey/sourcetextscaling.md) or [targetTextScaling](documentreadingoptionkey/targettextscaling.md) options for any required text scaling behaviors. Specify the [characterEncoding](documentattributekey/characterencoding.md) attribute for plain-text files. Specify the [defaultAttributes](documentattributekey/defaultattributes.md) key to apply document attributes to the returned string. If you specify an empty dictionary, the method identifies the data format from the data itself.
- `dict`: An in-out dictionary containing document-level attributes. On output, this method updates the dictionary to contain any document-specific keys found in the data. Specify `nil` if you don’t want the document attributes.

<a id="return-value"></a>

## Return Value

Returns an initialized attributed string object, or `nil` if the method can’t decode the data.

<a id="Discussion"></a>

## Discussion

Don’t call this method from a background thread if the `options` dictionary includes the [documentType](documentattributekey/documenttype.md) attribute with a value of [html](documenttype/html.md). If you do, the method tries to synchronize with the main thread, fails, and times out. Calling it from the main thread works, but can still time out if the HTML contains references to external resources. The HTML import mechanism is meant for implementing something like markdown (that is, text styles, colors, and so on), not for general HTML import.

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating from a data file

- [init(docFormat:documentAttributes:)](init%28docformat_documentattributes_%29.md): Creates an attributed string from Microsoft Word format data in the specified data object.
- [init(URL:options:documentAttributes:)](init%28url_options_documentattributes_%29.md): Creates an attributed string from the contents of the specified URL.

# initWithData:options:documentAttributes:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an attributed string from the contents of the specified data object.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data options:(NSDictionary<NSString *,id> *) options documentAttributes:(NSDictionary<NSString *,id> **) dict error:(NSError **) error;
```

## Parameters

- `data`: The data from which to create the string.
- `options`: Attributes for interpreting the document contents. Specify the [documentType](documentattributekey/documenttype.md) or [fileType](documentreadingoptionkey/filetype.md) option to interpret the data as a specific type. When sharing files between different platforms, specify the [sourceTextScaling](documentreadingoptionkey/sourcetextscaling.md) or [targetTextScaling](documentreadingoptionkey/targettextscaling.md) options for any required text scaling behaviors. Specify the [characterEncoding](documentattributekey/characterencoding.md) attribute for plain-text files. Specify the [defaultAttributes](documentattributekey/defaultattributes.md) key to apply document attributes to the returned string. If you specify an empty dictionary, the method identifies the data format from the data itself.
- `dict`: An in-out dictionary containing document-level attributes. On output, this method updates the dictionary to contain any document-specific keys found in the data. Specify `nil` if you don’t want the document attributes.
- `error`: An in-out variable containing an error, if any.

<a id="return-value"></a>

## Return Value

Returns an initialized attributed string object, or `nil` if the method can’t decode the data.

<a id="Discussion"></a>

## Discussion

Don’t call this method from a background thread if the `options` dictionary includes the [documentType](documentattributekey/documenttype.md) attribute with a value of [html](documenttype/html.md). If you do, the method tries to synchronize with the main thread, fails, and times out. Calling it from the main thread works, but can still time out if the HTML contains references to external resources. The HTML import mechanism is meant for implementing something like markdown (that is, text styles, colors, and so on), not for general HTML import.

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating from a data file

- [initWithDocFormat:documentAttributes:](init%28docformat_documentattributes_%29.md): Creates an attributed string from Microsoft Word format data in the specified data object.
- [initWithURL:options:documentAttributes:error:](init%28url_options_documentattributes_%29.md): Creates an attributed string from the contents of the specified URL.
