> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapkiteventtarget](https://developer.apple.com/documentation/mapkitjs/mapkiteventtarget)

# MapKitEventTarget

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+ (deprecated in 6.0)

An abstract class that defines the interface for objects that can dispatch events.

> Removed in MapKit JS 6.0.0. Use standard `EventTarget` instead.

## Declaration

```
class MapKitEventTarget
```

## Mentioned In

- [MapKit JS 6](mapkit-js-6.md)
- [Migrating from Version 5 to Version 6](migrating-from-version-5-to-version-6.md)

<a id="Discussion"></a>

## Discussion

[MapKitEventTarget](mapkiteventtarget.md) is the base class for all objects that can dispatch events. [MapKitEventTarget](mapkiteventtarget.md) offers an interface that’s similar to the DOM `EventTarget` interface, but with different semantics. Don’t mix them.

## Topics

### Instance Methods

- [addEventListener()](mapkiteventtarget/addeventlistener.md): Deprecated. Subscribes a listener function to an event type.
- [dispatchEvent()](mapkiteventtarget/dispatchevent.md): Deprecated. Dispatches an event to registered listeners.
- [removeEventListener()](mapkiteventtarget/removeeventlistener.md): Deprecated. Unsubscribes a listener function from an event type.

## See Also

### Deprecated

- [MapKitEvent](mapkitevent.md): Deprecated. A generic MapKit JS event object.
- [MapKitEventListener](mapkiteventlistener.md): Deprecated. A type alias that represents a function or an object that receives a MapKit event.
