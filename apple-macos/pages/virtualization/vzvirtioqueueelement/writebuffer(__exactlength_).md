> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioqueueelement/writebuffer(_:exactlength:)](https://developer.apple.com/documentation/virtualization/vzvirtioqueueelement/writebuffer(_:exactlength:))

# writeBuffer(\_:exactLength:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Writes to the memory represented by the pointer to the buffer you provide to the write buffers.

## Declaration

```swift
func writeBuffer(_ buffer: UnsafeMutableRawPointer, exactLength: Int) throws
```

## Parameters

- `buffer`: A pointer to the memory containing the data to write to the write buffers.
- `exactLength`: The number of bytes the framework should write to the write buffers.

# writeBuffer:exactLength:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Writes to the memory represented by the pointer to the buffer you provide to the write buffers.

## Declaration

```objectivec
- (BOOL) writeBuffer:(void *) buffer exactLength:(NSUInteger) exactLength error:(NSError **) error;
```

## Parameters

- `buffer`: A pointer to the memory containing the data to write to the write buffers.
- `exactLength`: The number of bytes the framework should write to the write buffers.
- `error`: If not `nil`, assigned with the error if the write failed.

<a id="return-value"></a>

## Return Value

`YES` if the write was successful, `NO` otherwise.
