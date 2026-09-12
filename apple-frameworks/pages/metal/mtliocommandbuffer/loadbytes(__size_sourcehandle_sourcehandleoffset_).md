> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtliocommandbuffer/loadbytes(_:size:sourcehandle:sourcehandleoffset:)](https://developer.apple.com/documentation/metal/mtliocommandbuffer/loadbytes(_:size:sourcehandle:sourcehandleoffset:))

# loadBytes(\_:size:sourceHandle:sourceHandleOffset:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command that loads data from a file handle into CPU-accessible memory buffer.

## Declaration

```swift
func loadBytes(_ pointer: UnsafeMutableRawPointer, size: Int, sourceHandle: any MTLIOFileHandle, sourceHandleOffset: Int)
```

## Parameters

- `pointer`: A pointer to memory the method loads data into.
- `size`: The number of bytes the method loads from the file.
- `sourceHandle`: A handle to a source file.
- `sourceHandleOffset`: A starting location relative to the beginning of the file, in bytes, the method copies data from.

## See Also

### Loading assets

- [load(\_:offset:size:sourceHandle:sourceHandleOffset:)](load%28__offset_size_sourcehandle_sourcehandleoffset_%29.md): Encodes a command that loads data from a file handle into a GPU buffer.
- [load(\_:slice:level:size:sourceBytesPerRow:sourceBytesPerImage:destinationOrigin:sourceHandle:sourceHandleOffset:)](load%28__slice_level_size_sourcebytesperrow_sourcebytesperimage_destinationorigin_sourcehandle_sourcehandleoffset_%29.md): Encodes a command that loads data from a file handle into a GPU texture.

# loadBytes:size:sourceHandle:sourceHandleOffset: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command that loads data from a file handle into CPU-accessible memory buffer.

## Declaration

```objectivec
- (void) loadBytes:(void *) pointer size:(NSUInteger) size sourceHandle:(id<MTLIOFileHandle>) sourceHandle sourceHandleOffset:(NSUInteger) sourceHandleOffset;
```

## Parameters

- `pointer`: A pointer to memory the method loads data into.
- `size`: The number of bytes the method loads from the file.
- `sourceHandle`: A handle to a source file.
- `sourceHandleOffset`: A starting location relative to the beginning of the file, in bytes, the method copies data from.

## See Also

### Loading assets

- [loadBuffer:offset:size:sourceHandle:sourceHandleOffset:](load%28__offset_size_sourcehandle_sourcehandleoffset_%29.md): Encodes a command that loads data from a file handle into a GPU buffer.
- [loadTexture:slice:level:size:sourceBytesPerRow:sourceBytesPerImage:destinationOrigin:sourceHandle:sourceHandleOffset:](load%28__slice_level_size_sourcebytesperrow_sourcebytesperimage_destinationorigin_sourcehandle_sourcehandleoffset_%29.md): Encodes a command that loads data from a file handle into a GPU texture.
