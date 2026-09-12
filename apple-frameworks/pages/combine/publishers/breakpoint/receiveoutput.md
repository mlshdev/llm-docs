> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/breakpoint/receiveoutput](https://developer.apple.com/documentation/combine/publishers/breakpoint/receiveoutput)

# receiveOutput

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A closure that executes when the publisher receives output from the upstream publisher, and can raise a debugger signal by returning a true Boolean value.

## Declaration

```swift
let receiveOutput: ((Upstream.Output) -> Bool)?
```

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives elements.
- [receiveSubscription](receivesubscription.md): A closure that executes when the publisher receives a subscription, and can raise a debugger signal by returning a true Boolean value.
- [receiveCompletion](receivecompletion.md): A closure that executes when the publisher receives completion, and can raise a debugger signal by returning a true Boolean value.
