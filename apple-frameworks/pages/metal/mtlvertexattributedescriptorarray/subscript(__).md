> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexattributedescriptorarray/subscript(_:)](https://developer.apple.com/documentation/metal/mtlvertexattributedescriptorarray/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Returns the state of the specified vertex attribute.

## Declaration

```swift
subscript(index: Int) -> MTLVertexAttributeDescriptor! { get set }
```

## Parameters

- `index`: A specified index in the array of vertex attribute states.

<a id="return-value"></a>

## Return Value

A descriptor that contains the vertex attribute state.

## See Also

### Related Documentation

- [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364)
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)

# objectAtIndexedSubscript: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Returns the state of the specified vertex attribute.

## Declaration

```objectivec
- (MTLVertexAttributeDescriptor *) objectAtIndexedSubscript:(NSUInteger) index;
```

## Parameters

- `index`: A specified index in the array of vertex attribute states.

<a id="return-value"></a>

## Return Value

A descriptor that contains the vertex attribute state.

## See Also

### Related Documentation

- [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364)
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)

### Accessing a specified vertex attribute

- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Sets state for the specified vertex attribute.
