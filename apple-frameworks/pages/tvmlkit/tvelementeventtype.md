> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvelementeventtype](https://developer.apple.com/documentation/tvmlkit/tvelementeventtype)

# TVElementEventType (Swift)

**Framework:** TVMLKit  
**Kind:** Enumeration  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

The type of event that has been dispatched.

> Please use SwiftUI or UIKit

## Declaration

```swift
enum TVElementEventType
```

## Topics

### Enumeration Cases

- [TVElementEventType.change](tvelementeventtype/change.md): Deprecated. A change event has been dispatched.
- [TVElementEventType.highlight](tvelementeventtype/highlight.md): Deprecated. A highlight event has been dispatched.
- [TVElementEventType.holdSelect](tvelementeventtype/holdselect.md): Deprecated. A hold event has been dispatched.
- [TVElementEventType.play](tvelementeventtype/play.md): Deprecated. A play event has been dispatched.
- [TVElementEventType.select](tvelementeventtype/select.md): Deprecated. A select event has been dispatched.

### Initializers

- [init(rawValue:)](tvelementeventtype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Dispatching Events

- [dispatchEvent(type:canBubble:cancellable:extraInfo:completion:)](tvviewelement/dispatchevent%28type_canbubble_cancellable_extrainfo_completion_%29.md): Deprecated. Dispatches an event of a specific type to the JavaScript file.
- [dispatchEvent(name:canBubble:cancellable:extraInfo:completion:)](tvviewelement/dispatchevent%28name_canbubble_cancellable_extrainfo_completion_%29.md): Deprecated. Dispatches a custom-named event.

# TVElementEventType (Objective-C)

**Framework:** TVMLKit  
**Kind:** Enumeration  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

The type of event that has been dispatched.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
enum TVElementEventType : NSInteger;
```

## Topics

### Enumeration Cases

- [TVElementEventTypeChange](tvelementeventtype/change.md): Deprecated. A change event has been dispatched.
- [TVElementEventTypeHighlight](tvelementeventtype/highlight.md): Deprecated. A highlight event has been dispatched.
- [TVElementEventTypeHoldSelect](tvelementeventtype/holdselect.md): Deprecated. A hold event has been dispatched.
- [TVElementEventTypePlay](tvelementeventtype/play.md): Deprecated. A play event has been dispatched.
- [TVElementEventTypeSelect](tvelementeventtype/select.md): Deprecated. A select event has been dispatched.

## See Also

### Dispatching Events

- [dispatchEventOfType:canBubble:cancellable:extraInfo:completion:](tvviewelement/dispatchevent%28type_canbubble_cancellable_extrainfo_completion_%29.md): Deprecated. Dispatches an event of a specific type to the JavaScript file.
- [dispatchEventWithName:canBubble:cancellable:extraInfo:completion:](tvviewelement/dispatchevent%28name_canbubble_cancellable_extrainfo_completion_%29.md): Deprecated. Dispatches a custom-named event.
