> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/fields(at:)](https://developer.apple.com/documentation/usdkit/usdlayer/fields(at:))

# fields(at:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the names of the fields authored at the given path.

## Declaration

```swift
func fields(at path: USDLayer.Path) -> [USDToken]
```

## Parameters

- `path`: The path to look up.

<a id="return-value"></a>

## Return Value

The names of the authored fields.

## See Also

### Reading and authoring fields

- [field(at:name:)](field%28at_name_%29.md): Returns the value of the named field at the given path, or `nil` if no such field is authored.
- [setField(at:name:value:)](setfield%28at_name_value_%29-83nwe.md): Sets the value of the named field at the given path.
- [setField(at:name:value:)](setfield%28at_name_value_%29-3242k.md): Sets the value of the named field at the given path, wrapping the typed value in a `USDValue`.
