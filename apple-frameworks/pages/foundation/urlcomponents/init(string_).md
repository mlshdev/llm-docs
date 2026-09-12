> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcomponents/init(string:)](https://developer.apple.com/documentation/foundation/urlcomponents/init(string:))

# init(string:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a URL components instance from a URL string.

## Declaration

```swift
init?(string: String)
```

## Parameters

- `string`: A URL location.

<a id="Discussion"></a>

## Discussion

If `string` represents a malformed URL, this initializer returns `nil`.

## See Also

### Creating URL components

- [init()](init%28%29.md): Creates a URL components instance without defining any of the components.
- [init(string:encodingInvalidCharacters:)](init%28string_encodinginvalidcharacters_%29.md): Creates a URL components instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
- [init(url:resolvingAgainstBaseURL:)](init%28url_resolvingagainstbaseurl_%29.md): Creates a URL components instance from a URL string, optionally resolving against a base URL.
