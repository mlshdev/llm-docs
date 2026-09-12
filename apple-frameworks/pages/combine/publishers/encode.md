> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/encode](https://developer.apple.com/documentation/combine/publishers/encode)

# Publishers.Encode

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that encodes elements received from an upstream publisher, using a given encoder.

## Declaration

```swift
struct Encode<Upstream, Coder> where Upstream : Publisher, Coder : TopLevelEncoder, Upstream.Output : Encodable
```

## Topics

### Creating a encode publisher

- [init(upstream:encoder:)](encode/init%28upstream_encoder_%29.md): Creates a publisher that decodes elements received from an upstream publisher, using a given decoder.

### Declaring supporting types

- [Publishers.Encode.Output](encode/output.md): The kind of values published by this publisher.
- [Publishers.Encode.Failure](encode/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [upstream](encode/upstream.md)

## Relationships

### Conforms To

- [Publisher](../publisher.md)

## See Also

### Encoding and decoding

- [Publishers.Decode](decode.md): A publisher that decodes elements received from an upstream publisher, using a given decoder.
