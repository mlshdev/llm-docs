> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexbufferlayoutdescriptorarray/setobject:atindexedsubscript:](https://developer.apple.com/documentation/metal/mtlvertexbufferlayoutdescriptorarray/setobject:atindexedsubscript:)

# setObject:atIndexedSubscript:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Sets the state of the specified vertex buffer layout.

## Declaration

```objectivec
- (void) setObject:(MTLVertexBufferLayoutDescriptor *) bufferDesc atIndexedSubscript:(NSUInteger) index;
```

## Parameters

- `bufferDesc`: A descriptor that contains vertex buffer layout state.
- `index`: An index in the array of vertex buffer layouts.

<a id="discussion"></a>

## Discussion

If this method is called with `nil` for `bufferDesc` for any legal index, the [MTLVertexBufferLayoutDescriptor](../mtlvertexbufferlayoutdescriptor.md) object in the array is set to the default values.

## See Also

### Accessing a specified vertex buffer layout

- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the state of the specified vertex buffer layout.
