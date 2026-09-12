> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbuffer-api](https://developer.apple.com/documentation/coremedia/cmblockbuffer-api)

# CMBlockBuffer (Swift)

**Framework:** Core Media  
**Kind:** API Collection

An object the system uses to move blocks of memory through a processing system.

<a id="overview"></a>

## Overview

A block buffer is a `CFType` object that represents a contiguous range of data offsets (from zero to [CMBlockBufferGetDataLength(\_:)](cmblockbuffergetdatalength%28__%29.md)) across a possibly noncontiguous memory region. The memory region contains memory blocks and buffer references. The buffer references can in turn refer to additional regions. `CMBlockBuffer` uses [CMAttachmentBearerProtocol](cmattachmentbearerprotocol.md) to propagate attachments.

## Topics

### Creating a Block Buffer

- [CMBlockBufferCreateEmpty(allocator:capacity:flags:blockBufferOut:)](cmblockbuffercreateempty%28allocator_capacity_flags_blockbufferout_%29.md): Creates an empty block buffer.
- [CMBlockBufferCreateWithMemoryBlock(allocator:memoryBlock:blockLength:blockAllocator:customBlockSource:offsetToData:dataLength:flags:blockBufferOut:)](cmblockbuffercreatewithmemoryblock%28allocator_memoryblock_blocklength_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that’s backed by a memory block.
- [CMBlockBufferCreateWithBufferReference(allocator:referenceBuffer:offsetToData:dataLength:flags:blockBufferOut:)](cmblockbuffercreatewithbufferreference%28allocator_referencebuffer_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that refers to another block buffer object.
- [CMBlockBufferCreateContiguous(allocator:sourceBuffer:blockAllocator:customBlockSource:offsetToData:dataLength:flags:blockBufferOut:)](cmblockbuffercreatecontiguous%28allocator_sourcebuffer_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that contains a contiguous copy of, or reference to, the data specified by the parameters.
- [CMBlockBufferFlags](cmblockbufferflags.md): A type for flags that control behaviors and features of block buffer APIs.
- [Block Buffer Flags](block-buffer-flags.md): An enumeration of flags that control behaviors and features of block buffer APIs.
- [CMBlockBufferCustomBlockSource](cmblockbuffercustomblocksource.md): A structure to support custom memory allocation and deallocation for a block used in a block buffer.
- [Custom Block Source Version](custom-block-source-version.md): A custom block source version identifier.

### Modifying a Block Buffer

- [CMBlockBufferAppendMemoryBlock(\_:memoryBlock:length:blockAllocator:customBlockSource:offsetToData:dataLength:flags:)](cmblockbufferappendmemoryblock%28__memoryblock_length_blockallocator_customblocksource_offsettodata_datalength_flags_%29.md): Adds a memory block to an existing block buffer.
- [CMBlockBufferAppendBufferReference(\_:targetBBuf:offsetToData:dataLength:flags:)](cmblockbufferappendbufferreference%28__targetbbuf_offsettodata_datalength_flags_%29.md): Adds a reference to an existing block buffer.
- [CMBlockBufferAssureBlockMemory(\_:)](cmblockbufferassureblockmemory%28__%29.md): Assures that the system allocates memory for all memory blocks in a block buffer.
- [CMBlockBufferAccessDataBytes(\_:atOffset:length:temporaryBlock:returnedPointerOut:)](cmblockbufferaccessdatabytes%28__atoffset_length_temporaryblock_returnedpointerout_%29.md): Accesses potentially noncontiguous data in a block buffer.
- [CMBlockBufferCopyDataBytes(\_:atOffset:dataLength:destination:)](cmblockbuffercopydatabytes%28__atoffset_datalength_destination_%29.md): Copies bytes from a block buffer into a provided memory area.
- [CMBlockBufferReplaceDataBytes(with:blockBuffer:offsetIntoDestination:dataLength:)](cmblockbufferreplacedatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Copies bytes from a given memory block into a block buffer replacing bytes in the underlying data blocks.
- [CMBlockBufferFillDataBytes(with:blockBuffer:offsetIntoDestination:dataLength:)](cmblockbufferfilldatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Fills the destination buffer with the specified data byte.

### Inspecting a Block Buffer

- [CMBlockBufferGetDataPointer(\_:atOffset:lengthAtOffsetOut:totalLengthOut:dataPointerOut:)](cmblockbuffergetdatapointer%28__atoffset_lengthatoffsetout_totallengthout_datapointerout_%29.md): Gains access to the data represented by a block buffer.
- [CMBlockBufferGetDataLength(\_:)](cmblockbuffergetdatalength%28__%29.md): Returns the total length of data that’s accessible by a block buffer.
- [CMBlockBufferIsRangeContiguous(\_:atOffset:length:)](cmblockbufferisrangecontiguous%28__atoffset_length_%29.md): Returns a Boolean value that indicates whether the specified range within a block buffer is contiguous.
- [CMBlockBufferIsEmpty(\_:)](cmblockbufferisempty%28__%29.md): Returns a Boolean value that indicates whether the buffer is empty.

### Accessing the Type Identifier

- [CMBlockBufferGetTypeID()](cmblockbuffergettypeid%28%29.md): Returns the type identifier for block buffer objects.

### Data Types

- [CMBlockBuffer](cmblockbuffer.md): A reference to a block buffer instance.
- [CMBlockBufferProtocol](cmblockbufferprotocol.md): A protocol for objects that operate on a range of a block buffer.

### Errors

- [Block Buffer Error Codes](block-buffer-error-codes.md): Error codes that framework operations produce.

## See Also

### Sample Processing

- [CMSampleBuffer](cmsamplebuffer-api.md): An object that contains zero or more media samples of a uniform media type.
- [CMTaggedBufferGroup](cmtaggedbuffergroup.md): Objective-C types and interfaces for working with Core Media tagged buffer groups.
- [CMFormatDescription](cmformatdescription-api.md): A media format descriptor that describes the samples in a sample buffer.
- [CMAttachment](cmattachment-api.md): Add supporting metadata to sample buffers.
- [CMTaggedBuffer](cmtaggedbuffer.md): An instance of a media buffer containing metadata tags.
- [CMMutableDataBlockBuffer](cmmutabledatablockbuffer.md): A block buffer that provides read-write access to a range of bytes.
- [CMReadOnlyDataBlockBuffer](cmreadonlydatablockbuffer.md): A block buffer that provides read-only access to the a range of bytes.
- [CMReadySampleBuffer](cmreadysamplebuffer.md): Buffer carrying readily available samples of media data.
- [CMSampleDataReference](cmsampledatareference.md): References sample data in at a URL.
- [CMTaggedDynamicBuffer](cmtaggeddynamicbuffer.md): Contains a collection of tags associated with a read-only media buffer.

# CMBlockBuffer (Objective-C)

**Framework:** Core Media  
**Kind:** API Collection

An object the system uses to move blocks of memory through a processing system.

<a id="overview"></a>

## Overview

A block buffer is a `CFType` object that represents a contiguous range of data offsets (from zero to [CMBlockBufferGetDataLength](cmblockbuffergetdatalength%28__%29.md)) across a possibly noncontiguous memory region. The memory region contains memory blocks and buffer references. The buffer references can in turn refer to additional regions. `CMBlockBuffer` uses [CMAttachmentBearerProtocol](cmattachmentbearerprotocol.md) to propagate attachments.

## Topics

### Creating a Block Buffer

- [CMBlockBufferCreateEmpty](cmblockbuffercreateempty%28allocator_capacity_flags_blockbufferout_%29.md): Creates an empty block buffer.
- [CMBlockBufferCreateWithMemoryBlock](cmblockbuffercreatewithmemoryblock%28allocator_memoryblock_blocklength_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that’s backed by a memory block.
- [CMBlockBufferCreateWithBufferReference](cmblockbuffercreatewithbufferreference%28allocator_referencebuffer_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that refers to another block buffer object.
- [CMBlockBufferCreateContiguous](cmblockbuffercreatecontiguous%28allocator_sourcebuffer_blockallocator_customblocksource_offsettodata_datalength_flags_blockbufferout_%29.md): Creates a block buffer that contains a contiguous copy of, or reference to, the data specified by the parameters.
- [CMBlockBufferFlags](cmblockbufferflags.md): A type for flags that control behaviors and features of block buffer APIs.
- [Block Buffer Flags](block-buffer-flags.md): An enumeration of flags that control behaviors and features of block buffer APIs.
- [CMBlockBufferCustomBlockSource](cmblockbuffercustomblocksource.md): A structure to support custom memory allocation and deallocation for a block used in a block buffer.
- [Custom Block Source Version](custom-block-source-version.md): A custom block source version identifier.

### Modifying a Block Buffer

- [CMBlockBufferAppendMemoryBlock](cmblockbufferappendmemoryblock%28__memoryblock_length_blockallocator_customblocksource_offsettodata_datalength_flags_%29.md): Adds a memory block to an existing block buffer.
- [CMBlockBufferAppendBufferReference](cmblockbufferappendbufferreference%28__targetbbuf_offsettodata_datalength_flags_%29.md): Adds a reference to an existing block buffer.
- [CMBlockBufferAssureBlockMemory](cmblockbufferassureblockmemory%28__%29.md): Assures that the system allocates memory for all memory blocks in a block buffer.
- [CMBlockBufferAccessDataBytes](cmblockbufferaccessdatabytes%28__atoffset_length_temporaryblock_returnedpointerout_%29.md): Accesses potentially noncontiguous data in a block buffer.
- [CMBlockBufferCopyDataBytes](cmblockbuffercopydatabytes%28__atoffset_datalength_destination_%29.md): Copies bytes from a block buffer into a provided memory area.
- [CMBlockBufferReplaceDataBytes](cmblockbufferreplacedatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Copies bytes from a given memory block into a block buffer replacing bytes in the underlying data blocks.
- [CMBlockBufferFillDataBytes](cmblockbufferfilldatabytes%28with_blockbuffer_offsetintodestination_datalength_%29.md): Fills the destination buffer with the specified data byte.

### Inspecting a Block Buffer

- [CMBlockBufferGetDataPointer](cmblockbuffergetdatapointer%28__atoffset_lengthatoffsetout_totallengthout_datapointerout_%29.md): Gains access to the data represented by a block buffer.
- [CMBlockBufferGetDataLength](cmblockbuffergetdatalength%28__%29.md): Returns the total length of data that’s accessible by a block buffer.
- [CMBlockBufferIsRangeContiguous](cmblockbufferisrangecontiguous%28__atoffset_length_%29.md): Returns a Boolean value that indicates whether the specified range within a block buffer is contiguous.
- [CMBlockBufferIsEmpty](cmblockbufferisempty%28__%29.md): Returns a Boolean value that indicates whether the buffer is empty.

### Accessing the Type Identifier

- [CMBlockBufferGetTypeID](cmblockbuffergettypeid%28%29.md): Returns the type identifier for block buffer objects.

### Data Types

- [CMBlockBufferRef](cmblockbuffer.md): A reference to a block buffer instance.

### Errors

- [Block Buffer Error Codes](block-buffer-error-codes.md): Error codes that framework operations produce.

## See Also

### Sample Processing

- [CMSampleBuffer](cmsamplebuffer-api.md): An object that contains zero or more media samples of a uniform media type.
- [CMTaggedBufferGroup](cmtaggedbuffergroup.md): Objective-C types and interfaces for working with Core Media tagged buffer groups.
- [CMFormatDescription](cmformatdescription-api.md): A media format descriptor that describes the samples in a sample buffer.
- [CMAttachment](cmattachment-api.md): Add supporting metadata to sample buffers.
