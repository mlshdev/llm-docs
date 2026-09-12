> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsource/makesignalsource(signal:queue:)](https://developer.apple.com/documentation/dispatch/dispatchsource/makesignalsource(signal:queue:))

# makeSignalSource(signal:queue:)

**Framework:** Dispatch  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new dispatch source object that monitors the arrival of a UNIX signal.

## Declaration

```swift
class func makeSignalSource(signal: Int32, queue: DispatchQueue? = nil) -> any DispatchSourceSignal
```

## Parameters

- `signal`: The Unix signal number to monitor.
- `queue`: The dispatch queue to use when executing the installed handlers.

<a id="return-value"></a>

## Return Value

A dispatch source object that conforms to the [DispatchSourceSignal](../dispatchsourcesignal.md) protocol.

<a id="Discussion"></a>

## Discussion

After creating the dispatch source, use the methods of the [DispatchSourceProtocol](../dispatchsourceprotocol.md) protocol to install the event handlers you need. The returned dispatch source is in the inactive state initially. When you are ready to begin processing events, call its [activate()](../dispatchobject/activate%28%29.md) method.

## See Also

### Creating a Signal Source

- [DispatchSourceSignal](../dispatchsourcesignal.md): A dispatch source that monitors the current process for UNIX signals.
