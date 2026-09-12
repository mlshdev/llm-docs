> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/datawithcontentsoffile:](https://developer.apple.com/documentation/foundation/nsdata/datawithcontentsoffile:)

# dataWithContentsOfFile:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a data object by reading every byte from the file at a given path.

## Declaration

```objectivec
+ (instancetype) dataWithContentsOfFile:(NSString *) path;
```

## Parameters

- `path`: The absolute path of the file from which to read data.

<a id="Discussion"></a>

## Discussion

This method returns `nil` if the data object could not be created. If you need to know the reason for failure, use [dataWithContentsOfFile:options:error:](datawithcontentsoffile_options_error_.md).

This method is equivalent to calling [dataWithContentsOfFile:options:error:](datawithcontentsoffile_options_error_.md) and passing no options.

A sample using this method can be found in [Working With Binary Data](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/BinaryData/Tasks/WorkingBinaryData.html#//apple_ref/doc/uid/20000717).

## See Also

### Reading Data from a File

- [dataWithContentsOfFile:options:error:](datawithcontentsoffile_options_error_.md): Creates a data object by reading every byte from the file at a given path.
- [initWithContentsOfFile:](init%28contentsoffile_%29.md): Initializes a data object with the content of the file at a given path.
- [initWithContentsOfFile:options:error:](init%28contentsoffile_options_%29.md): Initializes a data object with the content of the file at a given path.
- [NSDataReadingOptions](readingoptions.md): Options for methods used to read data objects.
- [initWithContentsOfMappedFile:](init%28contentsofmappedfile_%29.md): Deprecated. Initializes a data object with the contents of the mapped file specified by a given path.
- [dataWithContentsOfMappedFile:](datawithcontentsofmappedfile%28__%29.md): Deprecated. Creates a data object from the mapped file at a given path.
