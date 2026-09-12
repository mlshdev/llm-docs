> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbufferlayoutdescriptorarray/setobject:atindexedsubscript:](https://developer.apple.com/documentation/metal/mtlbufferlayoutdescriptorarray/setobject:atindexedsubscript:)

# setObject:atIndexedSubscript:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Sets the state of the specified buffer layout.

## Declaration

```objectivec
- (void) setObject:(MTLBufferLayoutDescriptor *) bufferDesc atIndexedSubscript:(NSUInteger) index;
```

## Parameters

- `bufferDesc`: A descriptor that contains buffer layout state.
- `index`: An index in the array of buffer layouts.

## See Also

### Array accessors

- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the state of the specified buffer layout.
