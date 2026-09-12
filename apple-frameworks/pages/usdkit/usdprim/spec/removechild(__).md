> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/spec/removechild(_:)](https://developer.apple.com/documentation/usdkit/usdprim/spec/removechild(_:))

# removeChild(\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Removes `child` from the children list. No-op if `child` is not a child of this spec.

## Declaration

```swift
func removeChild(_ child: USDPrim.Spec)
```

## Parameters

- `child`: The child prim spec to remove.
