> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcomponents/init(url:resolvingagainstbaseurl:)](https://developer.apple.com/documentation/foundation/urlcomponents/init(url:resolvingagainstbaseurl:))

# init(url:resolvingAgainstBaseURL:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a URL components instance from a URL string, optionally resolving against a base URL.

## Declaration

```swift
init?(url: URL, resolvingAgainstBaseURL resolve: Bool)
```

## Parameters

- `url`: The URL string to parse.
- `resolve`: Controls whether the initializer resolves the URL against its base URL before parsing. If `url` is a relative URL, setting `resolve` to `true` creates components using the [absoluteURL](../url/absoluteurl.md) property.

## See Also

### Creating URL components

- [init()](init%28%29.md): Creates a URL components instance without defining any of the components.
- [init(string:)](init%28string_%29.md): Creates a URL components instance from a URL string.
- [init(string:encodingInvalidCharacters:)](init%28string_encodinginvalidcharacters_%29.md): Creates a URL components instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
