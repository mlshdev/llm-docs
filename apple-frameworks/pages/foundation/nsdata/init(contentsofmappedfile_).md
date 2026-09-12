> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/init(contentsofmappedfile:)](https://developer.apple.com/documentation/foundation/nsdata/init(contentsofmappedfile:))

# init(contentsOfMappedFile:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Initializes a data object with the contents of the mapped file specified by a given path.

> Use -initWithContentsOfURL:options:error: and NSDataReadingMappedIfSafe or NSDataReadingMappedAlways instead.

## Declaration

```swift
init?(contentsOfMappedFile path: String)
```

## Parameters

- `path`: The absolute path of the file from which to read data.

<a id="return-value"></a>

## Return Value

A data object initialized by reading into it the mapped file specified by `path`.

## See Also

### Reading Data from a File

- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Initializes a data object with the content of the file at a given path.
- [init(contentsOfFile:options:)](init%28contentsoffile_options_%29.md): Initializes a data object with the content of the file at a given path.
- [NSData.ReadingOptions](readingoptions.md): Options for methods used to read data objects.
- [dataWithContentsOfMappedFile(\_:)](datawithcontentsofmappedfile%28__%29.md): Deprecated. Creates a data object from the mapped file at a given path.

# initWithContentsOfMappedFile: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Initializes a data object with the contents of the mapped file specified by a given path.

> Use -initWithContentsOfURL:options:error: and NSDataReadingMappedIfSafe or NSDataReadingMappedAlways instead.

## Declaration

```objectivec
- (id) initWithContentsOfMappedFile:(NSString *) path;
```

## Parameters

- `path`: The absolute path of the file from which to read data.

<a id="return-value"></a>

## Return Value

A data object initialized by reading into it the mapped file specified by `path`.

## See Also

### Reading Data from a File

- [dataWithContentsOfFile:](datawithcontentsoffile_.md): Creates a data object by reading every byte from the file at a given path.
- [dataWithContentsOfFile:options:error:](datawithcontentsoffile_options_error_.md): Creates a data object by reading every byte from the file at a given path.
- [initWithContentsOfFile:](init%28contentsoffile_%29.md): Initializes a data object with the content of the file at a given path.
- [initWithContentsOfFile:options:error:](init%28contentsoffile_options_%29.md): Initializes a data object with the content of the file at a given path.
- [NSDataReadingOptions](readingoptions.md): Options for methods used to read data objects.
- [dataWithContentsOfMappedFile:](datawithcontentsofmappedfile%28__%29.md): Deprecated. Creates a data object from the mapped file at a given path.
