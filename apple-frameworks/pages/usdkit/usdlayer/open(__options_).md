> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/open(_:options:)](https://developer.apple.com/documentation/usdkit/usdlayer/open(_:options:))

# open(\_:options:)

**Framework:** USDKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns an already-loaded layer at the identifier, or opens it from the resolved asset path.

## Declaration

```swift
static func open(_ identifier: String, options: USDLayer.OpenOptions = []) throws -> USDLayer
```

## Parameters

- `identifier`: The layer identifier — typically a file path, URL, or anonymous identifier.
- `options`: Pass `.createNew` to create a fresh layer, overwriting any existing file at the identifier.

<a id="return-value"></a>

## Return Value

The opened layer.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the layer cannot be opened or created.

## See Also

### Opening and finding layers

- [find(identifier:)](find%28identifier_%29.md): Returns an already-loaded layer with this identifier, or `nil` if none is loaded. Does no I/O.
- [USDLayer.OpenOptions](openoptions.md): Options for opening a layer.
- [USDLayer.Permission](permission.md): Access permission for a spec.
