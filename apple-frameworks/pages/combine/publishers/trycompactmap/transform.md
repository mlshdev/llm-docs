> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/trycompactmap/transform](https://developer.apple.com/documentation/combine/publishers/trycompactmap/transform)

# transform

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An error-throwing closure that receives values from the upstream publisher and returns optional values.

## Declaration

```swift
let transform: (Upstream.Output) throws -> Output?
```

<a id="discussion"></a>

## Discussion

If this closure throws an error, the publisher fails.

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives elements.
