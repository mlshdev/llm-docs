> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/attribute/spec/init(_:)](https://developer.apple.com/documentation/usdkit/usdprim/attribute/spec/init(_:))

# init(\_:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Narrows an untyped [USDLayer.Spec](../../../usdlayer/spec.md) to an attribute spec.

## Declaration

```swift
init?(_ spec: USDLayer.Spec)
```

## Parameters

- `spec`: The spec to narrow.

<a id="return-value"></a>

## Return Value

An attribute spec, or `nil` if `spec` is not an attribute spec.
