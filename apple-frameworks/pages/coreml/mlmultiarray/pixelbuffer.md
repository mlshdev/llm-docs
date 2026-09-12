> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray/pixelbuffer](https://developer.apple.com/documentation/coreml/mlmultiarray/pixelbuffer)

# pixelBuffer (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A reference to the multiarray’s underlying pixel buffer.

## Declaration

```swift
var pixelBuffer: CVPixelBuffer? { get }
```

## See Also

### Accessing a multiarray’s elements

- [subscript(\_:)](subscript%28__%29.md)
- [dataPointer](datapointer.md): Deprecated. A pointer to the multiarray’s underlying memory.

# pixelBuffer (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A reference to the multiarray’s underlying pixel buffer.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CVPixelBufferRef pixelBuffer;
```

## See Also

### Accessing a multiarray’s elements

- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Assigns a number to the multiarray’s element at the location that the linear offset defines.
- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Assigns a number to the multiarray’s element at the location that the number array defines.
- [getBytesWithHandler:](getbyteswithhandler_.md): Get the underlying buffer pointer to read.
- [getMutableBytesWithHandler:](getmutablebyteswithhandler_.md): Get the underlying buffer pointer to mutate.
- [dataPointer](datapointer.md): Deprecated. A pointer to the multiarray’s underlying memory.
