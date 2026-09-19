> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uievent/type

# type (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the type of the event.

## Declaration

```swift
var type: UIEvent.EventType { get }
```

<a id="Discussion"></a>

## Discussion

The [UIEvent.EventType](eventtype.md) constant returned by this property indicates the general type of this event — for example, whether it’s a touch or motion event.

## See Also

### Getting the event type

- [UIEvent.EventType](eventtype.md): Constants that specify the general type of an event.
- [subtype](subtype.md): Returns the subtype of the event.
- [UIEvent.EventSubtype](eventsubtype.md): Constants that specify the subtype of the event in relation to its general type.

# type (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the type of the event.

## Declaration

```objectivec
@property (nonatomic, readonly) UIEventType type;
```

<a id="Discussion"></a>

## Discussion

The [UIEventType](eventtype.md) constant returned by this property indicates the general type of this event — for example, whether it’s a touch or motion event.

## See Also

### Getting the event type

- [UIEventType](eventtype.md): Constants that specify the general type of an event.
- [subtype](subtype.md): Returns the subtype of the event.
- [UIEventSubtype](eventsubtype.md): Constants that specify the subtype of the event in relation to its general type.
