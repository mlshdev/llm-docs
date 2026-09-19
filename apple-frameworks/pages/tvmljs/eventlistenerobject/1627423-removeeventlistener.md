> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvmljs/eventlistenerobject/1627423-removeeventlistener

# removeEventListener

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Removes the designated event listener.

## Declaration

```
void removeEventListener(
    in String type, 
    in Object listener
);
```

## Parameters

- `type`: The developer defined name of the event type to remove.
- `listener`: The listener object to be removed. This object is typically a function.

## See Also

### Adding and Removing Event Listeners

- [addEventListener](1627408-addeventlistener.md): Creates an event listener.
