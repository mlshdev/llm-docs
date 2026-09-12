> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcomponents](https://developer.apple.com/documentation/foundation/urlcomponents)

# URLComponents

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A structure that parses URLs into and constructs URLs from their constituent parts.

## Declaration

```swift
struct URLComponents
```

<a id="overview"></a>

## Overview

This structure parses and constructs URLs according to [RFC 3986](http://www.ietf.org/rfc/rfc3986.txt). Its behavior differs subtly from that of the [URL](url.md) structure, which conforms to older RFCs. However, you can easily obtain a [URL](url.md) value based on the contents of a [URLComponents](urlcomponents.md) value or vice versa.

## Topics

### Creating URL components

- [init()](urlcomponents/init%28%29.md): Creates a URL components instance without defining any of the components.
- [init(string:)](urlcomponents/init%28string_%29.md): Creates a URL components instance from a URL string.
- [init(string:encodingInvalidCharacters:)](urlcomponents/init%28string_encodinginvalidcharacters_%29.md): Creates a URL components instance from the provided string, optionally IDNA- and percent-encoding any invalid characters.
- [init(url:resolvingAgainstBaseURL:)](urlcomponents/init%28url_resolvingagainstbaseurl_%29.md): Creates a URL components instance from a URL string, optionally resolving against a base URL.

### Getting the URL

- [url](urlcomponents/url.md): A URL created from the components.
- [url(relativeTo:)](urlcomponents/url%28relativeto_%29.md): Returns a URL based on the component settings and relative to a given base URL.
- [string](urlcomponents/string.md): A URL derived from the components object, in string form.

### Accessing components in native format

- [fragment](urlcomponents/fragment.md): The fragment subcomponent.
- [host](urlcomponents/host.md): The host subcomponent.
- [encodedHost](urlcomponents/encodedhost.md): The host subcomponent, percent-encoded.
- [password](urlcomponents/password.md): The password subcomponent of the URL.
- [path](urlcomponents/path.md): The path subcomponent.
- [port](urlcomponents/port.md): The port subcomponent.
- [query](urlcomponents/query.md): The query subcomponent.
- [queryItems](urlcomponents/queryitems.md): An array of query items for the URL in the order in which they appear in the original query string.
- [scheme](urlcomponents/scheme.md): The scheme subcomponent of the URL.
- [user](urlcomponents/user.md): The user subcomponent of the URL.

### Accessing components in URL-encoded format

- [percentEncodedFragment](urlcomponents/percentencodedfragment.md): The fragment subcomponent, percent-encoded.
- [percentEncodedHost](urlcomponents/percentencodedhost.md): Deprecated. The host subcomponent, percent-encoded.
- [percentEncodedPassword](urlcomponents/percentencodedpassword.md): The password subcomponent, percent-encoded.
- [percentEncodedPath](urlcomponents/percentencodedpath.md): The path subcomponent, percent-encoded.
- [percentEncodedQuery](urlcomponents/percentencodedquery.md): The query subcomponent, percent-encoded.
- [percentEncodedQueryItems](urlcomponents/percentencodedqueryitems.md): The query subcomponent, as an array of percent-encoded query items.
- [URLQueryItem](urlqueryitem.md): A single name-value pair from the query portion of a URL.
- [percentEncodedUser](urlcomponents/percentencodeduser.md): The user subcomponent, percent-encoded.

### Locating components in the URL string representation

- [rangeOfFragment](urlcomponents/rangeoffragment.md): Returns the character range of the fragment in the string returned by the string property.
- [rangeOfHost](urlcomponents/rangeofhost.md): Returns the character range of the host in the string returned by the string property.
- [rangeOfPassword](urlcomponents/rangeofpassword.md): Returns the character range of the password in the string returned by the string property.
- [rangeOfPath](urlcomponents/rangeofpath.md): Returns the character range of the path in the string returned by the string property.
- [rangeOfPort](urlcomponents/rangeofport.md): Returns the character range of the port in the string returned by the string property.
- [rangeOfQuery](urlcomponents/rangeofquery.md): Returns the character range of the query in the string returned by the string property.
- [rangeOfScheme](urlcomponents/rangeofscheme.md): Returns the character range of the scheme in the string returned by the string property.
- [rangeOfUser](urlcomponents/rangeofuser.md): Returns the character range of the user in the string returned by the string property.

### Using reference types

- [NSURLComponents](nsurlcomponents.md): An object that parses URLs into and constructs URLs from their constituent parts.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ReferenceConvertible](referenceconvertible.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### URLs

- [URL](url.md): A value that identifies the location of a resource, such as an item on a remote server or the path to a local file.
- [URLQueryItem](urlqueryitem.md): A single name-value pair from the query portion of a URL.
