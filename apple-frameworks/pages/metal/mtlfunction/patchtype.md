> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunction/patchtype](https://developer.apple.com/documentation/metal/mtlfunction/patchtype)

# patchType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The tessellation patch type of a post-tessellation vertex function.

## Declaration

```swift
var patchType: MTLPatchType { get }
```

<a id="discussion"></a>

## Discussion

This value is [MTLPatchType.none](../mtlpatchtype/none.md) if the function isn’t a post-tessellation vertex function.

## See Also

### Identifying the tessellation patch

- [patchControlPointCount](patchcontrolpointcount.md): The number of patch control points in the post-tessellation vertex function.
- [MTLPatchType](../mtlpatchtype.md): Types of tessellation patches that can be inputs of a post-tessellation vertex function.

# patchType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The tessellation patch type of a post-tessellation vertex function.

## Declaration

```objectivec
@property (readonly) MTLPatchType patchType;
```

<a id="discussion"></a>

## Discussion

This value is [MTLPatchTypeNone](../mtlpatchtype/none.md) if the function isn’t a post-tessellation vertex function.

## See Also

### Identifying the tessellation patch

- [patchControlPointCount](patchcontrolpointcount.md): The number of patch control points in the post-tessellation vertex function.
- [MTLPatchType](../mtlpatchtype.md): Types of tessellation patches that can be inputs of a post-tessellation vertex function.
