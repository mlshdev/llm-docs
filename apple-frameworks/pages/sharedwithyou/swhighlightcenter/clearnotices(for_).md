> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swhighlightcenter/clearnotices(for:)](https://developer.apple.com/documentation/sharedwithyou/swhighlightcenter/clearnotices(for:))

# clearNotices(for:) (Swift)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · visionOS 1.0+

Clears the notices for a specified collaboration highlight.

## Declaration

```swift
func clearNotices(for highlight: SWCollaborationHighlight)
```

## Parameters

- `highlight`: The [SWHighlightEvent](../swhighlightevent.md) that contains the notices.

## See Also

### Posting highlight events

- [postNotice(for:)](postnotice%28for_%29.md): Posts a specified event to the highlight center for display.

# clearNoticesForHighlight: (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · visionOS 1.0+

Clears the notices for a specified collaboration highlight.

## Declaration

```objectivec
- (void) clearNoticesForHighlight:(SWCollaborationHighlight *) highlight;
```

## Parameters

- `highlight`: The [SWHighlightEvent](../swhighlightevent.md) that contains the notices.

## See Also

### Posting highlight events

- [postNoticeForHighlightEvent:](postnotice%28for_%29.md): Posts a specified event to the highlight center for display.
