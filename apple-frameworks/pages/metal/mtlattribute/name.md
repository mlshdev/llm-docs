> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlattribute/name](https://developer.apple.com/documentation/metal/mtlattribute/name)

# name (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The name of the attribute.

## Declaration

```swift
var name: String { get }
```

## See Also

### Reading an attribute’s properties

- [attributeIndex](attributeindex.md): The index of the attribute, as declared in Metal shader source code.
- [attributeType](attributetype.md): The data type for the attribute, as declared in Metal shader source code.
- [isActive](isactive.md): A Boolean value that indicates whether the attribute is active.
- [isPatchControlPointData](ispatchcontrolpointdata.md): A Boolean value that indicates whether the attribute represents control point data.
- [isPatchData](ispatchdata.md): A Boolean value that indicates whether the attribute represents tessellation patch data.

# name (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The name of the attribute.

## Declaration

```objectivec
@property (readonly) NSString * name;
```

## See Also

### Reading an attribute’s properties

- [attributeIndex](attributeindex.md): The index of the attribute, as declared in Metal shader source code.
- [attributeType](attributetype.md): The data type for the attribute, as declared in Metal shader source code.
- [active](isactive.md): A Boolean value that indicates whether the attribute is active.
- [patchControlPointData](ispatchcontrolpointdata.md): A Boolean value that indicates whether the attribute represents control point data.
- [patchData](ispatchdata.md): A Boolean value that indicates whether the attribute represents tessellation patch data.
