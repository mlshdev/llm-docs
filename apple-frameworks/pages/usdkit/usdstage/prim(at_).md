> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/prim(at:)](https://developer.apple.com/documentation/usdkit/usdstage/prim(at:))

# prim(at:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the prim at a given path, if it exists.

## Declaration

```swift
func prim(at path: USDLayer.Path) -> USDPrim
```

<a id="discussion"></a>

## Discussion

If `path` resolves to a prim beneath an instance, returns an instance proxy prim if a prim exists at the corresponding path in that instance’s prototype.

If no prim exists at the resolved path, returns an invalid prim handle.

## See Also

### Accessing prims and properties

- [object(at:)](object%28at_%29.md): Returns the object at a given path, if it exists.
- [property(at:)](property%28at_%29.md): Returns the property at a given path, if it exists.
- [attribute(at:)](attribute%28at_%29.md): Returns the attribute at a given path, if it exists.
- [relationship(at:)](relationship%28at_%29.md): Returns the relationship at a given path, if it exists.
- [pseudoRoot](pseudoroot.md): The prim at the top of the stage’s namespace, whose path is `/`.
- [defaultPrim](defaultprim.md): The prim designated as this stage’s default entry point when the stage is referenced.
- [hasDefaultPrim](hasdefaultprim.md): Return true if this stage’s root layer has an authored opinion for the default prim layer metadata.
- [USDStage.Object](object.md)
