> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexattributedescriptorarray/setobject:atindexedsubscript:](https://developer.apple.com/documentation/metal/mtlvertexattributedescriptorarray/setobject:atindexedsubscript:)

# setObject:atIndexedSubscript:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Sets state for the specified vertex attribute.

## Declaration

```objectivec
- (void) setObject:(MTLVertexAttributeDescriptor *) attributeDesc atIndexedSubscript:(NSUInteger) index;
```

## Parameters

- `attributeDesc`: A descriptor that contains vertex attribute state.
- `index`: A specified index in the array of vertex attribute states.

<a id="discussion"></a>

## Discussion

If this method is called with `nil` for `attributeDesc` for any legal `index`, its vertex attribute state is set to the default values.

## See Also

### Accessing a specified vertex attribute

- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the state of the specified vertex attribute.
