> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitem/updatelisteneroptions-swift.struct/priority](https://developer.apple.com/documentation/corespotlight/cssearchableitem/updatelisteneroptions-swift.struct/priority)

# priority (Swift)

**Framework:** Core Spotlight  
**Kind:** Type Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An option to classify the priority of SMS message content. Specify this option only if your item contains messages.

## Declaration

```swift
static var priority: CSSearchableItem.UpdateListenerOptions { get }
```

## See Also

### Getting the listener options attributes

- [summarization](summarization.md): An option to summarize the contents of your searchable item. Specify this option only for items that contain emails, messages, or audio transcripts.

# CSSearchableItemUpdateListenerOptionPriority (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Enumeration Case  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

An option to classify the priority of SMS message content. Specify this option only if your item contains messages.

## Declaration

```objectivec
CSSearchableItemUpdateListenerOptionPriority
```

## See Also

### Getting the listener options attributes

- [CSSearchableItemUpdateListenerOptionSummarization](summarization.md): An option to summarize the contents of your searchable item. Specify this option only for items that contain emails, messages, or audio transcripts.
