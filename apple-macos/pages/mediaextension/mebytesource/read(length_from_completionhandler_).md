> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mebytesource/read(length:from:completionhandler:)](https://developer.apple.com/documentation/mediaextension/mebytesource/read(length:from:completionhandler:))

# read(length:from:completionHandler:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Reads bytes from a byte source into a data object.

## Declaration

```swift
func read(length: Int, from offset: Int64, completionHandler: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func read(length: Int, from offset: Int64) async throws -> Data
```

## Parameters

- `length`: The number of bytes to read.
- `offset`: The relative offset in bytes from the beginning of the file from which to start reading.
- `completionHandler`: The completion block to execute when the read operation finishes.

## See Also

### Performing operations on a byte source

- [availableLength(at:)](availablelength%28at_%29.md): Gets the number of available bytes from the offset within the byte source.
- [byteSourceForRelatedFileName(\_:)](bytesourceforrelatedfilename%28__%29.md): Creates a new byte source for a related file.

# readDataOfLength:fromOffset:completionHandler: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Reads bytes from a byte source into a data object.

## Declaration

```objectivec
- (void) readDataOfLength:(size_t) length fromOffset:(int64_t) offset completionHandler:(void (^)(NSData *data, NSError *error)) completionHandler;
```

## Parameters

- `length`: The number of bytes to read.
- `offset`: The relative offset in bytes from the beginning of the file from which to start reading.
- `completionHandler`: The completion block to execute when the read operation finishes.

## See Also

### Performing operations on a byte source

- [availableLengthAtOffset:](availablelength%28at_%29.md): Gets the number of available bytes from the offset within the byte source.
- [byteSourceForRelatedFileName:error:](bytesourceforrelatedfilename%28__%29.md): Creates a new byte source for a related file.
- [readDataOfLength:fromOffset:toDestination:bytesRead:error:](readdataoflength_fromoffset_todestination_bytesread_error_.md): Reads bytes from a byte source into a buffer.
- [readDataOfLength:fromOffset:toDestination:completionHandler:](readdataoflength_fromoffset_todestination_completionhandler_.md): Reads bytes from a byte source into a buffer.
