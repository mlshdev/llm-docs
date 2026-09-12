> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/spec/insertchild(_:at:)](https://developer.apple.com/documentation/usdkit/usdprim/spec/insertchild(_:at:))

# insertChild(\_:at:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Inserts `child` into the children list at `index`.

## Declaration

```swift
func insertChild(_ child: USDPrim.Spec, at index: Int)
```

## Parameters

- `child`: The child prim spec to insert.
- `index`: The position at which to insert. Traps on out-of-range index.
