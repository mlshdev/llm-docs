> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/defineprim(at:type:)](https://developer.apple.com/documentation/usdkit/usdstage/defineprim(at:type:))

# definePrim(at:type:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Defines a prim at a given path, if none already exists.

## Declaration

```swift
@discardableResult func definePrim(at path: USDLayer.Path, type: USDToken) -> USDPrim
```

## Parameters

- `path`: An absolute path in this stage.
- `type`: The type name of the prim to define.

<a id="discussion"></a>

## Discussion

If a prim already exists at the given path, and that prim’s type is empty or equal to `type`, this function returns that prim. Otherwise, the prim authored by this function will be an [USDPrim.Specifier.def](../usdprim/specifier-swift.enum/def.md) prim with the given type.

> **Note**

> This function will also author any missing parent prims along the given `path`. Prims authored this way will have an empty type.

## See Also

### Authoring prims

- [overridePrim(at:)](overrideprim%28at_%29.md): Authors an override prim at a given path, if no prim exists at that path.
- [removePrim(at:)](removeprim%28at_%29.md): Removes all authored data at the given path in the current edit target.
