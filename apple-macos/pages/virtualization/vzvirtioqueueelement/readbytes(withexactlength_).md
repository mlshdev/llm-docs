> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioqueueelement/readbytes(withexactlength:)](https://developer.apple.com/documentation/virtualization/vzvirtioqueueelement/readbytes(withexactlength:))

# readBytes(withExactLength:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Reads the number of bytes you specify from the read buffers and return result as a data object.

## Declaration

```swift
func readBytes(withExactLength exactLength: Int) throws -> Data
```

## Parameters

- `exactLength`: Number of bytes to read from the read buffers.

<a id="return-value"></a>

## Return Value

An [NSData](https://developer.apple.com/documentation/foundation/nsdata) object filled with the memory that the framework read, or `nil` if the read failed.

<a id="discussion"></a>

## Discussion

Memory is copied into the newly allocated buffer represented by the returned NSData object.

# readBytesWithExactLength:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Reads the number of bytes you specify from the read buffers and return result as a data object.

## Declaration

```objectivec
- (NSData *) readBytesWithExactLength:(NSUInteger) exactLength error:(NSError **) error;
```

## Parameters

- `exactLength`: Number of bytes to read from the read buffers.
- `error`: If not `nil`, assigned with the error if the read failed.

<a id="return-value"></a>

## Return Value

An [NSData](https://developer.apple.com/documentation/foundation/nsdata) object filled with the memory that the framework read, or `nil` if the read failed.

<a id="discussion"></a>

## Discussion

Memory is copied into the newly allocated buffer represented by the returned NSData object.
