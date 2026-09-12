> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/spec/init(layer:primpath:)](https://developer.apple.com/documentation/usdkit/usdprim/spec/init(layer:primpath:))

# init(layer:primPath:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a prim spec at the given path in the layer, authoring intermediate ancestor prim specs as `over`s where needed.

## Declaration

```swift
init?(layer: USDLayer, primPath: USDLayer.Path)
```
