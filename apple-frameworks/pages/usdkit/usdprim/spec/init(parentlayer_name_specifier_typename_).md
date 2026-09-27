> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/spec/init(parentlayer:name:specifier:typename:)

# init(parentLayer:name:specifier:typeName:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a new top-level prim spec under the given layer.

## Declaration

```swift
init?(parentLayer: USDLayer, name: USDToken, specifier: USDPrim.Specifier, typeName: String = "")
```
