> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mebytesource/readdataoflength:fromoffset:todestination:completionhandler:](https://developer.apple.com/documentation/mediaextension/mebytesource/readdataoflength:fromoffset:todestination:completionhandler:)

# readDataOfLength:fromOffset:toDestination:completionHandler:

**Interface language:** Objective-C

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Reads bytes from a byte source into a buffer.

## Declaration

```objectivec
- (void) readDataOfLength:(size_t) length fromOffset:(int64_t) offset toDestination:(void *) dest completionHandler:(void (^)(size_t bytesRead, NSError *error)) completionHandler;
```

## Parameters

- `length`: The number of bytes to read.
- `offset`: The relative offset in bytes from the beginning of the file from which to start reading.
- `dest`: The block of memory to hold the data to read. Must be at least `length` bytes in length.
- `completionHandler`: The completion block to execute when the read operation finishes.

## See Also

### Performing operations on a byte source

- [availableLengthAtOffset:](availablelength%28at_%29.md): Gets the number of available bytes from the offset within the byte source.
- [byteSourceForRelatedFileName:error:](bytesourceforrelatedfilename%28__%29.md): Creates a new byte source for a related file.
- [readDataOfLength:fromOffset:completionHandler:](read%28length_from_completionhandler_%29.md): Reads bytes from a byte source into a data object.
- [readDataOfLength:fromOffset:toDestination:bytesRead:error:](readdataoflength_fromoffset_todestination_bytesread_error_.md): Reads bytes from a byte source into a buffer.
