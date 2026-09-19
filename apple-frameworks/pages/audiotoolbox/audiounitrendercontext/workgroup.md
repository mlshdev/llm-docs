> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audiounitrendercontext/workgroup

# workgroup

**Interface language:** Objective-C

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The workgroup that manages the rendering threads of the audio unit.

## Declaration

```objectivec
os_workgroup_t workgroup;
```

<a id="Discussion"></a>

## Discussion

The value of this property might be `NULL` when the new render context does not perform real-time rendering. It might also be `NULL` when the new real-time render thread isn’t part of a workgroup.

## See Also

### Properties

- [reserved](reserved.md): System-specific information.
