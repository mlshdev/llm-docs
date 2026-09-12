> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioqueueelement/readbytes(intobuffer:exactlength:)](https://developer.apple.com/documentation/virtualization/vzvirtioqueueelement/readbytes(intobuffer:exactlength:))

# readBytes(intoBuffer:exactLength:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Reads the number of bytes you specify from the read buffers into the memory pointed to by the pointer to the buffer you provide.

## Declaration

```swift
func readBytes(intoBuffer buffer: UnsafeMutableRawPointer, exactLength: Int) throws
```

## Parameters

- `buffer`: Pointer to where the framework reads the read buffer’s memory to.
- `exactLength`: Number of bytes to read from the read buffers.

# readBytesIntoBuffer:exactLength:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Reads the number of bytes you specify from the read buffers into the memory pointed to by the pointer to the buffer you provide.

## Declaration

```objectivec
- (BOOL) readBytesIntoBuffer:(void *) buffer exactLength:(NSUInteger) exactLength error:(NSError **) error;
```

## Parameters

- `buffer`: Pointer to where the framework reads the read buffer’s memory to.
- `exactLength`: Number of bytes to read from the read buffers.
- `error`: If not `nil`, assigned with the error if the read failed.

<a id="return-value"></a>

## Return Value

`YES` if the read was successful, `NO` otherwise.
