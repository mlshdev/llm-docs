> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/handleevents/receiveoutput

# receiveOutput

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A closure that executes when the publisher receives a value from the upstream publisher.

## Declaration

```swift
var receiveOutput: ((Publishers.HandleEvents<Upstream>.Output) -> Void)?
```

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives elements.
- [receiveSubscription](receivesubscription.md): A closure that executes when the publisher receives the subscription from the upstream publisher.
- [receiveCompletion](receivecompletion.md): A closure that executes when the upstream publisher finishes normally or terminates with an error.
- [receiveCancel](receivecancel.md): A closure that executes when the downstream receiver cancels publishing.
- [receiveRequest](receiverequest.md): A closure that executes when the publisher receives a request for more elements.
