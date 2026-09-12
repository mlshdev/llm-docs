> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapkitevent](https://developer.apple.com/documentation/mapkitjs/mapkitevent)

# MapKitEvent

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.0+ (deprecated in 6.0)

A generic MapKit JS event object.

> Removed in MapKit JS 6.0.0. Use standard `Event` instead.

## Declaration

```
class MapKitEvent
```

<a id="Discussion"></a>

## Discussion

The event object implements similar interfaces as the DOM `Event`, but you shouldn’t mix them.

## Topics

### Instance Properties

- [defaultPrevented](mapkitevent/defaultprevented.md): Deprecated. A Boolean value that indicates whether the app canceled the event.
- [target](mapkitevent/target.md): Deprecated. The object that dispatched the event.
- [type](mapkitevent/type.md): Deprecated. A string that represents the type of the event.

### Instance Methods

- [preventDefault()](mapkitevent/preventdefault.md): Deprecated. Cancels the event if it’s cancelable, without stopping further propagation of the event.
- [stopPropagation()](mapkitevent/stoppropagation.md): Deprecated. Stops further propagation of the event.

## See Also

### Deprecated

- [MapKitEventListener](mapkiteventlistener.md): Deprecated. A type alias that represents a function or an object that receives a MapKit event.
- [MapKitEventTarget](mapkiteventtarget.md): Deprecated. An abstract class that defines the interface for objects that can dispatch events.
