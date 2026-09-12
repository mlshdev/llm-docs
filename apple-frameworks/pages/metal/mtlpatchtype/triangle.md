> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpatchtype/triangle](https://developer.apple.com/documentation/metal/mtlpatchtype/triangle)

# MTLPatchType.triangle (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A triangle patch.

## Declaration

```swift
case triangle
```

<a id="discussion"></a>

## Discussion

Metal uses this value if the shader is a post-tessellation vertex function with the `[[patch(triangle)]]` attribute.

## See Also

### Patch types

- [MTLPatchType.none](none.md): An option that indicates that this isn’t a post-tessellation vertex function.
- [MTLPatchType.quad](quad.md): A quad patch.

# MTLPatchTypeTriangle (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A triangle patch.

## Declaration

```objectivec
MTLPatchTypeTriangle
```

<a id="discussion"></a>

## Discussion

Metal uses this value if the shader is a post-tessellation vertex function with the `[[patch(triangle)]]` attribute.

## See Also

### Patch types

- [MTLPatchTypeNone](none.md): An option that indicates that this isn’t a post-tessellation vertex function.
- [MTLPatchTypeQuad](quad.md): A quad patch.
