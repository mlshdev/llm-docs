> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapkiteventlistener](https://developer.apple.com/documentation/mapkitjs/mapkiteventlistener)

# MapKitEventListener

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Type  
**Availability:** MapKit JS 5.0+ (deprecated in 6.0)

A type alias that represents a function or an object that receives a MapKit event.

> Removed in MapKit JS 6.0.0. Use standard `EventListenerOrEventListenerObject` instead.

## Declaration

```
type MapKitEventListener<T extends MapKitEvent = MapKitEvent> =
    | ((event: T) => void)
    | {
          handleEvent(event: T): void;
      };
```

<a id="Discussion"></a>

## Discussion

You can specify the event listener as either a function or an object with a `handleEvent` method.

## See Also

### Deprecated

- [MapKitEvent](mapkitevent.md): Deprecated. A generic MapKit JS event object.
- [MapKitEventTarget](mapkiteventtarget.md): Deprecated. An abstract class that defines the interface for objects that can dispatch events.
