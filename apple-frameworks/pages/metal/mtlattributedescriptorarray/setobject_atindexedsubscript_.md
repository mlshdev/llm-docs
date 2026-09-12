> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlattributedescriptorarray/setobject:atindexedsubscript:](https://developer.apple.com/documentation/metal/mtlattributedescriptorarray/setobject:atindexedsubscript:)

# setObject:atIndexedSubscript:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Sets state for the specified attribute.

## Declaration

```objectivec
- (void) setObject:(MTLAttributeDescriptor *) attributeDesc atIndexedSubscript:(NSUInteger) index;
```

## Parameters

- `attributeDesc`: A descriptor that contains attribute state.
- `index`: A specified index in the array of vertex attribute states.

## See Also

### Accessing attribute state objects

- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the state of the specified attribute.
