> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/specializecollection/add(_:position:)](https://developer.apple.com/documentation/usdkit/usdprim/specializecollection/add(_:position:))

# add(\_:position:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Adds a specializes arc to the prim.

## Declaration

```swift
func add(_ primPath: USDLayer.Path, position: USDPrim.ListPosition = .backOfPrependList) throws
```

## Parameters

- `primPath`: The path of the prim to specialize.
- `position`: Where to insert the specializes in the prim’s specializes list.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the specializes cannot be added.
