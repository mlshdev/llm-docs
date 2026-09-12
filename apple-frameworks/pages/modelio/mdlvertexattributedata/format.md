> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvertexattributedata/format](https://developer.apple.com/documentation/modelio/mdlvertexattributedata/format)

# format (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The format of per-vertex data for the attribute.

## Declaration

```swift
var format: MDLVertexFormat { get set }
```

<a id="Discussion"></a>

## Discussion

A [MDLVertexFormat](../mdlvertexformat.md) value describes the number of vector components for an attribute, as well as the data type of each component, and, for special packed formats, the layout of components.

## See Also

### Accessing Data for a Vertex Attribute

- [dataStart](datastart.md): The offset, in bytes, from the start of the data to where vertex attribute information begins.
- [stride](stride.md): The stride, in bytes, between vertex information for consecutive vertices in the data.

# format (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The format of per-vertex data for the attribute.

## Declaration

```objectivec
@property (nonatomic) MDLVertexFormat format;
```

<a id="Discussion"></a>

## Discussion

A [MDLVertexFormat](../mdlvertexformat.md) value describes the number of vector components for an attribute, as well as the data type of each component, and, for special packed formats, the layout of components.

## See Also

### Accessing Data for a Vertex Attribute

- [dataStart](datastart.md): The offset, in bytes, from the start of the data to where vertex attribute information begins.
- [stride](stride.md): The stride, in bytes, between vertex information for consecutive vertices in the data.
