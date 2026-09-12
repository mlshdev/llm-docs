> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/listoperation/items(for:)](https://developer.apple.com/documentation/usdkit/usdlayer/listoperation/items(for:))

# items(for:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the items in the given operation’s slot.

## Declaration

```swift
func items(for operation: USDLayer.ListOperationType) -> [T]
```

## Parameters

- `operation`: The slot to read.

<a id="return-value"></a>

## Return Value

The items authored in `operation`’s slot.
