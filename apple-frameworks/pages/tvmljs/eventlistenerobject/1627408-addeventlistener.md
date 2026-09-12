> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/eventlistenerobject/1627408-addeventlistener](https://developer.apple.com/documentation/tvmljs/eventlistenerobject/1627408-addeventlistener)

# addEventListener

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Creates an event listener.

## Declaration

```
void addEventListener(
    in String type, 
    in Object listener, 
    in optional Object extraInfo
);
```

## Parameters

- `type`: The developer-defined name of the event type to add.
- `listener`: The listener object to be added. This object is typically a function.
- `extraInfo`: Optional parameter that is used to handle specific types of events. Different events have different formats.

<a id="discussion"></a>

## Discussion

Use the `extraInfo` parameter to handle information for different types of events; for example, specifying the type of metadata a metadata listener is listening for.

## See Also

### Adding and Removing Event Listeners

- [removeEventListener](1627423-removeeventlistener.md): Removes the designated event listener.
