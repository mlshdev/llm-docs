> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/print(_:to:)](https://developer.apple.com/documentation/combine/publisher/print(_:to:))

# print(\_:to:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Prints log messages for all publishing events.

## Declaration

```swift
func print(_ prefix: String = "", to stream: (any TextOutputStream)? = nil) -> Publishers.Print<Self>
```

## Parameters

- `prefix`: A string —- which defaults to empty -— with which to prefix all log messages.
- `stream`: A stream for text output that receives messages, and which directs output to the console by default.  A custom stream can be used to log messages to other destinations.

<a id="return-value"></a>

## Return Value

A publisher that prints log messages for all publishing events.

<a id="discussion"></a>

## Discussion

Use [print(\_:to:)](print%28__to_%29.md) to log messages the console.

In the example below, log messages are printed on the console:

```swift
let integers = (1...2)
cancellable = integers.publisher
   .print("Logged a message", to: nil)
   .sink { _ in }

// Prints:
//  Logged a message: receive subscription: (1..<2)
//  Logged a message: request unlimited
//  Logged a message: receive value: (1)
//  Logged a message: receive finished
```

## See Also

### Debugging

- [breakpoint(receiveSubscription:receiveOutput:receiveCompletion:)](breakpoint%28receivesubscription_receiveoutput_receivecompletion_%29.md): Raises a debugger signal when a provided closure needs to stop the process in the debugger.
- [breakpointOnError()](breakpointonerror%28%29.md): Raises a debugger signal upon receiving a failure.
- [handleEvents(receiveSubscription:receiveOutput:receiveCompletion:receiveCancel:receiveRequest:)](handleevents%28receivesubscription_receiveoutput_receivecompletion_receivecancel_receiverequest_%29.md): Performs the specified closures when publisher events occur.
