> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/overrideprim(at:)](https://developer.apple.com/documentation/usdkit/usdstage/overrideprim(at:))

# overridePrim(at:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Authors an override prim at a given path, if no prim exists at that path.

## Declaration

```swift
@discardableResult func overridePrim(at path: USDLayer.Path) -> USDPrim
```

<a id="discussion"></a>

## Discussion

If a prim already exists at the given path, this function returns that prim. If no prim exists at that path, the prim authored by this function will be an [USDPrim.Specifier.over](../usdprim/specifier-swift.enum/over.md) prim with no authored type.

> **Note**

> Attributes on override prims change the values of attributes on regular `def` prims underneath them in the layer stack.

## See Also

### Authoring prims

- [definePrim(at:type:)](defineprim%28at_type_%29.md): Defines a prim at a given path, if none already exists.
- [removePrim(at:)](removeprim%28at_%29.md): Removes all authored data at the given path in the current edit target.
