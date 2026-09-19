> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/referencecollection/add(_:position:)

# add(\_:position:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Adds an existing reference arc to the prim.

## Declaration

```swift
func add(_ reference: USDPrim.Reference, position: USDPrim.ListPosition = .backOfPrependList) throws
```

## Parameters

- `reference`: The reference to add.
- `position`: Where to insert the reference in the prim’s reference list.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the reference cannot be added.
