> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsondecoder/keydecodingstrategy-swift.property](https://developer.apple.com/documentation/foundation/jsondecoder/keydecodingstrategy-swift.property)

# keyDecodingStrategy

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A value that determines how to decode a type’s coding keys from JSON keys.

## Declaration

```swift
var keyDecodingStrategy: JSONDecoder.KeyDecodingStrategy { get set }
```

## See Also

### Customizing Decoding

- [JSONDecoder.KeyDecodingStrategy](keydecodingstrategy-swift.enum.md): The values that determine how to decode a type’s coding keys from JSON keys.
- [userInfo](userinfo.md): A dictionary you use to customize the decoding process by providing contextual information.
- [allowsJSON5](allowsjson5.md): Specifies that decoding supports the JSON5 syntax.
- [assumesTopLevelDictionary](assumestopleveldictionary.md): Specifies that decoding assumes the top level of the JSON data is a dictionary, even if it doesn’t begin and end with braces.
