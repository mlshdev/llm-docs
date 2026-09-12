> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/tryscan/initialresult](https://developer.apple.com/documentation/combine/publishers/tryscan/initialresult)

# initialResult

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The previous result returned by the `nextPartialResult` closure.

## Declaration

```swift
let initialResult: Output
```

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher that this publisher receives elements from.
- [nextPartialResult](nextpartialresult.md): An error-throwing closure that takes as its arguments the previous value returned by the closure and the next element emitted from the upstream publisher.
