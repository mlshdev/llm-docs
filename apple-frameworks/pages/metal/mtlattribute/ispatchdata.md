> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlattribute/ispatchdata](https://developer.apple.com/documentation/metal/mtlattribute/ispatchdata)

# isPatchData (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the attribute represents tessellation patch data.

## Declaration

```swift
var isPatchData: Bool { get }
```

## See Also

### Reading an attribute’s properties

- [name](name.md): The name of the attribute.
- [attributeIndex](attributeindex.md): The index of the attribute, as declared in Metal shader source code.
- [attributeType](attributetype.md): The data type for the attribute, as declared in Metal shader source code.
- [isActive](isactive.md): A Boolean value that indicates whether the attribute is active.
- [isPatchControlPointData](ispatchcontrolpointdata.md): A Boolean value that indicates whether the attribute represents control point data.

# patchData (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the attribute represents tessellation patch data.

## Declaration

```objectivec
@property (readonly, getter=isPatchData) BOOL patchData;
```

## See Also

### Reading an attribute’s properties

- [name](name.md): The name of the attribute.
- [attributeIndex](attributeindex.md): The index of the attribute, as declared in Metal shader source code.
- [attributeType](attributetype.md): The data type for the attribute, as declared in Metal shader source code.
- [active](isactive.md): A Boolean value that indicates whether the attribute is active.
- [patchControlPointData](ispatchcontrolpointdata.md): A Boolean value that indicates whether the attribute represents control point data.
