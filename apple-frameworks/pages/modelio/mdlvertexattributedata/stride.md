> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvertexattributedata/stride](https://developer.apple.com/documentation/modelio/mdlvertexattributedata/stride)

# stride (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The stride, in bytes, between vertex information for consecutive vertices in the data.

## Declaration

```swift
var stride: Int { get set }
```

## See Also

### Accessing Data for a Vertex Attribute

- [dataStart](datastart.md): The offset, in bytes, from the start of the data to where vertex attribute information begins.
- [format](format.md): The format of per-vertex data for the attribute.

# stride (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The stride, in bytes, between vertex information for consecutive vertices in the data.

## Declaration

```objectivec
@property (nonatomic) NSUInteger stride;
```

## See Also

### Accessing Data for a Vertex Attribute

- [dataStart](datastart.md): The offset, in bytes, from the start of the data to where vertex attribute information begins.
- [format](format.md): The format of per-vertex data for the attribute.
