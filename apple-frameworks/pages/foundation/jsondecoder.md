> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsondecoder](https://developer.apple.com/documentation/foundation/jsondecoder)

# JSONDecoder

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that decodes instances of a data type from JSON objects.

## Declaration

```swift
class JSONDecoder
```

<a id="overview"></a>

## Overview

The example below shows how to decode an instance of a simple `GroceryProduct` type from a JSON object. The type adopts [Codable](https://developer.apple.com/documentation/swift/codable) so that it’s decodable using a [JSONDecoder](jsondecoder.md) instance.

```swift
struct GroceryProduct: Codable {
    var name: String
    var points: Int
    var description: String?
}

let json = """
{
    "name": "Durian",
    "points": 600,
    "description": "A fruit with a distinctive scent."
}
""".data(using: .utf8)!

let decoder = JSONDecoder()
let product = try decoder.decode(GroceryProduct.self, from: json)

print(product.name) // Prints "Durian"
```

## Topics

### Creating a Decoder

- [init()](jsondecoder/init%28%29.md): Creates a new, reusable JSON decoder with the default formatting settings and decoding strategies.

### Decoding

- [decode(\_:from:)](jsondecoder/decode%28__from_%29.md): Returns a value of the type you specify, decoded from a JSON object.

### Customizing Decoding

- [keyDecodingStrategy](jsondecoder/keydecodingstrategy-swift.property.md): A value that determines how to decode a type’s coding keys from JSON keys.
- [JSONDecoder.KeyDecodingStrategy](jsondecoder/keydecodingstrategy-swift.enum.md): The values that determine how to decode a type’s coding keys from JSON keys.
- [userInfo](jsondecoder/userinfo.md): A dictionary you use to customize the decoding process by providing contextual information.
- [allowsJSON5](jsondecoder/allowsjson5.md): Specifies that decoding supports the JSON5 syntax.
- [assumesTopLevelDictionary](jsondecoder/assumestopleveldictionary.md): Specifies that decoding assumes the top level of the JSON data is a dictionary, even if it doesn’t begin and end with braces.

### Decoding Dates

- [dateDecodingStrategy](jsondecoder/datedecodingstrategy-swift.property.md): The strategy used when decoding dates from part of a JSON object.
- [JSONDecoder.DateDecodingStrategy](jsondecoder/datedecodingstrategy-swift.enum.md): The strategies available for formatting dates when decoding them from JSON.

### Decoding Raw Data

- [dataDecodingStrategy](jsondecoder/datadecodingstrategy-swift.property.md): The strategy that a decoder uses to decode raw data.
- [JSONDecoder.DataDecodingStrategy](jsondecoder/datadecodingstrategy-swift.enum.md): The strategies for decoding raw data.

### Decoding Exceptional Numbers

- [nonConformingFloatDecodingStrategy](jsondecoder/nonconformingfloatdecodingstrategy-swift.property.md): The strategy used by a decoder when it encounters exceptional floating-point values.
- [JSONDecoder.NonConformingFloatDecodingStrategy](jsondecoder/nonconformingfloatdecodingstrategy-swift.enum.md): The strategies for encoding nonconforming floating-point numbers, also known as IEEE 754 exceptional values.

### Instance Methods

- [decode(\_:from:configuration:)](jsondecoder/decode%28__from_configuration_%29-22lge.md)
- [decode(\_:from:configuration:)](jsondecoder/decode%28__from_configuration_%29-xsq1.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NetworkDecoder](../network/networkdecoder.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TopLevelDecoder](../combine/topleveldecoder.md)

## See Also

### JSON

- [Using JSON with custom types](using-json-with-custom-types.md): Encode and decode JSON data, regardless of its structure, using Swift’s JSON support.
- [JSONEncoder](jsonencoder.md): An object that encodes instances of a data type as JSON objects.
- [JSONSerialization](jsonserialization.md): An object that converts between JSON and the equivalent Foundation objects.
