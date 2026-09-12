> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsondecoder/keydecodingstrategy-swift.enum](https://developer.apple.com/documentation/foundation/jsondecoder/keydecodingstrategy-swift.enum)

# JSONDecoder.KeyDecodingStrategy

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The values that determine how to decode a type’s coding keys from JSON keys.

## Declaration

```swift
enum KeyDecodingStrategy
```

<a id="overview"></a>

## Overview

> **Note**

>  Key decoding strategies other than [JSONDecoder.KeyDecodingStrategy.useDefaultKeys](keydecodingstrategy-swift.enum/usedefaultkeys.md) may have a noticeable performance cost because those strategies may inspect and transform each key.

## Topics

### Built-in Decoding

- [JSONDecoder.KeyDecodingStrategy.convertFromSnakeCase](keydecodingstrategy-swift.enum/convertfromsnakecase.md): A key decoding strategy that converts snake-case keys to camel-case keys.
- [JSONDecoder.KeyDecodingStrategy.useDefaultKeys](keydecodingstrategy-swift.enum/usedefaultkeys.md): A key decoding strategy that doesn’t change key names during decoding.

### Custom Decoding

- [JSONDecoder.KeyDecodingStrategy.custom(\_:)](keydecodingstrategy-swift.enum/custom%28__%29.md): A key decoding strategy defined by the closure you supply.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing Decoding

- [keyDecodingStrategy](keydecodingstrategy-swift.property.md): A value that determines how to decode a type’s coding keys from JSON keys.
- [userInfo](userinfo.md): A dictionary you use to customize the decoding process by providing contextual information.
- [allowsJSON5](allowsjson5.md): Specifies that decoding supports the JSON5 syntax.
- [assumesTopLevelDictionary](assumestopleveldictionary.md): Specifies that decoding assumes the top level of the JSON data is a dictionary, even if it doesn’t begin and end with braces.
