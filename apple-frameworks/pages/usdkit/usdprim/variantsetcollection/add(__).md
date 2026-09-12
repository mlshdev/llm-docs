> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/variantsetcollection/add(_:)](https://developer.apple.com/documentation/usdkit/usdprim/variantsetcollection/add(_:))

# add(\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Adds a new variant set to the prim.

## Declaration

```swift
@discardableResult func add(_ variantSetName: String) throws -> USDPrim.VariantSet
```

## Parameters

- `variantSetName`: The name of the variant set to add.

<a id="return-value"></a>

## Return Value

The newly added variant set.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the variant set cannot be added.
