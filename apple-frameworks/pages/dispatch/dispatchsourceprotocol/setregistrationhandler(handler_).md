> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsourceprotocol/setregistrationhandler(handler:)](https://developer.apple.com/documentation/dispatch/dispatchsourceprotocol/setregistrationhandler(handler:))

# setRegistrationHandler(handler:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS · visionOS · watchOS

Sets the registration handler work item for the dispatch source.

## Declaration

```swift
func setRegistrationHandler(handler: DispatchWorkItem)
```

## Parameters

- `handler`: The event handler block to submit to the source’s target queue.

<a id="Discussion"></a>

## Discussion

The registration handler (if specified) is submitted to the source’s target queue as soon as the source has been fully set up and is ready to start delivering events. The set up of a dispatch source’s underlying event-delivery mechanism occurs asynchronously.

Installing a registration handler is a way to be notified when that set up is complete and the dispatch source is ready to start delivering events. After your operation handler is executed, the dispatch source uninstalls it. As such, registration handlers are executed only once after you resume the dispatch source. If you set a registration handler on a dispatch source that is already set-up and running, the handler is invoked immediately.

## See Also

### Installing Event Handlers

- [setEventHandler(handler:)](seteventhandler%28handler_%29.md): Sets the event handler work item for the dispatch source.
- [setEventHandler(qos:flags:handler:)](seteventhandler%28qos_flags_handler_%29.md)
- [setRegistrationHandler(qos:flags:handler:)](setregistrationhandler%28qos_flags_handler_%29.md)
- [DispatchSourceProtocol.DispatchSourceHandler](dispatchsourcehandler.md)
