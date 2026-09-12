> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/handleevents/upstream](https://developer.apple.com/documentation/combine/publishers/handleevents/upstream)

# upstream

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The publisher from which this publisher receives elements.

## Declaration

```swift
let upstream: Upstream
```

## See Also

### Inspecting publisher properties

- [receiveSubscription](receivesubscription.md): A closure that executes when the publisher receives the subscription from the upstream publisher.
- [receiveOutput](receiveoutput.md): A closure that executes when the publisher receives a value from the upstream publisher.
- [receiveCompletion](receivecompletion.md): A closure that executes when the upstream publisher finishes normally or terminates with an error.
- [receiveCancel](receivecancel.md): A closure that executes when the downstream receiver cancels publishing.
- [receiveRequest](receiverequest.md): A closure that executes when the publisher receives a request for more elements.
