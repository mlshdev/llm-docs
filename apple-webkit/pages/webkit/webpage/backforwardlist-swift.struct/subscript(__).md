> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/backforwardlist-swift.struct/subscript(_:)](https://developer.apple.com/documentation/webkit/webpage/backforwardlist-swift.struct/subscript(_:))

# subscript(\_:)

**Framework:** WebKit  
**Kind:** Instance Subscript  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Accesses the item at the relative offset from the current item.

## Declaration

```swift
@MainActor subscript(index: Int) -> WebPage.BackForwardList.Item? { get }
```

## Parameters

- `index`: The offset of the desired item from the current item. Specify `0` for the current item, `-1` for the immediately preceding item, `1` for the immediately following item, and so on.

<a id="return-value"></a>

## Return Value

The item at the specified offset from the current item, or `nil` if the index exceeds the limits of the list.
