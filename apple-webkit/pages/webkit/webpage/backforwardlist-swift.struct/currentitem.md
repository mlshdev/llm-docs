> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/backforwardlist-swift.struct/currentitem](https://developer.apple.com/documentation/webkit/webpage/backforwardlist-swift.struct/currentitem)

# currentItem

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The current item.

## Declaration

```swift
@MainActor var currentItem: WebPage.BackForwardList.Item? { get }
```

<a id="discussion"></a>

## Discussion

When the webpage has not loaded any resources, this value will be `nil`.
