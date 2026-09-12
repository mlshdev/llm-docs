> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsource/makeprocesssource(identifier:eventmask:queue:)](https://developer.apple.com/documentation/dispatch/dispatchsource/makeprocesssource(identifier:eventmask:queue:))

# makeProcessSource(identifier:eventMask:queue:)

**Framework:** Dispatch  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new dispatch source object for monitoring the specified process.

## Declaration

```swift
class func makeProcessSource(identifier: pid_t, eventMask: DispatchSource.ProcessEvent, queue: DispatchQueue? = nil) -> any DispatchSourceProcess
```

## Parameters

- `identifier`: The process identifier of the process you want to monitor.
- `eventMask`: The set of events you want to monitor. For a list of possible values, see [DispatchSource.ProcessEvent](processevent.md).
- `queue`: The dispatch queue to use when executing the installed handlers.

<a id="return-value"></a>

## Return Value

A dispatch source object that conforms to the [DispatchSourceProcess](../dispatchsourceprocess.md) protocol.

<a id="Discussion"></a>

## Discussion

After creating the dispatch source, use the methods of the [DispatchSourceProtocol](../dispatchsourceprotocol.md) protocol to install the event handlers you need. The returned dispatch source is in the inactive state initially. When you are ready to begin processing events, call its [activate()](../dispatchobject/activate%28%29.md) method.

## See Also

### Creating a Process Source

- [DispatchSourceProcess](../dispatchsourceprocess.md): A dispatch source that monitors an external process for events.
- [DispatchSource.ProcessEvent](processevent.md): Events related to a process.
