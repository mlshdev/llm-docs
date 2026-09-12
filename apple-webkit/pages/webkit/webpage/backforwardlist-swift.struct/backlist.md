> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/backforwardlist-swift.struct/backlist](https://developer.apple.com/documentation/webkit/webpage/backforwardlist-swift.struct/backlist)

# backList

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The array of items that precede the current item.

## Declaration

```swift
@MainActor var backList: [WebPage.BackForwardList.Item] { get }
```

<a id="discussion"></a>

## Discussion

The items are in the order in which the page originally visited them.
