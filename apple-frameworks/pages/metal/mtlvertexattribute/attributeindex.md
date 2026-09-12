> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexattribute/attributeindex](https://developer.apple.com/documentation/metal/mtlvertexattribute/attributeindex)

# attributeIndex (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The index of the attribute, as declared in Metal shader source code.

## Declaration

```swift
var attributeIndex: Int { get }
```

## See Also

### Describing the attribute

- [name](name.md): The name of the attribute.
- [attributeType](attributetype.md): The data type for the attribute, as declared in Metal shader source code.
- [isActive](isactive.md): A Boolean value that indicates whether this vertex attribute is active.
- [isPatchControlPointData](ispatchcontrolpointdata.md): A Boolean value that indicates whether this vertex attribute represents control point data.
- [isPatchData](ispatchdata.md): A Boolean value that indicates whether this vertex attribute represents patch data.

# attributeIndex (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The index of the attribute, as declared in Metal shader source code.

## Declaration

```objectivec
@property (readonly) NSUInteger attributeIndex;
```

## See Also

### Describing the attribute

- [name](name.md): The name of the attribute.
- [attributeType](attributetype.md): The data type for the attribute, as declared in Metal shader source code.
- [active](isactive.md): A Boolean value that indicates whether this vertex attribute is active.
- [patchControlPointData](ispatchcontrolpointdata.md): A Boolean value that indicates whether this vertex attribute represents control point data.
- [patchData](ispatchdata.md): A Boolean value that indicates whether this vertex attribute represents patch data.
