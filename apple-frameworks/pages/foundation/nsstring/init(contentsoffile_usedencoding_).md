> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/init(contentsoffile:usedencoding:)](https://developer.apple.com/documentation/foundation/nsstring/init(contentsoffile:usedencoding:))

# init(contentsOfFile:usedEncoding:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSString` object initialized by reading data from the file at a given path and returns by reference the encoding used to interpret the characters.

## Declaration

```swift
convenience init(contentsOfFile path: String, usedEncoding enc: UnsafeMutablePointer<UInt>?) throws
```

## Parameters

- `path`: A path to a file.
- `enc`: Upon return, if the file is read successfully, contains the encoding used to interpret the file at `path`. For possible values, see [NSStringEncoding](../nsstringencoding.md).

<a id="return-value"></a>

## Return Value

An `NSString` object initialized by reading data from the file named by `path`. The returned object may be different from the original receiver. If the file can’t be opened or there is an encoding error, returns `nil`.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating and Initializing a String from a File

- [init(contentsOfFile:encoding:)](init%28contentsoffile_encoding_%29.md): Returns an `NSString` object initialized by reading data from the file at a given path using a given encoding.

# initWithContentsOfFile:usedEncoding:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSString` object initialized by reading data from the file at a given path and returns by reference the encoding used to interpret the characters.

## Declaration

```objectivec
- (instancetype) initWithContentsOfFile:(NSString *) path usedEncoding:(NSStringEncoding *) enc error:(NSError **) error;
```

## Parameters

- `path`: A path to a file.
- `enc`: Upon return, if the file is read successfully, contains the encoding used to interpret the file at `path`. For possible values, see [NSStringEncoding](../nsstringencoding.md).
- `error`: If an error occurs, upon returns contains an `NSError` object that describes the problem. If you are not interested in possible errors, pass in `NULL`.

<a id="return-value"></a>

## Return Value

An `NSString` object initialized by reading data from the file named by `path`. The returned object may be different from the original receiver. If the file can’t be opened or there is an encoding error, returns `nil`.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [stringWithContentsOfFile:encoding:error:](stringwithcontentsoffile_encoding_error_.md): Returns a string created by reading data from the file at a given path interpreted using a given encoding.

### Creating and Initializing a String from a File

- [stringWithContentsOfFile:encoding:error:](stringwithcontentsoffile_encoding_error_.md): Returns a string created by reading data from the file at a given path interpreted using a given encoding.
- [initWithContentsOfFile:encoding:error:](init%28contentsoffile_encoding_%29.md): Returns an `NSString` object initialized by reading data from the file at a given path using a given encoding.
- [stringWithContentsOfFile:usedEncoding:error:](stringwithcontentsoffile_usedencoding_error_.md): Returns a string created by reading data from the file at a given path and returns by reference the encoding used to interpret the file.
