> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/user](https://developer.apple.com/documentation/foundation/url/user)

# user

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 8.0+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

The user component of the URL if the URL conforms to RFC 3986; otherwise, nil.

> Use user(percentEncoded:) instead

## Declaration

```swift
var user: String? { get }
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  This function resolves against the base `URL`.

New code should use [user(percentEncoded:)](user%28percentencoded_%29.md) instead of this property.

## See Also

### Accessing the parts of a URL

- [fragment(percentEncoded:)](fragment%28percentencoded_%29.md): Returns the fragment component of the URL, optionally removing any percent-encoding.
- [fragment](fragment.md): Deprecated. The fragment component of the URL if the URL conforms to RFC 3986; otherwise, nil.
- [host(percentEncoded:)](host%28percentencoded_%29.md): Returns the host component of the URL, optionally removing any percent-encoding.
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
