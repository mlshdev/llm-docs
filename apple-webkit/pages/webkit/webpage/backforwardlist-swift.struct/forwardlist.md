> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/backforwardlist-swift.struct/forwardlist](https://developer.apple.com/documentation/webkit/webpage/backforwardlist-swift.struct/forwardlist)

# forwardList

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The array of items that follow the current item.

## Declaration

```swift
@MainActor var forwardList: [WebPage.BackForwardList.Item] { get }
```

<a id="discussion"></a>

## Discussion

The items are in the order in which they were originally visited.
