> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunction/patchcontrolpointcount](https://developer.apple.com/documentation/metal/mtlfunction/patchcontrolpointcount)

# patchControlPointCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The number of patch control points in the post-tessellation vertex function.

## Declaration

```swift
var patchControlPointCount: Int { get }
```

<a id="discussion"></a>

## Discussion

This value is `-1` if the number of patch control points wasn’t specified or if the function isn’t a post-tessellation vertex function.

## See Also

### Identifying the tessellation patch

- [patchType](patchtype.md): The tessellation patch type of a post-tessellation vertex function.
- [MTLPatchType](../mtlpatchtype.md): Types of tessellation patches that can be inputs of a post-tessellation vertex function.

# patchControlPointCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The number of patch control points in the post-tessellation vertex function.

## Declaration

```objectivec
@property (readonly) NSInteger patchControlPointCount;
```

<a id="discussion"></a>

## Discussion

This value is `-1` if the number of patch control points wasn’t specified or if the function isn’t a post-tessellation vertex function.

## See Also

### Identifying the tessellation patch

- [patchType](patchtype.md): The tessellation patch type of a post-tessellation vertex function.
- [MTLPatchType](../mtlpatchtype.md): Types of tessellation patches that can be inputs of a post-tessellation vertex function.
