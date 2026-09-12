> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/reduce/upstream](https://developer.apple.com/documentation/combine/publishers/reduce/upstream)

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

- [initial](initial.md): The initial value provided on the first invocation of the closure.
- [nextPartialResult](nextpartialresult.md): A closure that takes the previously-accumulated value and the next element from the upstream publisher to produce a new value.
