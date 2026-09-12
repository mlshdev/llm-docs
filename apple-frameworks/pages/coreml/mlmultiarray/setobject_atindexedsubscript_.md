> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray/setobject:atindexedsubscript:](https://developer.apple.com/documentation/coreml/mlmultiarray/setobject:atindexedsubscript:)

# setObject:atIndexedSubscript:

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Assigns a number to the multiarray’s element at the location that the linear offset defines.

## Declaration

```objectivec
- (void) setObject:(NSNumber *) obj atIndexedSubscript:(NSInteger) idx;
```

## Parameters

- `obj`: An [NSNumber](../../foundation/nsnumber.md) to assign to the element.
- `idx`: A linear offset index that represents a position the multiarray in the first major order.

## See Also

### Accessing a multiarray’s elements

- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Assigns a number to the multiarray’s element at the location that the number array defines.
- [getBytesWithHandler:](getbyteswithhandler_.md): Get the underlying buffer pointer to read.
- [getMutableBytesWithHandler:](getmutablebyteswithhandler_.md): Get the underlying buffer pointer to mutate.
- [pixelBuffer](pixelbuffer.md): A reference to the multiarray’s underlying pixel buffer.
- [dataPointer](datapointer.md): Deprecated. A pointer to the multiarray’s underlying memory.
