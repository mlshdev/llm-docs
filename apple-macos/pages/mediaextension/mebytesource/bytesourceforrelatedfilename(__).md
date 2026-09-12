> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mebytesource/bytesourceforrelatedfilename(_:)](https://developer.apple.com/documentation/mediaextension/mebytesource/bytesourceforrelatedfilename(_:))

# byteSourceForRelatedFileName(\_:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Creates a new byte source for a related file.

## Declaration

```swift
func byteSourceForRelatedFileName(_ fileName: String) throws -> MEByteSource
```

## Parameters

- `fileName`: The related file name that exists in the byte source’s parent directory.

<a id="return-value"></a>

## Return Value

A byte source.

<a id="Discussion"></a>

## Discussion

Requests creation of a new [MEByteSource](../mebytesource.md) for a file related to the receiving [MEByteSource](../mebytesource.md). Only file names returned by the [relatedFileNamesInSameDirectory](relatedfilenamesinsamedirectory.md) method may be accessed.

## See Also

### Performing operations on a byte source

- [availableLength(at:)](availablelength%28at_%29.md): Gets the number of available bytes from the offset within the byte source.
- [read(length:from:completionHandler:)](read%28length_from_completionhandler_%29.md): Reads bytes from a byte source into a data object.

# byteSourceForRelatedFileName:error: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Creates a new byte source for a related file.

## Declaration

```objectivec
- (MEByteSource *) byteSourceForRelatedFileName:(NSString *) fileName error:(NSError **) errorOut;
```

## Parameters

- `fileName`: The related file name that exists in the byte source’s parent directory.
- `errorOut`: An error pointer.

<a id="return-value"></a>

## Return Value

A byte source.

<a id="Discussion"></a>

## Discussion

Requests creation of a new [MEByteSource](../mebytesource.md) for a file related to the receiving [MEByteSource](../mebytesource.md). Only file names returned by the [relatedFileNamesInSameDirectory](relatedfilenamesinsamedirectory.md) method may be accessed.

## See Also

### Performing operations on a byte source

- [availableLengthAtOffset:](availablelength%28at_%29.md): Gets the number of available bytes from the offset within the byte source.
- [readDataOfLength:fromOffset:completionHandler:](read%28length_from_completionhandler_%29.md): Reads bytes from a byte source into a data object.
- [readDataOfLength:fromOffset:toDestination:bytesRead:error:](readdataoflength_fromoffset_todestination_bytesread_error_.md): Reads bytes from a byte source into a buffer.
- [readDataOfLength:fromOffset:toDestination:completionHandler:](readdataoflength_fromoffset_todestination_completionhandler_.md): Reads bytes from a byte source into a buffer.
