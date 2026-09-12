> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/variantspec/variantnames(_:)](https://developer.apple.com/documentation/usdkit/usdprim/variantspec/variantnames(_:))

# variantNames(\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the variant names available in a nested variant set on this variant.

## Declaration

```swift
func variantNames(_ variantSetName: USDToken) -> [USDToken]
```

## Parameters

- `variantSetName`: The nested variant set name.

<a id="return-value"></a>

## Return Value

The variant names defined in `variantSetName`.
