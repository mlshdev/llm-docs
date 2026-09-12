> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/attribute/spec/init(owner:name:typename:variability:iscustom:)](https://developer.apple.com/documentation/usdkit/usdprim/attribute/spec/init(owner:name:typename:variability:iscustom:))

# init(owner:name:typeName:variability:isCustom:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a new attribute spec under the given prim spec.

## Declaration

```swift
init?(owner: USDPrim.Spec, name: USDToken, typeName: USDPrim.Attribute.ValueType, variability: USDPrim.Property.Variability = .varying, isCustom: Bool = false)
```

## Parameters

- `owner`: The prim spec that owns the new attribute.
- `name`: The attribute’s name.
- `typeName`: The attribute’s value type.
- `variability`: The attribute’s variability.
- `isCustom`: Whether the attribute is authored as `custom`.
