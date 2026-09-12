> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray/getbyteswithhandler:](https://developer.apple.com/documentation/coreml/mlmultiarray/getbyteswithhandler:)

# getBytesWithHandler:

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+ · watchOS 8.5+

Get the underlying buffer pointer to read.

## Declaration

```objectivec
- (void) getBytesWithHandler:(void (^)(const void *bytes, NSInteger size)) handler;
```

## Parameters

- `handler`: The block to receive the buffer pointer and its size in bytes. This block has no return value and takes the following parameters:

  - **`bytes`**: The pointer to the buffer.
  - **`size`**: The size of the buffer.

<a id="Discussion"></a>

## Discussion

The buffer contains a collection of `int32`, `float16`, `float32`, or `float64` values, depending on the multiarray’s data type. It may not store these scalar values contiguously; use [strides](strides.md) to get the buffer layout.

## See Also

### Accessing a multiarray’s elements

- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Assigns a number to the multiarray’s element at the location that the linear offset defines.
- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Assigns a number to the multiarray’s element at the location that the number array defines.
- [getMutableBytesWithHandler:](getmutablebyteswithhandler_.md): Get the underlying buffer pointer to mutate.
- [pixelBuffer](pixelbuffer.md): A reference to the multiarray’s underlying pixel buffer.
- [dataPointer](datapointer.md): Deprecated. A pointer to the multiarray’s underlying memory.
