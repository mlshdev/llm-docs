> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/tryreduce/nextpartialresult](https://developer.apple.com/documentation/combine/publishers/tryreduce/nextpartialresult)

# nextPartialResult

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An error-throwing closure that takes the previously-accumulated value and the next element from the upstream to produce a new value.

## Declaration

```swift
let nextPartialResult: (Output, Upstream.Output) throws -> Output
```

<a id="discussion"></a>

## Discussion

If this closure throws an error, the publisher fails and passes the error to its subscriber.

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives elements.
- [initial](initial.md): The initial value provided on the first-use of the closure.
