> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/inheritcollection/add(_:position:)](https://developer.apple.com/documentation/usdkit/usdprim/inheritcollection/add(_:position:))

# add(\_:position:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Adds an inherit arc to the prim.

## Declaration

```swift
func add(_ primPath: USDLayer.Path, position: USDPrim.ListPosition = .backOfPrependList) throws
```

## Parameters

- `primPath`: The path of the prim to inherit from.
- `position`: Where to insert the inherit in the prim’s inherit list.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the inherit cannot be added.
