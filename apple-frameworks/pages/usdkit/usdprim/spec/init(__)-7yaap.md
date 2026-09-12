> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/spec/init(_:)-7yaap](https://developer.apple.com/documentation/usdkit/usdprim/spec/init(_:)-7yaap)

# init(\_:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Widens a `USDPrim.PseudoRootSpec` into a generic `USDPrim.Spec`, exposing the full prim-spec API (children, properties, metadata).

## Declaration

```swift
init(_ pseudoRoot: USDPrim.PseudoRootSpec)
```

## Parameters

- `pseudoRoot`: The pseudo-root spec to widen.
