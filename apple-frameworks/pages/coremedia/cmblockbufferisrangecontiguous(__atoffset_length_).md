> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbufferisrangecontiguous(_:atoffset:length:)](https://developer.apple.com/documentation/coremedia/cmblockbufferisrangecontiguous(_:atoffset:length:))

# CMBlockBufferIsRangeContiguous(\_:atOffset:length:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether the specified range within a block buffer is contiguous.

## Declaration

```swift
func CMBlockBufferIsRangeContiguous(_ theBuffer: CMBlockBuffer, atOffset offset: Int, length: Int) -> Bool
```

## Parameters

- `theBuffer`: `CMBlockBuffer` to examine. Must not be `NULL`.
- `offset`: Offset within the buffer’s offset range.
- `length`: Desired number of bytes to access at offset. If zero, the number of bytes available at offset (dataLength – offset), contiguous or not, is used.

<a id="return-value"></a>

## Return Value

Returns true if the specified range is contiguous within the `CMBlockBuffer`, false otherwise. Also returns false if the `CMBlockBuffer` is `NULL` or empty.

<a id="Discussion"></a>

## Discussion

Determines whether the specified range within the given `CMBlockBuffer` is contiguous. If `CMBlockBufferGetDataPointer`() were called with the same parameters, the returned pointer would address the desired number of bytes.

## See Also

### Inspecting a Block Buffer

- [CMBlockBufferGetDataPointer(\_:atOffset:lengthAtOffsetOut:totalLengthOut:dataPointerOut:)](cmblockbuffergetdatapointer%28__atoffset_lengthatoffsetout_totallengthout_datapointerout_%29.md): Gains access to the data represented by a block buffer.
- [CMBlockBufferGetDataLength(\_:)](cmblockbuffergetdatalength%28__%29.md): Returns the total length of data that’s accessible by a block buffer.
- [CMBlockBufferIsEmpty(\_:)](cmblockbufferisempty%28__%29.md): Returns a Boolean value that indicates whether the buffer is empty.

# CMBlockBufferIsRangeContiguous (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether the specified range within a block buffer is contiguous.

## Declaration

```objectivec
extern Boolean CMBlockBufferIsRangeContiguous(CMBlockBufferRef theBuffer, size_t offset, size_t length);
```

## Parameters

- `theBuffer`: `CMBlockBuffer` to examine. Must not be `NULL`.
- `offset`: Offset within the buffer’s offset range.
- `length`: Desired number of bytes to access at offset. If zero, the number of bytes available at offset (dataLength – offset), contiguous or not, is used.

<a id="return-value"></a>

## Return Value

Returns true if the specified range is contiguous within the `CMBlockBuffer`, false otherwise. Also returns false if the `CMBlockBuffer` is `NULL` or empty.

<a id="Discussion"></a>

## Discussion

Determines whether the specified range within the given `CMBlockBuffer` is contiguous. If `CMBlockBufferGetDataPointer`() were called with the same parameters, the returned pointer would address the desired number of bytes.

## See Also

### Inspecting a Block Buffer

- [CMBlockBufferGetDataPointer](cmblockbuffergetdatapointer%28__atoffset_lengthatoffsetout_totallengthout_datapointerout_%29.md): Gains access to the data represented by a block buffer.
- [CMBlockBufferGetDataLength](cmblockbuffergetdatalength%28__%29.md): Returns the total length of data that’s accessible by a block buffer.
- [CMBlockBufferIsEmpty](cmblockbufferisempty%28__%29.md): Returns a Boolean value that indicates whether the buffer is empty.
