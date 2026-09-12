> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexbufferlayoutdescriptor/stride](https://developer.apple.com/documentation/metal/mtlvertexbufferlayoutdescriptor/stride)

# stride (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The number of bytes between the first byte of two consecutive vertices in a buffer.

## Declaration

```swift
var stride: Int { get set }
```

<a id="discussion"></a>

## Discussion

Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions.

## See Also

### Organizing the vertex buffer layout

- [stepFunction](stepfunction.md): The circumstances under which the vertex and its attributes are presented to the vertex function.
- [stepRate](steprate.md): The interval at which the vertex and its attributes are presented to the vertex function.
- [MTLVertexStepFunction](../mtlvertexstepfunction.md): The frequency with which the vertex function or post-tessellation vertex function fetches attribute data.

# stride (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The number of bytes between the first byte of two consecutive vertices in a buffer.

## Declaration

```objectivec
@property (nonatomic, assign) NSUInteger stride;
```

<a id="discussion"></a>

## Discussion

Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions.

## See Also

### Organizing the vertex buffer layout

- [stepFunction](stepfunction.md): The circumstances under which the vertex and its attributes are presented to the vertex function.
- [stepRate](steprate.md): The interval at which the vertex and its attributes are presented to the vertex function.
- [MTLVertexStepFunction](../mtlvertexstepfunction.md): The frequency with which the vertex function or post-tessellation vertex function fetches attribute data.
