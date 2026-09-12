> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swhighlightcenter/postnotice(for:)](https://developer.apple.com/documentation/sharedwithyou/swhighlightcenter/postnotice(for:))

# postNotice(for:) (Swift)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Posts a specified event to the highlight center for display.

## Declaration

```swift
func postNotice(for event: any SWHighlightEvent)
```

## Parameters

- `event`: The [SWHighlightEvent](../swhighlightevent.md) to add.

## See Also

### Posting highlight events

- [clearNotices(for:)](clearnotices%28for_%29.md): Clears the notices for a specified collaboration highlight.

# postNoticeForHighlightEvent: (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Posts a specified event to the highlight center for display.

## Declaration

```objectivec
- (void) postNoticeForHighlightEvent:(id<SWHighlightEvent>) event;
```

## Parameters

- `event`: The [SWHighlightEvent](../swhighlightevent.md) to add.

## See Also

### Posting highlight events

- [clearNoticesForHighlight:](clearnotices%28for_%29.md): Clears the notices for a specified collaboration highlight.
