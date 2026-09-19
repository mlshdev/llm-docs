> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/spec/childrenorder

# childrenOrder

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The authored override for child ordering, or `nil` if no order is authored. When non-nil, this list controls the order in which child prim specs appear during composition.

## Declaration

```swift
var childrenOrder: [USDToken]? { get nonmutating set }
```
