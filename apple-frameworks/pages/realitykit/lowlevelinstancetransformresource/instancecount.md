> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelinstancetransformresource/instancecount

# instanceCount

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The number of active instances to draw.

## Declaration

```swift
final var instanceCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

Defaults to `0` after creation. Set this to the number of transforms written before passing the buffer to a mesh instance.

## See Also

### Inspecting instance counts

- [instanceCapacity](instancecapacity.md): The maximum number of instances the buffer holds.
