> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapkitevent/stoppropagation](https://developer.apple.com/documentation/mapkitjs/mapkitevent/stoppropagation)

# stopPropagation()

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Method  
**Availability:** MapKit JS 5.0+ (deprecated in 6.0)

Stops further propagation of the event.

> Removed in MapKit JS 6.0.0. Use standard `Event` instead.

## Declaration

```
stopPropagation(): void;
```

<a id="Discussion"></a>

## Discussion

Unlike a DOM `Event`, a [MapKitEvent](../mapkitevent.md) doesn’t go through bubbling or capturing phases. When the propagation stops, the system doesn’t dispatch the event to any event listeners that the framework hasn’t called yet.
