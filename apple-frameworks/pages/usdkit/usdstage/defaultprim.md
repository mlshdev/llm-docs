> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/defaultprim](https://developer.apple.com/documentation/usdkit/usdstage/defaultprim)

# defaultPrim

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The prim designated as this stage’s default entry point when the stage is referenced.

## Declaration

```swift
var defaultPrim: USDPrim? { get nonmutating set }
```

<a id="discussion"></a>

## Discussion

> **Note**

> This property can be `nil` even if [hasDefaultPrim](hasdefaultprim.md) is true. This indicates that there is an authored reference to a default prim, but it is invalid.

## See Also

### Accessing prims and properties

- [prim(at:)](prim%28at_%29.md): Returns the prim at a given path, if it exists.
- [object(at:)](object%28at_%29.md): Returns the object at a given path, if it exists.
- [property(at:)](property%28at_%29.md): Returns the property at a given path, if it exists.
- [attribute(at:)](attribute%28at_%29.md): Returns the attribute at a given path, if it exists.
- [relationship(at:)](relationship%28at_%29.md): Returns the relationship at a given path, if it exists.
- [pseudoRoot](pseudoroot.md): The prim at the top of the stage’s namespace, whose path is `/`.
- [hasDefaultPrim](hasdefaultprim.md): Return true if this stage’s root layer has an authored opinion for the default prim layer metadata.
- [USDStage.Object](object.md)
