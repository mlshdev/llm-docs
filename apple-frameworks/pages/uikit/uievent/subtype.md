> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uievent/subtype

# subtype (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the subtype of the event.

## Declaration

```swift
var subtype: UIEvent.EventSubtype { get }
```

<a id="Discussion"></a>

## Discussion

The [UIEvent.EventSubtype](eventsubtype.md) constant returned by this property indicates the subtype of the event in relation to the general type, which you can retrieve from the [type](type.md) property.

## See Also

### Getting the event type

- [type](type.md): Returns the type of the event.
- [UIEvent.EventType](eventtype.md): Constants that specify the general type of an event.
- [UIEvent.EventSubtype](eventsubtype.md): Constants that specify the subtype of the event in relation to its general type.

# subtype (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the subtype of the event.

## Declaration

```objectivec
@property (nonatomic, readonly) UIEventSubtype subtype;
```

<a id="Discussion"></a>

## Discussion

The [UIEventSubtype](eventsubtype.md) constant returned by this property indicates the subtype of the event in relation to the general type, which you can retrieve from the [type](type.md) property.

## See Also

### Getting the event type

- [type](type.md): Returns the type of the event.
- [UIEventType](eventtype.md): Constants that specify the general type of an event.
- [UIEventSubtype](eventsubtype.md): Constants that specify the subtype of the event in relation to its general type.
