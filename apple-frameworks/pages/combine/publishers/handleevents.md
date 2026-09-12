> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/handleevents](https://developer.apple.com/documentation/combine/publishers/handleevents)

# Publishers.HandleEvents

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that performs the specified closures when publisher events occur.

## Declaration

```swift
struct HandleEvents<Upstream> where Upstream : Publisher
```

## Topics

### Creating an event-handling publisher

- [init(upstream:receiveSubscription:receiveOutput:receiveCompletion:receiveCancel:receiveRequest:)](handleevents/init%28upstream_receivesubscription_receiveoutput_receivecompletion_receivecancel_receiverequest_%29.md): Creates a publisher that performs the specified closures when publisher events occur.

### Declaring supporting types

- [Publishers.HandleEvents.Output](handleevents/output.md): The kind of values published by this publisher.
- [Publishers.HandleEvents.Failure](handleevents/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](handleevents/upstream.md): The publisher from which this publisher receives elements.
- [receiveSubscription](handleevents/receivesubscription.md): A closure that executes when the publisher receives the subscription from the upstream publisher.
- [receiveOutput](handleevents/receiveoutput.md): A closure that executes when the publisher receives a value from the upstream publisher.
- [receiveCompletion](handleevents/receivecompletion.md): A closure that executes when the upstream publisher finishes normally or terminates with an error.
- [receiveCancel](handleevents/receivecancel.md): A closure that executes when the downstream receiver cancels publishing.
- [receiveRequest](handleevents/receiverequest.md): A closure that executes when the publisher receives a request for more elements.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Debugging

- [Publishers.Breakpoint](breakpoint.md): A publisher that raises a debugger signal when a provided closure needs to stop the process in the debugger.
- [Publishers.Print](print.md): A publisher that prints log messages for all publishing events, optionally prefixed with a given string.
