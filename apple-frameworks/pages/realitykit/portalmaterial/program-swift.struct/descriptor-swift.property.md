> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/portalmaterial/program-swift.struct/descriptor-swift.property

# descriptor

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The descriptor that produced this program.

## Declaration

```swift
var descriptor: PortalMaterial.Program.Descriptor { get }
```

<a id="discussion"></a>

## Discussion

Use this property to inspect the shader graph and the input or function-constant values that were used to compile the program — for example, to enumerate the input names a parent material can set, or to construct a fresh descriptor with adjusted constants and recompile.

## See Also

### Configuring the program

- [PortalMaterial.Program.Descriptor](descriptor-swift.struct.md): Configuration used to compile a [PortalMaterial.Program](../program-swift.struct.md).
