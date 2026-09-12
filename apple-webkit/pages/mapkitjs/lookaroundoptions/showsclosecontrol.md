> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/lookaroundoptions/showsclosecontrol](https://developer.apple.com/documentation/mapkitjs/lookaroundoptions/showsclosecontrol)

# showsCloseControl

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.79+

A Boolean value that indicates whether the Look Around view displays a close control.

## Declaration

```
showsCloseControl?: boolean;
```

<a id="Discussion"></a>

## Discussion

When the user interacts with the close control, a `close` event dispatches. To handle the `close` event, cancel the event and invoke appropriate actions for your application to close the view. If the event is not cancelled, Look Around view will remove itself from the DOM.
