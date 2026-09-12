> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapevent/domevents](https://developer.apple.com/documentation/mapkitjs/mapevent/domevents)

# domEvents

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.18+

An array of DOM event objects that list the low-level events that led to the recognized gesture.

## Declaration

```
readonly domEvents: Event[];
```

<a id="Discussion"></a>

## Discussion

You can inspect these event objects and tailor the code to react according to additional low-level events, such as modifier keys for the events.
