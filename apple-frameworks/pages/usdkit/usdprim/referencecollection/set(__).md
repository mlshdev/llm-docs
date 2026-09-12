> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/referencecollection/set(_:)](https://developer.apple.com/documentation/usdkit/usdprim/referencecollection/set(_:))

# set(\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Replaces all reference arcs with the specified list.

## Declaration

```swift
func set(_ references: [USDPrim.Reference]) throws
```

## Parameters

- `references`: The new list of references.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the references cannot be set.
