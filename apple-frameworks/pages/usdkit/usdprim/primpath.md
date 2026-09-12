> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/primpath](https://developer.apple.com/documentation/usdkit/usdprim/primpath)

# primPath

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The complete scene path to this prim, relative to its stage.

## Declaration

```swift
var primPath: USDLayer.Path { get }
```

<a id="discussion"></a>

## Discussion

This property is equivalent to [path](path.md).

## See Also

### Identifying the prim

- [path](path.md): The complete scene path to this prim, relative to its stage.
- [isValid](isvalid.md): A Boolean value indicating whether this prim is valid.
- [specifier](specifier-swift.property.md): The specifier that describes how this prim is defined, such as `def`, `over`, or `class`.
- [stage](stage.md): The stage that owns this prim.
- [parent](parent.md): The immediate parent prim of this prim.
- [description](description.md): A summary description of this prim.
- [USDPrim.Specifier](specifier-swift.enum.md): How a prim definition behaves in composition.
