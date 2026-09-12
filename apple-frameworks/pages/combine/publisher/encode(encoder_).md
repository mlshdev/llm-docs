> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/encode(encoder:)](https://developer.apple.com/documentation/combine/publisher/encode(encoder:))

# encode(encoder:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Encodes the output from upstream using a specified encoder.

## Declaration

```swift
func encode<Coder>(encoder: Coder) -> Publishers.Encode<Self, Coder> where Coder : TopLevelEncoder
```

## Parameters

- `encoder`: An encoder that implements the [TopLevelEncoder](../toplevelencoder.md) protocol.

<a id="return-value"></a>

## Return Value

A publisher that encodes received elements using a specified encoder, and publishes the resulting data.

<a id="discussion"></a>

## Discussion

Use [encode(encoder:)](encode%28encoder_%29.md) with a [JSONDecoder](../../foundation/jsondecoder.md) (or a [PropertyListDecoder](../../foundation/propertylistdecoder.md) for property lists) to encode an [Encodable](https://developer.apple.com/documentation/swift/encodable) struct into [Data](../../foundation/data.md) that could be used to make a JSON string (or written to disk as a binary plist in the case of property lists).

In this example, a [PassthroughSubject](../passthroughsubject.md) publishes an `Article`. The [encode(encoder:)](encode%28encoder_%29.md) operator encodes the properties of the `Article` struct into a new JSON string according to the [Codable](https://developer.apple.com/documentation/swift/codable) protocol adopted by `Article`. The operator publishes the resulting JSON string to the downstream subscriber. If the encoding operation fails, which can happen in the case of complex properties that can’t be directly transformed into JSON, the stream terminates and the error is passed to the downstream subscriber.

```swift
struct Article: Codable {
    let title: String
    let author: String
    let pubDate: Date
}

let dataProvider = PassthroughSubject<Article, Never>()
let cancellable = dataProvider
    .encode(encoder: JSONEncoder())
    .sink(receiveCompletion: { print ("Completion: \($0)") },
          receiveValue: {  data in
            guard let stringRepresentation = String(data: data, encoding: .utf8) else { return }
            print("Data received \(data) string representation: \(stringRepresentation)")
    })

dataProvider.send(Article(title: "My First Article", author: "Gita Kumar", pubDate: Date()))

// Prints: "Data received 86 bytes string representation: {"title":"My First Article","author":"Gita Kumar","pubDate":606211803.279603}"
```

## See Also

### Encoding and decoding

- [decode(type:decoder:)](decode%28type_decoder_%29.md): Decodes the output from the upstream using a specified decoder.
