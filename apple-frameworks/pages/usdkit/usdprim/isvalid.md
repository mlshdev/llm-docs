> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/isvalid](https://developer.apple.com/documentation/usdkit/usdprim/isvalid)

# isValid

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value indicating whether this prim is valid.

## Declaration

```swift
var isValid: Bool { get }
```

<a id="discussion"></a>

## Discussion

A prim’s validity is connected to a [USDStage](../usdstage.md). A prim becomes invalid when the lifetime of its stage ends.

A prim will also expire if its stage no longer defines that prim. `isValid` is false if this prim has expired.

## See Also

### Identifying the prim

- [path](path.md): The complete scene path to this prim, relative to its stage.
- [primPath](primpath.md): The complete scene path to this prim, relative to its stage.
- [specifier](specifier-swift.property.md): The specifier that describes how this prim is defined, such as `def`, `over`, or `class`.
- [stage](stage.md): The stage that owns this prim.
- [parent](parent.md): The immediate parent prim of this prim.
- [description](description.md): A summary description of this prim.
- [USDPrim.Specifier](specifier-swift.enum.md): How a prim definition behaves in composition.
