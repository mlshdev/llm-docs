> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbufferisempty(_:)](https://developer.apple.com/documentation/coremedia/cmblockbufferisempty(_:))

# CMBlockBufferIsEmpty(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether the buffer is empty.

## Declaration

```swift
func CMBlockBufferIsEmpty(_ theBuffer: CMBlockBuffer) -> Bool
```

## Parameters

- `theBuffer`: `CMBlockBuffer` to examine. Must not be `NULL`.

<a id="return-value"></a>

## Return Value

False if the `CMBlockBuffer` is `NULL`.

<a id="Discussion"></a>

## Discussion

Determines whether the given `CMBlockBuffer` is empty, i.e., devoid of any `memoryBlocks` or `CMBlockBuffer` references. Note that a `CMBlockBuffer` containing a not-yet allocated `memoryBlock` is not considered empty.

## See Also

### Inspecting a Block Buffer

- [CMBlockBufferGetDataPointer(\_:atOffset:lengthAtOffsetOut:totalLengthOut:dataPointerOut:)](cmblockbuffergetdatapointer%28__atoffset_lengthatoffsetout_totallengthout_datapointerout_%29.md): Gains access to the data represented by a block buffer.
- [CMBlockBufferGetDataLength(\_:)](cmblockbuffergetdatalength%28__%29.md): Returns the total length of data that’s accessible by a block buffer.
- [CMBlockBufferIsRangeContiguous(\_:atOffset:length:)](cmblockbufferisrangecontiguous%28__atoffset_length_%29.md): Returns a Boolean value that indicates whether the specified range within a block buffer is contiguous.

# CMBlockBufferIsEmpty (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether the buffer is empty.

## Declaration

```objectivec
extern Boolean CMBlockBufferIsEmpty(CMBlockBufferRef theBuffer);
```

## Parameters

- `theBuffer`: `CMBlockBuffer` to examine. Must not be `NULL`.

<a id="return-value"></a>

## Return Value

False if the `CMBlockBuffer` is `NULL`.

<a id="Discussion"></a>

## Discussion

Determines whether the given `CMBlockBuffer` is empty, i.e., devoid of any `memoryBlocks` or `CMBlockBuffer` references. Note that a `CMBlockBuffer` containing a not-yet allocated `memoryBlock` is not considered empty.

## See Also

### Inspecting a Block Buffer

- [CMBlockBufferGetDataPointer](cmblockbuffergetdatapointer%28__atoffset_lengthatoffsetout_totallengthout_datapointerout_%29.md): Gains access to the data represented by a block buffer.
- [CMBlockBufferGetDataLength](cmblockbuffergetdatalength%28__%29.md): Returns the total length of data that’s accessible by a block buffer.
- [CMBlockBufferIsRangeContiguous](cmblockbufferisrangecontiguous%28__atoffset_length_%29.md): Returns a Boolean value that indicates whether the specified range within a block buffer is contiguous.
