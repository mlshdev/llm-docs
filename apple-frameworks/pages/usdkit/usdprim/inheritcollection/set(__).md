> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/inheritcollection/set(_:)](https://developer.apple.com/documentation/usdkit/usdprim/inheritcollection/set(_:))

# set(\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Replaces all inherit arcs with the specified list.

## Declaration

```swift
func set(_ primPaths: [USDLayer.Path]) throws
```

## Parameters

- `primPaths`: The new list of inherit paths.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the inherits cannot be set.
