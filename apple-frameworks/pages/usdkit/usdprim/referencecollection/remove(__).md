> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/referencecollection/remove(_:)](https://developer.apple.com/documentation/usdkit/usdprim/referencecollection/remove(_:))

# remove(\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Removes a specific reference arc from the prim.

## Declaration

```swift
func remove(_ reference: USDPrim.Reference) throws
```

## Parameters

- `reference`: The reference to remove.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the reference cannot be removed.
