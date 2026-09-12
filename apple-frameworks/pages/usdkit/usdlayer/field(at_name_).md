> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/field(at:name:)](https://developer.apple.com/documentation/usdkit/usdlayer/field(at:name:))

# field(at:name:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the value of the named field at the given path, or `nil` if no such field is authored.

## Declaration

```swift
func field(at path: USDLayer.Path, name: USDToken) -> USDValue?
```

## Parameters

- `path`: The path to look up.
- `name`: The field name.

<a id="return-value"></a>

## Return Value

The field’s value, or `nil` if unauthored.

## See Also

### Reading and authoring fields

- [fields(at:)](fields%28at_%29.md): Returns the names of the fields authored at the given path.
- [setField(at:name:value:)](setfield%28at_name_value_%29-83nwe.md): Sets the value of the named field at the given path.
- [setField(at:name:value:)](setfield%28at_name_value_%29-3242k.md): Sets the value of the named field at the given path, wrapping the typed value in a `USDValue`.
