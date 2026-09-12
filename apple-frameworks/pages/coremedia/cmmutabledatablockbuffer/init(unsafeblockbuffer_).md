> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmutabledatablockbuffer/init(unsafeblockbuffer:)](https://developer.apple.com/documentation/coremedia/cmmutabledatablockbuffer/init(unsafeblockbuffer:))

# init(unsafeBlockBuffer:)

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a mutable block buffer from an existing block buffer.

## Declaration

```swift
init(unsafeBlockBuffer: sending CMBlockBuffer)
```

## Parameters

- `unsafeBlockBuffer`: The [CMBlockBuffer](../cmblockbuffer.md) which will be subsumed by the new instance.

<a id="discussion"></a>

## Discussion

This init will make sure that all memory referenced by `unsafeBlockBuffer` is allocated by calling [assureBlockMemory()](../cmblockbuffer/assureblockmemory%28%29.md).
