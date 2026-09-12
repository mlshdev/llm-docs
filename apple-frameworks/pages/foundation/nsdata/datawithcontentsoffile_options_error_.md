> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/datawithcontentsoffile:options:error:](https://developer.apple.com/documentation/foundation/nsdata/datawithcontentsoffile:options:error:)

# dataWithContentsOfFile:options:error:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a data object by reading every byte from the file at a given path.

## Declaration

```objectivec
+ (instancetype) dataWithContentsOfFile:(NSString *) path options:(NSDataReadingOptions) readOptionsMask error:(NSError **) errorPtr;
```

## Parameters

- `path`: The absolute path of the file from which to read data.
- `readOptionsMask`: A mask that specifies options for reading the data. Constant components are described in [NSDataReadingOptions](readingoptions.md).
- `errorPtr`: If an error occurs, upon return contains an error object that describes the problem.

<a id="Discussion"></a>

## Discussion

This method returns `nil` if the data object could not be created. In this case, `errorPtr` will contain an [NSError](../nserror.md) indicating the problem.

## See Also

### Reading Data from a File

- [dataWithContentsOfFile:](datawithcontentsoffile_.md): Creates a data object by reading every byte from the file at a given path.
- [initWithContentsOfFile:](init%28contentsoffile_%29.md): Initializes a data object with the content of the file at a given path.
- [initWithContentsOfFile:options:error:](init%28contentsoffile_options_%29.md): Initializes a data object with the content of the file at a given path.
- [NSDataReadingOptions](readingoptions.md): Options for methods used to read data objects.
- [initWithContentsOfMappedFile:](init%28contentsofmappedfile_%29.md): Deprecated. Initializes a data object with the contents of the mapped file specified by a given path.
- [dataWithContentsOfMappedFile:](datawithcontentsofmappedfile%28__%29.md): Deprecated. Creates a data object from the mapped file at a given path.
