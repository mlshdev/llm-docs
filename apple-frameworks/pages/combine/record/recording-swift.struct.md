> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/record/recording-swift.struct](https://developer.apple.com/documentation/combine/record/recording-swift.struct)

# Record.Recording

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A recorded sequence of outputs, followed by a completion value.

## Declaration

```swift
struct Recording
```

## Topics

### Creating a recording

- [init()](recording-swift.struct/init%28%29.md): Set up a recording in a state ready to receive output.
- [init(output:completion:)](recording-swift.struct/init%28output_completion_%29.md): Set up a complete recording with the specified output and completion.

### Receiving elements

- [receive(\_:)](recording-swift.struct/receive%28__%29.md): Add an output to the recording.

### Receiving life cycle events

- [receive(completion:)](recording-swift.struct/receive%28completion_%29.md): Add a completion to the recording.

### Encoding

- [encode(into:)](recording-swift.struct/encode%28into_%29.md): Conforms when `Output` conforms to `Decodable`, `Output` conforms to `Encodable`, `Failure` conforms to `Decodable`, `Failure` conforms to `Encodable`, and `Failure` conforms to `Error`.

### Inspecting publisher properties

- [output](recording-swift.struct/output.md): The output which will be sent to a `Subscriber`.
- [completion](recording-swift.struct/completion.md): The completion which will be sent to a `Subscriber`.

### Declaring supporting types

- [Record.Recording.Input](recording-swift.struct/input.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Inspecting publisher properties

- [recording](recording-swift.property.md): The recorded output and completion.
