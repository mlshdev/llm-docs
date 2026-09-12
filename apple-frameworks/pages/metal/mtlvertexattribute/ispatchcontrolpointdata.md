> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexattribute/ispatchcontrolpointdata](https://developer.apple.com/documentation/metal/mtlvertexattribute/ispatchcontrolpointdata)

# isPatchControlPointData (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether this vertex attribute represents control point data.

## Declaration

```swift
var isPatchControlPointData: Bool { get }
```

<a id="discussion"></a>

## Discussion

This value is always [false](https://developer.apple.com/documentation/swift/false) if the vertex function is not a post-tessellation vertex function.

## See Also

### Describing the attribute

- [name](name.md): The name of the attribute.
- [attributeIndex](attributeindex.md): The index of the attribute, as declared in Metal shader source code.
- [attributeType](attributetype.md): The data type for the attribute, as declared in Metal shader source code.
- [isActive](isactive.md): A Boolean value that indicates whether this vertex attribute is active.
- [isPatchData](ispatchdata.md): A Boolean value that indicates whether this vertex attribute represents patch data.

# patchControlPointData (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether this vertex attribute represents control point data.

## Declaration

```objectivec
@property (readonly, getter=isPatchControlPointData) BOOL patchControlPointData;
```

<a id="discussion"></a>

## Discussion

This value is always [false](https://developer.apple.com/documentation/swift/false) if the vertex function is not a post-tessellation vertex function.

## See Also

### Describing the attribute

- [name](name.md): The name of the attribute.
- [attributeIndex](attributeindex.md): The index of the attribute, as declared in Metal shader source code.
- [attributeType](attributetype.md): The data type for the attribute, as declared in Metal shader source code.
- [active](isactive.md): A Boolean value that indicates whether this vertex attribute is active.
- [patchData](ispatchdata.md): A Boolean value that indicates whether this vertex attribute represents patch data.
