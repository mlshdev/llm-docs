> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/parsestrategy/componentparsestrategy](https://developer.apple.com/documentation/foundation/url/parsestrategy/componentparsestrategy)

# URL.ParseStrategy.ComponentParseStrategy

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The strategy used to parse one component of a URL.

## Declaration

```swift
enum ComponentParseStrategy<Component> where Component : Decodable, Component : Encodable, Component : Hashable, Component : Sendable
```

<a id="overview"></a>

## Overview

Use this type with the [URL.ParseStrategy](../parsestrategy.md) initializer and static accessors, or its modifier methods, to specify behavior for parsing components of a URL. This allows you to reject URL candidate strings that lack required components — such as a scheme, host, or path — or to fill in default values while parsing.

## Topics

### Component parse strategies

- [URL.ParseStrategy.ComponentParseStrategy.required](componentparsestrategy/required.md): A strategy that requires the presence of the associated component for parsing to succeed.
- [URL.ParseStrategy.ComponentParseStrategy.optional](componentparsestrategy/optional.md): A strategy that treats the presence of the associated component as optional.
- [URL.ParseStrategy.ComponentParseStrategy.defaultValue(\_:)](componentparsestrategy/defaultvalue%28__%29.md): A strategy that provides a default value for a component if it’s absent in the source string.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a URL parse strategy

- [init(scheme:user:password:host:port:path:query:fragment:)](init%28scheme_user_password_host_port_path_query_fragment_%29.md): Creates a URL parse strategy with the specified component-parsing behaviors.
