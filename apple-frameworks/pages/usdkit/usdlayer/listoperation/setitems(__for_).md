> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/listoperation/setitems(_:for:)](https://developer.apple.com/documentation/usdkit/usdlayer/listoperation/setitems(_:for:))

# setItems(\_:for:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the items in the given operation’s slot.

## Declaration

```swift
mutating func setItems(_ items: [T], for operation: USDLayer.ListOperationType) throws
```

## Parameters

- `items`: The new items.
- `operation`: The slot to update.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if any item fails validation.
