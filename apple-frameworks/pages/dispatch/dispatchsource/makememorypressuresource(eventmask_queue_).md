> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsource/makememorypressuresource(eventmask:queue:)](https://developer.apple.com/documentation/dispatch/dispatchsource/makememorypressuresource(eventmask:queue:))

# makeMemoryPressureSource(eventMask:queue:)

**Framework:** Dispatch  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new dispatch source object that monitors the system for changes in the memory pressure condition.

## Declaration

```swift
class func makeMemoryPressureSource(eventMask: DispatchSource.MemoryPressureEvent, queue: DispatchQueue? = nil) -> any DispatchSourceMemoryPressure
```

## Parameters

- `eventMask`: The set of events you want to monitor. For a list of possible values, see [DispatchSource.MemoryPressureEvent](memorypressureevent.md).
- `queue`: The dispatch queue to use when executing the installed handlers.

<a id="return-value"></a>

## Return Value

A dispatch source object that conforms to the [DispatchSourceMemoryPressure](../dispatchsourcememorypressure.md) protocol.

<a id="Discussion"></a>

## Discussion

After creating the dispatch source, use the methods of the [DispatchSourceProtocol](../dispatchsourceprotocol.md) protocol to install the event handlers you need. The returned dispatch source is in the inactive state initially. When you are ready to begin processing events, call its [activate()](../dispatchobject/activate%28%29.md) method.

## See Also

### Creating a Memory Pressure Source

- [DispatchSourceMemoryPressure](../dispatchsourcememorypressure.md): A dispatch source that monitors the system for changes in the memory pressure condition.
- [DispatchSource.MemoryPressureEvent](memorypressureevent.md): Memory pressure events.
