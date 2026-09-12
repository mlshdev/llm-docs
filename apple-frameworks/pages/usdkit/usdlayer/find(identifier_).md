> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/find(identifier:)](https://developer.apple.com/documentation/usdkit/usdlayer/find(identifier:))

# find(identifier:)

**Framework:** USDKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns an already-loaded layer with this identifier, or `nil` if none is loaded. Does no I/O.

## Declaration

```swift
static func find(identifier: String) -> USDLayer?
```

## Parameters

- `identifier`: The layer identifier to look up.

<a id="return-value"></a>

## Return Value

The matching layer, or `nil` if none is loaded.

## See Also

### Opening and finding layers

- [open(\_:options:)](open%28__options_%29.md): Returns an already-loaded layer at the identifier, or opens it from the resolved asset path.
- [USDLayer.OpenOptions](openoptions.md): Options for opening a layer.
- [USDLayer.Permission](permission.md): Access permission for a spec.
