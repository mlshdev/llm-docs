> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapkiteventtarget/removeeventlistener](https://developer.apple.com/documentation/mapkitjs/mapkiteventtarget/removeeventlistener)

# removeEventListener(eventType, listener, thisObject)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+ (deprecated in 6.0)

Unsubscribes a listener function from an event type.

> Removed in MapKit JS 6.0.0. Use standard `EventTarget` instead.

## Declaration

```
removeEventListener(
        eventType?: string,
        listener?: MapKitEventListener,
        thisObject?: object | null,
    ): boolean;
```

## Parameters

- `type`: The type of event, for example, a `"configuration-change"`.
- `listener`: The callback function to remove. Not setting this parameter removes all listeners of the specified type.
- `thisObject`: An object MapKit JS sets as the `this` keyword on the `listener` function.

<a id="Discussion"></a>

## Discussion

Unlike a DOM `EventTarget`, a [MapKitEventTarget](../mapkiteventtarget.md) doesn’t go through bubbling or capturing phases. The system also interprets the second and the third parameters differently from the DOM’s `EventTarget`.
