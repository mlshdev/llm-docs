> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmultiarray/setobject:forkeyedsubscript:](https://developer.apple.com/documentation/coreml/mlmultiarray/setobject:forkeyedsubscript:)

# setObject:forKeyedSubscript:

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Assigns a number to the multiarray’s element at the location that the number array defines.

## Declaration

```objectivec
- (void) setObject:(NSNumber *) obj forKeyedSubscript:(NSArray<NSNumber *> *) key;
```

## Parameters

- `obj`: An [NSNumber](../../foundation/nsnumber.md) to assign to the element.
- `key`: An [NSNumber](../../foundation/nsnumber.md) array that represents an element’s position in the multiarray. Each element of `key` is an index into the multiarray’s corresponding dimension.

<a id="Discussion"></a>

## Discussion

See [objectForKeyedSubscript:](https://developer.apple.com/documentation/coreml/mlmultiarray/subscript%28_:%29-3d9el) for the method’s getter counterpart.

## See Also

### Accessing a multiarray’s elements

- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Assigns a number to the multiarray’s element at the location that the linear offset defines.
- [getBytesWithHandler:](getbyteswithhandler_.md): Get the underlying buffer pointer to read.
- [getMutableBytesWithHandler:](getmutablebyteswithhandler_.md): Get the underlying buffer pointer to mutate.
- [pixelBuffer](pixelbuffer.md): A reference to the multiarray’s underlying pixel buffer.
- [dataPointer](datapointer.md): Deprecated. A pointer to the multiarray’s underlying memory.
