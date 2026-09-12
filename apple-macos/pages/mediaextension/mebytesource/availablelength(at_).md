> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mebytesource/availablelength(at:)](https://developer.apple.com/documentation/mediaextension/mebytesource/availablelength(at:))

# availableLength(at:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Gets the number of available bytes from the offset within the byte source.

## Declaration

```swift
func availableLength(at offset: Int64) -> Int64
```

## Parameters

- `offset`: The offset in bytes from the beginning of the byte source.

<a id="return-value"></a>

## Return Value

An integer that specifies the number of available bytes.

## See Also

### Performing operations on a byte source

- [byteSourceForRelatedFileName(\_:)](bytesourceforrelatedfilename%28__%29.md): Creates a new byte source for a related file.
- [read(length:from:completionHandler:)](read%28length_from_completionhandler_%29.md): Reads bytes from a byte source into a data object.

# availableLengthAtOffset: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Gets the number of available bytes from the offset within the byte source.

## Declaration

```objectivec
- (int64_t) availableLengthAtOffset:(int64_t) offset;
```

## Parameters

- `offset`: The offset in bytes from the beginning of the byte source.

<a id="return-value"></a>

## Return Value

An integer that specifies the number of available bytes.

## See Also

### Performing operations on a byte source

- [byteSourceForRelatedFileName:error:](bytesourceforrelatedfilename%28__%29.md): Creates a new byte source for a related file.
- [readDataOfLength:fromOffset:completionHandler:](read%28length_from_completionhandler_%29.md): Reads bytes from a byte source into a data object.
- [readDataOfLength:fromOffset:toDestination:bytesRead:error:](readdataoflength_fromoffset_todestination_bytesread_error_.md): Reads bytes from a byte source into a buffer.
- [readDataOfLength:fromOffset:toDestination:completionHandler:](readdataoflength_fromoffset_todestination_completionhandler_.md): Reads bytes from a byte source into a buffer.
