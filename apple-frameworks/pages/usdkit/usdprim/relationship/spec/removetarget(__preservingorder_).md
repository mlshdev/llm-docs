> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/relationship/spec/removetarget(_:preservingorder:)](https://developer.apple.com/documentation/usdkit/usdprim/relationship/spec/removetarget(_:preservingorder:))

# removeTarget(\_:preservingOrder:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Removes an authored target path.

## Declaration

```swift
func removeTarget(_ path: USDLayer.Path, preservingOrder: Bool = false)
```

## Parameters

- `path`: The target path to remove.
- `preservingOrder`: Pass `true` to keep the relative ordering of remaining targets stable.
