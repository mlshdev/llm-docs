> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/retry/retries](https://developer.apple.com/documentation/combine/publishers/retry/retries)

# retries

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The maximum number of retry attempts to perform.

## Declaration

```swift
let retries: Int?
```

<a id="discussion"></a>

## Discussion

If `nil`, this publisher attempts to reconnect with the upstream publisher an unlimited number of times.

## See Also

### Inspecting publisher properties

- [upstream](upstream.md): The publisher from which this publisher receives elements.
