> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlattributedescriptor/offset](https://developer.apple.com/documentation/metal/mtlattributedescriptor/offset)

# offset (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The offset, in bytes, from the start of the buffer that contains the attribute data to the start of the data itself.

## Declaration

```swift
var offset: Int { get set }
```

<a id="discussion"></a>

## Discussion

Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions.

## See Also

### Defining attribute location

- [bufferIndex](bufferindex.md): The index in the buffer argument table for the buffer that contains the data for this attribute.
- [format](format.md): The format of the attribute’s data.
- [MTLAttributeFormat](../mtlattributeformat.md): The data format options for acceleration structures.

# offset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The offset, in bytes, from the start of the buffer that contains the attribute data to the start of the data itself.

## Declaration

```objectivec
@property (nonatomic, assign) NSUInteger offset;
```

<a id="discussion"></a>

## Discussion

Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions.

## See Also

### Defining attribute location

- [bufferIndex](bufferindex.md): The index in the buffer argument table for the buffer that contains the data for this attribute.
- [format](format.md): The format of the attribute’s data.
- [MTLAttributeFormat](../mtlattributeformat.md): The data format options for acceleration structures.
