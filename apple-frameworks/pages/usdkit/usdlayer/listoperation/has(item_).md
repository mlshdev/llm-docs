> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdlayer/listoperation/has(item:)

# has(item:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a Boolean value that indicates whether `item` appears in any slot of this operation.

## Declaration

```swift
func has(item: T) -> Bool
```

## Parameters

- `item`: The item to look up.

<a id="return-value"></a>

## Return Value

`true` if `item` appears in any slot; otherwise, `false`.
