> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvertexattributedata/datastart](https://developer.apple.com/documentation/modelio/mdlvertexattributedata/datastart)

# dataStart (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The offset, in bytes, from the start of the data to where vertex attribute information begins.

## Declaration

```swift
var dataStart: UnsafeMutableRawPointer { get set }
```

## See Also

### Accessing Data for a Vertex Attribute

- [stride](stride.md): The stride, in bytes, between vertex information for consecutive vertices in the data.
- [format](format.md): The format of per-vertex data for the attribute.

# dataStart (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The offset, in bytes, from the start of the data to where vertex attribute information begins.

## Declaration

```objectivec
@property (nonatomic) void * dataStart;
```

## See Also

### Accessing Data for a Vertex Attribute

- [stride](stride.md): The stride, in bytes, between vertex information for consecutive vertices in the data.
- [format](format.md): The format of per-vertex data for the attribute.
