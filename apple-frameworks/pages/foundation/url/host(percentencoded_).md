> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/host(percentencoded:)](https://developer.apple.com/documentation/foundation/url/host(percentencoded:))

# host(percentEncoded:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the host component of the URL, optionally removing any percent-encoding.

## Declaration

```swift
func host(percentEncoded: Bool = true) -> String?
```

## Parameters

- `percentEncoded`: A Boolean value that indicates whether the URL percent-encodes any unreserved characters. Defaults to `true`.

<a id="return-value"></a>

## Return Value

The fragment component of the URL, optionally percent-encoding any unreserved characters.

<a id="Discussion"></a>

## Discussion

The system doesn’t allow certain characters in the URL host component, so [URL](../url.md) percent-encodes those characters to create a valid URL. Calling this function with `percentEncoded = false` removes any percent-encoding and returns the unencoded host.

If the URL doesn’t contain a host component according to [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt), this function returns `nil`.

## See Also

### Accessing the parts of a URL

- [fragment(percentEncoded:)](fragment%28percentencoded_%29.md): Returns the fragment component of the URL, optionally removing any percent-encoding.
- [fragment](fragment.md): Deprecated. The fragment component of the URL if the URL conforms to RFC 3986; otherwise, nil.
- [host](host.md): Deprecated. The host component of a URL if the URL conforms to RFC 3986; otherwise, nil.
- [lastPathComponent](lastpathcomponent.md): The last path component of the URL, or an empty string if the path is an empty string.
- [path(percentEncoded:)](path%28percentencoded_%29.md): Returns the path component of the URL, optionally removing any percent-encoding.
- [path](path.md): Deprecated. The path component of the URL if the URL conforms to RFC 3986; otherwise, an empty string.
- [password(percentEncoded:)](password%28percentencoded_%29.md): Returns the password component of the URL, optionally removing any percent-encoding.
- [password](password.md): Deprecated. The password component of the URL if the URL conforms to RFC 3986; otherwise, nil.
- [pathComponents](pathcomponents.md): The path components of the URL, or an empty array if the path is an empty string.
- [pathExtension](pathextension.md): The path extension of the URL, or an empty string if the path is an empty string.
- [port](port.md): The port component of the URL if the URL conforms to RFC 3986; otherwise, nil.
- [query(percentEncoded:)](query%28percentencoded_%29.md): Returns the query component of the URL, optionally removing any percent-encoding.
- [query](query.md): Deprecated. The query of the URL if the URL conforms to RFC 3986; otherwise, nil.
- [scheme](scheme.md): The scheme of the URL.
- [user(percentEncoded:)](user%28percentencoded_%29.md): Returns the user component of the URL, optionally removing any percent-encoding.
