> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/sf_notify_func

# sf_notify_func

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

## Declaration

```objectivec
typedef void (*sf_notify_func)(void *cookie, socket_t so, sflt_event_t event, void *param);
```

## Parameters

- `cookie`: Cookie value specified when the filter attach was called.
- `so`: The socket the filter is attached to.
- `event`: The type of event that has occurred.
- `param`: Additional information about the event.

<a id="discussion"></a>

## Discussion

sf_notify_func is called to notify the filter of various state changes and other events occuring on the socket.
