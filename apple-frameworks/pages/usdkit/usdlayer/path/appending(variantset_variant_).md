> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/path/appending(variantset:variant:)](https://developer.apple.com/documentation/usdkit/usdlayer/path/appending(variantset:variant:))

# appending(variantSet:variant:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a new path with a variant selection appended.

## Declaration

```swift
func appending(variantSet: USDToken, variant: USDToken) -> USDLayer.Path
```

## Parameters

- `variantSet`: The variant set name.
- `variant`: The selected variant name.

<a id="return-value"></a>

## Return Value

A new path with the variant selection appended.
