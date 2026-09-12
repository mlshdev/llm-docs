> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/relationship/spec/init(layer:relationshippath:variability:iscustom:)](https://developer.apple.com/documentation/usdkit/usdprim/relationship/spec/init(layer:relationshippath:variability:iscustom:))

# init(layer:relationshipPath:variability:isCustom:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a relationship spec at the given path in the layer, authoring intermediate ancestor prim specs as `over`s where needed.

## Declaration

```swift
init?(layer: USDLayer, relationshipPath: USDLayer.Path, variability: USDPrim.Property.Variability = .varying, isCustom: Bool = false)
```

## Parameters

- `layer`: The layer that owns the new relationship.
- `relationshipPath`: The full path of the relationship to author.
- `variability`: The relationship’s variability.
- `isCustom`: Whether the relationship is authored as `custom`.
