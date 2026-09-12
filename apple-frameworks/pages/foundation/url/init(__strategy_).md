> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/init(_:strategy:)](https://developer.apple.com/documentation/foundation/url/init(_:strategy:))

# init(\_:strategy:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a URL instance by parsing the provided input in accordance with a parse strategy.

## Declaration

```swift
init<T>(_ value: T.ParseInput, strategy: T) throws where T : ParseStrategy, T.ParseOutput == URL
```

## Parameters

- `value`: The value to parse, as the input type accepted by `strategy`. For [URL.ParseStrategy](parsestrategy.md), this is [String](https://developer.apple.com/documentation/swift/string).
- `strategy`: A parse strategy to apply when parsing `value`.

<a id="Discussion"></a>

## Discussion

The following example parses a URL string, with a custom strategy that provides a default value for the port component if the source string doesn’t specify one.

```swift
let urlString = "https://internal.example.com/path/to/endpoint?key=value"
let url = try? URL(urlString, strategy: .url
    .port(.defaultValue(8080))) // https://internal.example.com:8080/path/to/endpoint?key=value

```

## See Also

### Creating a URL by parsing

- [URL.ParseStrategy](parsestrategy.md): A parse strategy for creating URLs from formatted strings.
