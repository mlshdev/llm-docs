> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/setfield(at:name:value:)-83nwe](https://developer.apple.com/documentation/usdkit/usdlayer/setfield(at:name:value:)-83nwe)

# setField(at:name:value:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the value of the named field at the given path.

## Declaration

```swift
func setField(at path: USDLayer.Path, name: USDToken, value: USDValue)
```

## Parameters

- `path`: The path of the spec to update.
- `name`: The field name.
- `value`: The new field value.

## See Also

### Reading and authoring fields

- [field(at:name:)](field%28at_name_%29.md): Returns the value of the named field at the given path, or `nil` if no such field is authored.
- [fields(at:)](fields%28at_%29.md): Returns the names of the fields authored at the given path.
- [setField(at:name:value:)](setfield%28at_name_value_%29-3242k.md): Sets the value of the named field at the given path, wrapping the typed value in a `USDValue`.
