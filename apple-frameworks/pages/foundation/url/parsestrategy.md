> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/parsestrategy](https://developer.apple.com/documentation/foundation/url/parsestrategy)

# URL.ParseStrategy

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A parse strategy for creating URLs from formatted strings.

## Declaration

```swift
struct ParseStrategy
```

<a id="overview"></a>

## Overview

Create an explicit [URL.ParseStrategy](parsestrategy.md) to parse multiple strings according to the same parse strategy. The following example creates a customized strategy, then applies it to multiple URL candidate strings.

```swift
let strategy = URL.ParseStrategy(
    scheme: .defaultValue("https"),
    user: .optional,
    password: .optional,
    host: .required,
    port: .optional,
    path: .required,
    query: .required,
    fragment: .optional)
let urlStrings = [
    "example.com?key1=value1", // no scheme or path
    "https://example.com?key2=value2", // no path
    "https://example.com", // no query
    "https://example.com/path?key4=value4", // complete
    "//example.com/path?key5=value5" // complete except for default-able scheme
]
let urls = urlStrings.map { try? strategy.parse($0) } // [nil, nil, nil, Optional(https://example.com/path?key4=value4), Optional(https://example.com/path?key5=value5)]
```

You don’t need to instantiate a parse strategy instance to parse a single string. Instead, use the URL initializer [init(\_:strategy:)](init%28__strategy_%29.md), passing in a string to parse and a customized strategy, typically created with one of the static accessors. The following example parses a URL string, with a custom strategy that provides a default value for the port component if the source string doesn’t specify one.

```swift
let urlString = "https://internal.example.com/path/to/endpoint?key=value"
let url = try? URL(urlString, strategy: .url
    .port(.defaultValue(8080))) // https://internal.example.com:8080/path/to/endpoint?key=value

```

## Topics

### Creating a URL parse strategy

- [init(scheme:user:password:host:port:path:query:fragment:)](parsestrategy/init%28scheme_user_password_host_port_path_query_fragment_%29.md): Creates a URL parse strategy with the specified component-parsing behaviors.
- [URL.ParseStrategy.ComponentParseStrategy](parsestrategy/componentparsestrategy.md): The strategy used to parse one component of a URL.

### Customizing strategy behavior

- [scheme(\_:)](parsestrategy/scheme%28__%29.md): Modifies a parse strategy to parse a URL’s scheme component in accordance with the provided behavior.
- [user(\_:)](parsestrategy/user%28__%29.md): Modifies a parse strategy to parse a URL’s user component in accordance with the provided behavior.
- [password(\_:)](parsestrategy/password%28__%29.md): Modifies a parse strategy to parse a URL’s password component in accordance with the provided behavior.
- [host(\_:)](parsestrategy/host%28__%29.md): Modifies a parse strategy to parse a URL’s host component in accordance with the provided behavior.
- [port(\_:)](parsestrategy/port%28__%29.md): Modifies a parse strategy to parse a URL’s port component in accordance with the provided behavior.
- [path(\_:)](parsestrategy/path%28__%29.md): Modifies a parse strategy to parse a URL’s path component in accordance with the provided behavior.
- [query(\_:)](parsestrategy/query%28__%29.md): Modifies a parse strategy to parse a URL’s query component in accordance with the provided behavior.
- [fragment(\_:)](parsestrategy/fragment%28__%29.md): Modifies a parse strategy to parse a URL’s fragment component in accordance with the provided behavior.
- [URL.ParseStrategy.ComponentParseStrategy](parsestrategy/componentparsestrategy.md): The strategy used to parse one component of a URL.

### Parsing strings

- [parse(\_:)](parsestrategy/parse%28__%29.md): Parses a URL string in accordance with this strategy and returns the parsed value.

### Locating URLs with regular expressions

- [consuming(\_:startingAt:in:)](parsestrategy/consuming%28__startingat_in_%29.md): Process the input string within the specified bounds, beginning at the given index, and return the end position (upper bound) of the match and the produced output.

### Supporting Types

- [URL.ParseStrategy.RegexOutput](parsestrategy/regexoutput.md): The type returned when capturing matching substrings with this strategy.

### Default Implementations

- [CustomConsumingRegexComponent Implementations](parsestrategy/customconsumingregexcomponent-implementations.md)
- [ParseStrategy Implementations](parsestrategy/parsestrategy-implementations.md)
- [RegexComponent Implementations](parsestrategy/regexcomponent-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomConsumingRegexComponent](https://developer.apple.com/documentation/swift/customconsumingregexcomponent)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ParseStrategy](../parsestrategy.md)
- [RegexComponent](https://developer.apple.com/documentation/swift/regexcomponent)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Parsing URLs

- [parseStrategy](formatstyle/parsestrategy.md): The parse strategy used by this format style.
