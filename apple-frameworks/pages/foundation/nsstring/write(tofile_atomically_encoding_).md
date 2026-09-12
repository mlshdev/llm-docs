> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/write(tofile:atomically:encoding:)](https://developer.apple.com/documentation/foundation/nsstring/write(tofile:atomically:encoding:))

# write(toFile:atomically:encoding:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes the contents of the receiver to a file at a given path using a given encoding.

## Declaration

```swift
func write(toFile path: String, atomically useAuxiliaryFile: Bool, encoding enc: UInt) throws
```

## Parameters

- `path`: The file to which to write the receiver. If `path` contains a tilde (`~`) character, you must expand it with [expandingTildeInPath](expandingtildeinpath.md) before invoking this method.
- `useAuxiliaryFile`: If [true](https://developer.apple.com/documentation/swift/true), the receiver is written to an auxiliary file, and then the auxiliary file is renamed to `path`. If [false](https://developer.apple.com/documentation/swift/false), the receiver is written directly to `path`. The [true](https://developer.apple.com/documentation/swift/true) option guarantees that `path`, if it exists at all, won’t be corrupted even if the system should crash during writing.
- `enc`: The encoding to use for the output. For possible values, see [NSStringEncoding](../nsstringencoding.md).

<a id="Discussion"></a>

## Discussion

This method overwrites any existing file at `path`.

This method stores the specified encoding with the file in an extended attribute under the name `com.apple.TextEncoding`. The value contains the IANA name for the encoding and the [CFStringEncoding](../../corefoundation/cfstringencoding.md) value for the encoding, separated by a semicolon. The `CFStringEncoding` value is written as an ASCII string containing an unsigned 32-bit decimal integer and is not terminated by a null character. One or both of these values may be missing. Examples of the value written include the following:

- `MACINTOSH;0`
- `UTF-8;134217984`
- `UTF-8;`
- `;3071`

The methods [init(contentsOfFile:usedEncoding:)](init%28contentsoffile_usedencoding_%29.md), `NSString/init(contentsOfURL:usedEncoding:)-2c72d`, [stringWithContentsOfFile:usedEncoding:error:](stringwithcontentsoffile_usedencoding_error_.md), and `NSString/init(contentsOfURL:usedEncoding:)-9jrum` use this information to open the file using the right encoding.

> **Note**

>  In the future this attribute may be extended compatibly by adding additional information after what’s there now, so any readers should be prepared for an arbitrarily long value for this attribute, with stuff following the `CFStringEncoding` value, separated by a non-digit.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Writing to a File or URL

- [write(to:atomically:encoding:)](write%28to_atomically_encoding_%29.md): Writes the contents of the receiver to the URL specified by `url` using the specified encoding.

# writeToFile:atomically:encoding:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes the contents of the receiver to a file at a given path using a given encoding.

## Declaration

```objectivec
- (BOOL) writeToFile:(NSString *) path atomically:(BOOL) useAuxiliaryFile encoding:(NSStringEncoding) enc error:(NSError **) error;
```

## Parameters

- `path`: The file to which to write the receiver. If `path` contains a tilde (`~`) character, you must expand it with [stringByExpandingTildeInPath](expandingtildeinpath.md) before invoking this method.
- `useAuxiliaryFile`: If [true](https://developer.apple.com/documentation/swift/true), the receiver is written to an auxiliary file, and then the auxiliary file is renamed to `path`. If [false](https://developer.apple.com/documentation/swift/false), the receiver is written directly to `path`. The [true](https://developer.apple.com/documentation/swift/true) option guarantees that `path`, if it exists at all, won’t be corrupted even if the system should crash during writing.
- `enc`: The encoding to use for the output. For possible values, see [NSStringEncoding](../nsstringencoding.md).
- `error`: If there is an error, upon return contains an [NSError](../nserror.md) object that describes the problem. If you are not interested in details of errors, you may pass in `NULL`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the file is written successfully, otherwise [false](https://developer.apple.com/documentation/swift/false) (if there was a problem writing to the file or with the encoding).

<a id="Discussion"></a>

## Discussion

This method overwrites any existing file at `path`.

This method stores the specified encoding with the file in an extended attribute under the name `com.apple.TextEncoding`. The value contains the IANA name for the encoding and the [CFStringEncoding](../../corefoundation/cfstringencoding.md) value for the encoding, separated by a semicolon. The `CFStringEncoding` value is written as an ASCII string containing an unsigned 32-bit decimal integer and is not terminated by a null character. One or both of these values may be missing. Examples of the value written include the following:

- `MACINTOSH;0`
- `UTF-8;134217984`
- `UTF-8;`
- `;3071`

The methods [initWithContentsOfFile:usedEncoding:error:](init%28contentsoffile_usedencoding_%29.md), `NSString/init(contentsOfURL:usedEncoding:)-2c72d`, [stringWithContentsOfFile:usedEncoding:error:](stringwithcontentsoffile_usedencoding_error_.md), and `NSString/init(contentsOfURL:usedEncoding:)-9jrum` use this information to open the file using the right encoding.

> **Note**

>  In the future this attribute may be extended compatibly by adding additional information after what’s there now, so any readers should be prepared for an arbitrarily long value for this attribute, with stuff following the `CFStringEncoding` value, separated by a non-digit.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Writing to a File or URL

- [writeToURL:atomically:encoding:error:](write%28to_atomically_encoding_%29.md): Writes the contents of the receiver to the URL specified by `url` using the specified encoding.
