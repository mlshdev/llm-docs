> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/breakpoint](https://developer.apple.com/documentation/combine/publishers/breakpoint)

# Publishers.Breakpoint

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that raises a debugger signal when a provided closure needs to stop the process in the debugger.

## Declaration

```swift
struct Breakpoint<Upstream> where Upstream : Publisher
```

<a id="overview"></a>

## Overview

When any of the provided closures returns `true`, this publisher raises the `SIGTRAP` signal to stop the process in the debugger. Otherwise, this publisher passes through values and completions as-is.

## Topics

### Creating a breakpoint publisher

- [init(upstream:receiveSubscription:receiveOutput:receiveCompletion:)](breakpoint/init%28upstream_receivesubscription_receiveoutput_receivecompletion_%29.md): Creates a breakpoint publisher with the provided upstream publisher and breakpoint-raising closures.

### Declaring supporting types

- [Publishers.Breakpoint.Output](breakpoint/output.md): The kind of values published by this publisher.
- [Publishers.Breakpoint.Failure](breakpoint/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](breakpoint/upstream.md): The publisher from which this publisher receives elements.
- [receiveSubscription](breakpoint/receivesubscription.md): A closure that executes when the publisher receives a subscription, and can raise a debugger signal by returning a true Boolean value.
- [receiveOutput](breakpoint/receiveoutput.md): A closure that executes when the publisher receives output from the upstream publisher, and can raise a debugger signal by returning a true Boolean value.
- [receiveCompletion](breakpoint/receivecompletion.md): A closure that executes when the publisher receives completion, and can raise a debugger signal by returning a true Boolean value.

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Debugging

- [Publishers.HandleEvents](handleevents.md): A publisher that performs the specified closures when publisher events occur.
- [Publishers.Print](print.md): A publisher that prints log messages for all publishing events, optionally prefixed with a given string.
