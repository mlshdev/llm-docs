> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlattributedescriptor/bufferindex](https://developer.apple.com/documentation/metal/mtlattributedescriptor/bufferindex)

# bufferIndex (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The index in the buffer argument table for the buffer that contains the data for this attribute.

## Declaration

```swift
var bufferIndex: Int { get set }
```

## See Also

### Defining attribute location

- [offset](offset.md): The offset, in bytes, from the start of the buffer that contains the attribute data to the start of the data itself.
- [format](format.md): The format of the attribute’s data.
- [MTLAttributeFormat](../mtlattributeformat.md): The data format options for acceleration structures.

# bufferIndex (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The index in the buffer argument table for the buffer that contains the data for this attribute.

## Declaration

```objectivec
@property (nonatomic, assign) NSUInteger bufferIndex;
```

## See Also

### Defining attribute location

- [offset](offset.md): The offset, in bytes, from the start of the buffer that contains the attribute data to the start of the data itself.
- [format](format.md): The format of the attribute’s data.
- [MTLAttributeFormat](../mtlattributeformat.md): The data format options for acceleration structures.
