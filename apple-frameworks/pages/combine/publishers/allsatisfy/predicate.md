> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/allsatisfy/predicate](https://developer.apple.com/documentation/combine/publishers/allsatisfy/predicate)

# predicate

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A closure that evaluates each received element.

## Declaration

```swift
let predicate: (Upstream.Output) -> Bool
```

<a id="discussion"></a>

## Discussion

Return `true` to continue, or `false` to cancel the upstream and finish.

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives elements.
