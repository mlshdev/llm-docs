> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/init(contentsoffile:options:)](https://developer.apple.com/documentation/foundation/nsdata/init(contentsoffile:options:))

# init(contentsOfFile:options:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a data object with the content of the file at a given path.

## Declaration

```swift
init(contentsOfFile path: String, options readOptionsMask: NSData.ReadingOptions = []) throws
```

## Parameters

- `path`: The absolute path of the file from which to read data.
- `readOptionsMask`: A mask that specifies options for reading the data. Constant components are described in [NSData.ReadingOptions](readingoptions.md).

<a id="return-value"></a>

## Return Value

A data object initialized by reading into it the data from the file specified by `path`.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Reading Data from a File

- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Initializes a data object with the content of the file at a given path.
- [NSData.ReadingOptions](readingoptions.md): Options for methods used to read data objects.
- [init(contentsOfMappedFile:)](init%28contentsofmappedfile_%29.md): Deprecated. Initializes a data object with the contents of the mapped file specified by a given path.
- [dataWithContentsOfMappedFile(\_:)](datawithcontentsofmappedfile%28__%29.md): Deprecated. Creates a data object from the mapped file at a given path.

# initWithContentsOfFile:options:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a data object with the content of the file at a given path.

## Declaration

```objectivec
- (instancetype) initWithContentsOfFile:(NSString *) path options:(NSDataReadingOptions) readOptionsMask error:(NSError **) errorPtr;
```

## Parameters

- `path`: The absolute path of the file from which to read data.
- `readOptionsMask`: A mask that specifies options for reading the data. Constant components are described in [NSDataReadingOptions](readingoptions.md).
- `errorPtr`: If an error occurs, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

A data object initialized by reading into it the data from the file specified by `path`.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this API is imported as an initializer and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [dataWithContentsOfFile:options:error:](datawithcontentsoffile_options_error_.md): Creates a data object by reading every byte from the file at a given path.

### Reading Data from a File

- [dataWithContentsOfFile:](datawithcontentsoffile_.md): Creates a data object by reading every byte from the file at a given path.
- [dataWithContentsOfFile:options:error:](datawithcontentsoffile_options_error_.md): Creates a data object by reading every byte from the file at a given path.
- [initWithContentsOfFile:](init%28contentsoffile_%29.md): Initializes a data object with the content of the file at a given path.
- [NSDataReadingOptions](readingoptions.md): Options for methods used to read data objects.
- [initWithContentsOfMappedFile:](init%28contentsofmappedfile_%29.md): Deprecated. Initializes a data object with the contents of the mapped file specified by a given path.
- [dataWithContentsOfMappedFile:](datawithcontentsofmappedfile%28__%29.md): Deprecated. Creates a data object from the mapped file at a given path.
