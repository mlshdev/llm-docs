> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpatchtype/quad](https://developer.apple.com/documentation/metal/mtlpatchtype/quad)

# MTLPatchType.quad (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A quad patch.

## Declaration

```swift
case quad
```

<a id="discussion"></a>

## Discussion

Metal uses this value if the shader is a post-tessellation vertex function with the `[[patch(quad)]]` attribute.

## See Also

### Patch types

- [MTLPatchType.none](none.md): An option that indicates that this isn’t a post-tessellation vertex function.
- [MTLPatchType.triangle](triangle.md): A triangle patch.

# MTLPatchTypeQuad (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A quad patch.

## Declaration

```objectivec
MTLPatchTypeQuad
```

<a id="discussion"></a>

## Discussion

Metal uses this value if the shader is a post-tessellation vertex function with the `[[patch(quad)]]` attribute.

## See Also

### Patch types

- [MTLPatchTypeNone](none.md): An option that indicates that this isn’t a post-tessellation vertex function.
- [MTLPatchTypeTriangle](triangle.md): A triangle patch.
