> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uievent/eventtype](https://developer.apple.com/documentation/uikit/uievent/eventtype)

# UIEvent.EventType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that specify the general type of an event.

## Declaration

```swift
enum EventType
```

<a id="overview"></a>

## Overview

You can obtain the type of an event from the [type](type.md) property. To further identify the event, you might also need to determine its subtype, which you obtain from the [subtype](subtype.md) property.

## Topics

### Constants

- [UIEvent.EventType.touches](eventtype/touches.md): The event relates to touches on the screen.
- [UIEvent.EventType.motion](eventtype/motion.md): The event relates to motion of the device, such as when a person shakes it.
- [UIEvent.EventType.remoteControl](eventtype/remotecontrol.md): The event is a remote-control event.
- [UIEvent.EventType.presses](eventtype/presses.md): The event relates to the press of a physical button.
- [UIEvent.EventType.scroll](eventtype/scroll.md): The event relates to scrolling from an indirect input device.
- [UIEvent.EventType.hover](eventtype/hover.md): The event relates to a pointer from an indirect input device moving over a user interface element.
- [UIEvent.EventType.transform](eventtype/transform.md): The event relates to a pointer from an indirect input device performing a transformation on a user interface element, such as scaling, rotation, or translation.

### Initializers

- [init(rawValue:)](eventtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the event type

- [type](type.md): Returns the type of the event.
- [subtype](subtype.md): Returns the subtype of the event.
- [UIEvent.EventSubtype](eventsubtype.md): Constants that specify the subtype of the event in relation to its general type.

# UIEventType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that specify the general type of an event.

## Declaration

```objectivec
enum UIEventType : NSInteger;
```

<a id="overview"></a>

## Overview

You can obtain the type of an event from the [type](type.md) property. To further identify the event, you might also need to determine its subtype, which you obtain from the [subtype](subtype.md) property.

## Topics

### Constants

- [UIEventTypeTouches](eventtype/touches.md): The event relates to touches on the screen.
- [UIEventTypeMotion](eventtype/motion.md): The event relates to motion of the device, such as when a person shakes it.
- [UIEventTypeRemoteControl](eventtype/remotecontrol.md): The event is a remote-control event.
- [UIEventTypePresses](eventtype/presses.md): The event relates to the press of a physical button.
- [UIEventTypeScroll](eventtype/scroll.md): The event relates to scrolling from an indirect input device.
- [UIEventTypeHover](eventtype/hover.md): The event relates to a pointer from an indirect input device moving over a user interface element.
- [UIEventTypeTransform](eventtype/transform.md): The event relates to a pointer from an indirect input device performing a transformation on a user interface element, such as scaling, rotation, or translation.

## See Also

### Getting the event type

- [type](type.md): Returns the type of the event.
- [subtype](subtype.md): Returns the subtype of the event.
- [UIEventSubtype](eventsubtype.md): Constants that specify the subtype of the event in relation to its general type.
