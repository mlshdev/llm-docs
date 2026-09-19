> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/variantspec/init(_:)

# init(\_:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Narrows an untyped [USDLayer.Spec](../../usdlayer/spec.md) to a variant spec.

## Declaration

```swift
init?(_ spec: USDLayer.Spec)
```

## Parameters

- `spec`: The spec to narrow.

<a id="return-value"></a>

## Return Value

A variant spec, or `nil` if `spec` is not a variant spec.
