> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/breakpoint(receivesubscription:receiveoutput:receivecompletion:)](https://developer.apple.com/documentation/combine/publisher/breakpoint(receivesubscription:receiveoutput:receivecompletion:))

# breakpoint(receiveSubscription:receiveOutput:receiveCompletion:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Raises a debugger signal when a provided closure needs to stop the process in the debugger.

## Declaration

```swift
func breakpoint(receiveSubscription: ((any Subscription) -> Bool)? = nil, receiveOutput: ((Self.Output) -> Bool)? = nil, receiveCompletion: ((Subscribers.Completion<Self.Failure>) -> Bool)? = nil) -> Publishers.Breakpoint<Self>
```

## Parameters

- `receiveSubscription`: A closure that executes when the publisher receives a subscription. Return `true` from this closure to raise `SIGTRAP`, or false to continue.
- `receiveOutput`: A closure that executes when the publisher receives a value. Return `true` from this closure to raise `SIGTRAP`, or false to continue.
- `receiveCompletion`: A closure that executes when the publisher receives a completion. Return `true` from this closure to raise `SIGTRAP`, or false to continue.

<a id="return-value"></a>

## Return Value

A publisher that raises a debugger signal when one of the provided closures returns `true`.

<a id="discussion"></a>

## Discussion

Use [breakpoint(receiveSubscription:receiveOutput:receiveCompletion:)](breakpoint%28receivesubscription_receiveoutput_receivecompletion_%29.md) to examine one or more stages of the subscribe/publish/completion process and stop in the debugger, based on conditions you specify. When any of the provided closures returns `true`, this operator raises the `SIGTRAP` signal to stop the process in the debugger. Otherwise, this publisher passes through values and completions as-is.

In the example below, a [PassthroughSubject](../passthroughsubject.md) publishes strings to a breakpoint republisher. When the breakpoint receives the string “`DEBUGGER`”, it returns `true`, which stops the app in the debugger.

```swift
let publisher = PassthroughSubject<String?, Never>()
cancellable = publisher
    .breakpoint(
        receiveOutput: { value in return value == "DEBUGGER" }
    )
    .sink { print("\(String(describing: $0))" , terminator: " ") }

publisher.send("DEBUGGER")

// Prints: "error: Execution was interrupted, reason: signal SIGTRAP."
// Depending on your specific environment, the console messages may
// also include stack trace information, which is not shown here.
```

## See Also

### Debugging

- [breakpointOnError()](breakpointonerror%28%29.md): Raises a debugger signal upon receiving a failure.
- [handleEvents(receiveSubscription:receiveOutput:receiveCompletion:receiveCancel:receiveRequest:)](handleevents%28receivesubscription_receiveoutput_receivecompletion_receivecancel_receiverequest_%29.md): Performs the specified closures when publisher events occur.
- [print(\_:to:)](print%28__to_%29.md): Prints log messages for all publishing events.
