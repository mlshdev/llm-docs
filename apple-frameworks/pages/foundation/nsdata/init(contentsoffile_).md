> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/init(contentsoffile:)](https://developer.apple.com/documentation/foundation/nsdata/init(contentsoffile:))

# init(contentsOfFile:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a data object with the content of the file at a given path.

## Declaration

```swift
init?(contentsOfFile path: String)
```

## Parameters

- `path`: The absolute path of the file from which to read data.

<a id="return-value"></a>

## Return Value

A data object initialized by reading into it the data from the file specified by `path`.

<a id="Discussion"></a>

## Discussion

This method is equivalent to [init(contentsOfFile:options:)](init%28contentsoffile_options_%29.md) with no options.

## See Also

### Reading Data from a File

- [init(contentsOfFile:options:)](init%28contentsoffile_options_%29.md): Initializes a data object with the content of the file at a given path.
- [NSData.ReadingOptions](readingoptions.md): Options for methods used to read data objects.
- [init(contentsOfMappedFile:)](init%28contentsofmappedfile_%29.md): Deprecated. Initializes a data object with the contents of the mapped file specified by a given path.
- [dataWithContentsOfMappedFile(\_:)](datawithcontentsofmappedfile%28__%29.md): Deprecated. Creates a data object from the mapped file at a given path.

# initWithContentsOfFile: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a data object with the content of the file at a given path.

## Declaration

```objectivec
- (instancetype) initWithContentsOfFile:(NSString *) path;
```

## Parameters

- `path`: The absolute path of the file from which to read data.

<a id="return-value"></a>

## Return Value

A data object initialized by reading into it the data from the file specified by `path`.

<a id="Discussion"></a>

## Discussion

This method is equivalent to [initWithContentsOfFile:options:error:](init%28contentsoffile_options_%29.md) with no options.

## See Also

### Related Documentation

- [dataWithContentsOfFile:](datawithcontentsoffile_.md): Creates a data object by reading every byte from the file at a given path.

### Reading Data from a File

- [dataWithContentsOfFile:](datawithcontentsoffile_.md): Creates a data object by reading every byte from the file at a given path.
- [dataWithContentsOfFile:options:error:](datawithcontentsoffile_options_error_.md): Creates a data object by reading every byte from the file at a given path.
- [initWithContentsOfFile:options:error:](init%28contentsoffile_options_%29.md): Initializes a data object with the content of the file at a given path.
- [NSDataReadingOptions](readingoptions.md): Options for methods used to read data objects.
- [initWithContentsOfMappedFile:](init%28contentsofmappedfile_%29.md): Deprecated. Initializes a data object with the contents of the mapped file specified by a given path.
- [dataWithContentsOfMappedFile:](datawithcontentsofmappedfile%28__%29.md): Deprecated. Creates a data object from the mapped file at a given path.
