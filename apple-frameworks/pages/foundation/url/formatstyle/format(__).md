> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/formatstyle/format(_:)](https://developer.apple.com/documentation/foundation/url/formatstyle/format(_:))

# format(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Formats a URL, using this style.

## Declaration

```swift
func format(_ value: URL) -> String
```

## Parameters

- `value`: The URL to format.

<a id="return-value"></a>

## Return Value

A string representation of `value`, formatted according to the style’s configuration.

<a id="Discussion"></a>

## Discussion

Use this method when you want to create a single style instance, and then use it to format multiple URL instances. The following example creates a custom format style and then uses it to format a variety of URLs in an array:

```swift
let style = URL.FormatStyle(
    scheme: .never,
    user: .never,
    password: .never,
    host: .omitSpecificSubdomains(["www", "mobile", "m."],
                                  includeMultiLevelSubdomains: true),
    port: .never,
    path: .always,
    query: .never,
    fragment: .never)
let urls = [
    URL(string: "https://www.example.com/path/one")!,
    URL(string: "https://beta.example.com/path/two")!,
    URL(string: "https://beta.staging.west.example.com/three")!,
    URL(string: "https://query.example.com/four?key4=value4")!
]
let formatted = urls.map { $0.formatted(style) } // ["example.com/path/one", "beta.example.com/path/two", "west.example.com/three", "query.example.com/four"]
```

To format a single floating-point value, use the [URL](../../url.md) instance method [formatted(\_:)](../formatted%28__%29.md) method passing in an instance of [URL.FormatStyle](../formatstyle.md), or [formatted()](../formatted%28%29.md) to use a default style.
