> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsourceprotocol/seteventhandler(handler:)](https://developer.apple.com/documentation/dispatch/dispatchsourceprotocol/seteventhandler(handler:))

# setEventHandler(handler:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS · visionOS · watchOS

Sets the event handler work item for the dispatch source.

## Declaration

```swift
func setEventHandler(handler: DispatchWorkItem)
```

## Parameters

- `handler`: The event handler block to submit to the source’s target queue.

<a id="Discussion"></a>

## Discussion

The event handler (if specified) is submitted to the source’s target queue in response to the arrival of an event.

## See Also

### Installing Event Handlers

- [setEventHandler(qos:flags:handler:)](seteventhandler%28qos_flags_handler_%29.md)
- [setRegistrationHandler(handler:)](setregistrationhandler%28handler_%29.md): Sets the registration handler work item for the dispatch source.
- [setRegistrationHandler(qos:flags:handler:)](setregistrationhandler%28qos_flags_handler_%29.md)
- [DispatchSourceProtocol.DispatchSourceHandler](dispatchsourcehandler.md)
