> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/record](https://developer.apple.com/documentation/combine/record)

# Record

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that allows for recording a series of inputs and a completion, for later playback to each subscriber.

## Declaration

```swift
struct Record<Output, Failure> where Failure : Error
```

## Topics

### Creating a record publisher

- [init(output:completion:)](record/init%28output_completion_%29.md): Creates a record publisher to publish the provided elements, followed by the provided completion value.
- [init(record:)](record/init%28record_%29.md): Creates a publisher to interactively record a series of outputs and a completion.
- [init(recording:)](record/init%28recording_%29.md): Creates a record publisher from an existing recording.

### Inspecting publisher properties

- [recording](record/recording-swift.property.md): The recorded output and completion.
- [Record.Recording](record/recording-swift.struct.md): A recorded sequence of outputs, followed by a completion value.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Publisher](publisher.md)

## See Also

### Convenience Publishers

- [Future](future.md): A publisher that eventually produces a single value and then finishes or fails.
- [Just](just.md): A publisher that emits an output to each subscriber just once, and then finishes.
- [Deferred](deferred.md): A publisher that awaits subscription before running the supplied closure to create a publisher for the new subscriber.
- [Empty](empty.md): A publisher that never publishes any values, and optionally finishes immediately.
- [Fail](fail.md): A publisher that immediately terminates with the specified error.
