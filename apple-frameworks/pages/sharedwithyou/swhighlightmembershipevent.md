> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swhighlightmembershipevent](https://developer.apple.com/documentation/sharedwithyou/swhighlightmembershipevent)

# SWHighlightMembershipEvent (Swift)

**Framework:** Shared with You  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that represents membership activity for a highlight.

## Declaration

```swift
class SWHighlightMembershipEvent
```

## Mentioned In

- [Adding shared content collaboration to your app](adding-shared-content-collaboration-to-your-app.md)

## Topics

### Creating a membership event

- [init(highlight:trigger:)](swhighlightmembershipevent/init%28highlight_trigger_%29.md): Creates and initializes a membership event.

### Accessing an event trigger

- [membershipEventTrigger](swhighlightmembershipevent/membershipeventtrigger.md): The type of membership event for the highlight.
- [SWHighlightMembershipEventTrigger](swhighlightmembershipeventtrigger.md): The type of membership event for the highlight.

### Initializers

- [init(coder:)](swhighlightmembershipevent/init%28coder_%29.md)

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
- [SWHighlightMentionEvent](swhighlightmentionevent.md): An object that represents mention activity for a highlight.
- [SWHighlightPersistenceEvent](swhighlightpersistenceevent.md): An object that represents persistence activity for a highlight.

# SWHighlightMembershipEvent (Objective-C)

**Framework:** Shared with You  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that represents membership activity for a highlight.

## Declaration

```objectivec
@interface SWHighlightMembershipEvent : NSObject
```

## Mentioned In

- [Adding shared content collaboration to your app](adding-shared-content-collaboration-to-your-app.md)

## Topics

### Creating a membership event

- [initWithHighlight:trigger:](swhighlightmembershipevent/init%28highlight_trigger_%29.md): Creates and initializes a membership event.

### Accessing an event trigger

- [membershipEventTrigger](swhighlightmembershipevent/membershipeventtrigger.md): The type of membership event for the highlight.
- [SWHighlightMembershipEventTrigger](swhighlightmembershipeventtrigger.md): The type of membership event for the highlight.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [SWHighlightEvent](swhighlightevent.md)

## See Also

### Highlight events

- [SWHighlightEvent](swhighlightevent.md): A protocol that defines an activity that the system posts in response to a user action for a highlight.
- [SWHighlightChangeEvent](swhighlightchangeevent.md): An object that represents change activity for a highlight.
- [SWHighlightMentionEvent](swhighlightmentionevent.md): An object that represents mention activity for a highlight.
- [SWHighlightPersistenceEvent](swhighlightpersistenceevent.md): An object that represents persistence activity for a highlight.
