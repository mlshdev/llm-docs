> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/relativestring](https://developer.apple.com/documentation/foundation/url/relativestring)

# relativeString

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The relative portion of a URL.

## Declaration

```swift
var relativeString: String { get }
```

<a id="Discussion"></a>

## Discussion

If `baseURL` is nil, or if the URL is itself absolute, this is the same as `absoluteString`.

## See Also

### Accessing URL representations

- [baseURL](baseurl.md): The base URL.
- [absoluteString](absolutestring.md): The absolute string for the URL.
- [absoluteURL](absoluteurl.md): The absolute URL.
- [relativePath](relativepath.md): The relative path of the URL if the URL conforms to RFC 3986, otherwise nil.
- [standardized](standardized.md): A version of the URL with any instances of “..” or “.” resolved in its path.
- [standardizedFileURL](standardizedfileurl.md): A standardized version of the path of a file URL.
