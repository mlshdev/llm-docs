> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swhighlightmentionevent](https://developer.apple.com/documentation/sharedwithyou/swhighlightmentionevent)

# SWHighlightMentionEvent (Swift)

**Framework:** Shared with You  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that represents mention activity for a highlight.

## Declaration

```swift
class SWHighlightMentionEvent
```

## Mentioned In

- [Adding custom collaboration to your app](adding-custom-collaboration-to-your-app.md)

## Topics

### Creating a mention event

- [init(highlight:mentionedPersonCloudKitShareHandle:)](swhighlightmentionevent/init%28highlight_mentionedpersoncloudkitsharehandle_%29.md): Creates and initializes a mention event.
- [init(highlight:mentionedPersonIdentity:)](swhighlightmentionevent/init%28highlight_mentionedpersonidentity_%29.md): Creates and initializes a mention event.

### Accessing the event person

- [mentionedPersonHandle](swhighlightmentionevent/mentionedpersonhandle.md): The handle of the person the sender mentions.

### Initializers

- [init(coder:)](swhighlightmentionevent/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SWHighlightEvent](swhighlightevent.md)

## See Also

### Highlight events

- [SWHighlightEvent](swhighlightevent.md): A protocol that defines an activity that the system posts in response to a user action for a highlight.
- [SWHighlightChangeEvent](swhighlightchangeevent.md): An object that represents change activity for a highlight.
- [SWHighlightMembershipEvent](swhighlightmembershipevent.md): An object that represents membership activity for a highlight.
- [SWHighlightPersistenceEvent](swhighlightpersistenceevent.md): An object that represents persistence activity for a highlight.

# SWHighlightMentionEvent (Objective-C)

**Framework:** Shared with You  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that represents mention activity for a highlight.

## Declaration

```objectivec
@interface SWHighlightMentionEvent : NSObject
```

## Mentioned In

- [Adding custom collaboration to your app](adding-custom-collaboration-to-your-app.md)

## Topics

### Creating a mention event

- [initWithHighlight:mentionedPersonCloudKitShareHandle:](swhighlightmentionevent/init%28highlight_mentionedpersoncloudkitsharehandle_%29.md): Creates and initializes a mention event.
- [initWithHighlight:mentionedPersonIdentity:](swhighlightmentionevent/init%28highlight_mentionedpersonidentity_%29.md): Creates and initializes a mention event.

### Accessing the event person

- [mentionedPersonHandle](swhighlightmentionevent/mentionedpersonhandle.md): The handle of the person the sender mentions.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [SWHighlightEvent](swhighlightevent.md)

## See Also

### Highlight events

- [SWHighlightEvent](swhighlightevent.md): A protocol that defines an activity that the system posts in response to a user action for a highlight.
- [SWHighlightChangeEvent](swhighlightchangeevent.md): An object that represents change activity for a highlight.
- [SWHighlightMembershipEvent](swhighlightmembershipevent.md): An object that represents membership activity for a highlight.
- [SWHighlightPersistenceEvent](swhighlightpersistenceevent.md): An object that represents persistence activity for a highlight.
