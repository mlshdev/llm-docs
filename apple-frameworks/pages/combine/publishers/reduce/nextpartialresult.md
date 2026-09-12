> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/reduce/nextpartialresult](https://developer.apple.com/documentation/combine/publishers/reduce/nextpartialresult)

# nextPartialResult

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A closure that takes the previously-accumulated value and the next element from the upstream publisher to produce a new value.

## Declaration

```swift
let nextPartialResult: (Output, Upstream.Output) -> Output
```

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives elements.
- [initial](initial.md): The initial value provided on the first invocation of the closure.
