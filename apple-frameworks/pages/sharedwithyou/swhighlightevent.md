> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swhighlightevent](https://developer.apple.com/documentation/sharedwithyou/swhighlightevent)

# SWHighlightEvent (Swift)

**Framework:** Shared with You  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A protocol that defines an activity that the system posts in response to a user action for a highlight.

## Declaration

```swift
protocol SWHighlightEvent : NSCopying, NSSecureCoding, NSObjectProtocol
```

## Mentioned In

- [Adding shared content collaboration to your app](adding-shared-content-collaboration-to-your-app.md)

## Topics

### Accessing the URL

- [highlightURL](swhighlightevent/highlighturl.md)

## Relationships

### Inherits From

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

### Conforming Types

- [SWHighlightChangeEvent](swhighlightchangeevent.md)
- [SWHighlightMembershipEvent](swhighlightmembershipevent.md)
- [SWHighlightMentionEvent](swhighlightmentionevent.md)
- [SWHighlightPersistenceEvent](swhighlightpersistenceevent.md)

## See Also

### Highlight events

- [SWHighlightChangeEvent](swhighlightchangeevent.md): An object that represents change activity for a highlight.
- [SWHighlightMembershipEvent](swhighlightmembershipevent.md): An object that represents membership activity for a highlight.
- [SWHighlightMentionEvent](swhighlightmentionevent.md): An object that represents mention activity for a highlight.
- [SWHighlightPersistenceEvent](swhighlightpersistenceevent.md): An object that represents persistence activity for a highlight.

# SWHighlightEvent (Objective-C)

**Framework:** Shared with You  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A protocol that defines an activity that the system posts in response to a user action for a highlight.

## Declaration

```objectivec
@protocol SWHighlightEvent <NSObject, NSSecureCoding, NSCopying>
```

## Mentioned In

- [Adding shared content collaboration to your app](adding-shared-content-collaboration-to-your-app.md)

## Topics

### Accessing the URL

- [highlightURL](swhighlightevent/highlighturl.md)

## Relationships

### Inherits From

- [NSCopying](../foundation/nscopying.md)
- [NSObject](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

### Conforming Types

- [SWHighlightChangeEvent](swhighlightchangeevent.md)
- [SWHighlightMembershipEvent](swhighlightmembershipevent.md)
- [SWHighlightMentionEvent](swhighlightmentionevent.md)
- [SWHighlightPersistenceEvent](swhighlightpersistenceevent.md)

## See Also

### Highlight events

- [SWHighlightChangeEvent](swhighlightchangeevent.md): An object that represents change activity for a highlight.
- [SWHighlightMembershipEvent](swhighlightmembershipevent.md): An object that represents membership activity for a highlight.
- [SWHighlightMentionEvent](swhighlightmentionevent.md): An object that represents mention activity for a highlight.
- [SWHighlightPersistenceEvent](swhighlightpersistenceevent.md): An object that represents persistence activity for a highlight.
