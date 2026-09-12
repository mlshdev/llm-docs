> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioqueueelement/peekintoreadbuffers(withexactlength:)](https://developer.apple.com/documentation/virtualization/vzvirtioqueueelement/peekintoreadbuffers(withexactlength:))

# peekIntoReadBuffers(withExactLength:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Peeks into the read buffers and copy exactLength bytes from the read buffer into the data object it returns.

## Declaration

```swift
func peekIntoReadBuffers(withExactLength exactLength: Int) throws -> Data
```

## Parameters

- `exactLength`: Number of bytes to copy from the read buffers.

<a id="return-value"></a>

## Return Value

An [NSData](https://developer.apple.com/documentation/foundation/nsdata) object filled with the memory that the framework copied, or `nil` if the peek failed.

<a id="discussion"></a>

## Discussion

This method allows you to peek into the read buffers without consuming any of the memory, [readBuffersAvailableByteCount](readbuffersavailablebytecount.md) does not change after this call.

# peekIntoReadBuffersWithExactLength:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Peeks into the read buffers and copy exactLength bytes from the read buffer into the data object it returns.

## Declaration

```objectivec
- (NSData *) peekIntoReadBuffersWithExactLength:(NSUInteger) exactLength error:(NSError **) error;
```

## Parameters

- `exactLength`: Number of bytes to copy from the read buffers.
- `error`: If not nil, assigned with the error if the peek failed.

<a id="return-value"></a>

## Return Value

An [NSData](https://developer.apple.com/documentation/foundation/nsdata) object filled with the memory that the framework copied, or `nil` if the peek failed.

<a id="discussion"></a>

## Discussion

This method allows you to peek into the read buffers without consuming any of the memory, [readBuffersAvailableByteCount](readbuffersavailablebytecount.md) does not change after this call.
