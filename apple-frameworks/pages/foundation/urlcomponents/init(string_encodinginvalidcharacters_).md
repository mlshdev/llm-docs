> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcomponents/init(string:encodinginvalidcharacters:)](https://developer.apple.com/documentation/foundation/urlcomponents/init(string:encodinginvalidcharacters:))

# init(string:encodingInvalidCharacters:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a URL components instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.

## Declaration

```swift
init?(string: String, encodingInvalidCharacters: Bool)
```

## Parameters

- `string`: The URL string to parse.
- `encodingInvalidCharacters`: A Boolean value that indicates whether the initializer attempts to encode any invalid characters in `string`.

<a id="Discussion"></a>

## Discussion

If `encodingInvalidCharacters` is `true`, this initializer tries to encode the string to create a valid URL. If the URL string is still invalid after encoding, the initializer returns `nil`.

## See Also

### Creating URL components

- [init()](init%28%29.md): Creates a URL components instance without defining any of the components.
- [init(string:)](init%28string_%29.md): Creates a URL components instance from a URL string.
- [init(url:resolvingAgainstBaseURL:)](init%28url_resolvingagainstbaseurl_%29.md): Creates a URL components instance from a URL string, optionally resolving against a base URL.
