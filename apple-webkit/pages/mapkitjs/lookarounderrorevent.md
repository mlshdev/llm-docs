> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/lookarounderrorevent](https://developer.apple.com/documentation/mapkitjs/lookarounderrorevent)

# LookAroundErrorEvent

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Type  
**Availability:** MapKit JS 5.79+

A custom event object that contains information about the error when starting a Look Around view.

## Declaration

```
type LookAroundErrorEvent = CustomEvent<{
    type: LookAroundErrorType;
    message: string;
}>;
```

<a id="Discussion"></a>

## Discussion

The event object describes the error with a [LookAroundErrorType](lookarounderrortype.md) value and a message.

## See Also

### Events and event properties

- [LookAroundErrorType](lookarounderrortype.md): Values that describes errors than can occur when starting a Look Around view.
