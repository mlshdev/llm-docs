> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurl/fragment](https://developer.apple.com/documentation/foundation/nsurl/fragment)

# fragment (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The fragment identifier, conforming to RFC 1808. (read-only)

## Declaration

```swift
var fragment: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the URL’s fragment. Any percent-encoded characters are not unescaped. If the receiver does not conform to RFC 1808, this property contains `nil`. For example, in the URL `http://www.example.com/index.html#jumpLocation`, the fragment identifier is `jumpLocation`.

## See Also

### Accessing the Parts of the URL

- [absoluteString](absolutestring.md): The URL string for the receiver as an absolute URL. (read-only)
- [absoluteURL](absoluteurl.md): An absolute URL that refers to the same resource as the receiver. (read-only)
- [baseURL](baseurl.md): The base URL. (read-only)
- [fileSystemRepresentation](filesystemrepresentation.md): A C string containing the URL’s file system path. (read-only)
- [host](host.md): The host, conforming to RFC 1808. (read-only)
- [lastPathComponent](lastpathcomponent.md): The last path component. (read-only)
- [parameterString](parameterstring.md): Deprecated. The parameter string conforming to RFC 1808. (read-only)
- [password](password.md): The password conforming to RFC 1808. (read-only)
- [path](path.md): The path, conforming to RFC 1808. (read-only)
- [pathComponents](pathcomponents.md): An array containing the path components. (read-only)
- [pathExtension](pathextension.md): The path extension. (read-only)
- [port](port.md): The port, conforming to RFC 1808.
- [query](query.md): The query string, conforming to RFC 1808.
- [relativePath](relativepath.md): The relative path, conforming to RFC 1808. (read-only)
- [relativeString](relativestring.md): A string representation of the relative portion of the URL. (read-only)

# fragment (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The fragment identifier, conforming to RFC 1808. (read-only)

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * fragment;
```

<a id="Discussion"></a>

## Discussion

This property contains the URL’s fragment. Any percent-encoded characters are not unescaped. If the receiver does not conform to RFC 1808, this property contains `nil`. For example, in the URL `http://www.example.com/index.html#jumpLocation`, the fragment identifier is `jumpLocation`.

## See Also

### Accessing the Parts of the URL

- [absoluteString](absolutestring.md): The URL string for the receiver as an absolute URL. (read-only)
- [absoluteURL](absoluteurl.md): An absolute URL that refers to the same resource as the receiver. (read-only)
- [baseURL](baseurl.md): The base URL. (read-only)
- [fileSystemRepresentation](filesystemrepresentation.md): A C string containing the URL’s file system path. (read-only)
- [host](host.md): The host, conforming to RFC 1808. (read-only)
- [lastPathComponent](lastpathcomponent.md): The last path component. (read-only)
- [parameterString](parameterstring.md): Deprecated. The parameter string conforming to RFC 1808. (read-only)
- [password](password.md): The password conforming to RFC 1808. (read-only)
- [path](path.md): The path, conforming to RFC 1808. (read-only)
- [pathComponents](pathcomponents.md): An array containing the path components. (read-only)
- [pathExtension](pathextension.md): The path extension. (read-only)
- [port](port.md): The port, conforming to RFC 1808.
- [query](query.md): The query string, conforming to RFC 1808.
- [relativePath](relativepath.md): The relative path, conforming to RFC 1808. (read-only)
- [relativeString](relativestring.md): A string representation of the relative portion of the URL. (read-only)
