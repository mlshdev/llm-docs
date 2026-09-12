> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexattribute/isactive](https://developer.apple.com/documentation/metal/mtlvertexattribute/isactive)

# isActive (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether this vertex attribute is active.

## Declaration

```swift
var isActive: Bool { get }
```

<a id="discussion"></a>

## Discussion

If [false](https://developer.apple.com/documentation/swift/false), this attribute is inactive and can be ignored.

## See Also

### Describing the attribute

- [name](name.md): The name of the attribute.
- [attributeIndex](attributeindex.md): The index of the attribute, as declared in Metal shader source code.
- [attributeType](attributetype.md): The data type for the attribute, as declared in Metal shader source code.
- [isPatchControlPointData](ispatchcontrolpointdata.md): A Boolean value that indicates whether this vertex attribute represents control point data.
- [isPatchData](ispatchdata.md): A Boolean value that indicates whether this vertex attribute represents patch data.

# active (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether this vertex attribute is active.

## Declaration

```objectivec
@property (readonly, getter=isActive) BOOL active;
```

<a id="discussion"></a>

## Discussion

If [false](https://developer.apple.com/documentation/swift/false), this attribute is inactive and can be ignored.

## See Also

### Describing the attribute

- [name](name.md): The name of the attribute.
- [attributeIndex](attributeindex.md): The index of the attribute, as declared in Metal shader source code.
- [attributeType](attributetype.md): The data type for the attribute, as declared in Metal shader source code.
- [patchControlPointData](ispatchcontrolpointdata.md): A Boolean value that indicates whether this vertex attribute represents control point data.
- [patchData](ispatchdata.md): A Boolean value that indicates whether this vertex attribute represents patch data.
