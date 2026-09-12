> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/datawithcontentsofmappedfile(_:)](https://developer.apple.com/documentation/foundation/nsdata/datawithcontentsofmappedfile(_:))

# dataWithContentsOfMappedFile(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a data object from the mapped file at a given path.

> Use +dataWithContentsOfURL:options:error: and NSDataReadingMappedIfSafe or NSDataReadingMappedAlways instead.

## Declaration

```swift
class func dataWithContentsOfMappedFile(_ path: String) -> Any?
```

## Parameters

- `path`: The absolute path of the file from which to read data.

<a id="Discussion"></a>

## Discussion

This method returns `nil` if the data object could not be created

Because of file mapping restrictions, this method should only be used if the file is guaranteed to exist for the duration of the data object’s existence. It is generally safer to use the [dataWithContentsOfFile:](datawithcontentsoffile_.md) method.

This methods assumes mapped files are available from the underlying operating system. A mapped file uses virtual memory techniques to avoid copying pages of the file into memory until they are actually needed.

## See Also

### Reading Data from a File

- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Initializes a data object with the content of the file at a given path.
- [init(contentsOfFile:options:)](init%28contentsoffile_options_%29.md): Initializes a data object with the content of the file at a given path.
- [NSData.ReadingOptions](readingoptions.md): Options for methods used to read data objects.
- [init(contentsOfMappedFile:)](init%28contentsofmappedfile_%29.md): Deprecated. Initializes a data object with the contents of the mapped file specified by a given path.

# dataWithContentsOfMappedFile: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Creates a data object from the mapped file at a given path.

> Use +dataWithContentsOfURL:options:error: and NSDataReadingMappedIfSafe or NSDataReadingMappedAlways instead.

## Declaration

```objectivec
+ (id) dataWithContentsOfMappedFile:(NSString *) path;
```

## Parameters

- `path`: The absolute path of the file from which to read data.

<a id="Discussion"></a>

## Discussion

This method returns `nil` if the data object could not be created

Because of file mapping restrictions, this method should only be used if the file is guaranteed to exist for the duration of the data object’s existence. It is generally safer to use the [dataWithContentsOfFile:](datawithcontentsoffile_.md) method.

This methods assumes mapped files are available from the underlying operating system. A mapped file uses virtual memory techniques to avoid copying pages of the file into memory until they are actually needed.

## See Also

### Related Documentation

- [dataWithContentsOfFile:](datawithcontentsoffile_.md): Creates a data object by reading every byte from the file at a given path.

### Reading Data from a File

- [dataWithContentsOfFile:](datawithcontentsoffile_.md): Creates a data object by reading every byte from the file at a given path.
- [dataWithContentsOfFile:options:error:](datawithcontentsoffile_options_error_.md): Creates a data object by reading every byte from the file at a given path.
- [initWithContentsOfFile:](init%28contentsoffile_%29.md): Initializes a data object with the content of the file at a given path.
- [initWithContentsOfFile:options:error:](init%28contentsoffile_options_%29.md): Initializes a data object with the content of the file at a given path.
- [NSDataReadingOptions](readingoptions.md): Options for methods used to read data objects.
- [initWithContentsOfMappedFile:](init%28contentsofmappedfile_%29.md): Deprecated. Initializes a data object with the contents of the mapped file specified by a given path.
