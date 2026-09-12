> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/removeprim(at:)](https://developer.apple.com/documentation/usdkit/usdstage/removeprim(at:))

# removePrim(at:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Removes all authored data at the given path in the current edit target.

## Declaration

```swift
@discardableResult func removePrim(at path: USDLayer.Path) -> Bool
```

## See Also

### Authoring prims

- [definePrim(at:type:)](defineprim%28at_type_%29.md): Defines a prim at a given path, if none already exists.
- [overridePrim(at:)](overrideprim%28at_%29.md): Authors an override prim at a given path, if no prim exists at that path.
