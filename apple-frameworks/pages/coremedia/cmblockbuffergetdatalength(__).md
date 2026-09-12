> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbuffergetdatalength(_:)](https://developer.apple.com/documentation/coremedia/cmblockbuffergetdatalength(_:))

# CMBlockBufferGetDataLength(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the total length of data that’s accessible by a block buffer.

## Declaration

```swift
func CMBlockBufferGetDataLength(_ theBuffer: CMBlockBuffer) -> Int
```

## Parameters

- `theBuffer`: `CMBlockBuffer` to examine.

<a id="return-value"></a>

## Return Value

Returns the total data length available via this `CMBlockBuffer`, or zero if it is empty, `NULL` if invalid.

<a id="Discussion"></a>

## Discussion

Obtains the total data length reachable via a `CMBlockBuffer`. This total is the sum of the `dataLengths` of the `CMBlockBuffer's` memoryBlocks and buffer references. Note that the `dataLengths` are the portions of those constituents that this `CMBlockBuffer` subscribes to. This `CMBlockBuffer` presents a contiguous range of offsets from zero to its `totalDataLength` as returned by this routine.

## See Also

### Inspecting a Block Buffer

- [CMBlockBufferGetDataPointer(\_:atOffset:lengthAtOffsetOut:totalLengthOut:dataPointerOut:)](cmblockbuffergetdatapointer%28__atoffset_lengthatoffsetout_totallengthout_datapointerout_%29.md): Gains access to the data represented by a block buffer.
- [CMBlockBufferIsRangeContiguous(\_:atOffset:length:)](cmblockbufferisrangecontiguous%28__atoffset_length_%29.md): Returns a Boolean value that indicates whether the specified range within a block buffer is contiguous.
- [CMBlockBufferIsEmpty(\_:)](cmblockbufferisempty%28__%29.md): Returns a Boolean value that indicates whether the buffer is empty.

# CMBlockBufferGetDataLength (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the total length of data that’s accessible by a block buffer.

## Declaration

```objectivec
extern size_t CMBlockBufferGetDataLength(CMBlockBufferRef theBuffer);
```

## Parameters

- `theBuffer`: `CMBlockBuffer` to examine.

<a id="return-value"></a>

## Return Value

Returns the total data length available via this `CMBlockBuffer`, or zero if it is empty, `NULL` if invalid.

<a id="Discussion"></a>

## Discussion

Obtains the total data length reachable via a `CMBlockBuffer`. This total is the sum of the `dataLengths` of the `CMBlockBuffer's` memoryBlocks and buffer references. Note that the `dataLengths` are the portions of those constituents that this `CMBlockBuffer` subscribes to. This `CMBlockBuffer` presents a contiguous range of offsets from zero to its `totalDataLength` as returned by this routine.

## See Also

### Inspecting a Block Buffer

- [CMBlockBufferGetDataPointer](cmblockbuffergetdatapointer%28__atoffset_lengthatoffsetout_totallengthout_datapointerout_%29.md): Gains access to the data represented by a block buffer.
- [CMBlockBufferIsRangeContiguous](cmblockbufferisrangecontiguous%28__atoffset_length_%29.md): Returns a Boolean value that indicates whether the specified range within a block buffer is contiguous.
- [CMBlockBufferIsEmpty](cmblockbufferisempty%28__%29.md): Returns a Boolean value that indicates whether the buffer is empty.
