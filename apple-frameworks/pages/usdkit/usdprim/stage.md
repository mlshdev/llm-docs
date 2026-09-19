> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/stage

# stage

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The stage that owns this prim.

## Declaration

```swift
var stage: USDStage { get }
```

<a id="discussion"></a>

## Discussion

A prim’s state and validity is connected to its stage. A prim becomes invalid when the lifetime of its stage ends. It can also become invalid when the stage is modified.

## See Also

### Identifying the prim

- [path](path.md): The complete scene path to this prim, relative to its stage.
- [primPath](primpath.md): The complete scene path to this prim, relative to its stage.
- [isValid](isvalid.md): A Boolean value indicating whether this prim is valid.
- [specifier](specifier-swift.property.md): The specifier that describes how this prim is defined, such as `def`, `over`, or `class`.
- [parent](parent.md): The immediate parent prim of this prim.
- [description](description.md): A summary description of this prim.
- [USDPrim.Specifier](specifier-swift.enum.md): How a prim definition behaves in composition.
