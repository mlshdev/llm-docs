> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/spec/init(_:)-9poa6

# init(\_:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Narrows an untyped [USDLayer.Spec](../../usdlayer/spec.md) to a `USDPrim.Spec`.

## Declaration

```swift
init?(_ spec: USDLayer.Spec)
```

<a id="discussion"></a>

## Discussion

Returns `nil` if `spec` is not a prim spec.
