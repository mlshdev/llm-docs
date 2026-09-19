> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/spec/init(parentprimspec:name:specifier:typename:)

# init(parentPrimSpec:name:specifier:typeName:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a new child prim spec under the given parent prim spec.

## Declaration

```swift
init?(parentPrimSpec: USDPrim.Spec, name: USDToken, specifier: USDPrim.Specifier, typeName: String = "")
```
